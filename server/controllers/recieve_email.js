const transporter = require('../utils/mail');

const recieveMail = async (req, res) => {
    try {
        const { subject, email, message } = req.body;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email address' });
        }


        if (!email || !message) {
            console.log('email and message are required');
            res.status(400).json({ message: 'Email and message are missing' });
        }

        const mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: subject,
            text: message,
            replyTo: email
        };

        console.log(mailOptions);

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                res.status(500).json({ message: err.message });
            } else {
                console.log('email sent');
                res.status(200).json({ message: 'email sent', info });
            }
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    recieveMail
}