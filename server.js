// Importing the necessary modules 
const express = require('express'); 
const cors = require('cors'); 

// Setting the express app 
const app = express(); 

// Config 
app.use(cors()); 

// Setting the route 
app.post('/login', async (req, res) => {
    /* 
        Verify the user password, and email address on the 
        server, before sending back a successful, or error message 
    */
    return res.send({
        token: "123-0935", 
        isLoggedIn: true, 
        message: "login-message"
    })
})

// Running the servver 
app.listen(3002, 'localhost', () => {
    console.log('API is running on http://localhost:3002/login')
})