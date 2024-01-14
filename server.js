const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware
const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;

app.use(express.json());
app.use(cors());


const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Server URL: http://localhost:${port}`);
});

// const Webserver = new WebSocket.Server({ server });

// Webserver.on('connection', (socket) => {
//     console.log('Client connected');

//     // Event handling when an event occurs on the server
//     Webserver.emit('someEvent', { eventData: 'someData' });
    
//     // You can replace this with your own server-side logic
//     Webserver.on('someEvent', (data) => {
//         // Broadcast the event to all connected clients
//         Webserver.clients.forEach((client) => {
//             if (client.readyState === WebSocket.OPEN) {
//                 client.send(JSON.stringify({ event: 'someEvent', data }));
//             }
//         });
//     });
// });


app.get('/add', async (req, res) => {
  try {
    const wixFunctionURL = 'https://syneticx.com/_functions/add';
    axios.get(wixFunctionURL)
  .then(response => {
    console.log("Connection from Unity to the server established");
    console.log('Response from Wix Velo function:', response.data);
  })
  .catch(error => {
    console.error('Error calling Wix Velo function:', error);
  });

    const wixFunctionUrl = "https://www.syneticx.com/_functions/asdas?catalogItemId=2e47dbaf-44bb-9c76-100c-8fad8c896d82&Quantity=2&Size=Small";
    // const wixFunctionUrl = `https://syneticx.com/_functions/multiply?catalogItemId=${id}&Quantity=${quantity}&Size=${size}`
    // res.redirect(302, wixFunctionUrl);
    // const id = req.params.id;
    // const quantity = req.params.quantity;
    // const size = req.params.size;
    // console.log(id,quantity,size)

    console.log("Connection from Unity to the server established");
    

    // Make the HTTP request to the Wix eCommerce site's exposed function
    const response = await axios.get(wixFunctionUrl);
    const responseBody = response.data;
    console.log("Response Body:", responseBody);
    // console.log(wixFunctionUrl)

    // Forward the response back to the Unity WebGL client
    res.json(response.data);
  } 
  catch (error) {
    // Handle any errors and return an error response
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/RequestUsername', async (req, res) => {
  try {
    // const friendName = req.query.friendName;
    const wixFunctionURL = 'https://syneticx.com/_functions/RequestUsername';
    axios.get(wixFunctionURL)
  .then(response => {
    console.log("Connection from Unity to the server established");
    console.log('Response from Wix Velo function:', response.data);
    res.status(200).json({ message: response.data });
  })
  .catch(error => {
    console.error('Error calling Wix Velo function:', error);
  });

    const wixFunctionUrl = "https://www.syneticx.com/_functions/RequestUsername?catalogItemId=2e47dbaf-44bb-9c76-100c-8fad8c896d82&Quantity=2&Size=Small";

    console.log("Connection from Unity to the server established");
    

    // Make the HTTP request to the Wix eCommerce site's exposed function
    const response = await axios.get(wixFunctionUrl);
    const responseBody = response.data;
    console.log("Response Body:", responseBody);
    // console.log(wixFunctionUrl)

    // Forward the response back to the Unity WebGL client
    res.json(response.data);
  } 
  catch (error) {
    // Handle any errors and return an error response
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.get('/SetUsername', async (req, res) => {
  try {
            // Retrieve parameters from the URL
    const username = req.query.username;

    // You can now use friendName and sender in your logic
    console.log('Friend Name:', friendName);
    console.log('Sender:', sender);

    const wixFunctionURL = `https://syneticx.com/_functions/SetUsername?name=${username}`;
    axios.get(wixFunctionURL)
  .then(response => {
    console.log("Connection from Unity to the server established");
    console.log('Response from Wix Velo function:', response.data);
  })
  .catch(error => {
    console.error('Error calling Wix Velo function:', error);
  });

    const wixFunctionUrl = "https://www.syneticx.com/_functions/asdas?catalogItemId=2e47dbaf-44bb-9c76-100c-8fad8c896d82&Quantity=2&Size=Small";

    console.log("Connection from Unity to the server established");
    

    // Make the HTTP request to the Wix eCommerce site's exposed function
    const response = await axios.get(wixFunctionUrl);
    const responseBody = response.data;
    console.log("Response Body:", responseBody);
    // console.log(wixFunctionUrl)

    // Forward the response back to the Unity WebGL client
    res.json(response.data);
  } 
  catch (error) {
    // Handle any errors and return an error response
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.get('/SendFriendRequest', async (req, res) => {
  try {
            // Retrieve parameters from the URL
    const friendName = req.query.name;
    // const sender = req.query.sender;

    // You can now use friendName and sender in your logic
    console.log('Friend Name:', friendName);
    console.log('Sender:', sender);

    const wixFunctionURL = `https://syneticx.com/_functions/SendFriendRequest?name=${friendName}`;
    axios.get(wixFunctionURL)
  .then(response => {
    console.log("Connection from Unity to the server established");
    console.log('Response from Wix Velo function:', response.data);
    res.status(200).json({ message: 'Friend request sent successfully' });
  })
  .catch(error => {
    console.error('Error calling Wix Velo function:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });

    const wixFunctionUrl = "https://www.syneticx.com/_functions/asdas?catalogItemId=2e47dbaf-44bb-9c76-100c-8fad8c896d82&Quantity=2&Size=Small";

    console.log("Connection from Unity to the server established");
    

    // Make the HTTP request to the Wix eCommerce site's exposed function
    const response = await axios.get(wixFunctionUrl);
    const responseBody = response.data;
    console.log("Response Body:", responseBody);
    // console.log(wixFunctionUrl)

    // Forward the response back to the Unity WebGL client
    res.json(response.data);
  } 
  catch (error) {
    // Handle any errors and return an error response
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/AcceptRequest', async (req, res) => {
  try {
            // Retrieve parameters from the URL
    const friendName = req.query.friendName;
    const sender = req.query.sender;

    // You can now use friendName and sender in your logic
    console.log('Friend Name:', friendName);
    console.log('Sender:', sender);

    const wixFunctionURL = `https://syneticx.com/_functions/AcceptRequest?name=${friendName}&sender=${sender}`;
    axios.get(wixFunctionURL)
  .then(response => {
    console.log("Connection from Unity to the server established");
    console.log('Response from Wix Velo function:', response.data);
  })
  .catch(error => {
    console.error('Error calling Wix Velo function:', error);
  });

    const wixFunctionUrl = "https://www.syneticx.com/_functions/asdas?catalogItemId=2e47dbaf-44bb-9c76-100c-8fad8c896d82&Quantity=2&Size=Small";

    console.log("Connection from Unity to the server established");
    

    // Make the HTTP request to the Wix eCommerce site's exposed function
    const response = await axios.get(wixFunctionUrl);
    const responseBody = response.data;
    console.log("Response Body:", responseBody);
    // console.log(wixFunctionUrl)

    // Forward the response back to the Unity WebGL client
    res.json(response.data);
  } 
  catch (error) {
    // Handle any errors and return an error response
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/DeclineRequest', async (req, res) => {
  try {
        // Retrieve parameters from the URL
        const friendName = req.query.friendName;
        const sender = req.query.sender;
    
        // You can now use friendName and sender in your logic
        console.log('Friend Name:', friendName);
        console.log('Sender:', sender);

    const wixFunctionURL = `https://syneticx.com/_functions/DeclineRequest?name=${friendName}&sender=${sender}`;
    axios.get(wixFunctionURL)
  .then(response => {
    console.log("Connection from Unity to the server established");
    console.log('Response from Wix Velo function:', response.data);
  })
  .catch(error => {
    console.error('Error calling Wix Velo function:', error);
  });

    const wixFunctionUrl = "https://www.syneticx.com/_functions/asdas?catalogItemId=2e47dbaf-44bb-9c76-100c-8fad8c896d82&Quantity=2&Size=Small";

    console.log("Connection from Unity to the server established");
    

    // Make the HTTP request to the Wix eCommerce site's exposed function
    const response = await axios.get(wixFunctionUrl);
    const responseBody = response.data;
    console.log("Response Body:", responseBody);
    // console.log(wixFunctionUrl)

    // Forward the response back to the Unity WebGL client
    res.json(response.data);
  } 
  catch (error) {
    // Handle any errors and return an error response
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/OnPLayerLeft', async (req, res) => {
  try {
        // Retrieve friendName from the URL parameters
        const friendName = req.query.friendName;

        // You can now use the friendName in your logic
        console.log('Friend Name:', friendName);

    const wixFunctionURL = 'https://syneticx.com/_functions/OnPLayerLeft';
    axios.get(wixFunctionURL)
  .then(response => {
    console.log("Connection from Unity to the server established");
    console.log('Response from Wix Velo function:', response.data);
  })
  .catch(error => {
    console.error('Error calling Wix Velo function:', error);
  });

    const wixFunctionUrl = "https://www.syneticx.com/_functions/asdas?catalogItemId=2e47dbaf-44bb-9c76-100c-8fad8c896d82&Quantity=2&Size=Small";

    console.log("Connection from Unity to the server established");
    

    // Make the HTTP request to the Wix eCommerce site's exposed function
    const response = await axios.get(wixFunctionUrl);
    const responseBody = response.data;
    console.log("Response Body:", responseBody);
    // console.log(wixFunctionUrl)

    // Forward the response back to the Unity WebGL client
    res.json(response.data);
  } 
  catch (error) {
    // Handle any errors and return an error response
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
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
