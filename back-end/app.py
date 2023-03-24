from flask import Flask,render_template,request,redirect,url_for,session,jsonify
import db
from flask_mysqldb import MySQL

app = Flask(__name__)


@app.route('/get_all_books',methods={'GET'})
def get_all_books():

    # get query params
    # how to get get parameter and post parameter from flast request object
    user_id = request.args.get('user_id')
    donation_status = request.args.get('donation_status')
    # print(user_id,donation_status)
    result = db.get_all_books(user_id, donation_status)
    # result={"user_id":user_id}
    return jsonify(result)



# add_new_book(user_id, book_name, author, genre, description, status)
@app.route('/add_new_book',methods={'POST'})
def add_new_book():
#    if request.method=='POST':
   
    data=request.get_json()
    user_id = data['user_id']
    book_name=data['book_name']
    author=data['author']
    genre=data['genre']
    description=data['description']

    donation_status = data['donation_status']
    result=db.add_new_book(user_id, book_name, author, genre, description, donation_status)
    return jsonify(result)

@app.route('/update_request_for_book',methods={'POST'})
def update_request_for_book():
#    if request.method=='POST':
   
    data=request.get_json()
    request_user_id = data['user_id']
    book_id=data['book_id']
    

    
    result=db.update_request_for_book(book_id,request_user_id)
    return jsonify(result)


@app.route('/get_requested_items',methods={'GET'})
def get_requested_items():

    # get query params
    # how to get get parameter and post parameter from flast request object
    request_user_id = request.args.get('user_id')
    
    # print(user_id,donation_status)
    result = db.get_requested_items(request_user_id)
    # result={"user_id":user_id}
    return jsonify(result)

app.secret_key="super secret key"
@app.route('/register',methods={'GET','POST'})
def index():

    
    if request.method=='POST':
        userdetails=request.form
        name=userdetails['name']
        password=userdetails['password']
        location=userdetails['location']
        cur=mysql.connection.cursor()
        cur.execute("INSERT INTO user(user_name,user_pass,location) VALUES(%s,%s,%s)",(name,password,location))
        
        mysql.connection.commit()
        cur.close()
        return redirect(url_for('login'))
    return render_template('index.html')
@app.route('/login',methods={'GET','POST'})

def login():

    
    if request.method=='POST':
        
        userdetails=request.form
        name=userdetails['name']
        password=userdetails['password']
        print(name,password)
        cur=mysql.connection.cursor()
        cur.execute('SELECT *FROM user WHERE user_name=%s AND user_pass=%s',(name,password))
        record=cur.fetchone()
        print(record)
        if record:
            print('1')
            session['loggedin']=True
            session['user_id']=record[0]
            return redirect(url_for('book'))
        else:
            msg="INCOREECT DETAILS"
     
       
    return render_template('login.html')

@app.route('/book',methods={'GET','POST'})
def book():
    if request.method=='POST':
        book=request.form
        name=book['name']
        author=book['author']
        genre=book['genre']
        user_id=session['user_id']
        cur=mysql.connection.cursor()
        cur.execute("INSERT INTO book(book_name,author,genre,user_id) VALUES(%s,%s,%s,%s)",(name,author,genre,user_id))
        mysql.connection.commit()
        cur.close()
        return 'book_added'
    return render_template('book.html',user_id=session['user_id'])
# @app.route('/test',methods={'GET','POST'})
# def test():
#    d={
#        '1':'book_name','2':'author'
#    }
#    return jsonify(d)

@app.route('/needy_dis',methods={'GET','POST'})
def needy_dis():
    cur = mysql.connection.cursor()
    query = "SELECT * FROM book"
    cur.execute(query)
    books = cur.fetchall()
    print("All Available Books: ")
    for book in books:
        print(book)
    cur.close()

       
if __name__=='__main__':
    app.run(debug=True)
