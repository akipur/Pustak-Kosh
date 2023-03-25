"""
Consists database utility functions that allow performance of queries on connected database. The various
functionalities and features of the service are implemented using these functions.
"""
from db_connector import *
from classes import *

def sign_up_user(user_name, user_pass, location, email_id) -> str:
    """Inserts user data into database for new user being registered

    Args:
        user_name (str): name of user
        user_pass (str): password for user login
        location (str): location of user
        email_id (str): email-id of user

    Returns:
        str: message of failure/success in adding new user
    """
    db_connection = get_db_connection()
    cur = db_connection.cursor()
    insert_query = " INSERT INTO user(user_name,user_pass,location,email_id) VALUES(%s,%s,%s,%s)"
    try:
        cur.execute(insert_query, (user_name,user_pass,location,email_id))
        db_connection.commit()
    except:
        return {'status': False, 'error': "Failed to insert"}
    result = "sign up done"
    return result

def login(user_name, user_pass) -> dict:
    """allows user to login using username and password

    Args:
        user_name (str): username associated with user profile
        user_pass (str): password to login for user

    Returns:
        dict: gives status of login completion and user_id
    """
    db_connection = get_db_connection()
    cur = db_connection.cursor()
    query = "SELECT user_id FROM user WHERE user_name=%s and user_pass=%s"
    cur.execute(query, (user_name, user_pass))
    row = cur.fetchall()
    if len(row)==0:
        result="Wrong Credentials"
        return result
    else:
        user_object = User(user_id = row[0])
        return {'status': 'login complete', 'user_id': user_object.get_json()}

def get_all_books(user_id = None, donation_status = None) -> list:
    """Gets all details of all books for given user id or donation status or both

    Args:
        user_id (int, optional): Numeric key used to identify a user. Defaults to None.
        donation_status (str, optional): Pending or Accepted depening on 
        whether book still available or donated. Defaults to '.

    Returns:
        list: a list of dictionaries containing all details of selected books
    """
    db_connection = get_db_connection()
    cur = db_connection.cursor()
    
    if user_id == None and donation_status == None:
        query = "SELECT book_id,book_name,author,genre,donation_status,request_count FROM book "
        cur.execute(query) # list of tuples
        
    elif user_id == None:
        query = "SELECT book_id,book_name,author,genre,donation_status,request_count FROM book WHERE donation_status=%s"
        cur.execute(query, (donation_status, ))
        
    elif donation_status == None:
        query= "SELECT book_id,book_name,author,genre,donation_status,request_count FROM book WHERE user_id=%s"
        cur.execute(query, (user_id, ))
        
    else:
        query = "SELECT book_id,book_name,author,genre,donation_status,request_count FROM book WHERE user_id=%s and donation_status=%s"
        cur.execute(query, (user_id, donation_status))

    rows = cur.fetchall()
    display_result = []
    for row in rows:
        book_object = Book(book_id = row[0],
            book_name = row[1],
            author = row[2],
            genre = row[3],
            donation_status = row[4],
            request_count = row[5],
            user_id = user_id,
            description = "")
        display_result.append(book_object.get_json())
    print(display_result)
    return display_result

def update_request_for_book(book_id , request_user_id ) -> dict:
    """Updates the request count (number of requests made) for a specific book

    Args:
        book_id (int, optional): Numeric key for identifying book. Defaults to None.
        request_user_id (int, optional): Numeric key for identifying user who made request.
                                            Defaults to None.

    Returns:
        dict: gives status of task completion and dictionary of details of the request added
    """
    db_connection = get_db_connection()
    cur = db_connection.cursor()
    select_query = 'SELECT request_count FROM book WHERE book_id=%s'
    cur.execute(select_query,(book_id,))
    count = cur.fetchall()
    request_count  = count[0][0] + 1
    update_query = "UPDATE book SET request_count=%s WHERE book_id=%s"
    cur.execute(update_query,(request_count, book_id))
    db_connection.commit()
    # prepare add to request table
    insert_query = " INSERT INTO request(request_user_id,book_id,queue_order) VALUES(%s,%s,%s)"
    try:
        cur.execute(insert_query, (request_user_id, book_id, request_count))
        db_connection.commit()
    except:
        return {'status': False, 'error': "Failed to insert"}
    # search the insert request
    search_query = "SELECT request_id,request_user_id,book_id,queue_order FROM request WHERE  request_user_id=%s and book_id=%s and queue_order=%s"
    cur.execute(search_query, (request_user_id, book_id, request_count))
    rows = cur.fetchall()
    print(rows)
    request_object = Request(request_id = rows[0][0],
                             request_user_id = rows[0][1],
                             book_id = rows[0][2],
                             queue_order = rows[0][3],
                             request_status = 'PENDING')
    return {'status': True, 'request_added': request_object.get_json()}

