practice building a website using just DOM manipulation. Working with an empty html page.

Goal: Build a rudamentary bug tracking app. 

1) index.js, style.css, index.html. attach js and css to html.
2) Set up main container
  - created a function that sets attributes so I can have as many as I need
  - I wonder if I can create a function that will build most of an element for me... yes, yes I can!
    - https://dev.to/ahmedadel/custom-javascript-createelement-function-244f 
3) Set up form container 4/24/22
  - text subject line
  - select issue for what type of bug it is
  - textarea for details on the issue
  - select priority
    - I added an empty field for this as well
  - submit button
  *currently the form does not have functionality
  4) set up a mock DB 4/25/22
  5) built a function that can more easily create my elements 4/26/22
    - it implements my attributes function
  6) display of issues 4/27/22
    - displays all the things I want the user to see 
    - currently displays all
    - added buttons the are labeled by status
    * currently the buttons do not have functionality
  7) cleaned up remaining issues with wireframe
    - The display of the page has reached my MVP



  Next:
  add functionality to the status buttons.
  Start up a mongo DB  
  Build mongoose schema
    -start with a single line for testing
  connect DB to app  
  create a backend with express
    - server
    - router 
    - controller 
  test that everything is working in postman
  create fetch requests from client to server.  

