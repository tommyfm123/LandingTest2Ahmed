// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');
// const dotenv = require('dotenv');

// // Load environment variables from .env file
// dotenv.config();

// const app = express();
// app.use(bodyParser.json());

// // Accessing the values from the .env file
// const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
// const PIXEL_ID = process.env.PIXEL_ID;

// app.post('/track-event', async (req, res) => {
//     const eventData = req.body;

//     // Construct the event payload for a lead event
//     const payload = {
//         data: [{
//             event_name: "Lead", // Set event as 'Lead'
//             event_time: Math.floor(new Date().getTime() / 1000),
//             user_data: {
//                 client_user_agent: eventData.client_user_agent,
//                 client_ip_address: req.ip, // Automatically capture IP from the request
//                 ...eventData.user_data // Include other user data fields
//             },
//             custom_data: eventData.custom_data,
//             event_source_url: eventData.event_source_url,
//             action_source: eventData.action_source
//         }]
//     };

//     try {
//         // Send the event data to Facebook
//         const response = await axios.post(
//             `https://graph.facebook.com/v16.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
//             payload
//         );

//         if (response.data.error) {
//             console.error(`Error sending event to Facebook: ${response.data.error.message}`);
//             res.status(500).send(response.data.error.message);
//         } else {
//             console.log('Event sent successfully:', response.data);
//             res.status(200).send('Event sent successfully');
//         }
//     } catch (error) {
//         console.error('Error sending event:', error);
//         res.status(500).send('Error sending event');
//     }
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
