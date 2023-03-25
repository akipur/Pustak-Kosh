"""
Defines and implements various Flask API's that perform tasks required by the service.
The API's make use of db_service functions to interact with the database.
"""

from flask import *
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

import db_services 


@app.route('/sign_up_user', methods={'POST'})
def sign_up_user():

    """
    to sign up a new user
    """
    data = request.get_json()
    user_name = data['user_name']
    user_pass = data['user_pass']
    
    location = data['location']
    email_id = data['email_id']
    
    result =db_services.sign_up_user(user_name=user_name,user_pass=user_pass,location=location,email_id=email_id)
    return jsonify(result)

@app.route('/login', methods={'POST'})
def login():

    """
    to login a user
    """
    data = request.get_json()
    user_name = data['user_name']
    user_pass = data['user_pass']
    
    
    
    result =db_services.login(user_name=user_name,user_pass=user_pass)
    return jsonify(result)

@app.route('/get_all_books', methods={'GET'})
def get_all_books():
    """ 
    to fetch all the books filtered by certain parameters
    """
    user_id = request.args.get('user_id')
    donation_status = request.args.get('donation_status')
    result = db_services.get_all_books(user_id = user_id, donation_status = donation_status)
    return jsonify(result)

@app.route('/add_new_book',methods={'POST'})
@cross_origin()
def add_new_book():

    """
    to add a new book donated by a user
    """
    data = request.get_json()
    user_id = data['user_id']
    book_name = data['book_name']
    author = data['author']
    genre = data['genre']
    description = data['description']
    donation_status = data['donation_status']
    result = db_services.add_new_book(user_id = user_id, book_name = book_name, author = author,
                          genre = genre, description = description, donation_status = donation_status)
    return jsonify(result)

@app.route('/update_request_for_book',methods={'POST'})
@cross_origin()
def update_request_for_book():
    """
    add a request for a book by needy
    """
    data = request.get_json()
    request_user_id = data['user_id']
    book_id = data['book_id']
    result = db_services.update_request_for_book(book_id = book_id, request_user_id = request_user_id)
    return jsonify(result)

@app.route('/get_requested_items', methods={'GET'})
def get_requested_items():
    """
    fetch the requested items by a particular needy
    """
    request_user_id = request.args.get('user_id')
    result = db_services.get_requested_items(request_user_id = request_user_id)
    return jsonify(result)

@app.route('/get_needy_info', methods={'GET'})
def get_needy_info():
    """
    get list of interested needy for each book donated
    """
    book_id = request.args.get('book_id')   
    result = db_services.get_needy_info(book_id = book_id)
    print(result)
    return jsonify(result)

@app.route('/accept_book_request',methods={'POST'})
@cross_origin()
def accept_book_request():

    """
       accept a book request
    """
    data = request.get_json()
    request_id = data['request_id']
    book_id = data['book_id']
    result = db_services.accept_book_request(book_id = book_id, request_id = request_id)
    return jsonify(result)
       
if __name__=='__main__':
    app.run(debug=True)

