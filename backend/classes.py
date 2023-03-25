"""
Defines the three main entities as classes: User, Request and Book.
Each class consists of attributes and functions that define it's state and some basic behavior.
"""

class User:
    """
    Consists -
    Attributes: user_id, user_name, user_email, user_pass, and location
    Functions: get and print data, and function to get json of User object
    """
    def __init__(self, user_id = None, user_name = None, user_email = None, user_pass = None, location = None) -> None:
        self.user_id = user_id
        self.user_name = user_name
        self.user_email = user_email
        self.user_pass = user_pass
        self.location = location
    
    def get_user_id(self) -> int:
        return self.user_id
    
    def get_user_name(self) -> str:
        return self.user_name
        
    def get_user_email(self) -> str:
        return self.user_email
    
    def get_location(self) -> str:
        return self.location
    
    def print_user_name(self) -> None:
        print(self.user_name)
        
    def print_user_email(self) -> None:
        print(self.user_email)
        
    def print_location(self) -> None:
        print(self.location)
        
    def get_json(self):
        return self.__dict__
               
class Request:
    """
    Consists -
    Attributes: request_id, request_user_id, book_id, queue_order, and request_status
    Functions: get and print data, and function to get json of Request object
    """
    def __init__(self, request_id = None, request_user_id = None, book_id = None, queue_order = None, request_status = 'PENDING') -> None:
        self.request_id = request_id
        self.request_user_id = request_user_id
        self.book_id = book_id
        self.queue_order = queue_order
        self.request_status = request_status
    
    def get_request_id(self) -> str:
        return self.request_id
    
    def get_request_user_id(self) -> int:
        return self.request_user_id
        
    def get_book_id(self) -> int:
        return self.book_id
    
    def get_queue_order(self) -> int:
        return self.queue_order
    
    def get_request_status(self) -> str:
        return self.request_status
    
    def print_request_status(self) -> None:
        print(self.request_status)
        
    def get_json(self):
        return self.__dict__
    
class Book:
    """
    Consists -
    Attributes: book_id, book_name, author, genre, donation_status, request_count, user_id, and description
    Functions: get and print data, and function to get json of Book object
    """
    def __init__(self, book_id = None, book_name = None, author = None, genre = None, donation_status = None, request_count = None, user_id = None, description = None) -> None:
        self.book_id = book_id
        self.book_name = book_name
        self.author = author
        self.genre = genre
        self.donation_status = donation_status
        self.request_count = request_count
        self.user_id = user_id
        self.description = description
        
    def get_book_id(self) -> int:
        return self.book_id
    
    def get_book_name(self) -> str:
        return self.book_name
    
    def print_book_name(self) -> None:
        print(self.book_name)
        
    def get_author(self) -> str:
        return self.book_name
    
    def print_author(self) -> None:
        print(self.author)
        
    def get_genre(self) -> str:
        return self.genre
    
    def print_genre(self) -> None:
        print(self.genre)
        
    def get_donation_status(self) -> str:
        return self.donation_status
    
    def print_donation_status(self) -> None:
        print(self.donation_status)
        
    def get_request_count(self) -> int:
        return self.request_count
    
    def print_request_count(self) -> None:
        print(self.request_count)
    
    def get_book_id(self) -> int:
        return self.book_id
    
    def get_description(self) -> str:
        return self.description
    
    def print_description(self) -> None:
        print(self.description) 
    
    def get_json(self):
        return self.__dict__   
    