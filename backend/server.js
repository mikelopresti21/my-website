const { error } = require('console');
const express = require('express');
const path = require("path");
const distPath = path.join(__dirname, "..", "dist", "mikes-website", "browser");
const axios = require('axios');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const mongoose = require('mongoose');

const Project = require('./models/project');

const app = express();

mongoose.connect(`mongodb+srv://mikelopresti21:${process.env.MONGODB_PASS}@my-website.cl6gi.mongodb.net/website?retryWrites=true&w=majority&appName=my-website`);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});

app.use(express.static(distPath));
app.use(express.json());

app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'error fetching projects'});
    }
});


app.get('/*', (req, res) => {
    res.sendFile(path.join(distPath,"index.html"));
});

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false,
    }
});

app.post('/contact', async (req, res) => {

    const {recaptcha, name, email, message} = req.body;

    try {

    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
        params: {
            secret: RECAPTCHA_SECRET_KEY,
            response: recaptcha,
        }
    });

    if (!response.data.success) {
        return res.status(400).json({ error: 'reCAPTCHA verification failed' });
    }

    const contactEmail = {
        from: email,
        to: 'mikelopresti21@gmail.com',
        subject: `Message from ${name}`,
        text: message
    };

    const autoReply = {
        from: 'mikelopresti21@gmail.com',
        to: email,
        subject: 'Thanks for contacting me at MikeLoPresti.com',
        text: `Hello ${name}!\n Thanks for reaching out to me! I'll follow up with you as soon as I can!\n Thanks,\n Mike`
    }

    try {
        await transporter.sendMail(contactEmail);
        await transporter.sendMail(autoReply);
        res.status(200).send({ message: "Email and auto-reply sent successfully" });
    } catch (error) {
        res.status(500).send({ error: `Error sending email: ${error.message}` });
    }

    } catch (error) {
        res.status(500).send({ error: `Internal server error` });
    }
    
});