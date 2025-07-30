const registerUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }
    // Logic to handle Google Sheet or MongoDB goes here
    return res.status(200).json({ message: "User registered successfully" });
};

module.exports = { registerUser };