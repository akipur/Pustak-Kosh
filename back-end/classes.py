class User:
    def __init__(self, user_id, user_name, user_pass, location) -> None:
        self.user_id = user_id
        self.user_name = user_name
        self.user_pass = user_pass
        self.location = location
    
    def get_name(self) -> str:
        return self.user_name
    
    def print_user_name(self) -> None:
        print(self.user_name)
        
    def get_user_id(self) -> str:
        return self.user_id
    
    def get_location(self) -> str:
        return self.location
    
    def print_location(self) -> None:
        print(self.location)
        
class Request:
    def __init__(self, request_id, request_user_id, book_id, queue_order) -> None:
        self.request_id = request_id
        self.request_user_id = request_user_id
        self.book_id = book_id
        self.queue_order = queue_order
    
    def get_request_id(self) -> str:
        return self.request_id
    
    def get_request_user_id(self) -> str:
        return self.request_user_id
        
    def get_book_id(self) -> str:
        return self.book_id
    
    def get_queue_order(self) -> str:
        return self.queue_order