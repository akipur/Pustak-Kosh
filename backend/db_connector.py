import mysql.connector

def get_db_connection():
    my_db_connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="10082003",
    database="pustakkosh")
 
    return my_db_connection