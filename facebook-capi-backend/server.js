const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

app.use(bodyParser.json());

app.post('/send-lead', async (req, res) => {
    const event = req.body;

    if (event.event_name === 'Lead') {
        try {
            const response = await axios.post(
                `https://graph.facebook.com/v17.0/${process.env.FACEBOOK_PIXEL_ID}/events?access_token=${process.env.FACEBOOK_ACCESS_TOKEN}`,
                {
                    data: [{
                        event_name: 'Lead',
                        event_time: Math.floor(new Date() / 1000),
                        custom_data: {
                            // Campos value y currency no incluidos
                        },
                        event_source_url: event.event_source_url,
                        action_source: 'website'
                    }]
                }
            );
            res.status(200).send('Lead event sent successfully.');
        } catch (error) {
            console.error('Error sending Lead event:', error.response.data);
            res.status(500).send('Error sending Lead event.');
        }
    } else {
        res.status(400).send('Invalid event type.');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
