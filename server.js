const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/addToCart/:id/:quantity/:size', async (req, res) => {
  try {

    const wixFunctionUrl = "https://www.syneticx.com/_functions/asdas?catalogItemId=2e47dbaf-44bb-9c76-100c-8fad8c896d82&Quantity=2&Size=Small";
    // const wixFunctionUrl = `https://syneticx.com/_functions/multiply?catalogItemId=${id}&Quantity=${quantity}&Size=${size}`
    // res.redirect(302, wixFunctionUrl);
    const id = req.params.id;
    const quantity = req.params.quantity;
    const size = req.params.size;
    console.log(id,quantity,size)

    console.log("Connection from Unity to the server established");

    // Construct the URL with parameters to request the Wix eCommerce function
    // const wixFunctionUrl = `https://syneticx.com/_functions/asdas?catalogItemId=${id}&Quantity=${quantity}&Size=${size}`;
    

    // Make the HTTP request to the Wix eCommerce site's exposed function
    const response = await axios.get(wixFunctionUrl);
    const responseBody = response.data;
    console.log("Response Body:", responseBody);
    // console.log(wixFunctionUrl)
    // Forward the response back to the Unity WebGL client
    res.json(response.data);
// Define the URL you want to make a GET request to
// Make a GET request using axios
// axios.get(wixFunctionUrl)
//   .then(response => {
//     // Handle the successful response here
//     console.log(wixFunctionUrl)
//     console.log('Response:', response.data);
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the request
//     console.error('Error:', error);
//   });
  } 
  catch (error) {
    // Handle any errors and return an error response
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Server URL: http://localhost:${port}`);
});

// Event handler for handling server shutdown
process.on('SIGINT', () => {
  console.log('Server is shutting down...');
  // Perform any cleanup or shutdown tasks here
  server.close(() => {
    console.log('Server has been gracefully terminated.');
    process.exit(0);
  });
});
