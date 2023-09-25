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
**Step 1:**  Check if python is already installed. To do so, open Command Prompt or Windows PowerShell type there ```python -V```.  

**Step 2:**  If python not installed, open the [Python Releases for Windows](https://www.python.org/downloads/windows/) page.  

**Step 3:**  Select the latest Python version, and download Python executable installer.  

**Step 4:**  Run the installer and install in required destination.

**Step 5:**  Check if python is succesfully installed by following Step 1 again.  

### Installing Flask:
**Step 1:**  Open the Command Prompt in Administrator Mode.  

**Step 2:**  Run the command ```pip install flask```.  

**Step 3:**  Run the command ```python```.  

**Step 4:**  Run the command ```import flask```.

### Installing Node.js and npm:
**Step 1:**  Open the Command Prompt in Administrator Mode.  

**Step 2:**  Ensure you are in the frontend folder.  

**Step 3:**  Run the command ```npm install -g npm```.  

### Setting Up The Database:
**Step 1:**  Set up a MySQL database following the given ER diagram.  

<img width="153" alt="Pustak-Kosh ER" src="https://user-images.githubusercontent.com/95899847/227740858-26f7e094-c5af-42ba-abd3-e6392fab482d.png">

**Step 2:** Create ```config.json``` file consisting database login credentials (host, user, password, database).

**Step 3:** Add file to backend folder of repository.

## Running Backend:
Ensure you are within backend folder of repository.
### Run Flask API: 
**Step 1:**  Open the Command Prompt in Administrator Mode.  

**Step 2:**  Run the command ```flask --app app run```.  

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

## Running Frontend:
Ensure you are within frontend folder of repository.
### Available Scripts: 
In terminal, run commands:

### ```npm install```  
-> Install all the dependencies required to run the application.  
-> Generates ```package.json``` to list all dependencies.  
-> Installs all the required packages and modules.  
-> Essential step in setting up a new React project.

### ```npm start```  
-> Runs the app in the development mode.  
-> Open ```http://localhost:3000``` to view it in the browser.  
-> The page will reload if you make edits.  
-> You will also see any lint errors in the console.  

### ```npm test``` 
-> Launches the test runner in the interactive watch mode.  
-> See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.  

### ```npm run build```  
-> Builds the app for production to the build folder.  
-> It correctly bundles React in production mode and optimizes the build for the best performance.  
-> The build is minified and the filenames include the hashes.  
-> App is ready to be deployed.  
-> See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.  


### ```npm run eject```  
-> This is a one-way operation. Once you eject, you can’t go back.  
-> This command will remove the single build dependency from the project.  
-> It will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) into the project to have full control over them.  
-> All of the commands except eject will still work, but they will point to the copied scripts.  
-> You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments.  
-> However, this tool wouldn’t be useful if not customizable when you are ready for it.
