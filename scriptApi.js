// document.getElementById('lead-btn').addEventListener('click', function () {
//     const eventData = {
//         event_name: 'Lead',
//         user_data: {
//             em: 'HASHED_EMAIL', // Replace with the actual hashed email
//             ph: 'HASHED_PHONE', // Replace with the actual hashed phone number
//             // Additional hashed data can be added here
//         },
//         custom_data: {
//             content_name: 'Lead Capture Form',
//             // Additional custom data can be added here
//         },
//         client_user_agent: navigator.userAgent,
//         event_source_url: window.location.href,
//         action_source: 'website'
//     };

//     // Send the event data to the server
//     fetch('/track-event', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(eventData)
//     })
//     .then(response => response.text())
//     .then(data => {
//         console.log('Success:', data);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// });
