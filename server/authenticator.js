const jwt = require('jsonwebtoken');

module.exports = (req,res,err) =>{
    const password = req.body.password

    if (password === "password") {
        // If the password is correct, generate a JWT
        const token = jwt.sign({}, 'your_secret_key', { expiresIn: '1h' }); // Adjust the payload and expiration as needed
    
        // Send the token back to the client
        res.json({ token });
    } else {
        // If the password is incorrect, respond with an error
        res.status(401).json({ message: 'Unauthorized' });
    }
};
