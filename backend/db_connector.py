"""
Configures required database and establishes connection to that database.
"""
import mysql.connector
import  json

def get_db_connection():
    """establishes connection with database.

    Returns:
        mysql.connector object: _description_
    """
    config = json.load(open('./config.json'))
    my_db_connection = mysql.connector.connect(**config)
 
    return my_db_connection