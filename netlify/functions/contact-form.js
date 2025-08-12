// This is a basic serverless function for a contact form, designed for Netlify.
// It receives a POST request from the front-end, validates the data, and returns a success or error message.
// For a real-world application, you would add an email sending service here.

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method Not Allowed" }),
        };
    }

    try {
        const data = JSON.parse(event.body);
        const { name, email, message } = data;

        // Basic validation
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Please fill out all fields." }),
            };
        }

        // In a real application, you would use an email service here.
        // const sgMail = require('@sendgrid/mail');
        // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        //
        // const msg = {
        //     to: 'your-email@example.com',
        //     from: 'noreply@your-domain.com',
        //     subject: `New message from ${name}`,
        //     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        // };
        //
        // await sgMail.send(msg);

        // For this example, we'll just log the data and send a success response.
        console.log("Received a new contact form submission:", data);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Message sent successfully!" }),
        };
    } catch (error) {
        console.error("Error processing form submission:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to send message." }),
        };
    }
};
