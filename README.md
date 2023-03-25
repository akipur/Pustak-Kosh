# Pustak-Kosh
## Description:
The Pustak-Kosh service joins book-lovers around the globe by connecting donors with those in need of books.
### Features:
1. Put up books for donation.
2. As a person in need of books, search for books on basis of name, author and genre.
3. Request for a book put up by a donor, who can accept or deny the request.
### Tech-Stack:
1. Javascript
2. Flask APIs
3. MySQL Database
### Contributors:
1. Adepu Vaishnavi
2. Parul Chaddha
3. Prachi Kumar
4. Rupika Sinha
5. Sonam Bharti
## Setting Up:
To run this service on your local **_Windows_** machine, please follow the set-up procedure mentioned below.  
All of the set-up must be done in the same destination folder as where the repository exist.
### Installing Python:
**Step 1:**  Check if python is already installed. To do so, open Command Prompt or Windows PowerShell type there "python -V".  

**Step 2:**  If python not installed, open the [Python Releases for Windows](https://www.python.org/downloads/windows/) page.  

**Step 3:**  Select the latest Python version, and download Python executable installer.  

**Step 4:**  Run the installer and install in required destination.

**Step 5:**  Check if python is succesfully installed by following Step 1 again.  

### Installing Flask:
**Step 1:**  Open the Command Prompt in Administrator Mode.  

**Step 2:**  Run the command "pip install flask".  

**Step 3:**  Run the command "python".  

**Step 4:**  Run the command "import flask".

### Setting Up The Database:
**Step 1:**  Set up a MySQL database following the given ER diagram.  

<img width="153" alt="Pustak-Kosh ER" src="https://user-images.githubusercontent.com/95899847/227740858-26f7e094-c5af-42ba-abd3-e6392fab482d.png">

**Step 2:** Create config.json file consisting database login credentials (host, user, password, database).

**Step 3:** Add file to backend folder of repository.

## Running Backend:
Ensure you are within backend folder of repository.
### Run Flask API: 
**Step 1:**  Open the Command Prompt in Administrator Mode.  

**Step 2:**  Run the command "flask --app app run".  

**Step 3:**  Copy and visit the http url.  

### Performing Specified Tasks:
You can use generated http to run various featured APIs. They are:  
1. http://.../sign_up_user  
2. http://.../login  
3. http://.../get_all_books  
4. http://.../add_new_book  
5. http://.../update_request_for_book
6. http://.../get_requested_items  
7. http://.../get_needy_info  
8. http://.../accept_book_request
