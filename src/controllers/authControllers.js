const fs = require('fs');

const saveUserData = (userData) => {
    // Simulate saving user data to a file (replace this with a database in real-world)
    fs.writeFileSync('userData.json', JSON.stringify(userData));
};

const login = (req, res) => {
    // Validate email and password (add proper validation in real-world)
    const { email, password } = req.body;
    const userData = { email, password };
    saveUserData(userData);
    res.json({ message: 'Login successful' });
};

module.exports = {
    login,
};
