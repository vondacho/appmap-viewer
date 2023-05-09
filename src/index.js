const express = require('express');
const path = require('path');	

const app = express();
const PORT = 8080;

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