def add_new_book(user_id , book_name , author , genre ,
                 description , donation_status = None) -> dict:
    """Adds new book with given details to Book table

    Args:
        user_id (int, optional): numeric key to identify user. Defaults to None.
        book_name (str, optional): name of the book. Defaults to None.
        author (str, optional): name of the author. Defaults to None.
        genre (str, optional): name of the genre the book belongs to. Defaults to None.
        description (str, optional): brief description of the book. Defaults to None.
        status (str, optional): status of availability/donation. Defaults to 'PENDING'.

    Returns:
        dict: returns status of insertion and dictionary of details of added book.
    """
    db_connection = get_db_connection()
    cur = db_connection.cursor()
    query = "INSERT INTO book(book_name,description,author,genre,donation_status,user_id) VALUES (%s,%s,%s,%s,%s,%s)"
    cur.execute(query, (book_name, description, author, genre, donation_status, user_id))
    db_connection.commit()   
    query = "SELECT book_id,book_name,author,genre,donation_status,user_id,request_count,description from book where book_name=%s and user_id=%s"
    val = (book_name, user_id)
    cur.execute(query, val)
    rows = cur.fetchall()
    print (rows)
    book_object = Book(book_id = rows[0][0],
            book_name = rows[0][1],
            author = rows[0][2],
            genre = rows[0][3],
            donation_status = rows[0][4],
            request_count = rows[0][5],
            user_id = rows[0][6],
            description = rows[0][7])
    return {'status': True, 'inserted_book': book_object.get_json()}

def get_requested_items(request_user_id ) -> list:
    """Using given user id finds details of items corresponding to user's associated request

    Args:
        request_user_id (str, optional): numeric key to identify which user made the request. Defaults to None.

    Returns:
        list: details of the book requested and the user who received it
    """
    db_connection = get_db_connection()
    cur = db_connection.cursor()
    query = "Select book.book_id,book_name,author,genre,queue_order,request_status,user_name,email_id from book left join request on book.book_id=request.book_id left join user on book.user_id=user.user_id WHERE request_user_id=%s"
    cur.execute(query, (request_user_id,))
    rows = cur.fetchall()
    result = []
    for row in rows:
        book_object = Book(book_id = row[0], book_name = row[1], author = row[2], genre = row[3])
        request_object = Request(request_user_id = request_user_id, queue_order = row[4], request_status = row[5])
        user_object = User(user_name = row[6], user_email = row[7])
        entry = (book_object.get_json() | (request_object.get_json() | user_object.get_json()))
        result.append(entry)
    print(result)
    return result

def get_needy_info(book_id ) -> list:
    """corresponding to given book_id, gives details of all "needy" users that made request for that book.

    Args:
        book_id (int, optional): numeric key to identify book. Defaults to None.

    Returns:
        list: details of requests made for given book and the users who made the requests.
    """
    db_connection = get_db_connection()
    cur = db_connection.cursor()
    query = "Select * from request left join user on request.request_user_id=user.user_id WHERE book_id=%s"
    cur.execute(query, (book_id, ))
    rows = cur.fetchall()
    result = []
    for row in rows:
        request_object = Request(request_id = row[0], request_user_id = row[1], book_id = row[2],
                                 queue_order = row[3], request_status = row[4])
        user_object = User(user_name = row[6])
        entry = (request_object.get_json() | user_object.get_json())
        result.append(entry)
    print(result)
    return result

def accept_book_request(book_id, request_id) -> str:
    """Sets status of a book to have been accepted by needy

    Args:
        book_id (int, optional): numeric key to identify book. Defaults to None.
        request_id (int, optional): numeric key to identify request. Defaults to None.

    Returns:
        str: returns message/prompt of completion
    """
    db_connection = get_db_connection()
    cur = db_connection.cursor()
    update_request = "UPDATE request SET request_status=%s WHERE request_id=%s"
    cur.execute(update_request, ("COMPLETED", request_id))
    db_connection.commit()
    update_book = "UPDATE book SET donation_status=%s WHERE book_id=%s"
    cur.execute(update_book, ("COMPLETED", book_id))
    db_connection.commit()
    result = "Donation Completed"
    return result
