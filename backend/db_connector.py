import mysql.connector
import  json
def get_db_connection():
    config=json.load(open('./config.json'))
    my_db_connection = mysql.connector.connect(**config)
 
    return my_db_connection