require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.post('/send-event', async (req, res) => {
    const event = req.body;

    // Elimina `custom_data` para el evento `lead`
    const eventPayload = {
        "event_name": "lead",
        "event_time": Math.floor(Date.now() / 1000),
        "user_data": event.user_data,
        "event_source_url": event.event_source_url,
        "action_source": "website"
    };

    try {
        const response = await fetch(`https://graph.facebook.com/v13.0/${process.env.PIXEL_ID}/events?access_token=${process.env.ACCESS_TOKEN}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventPayload)
        });

        const result = await response.json();
        res.send(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('Server is running at 3000');
});