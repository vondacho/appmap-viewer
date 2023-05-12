const express = require('express');
const path = require('path');
const RateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 8080;

// Set up rate limiter: maximum of twenty requests per minute
const rateLimiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});

// Apply rate limiter to all requests
app.use(rateLimiter);

// Static route
// Serves AppMap viewer
app.use('/appmap', 
    express.static(path.join(__dirname, 
      'node_modules/@appland/appmap/built/html')));

// Serves maps hosted by the AppMap server
app.use('/maps',
    express.static(path.join(__dirname,
      'maps')));

// GET Request
app.get('/', (req,res)=>{
	res.sendFile(path.join(__dirname, 'index.html'));
})

// Start the server
app.listen(PORT, err =>{
	err ?
	console.log("Error in server setup") :
	console.log("Server listening on Port", PORT)
});

