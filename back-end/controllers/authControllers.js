// const User = require('../models/user');

// const test = (req, res) => {
//     res.json('test is working');
// };

// const registerUser = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         // Check if name is entered
//         if (!name) {
//             return res.json({
//                 error: 'name is required'
//             });
//         }
//         // Check if password is good
//         if (!password || password.length < 6) {
//             return res.json({
//                 error: 'Password is required and should be 6 characters long'
//             });
//         }
//         // Check email
//         const exist = await User.findOne({ email });
//         if (exist) {
//             return res.json({
//                 error: 'Email is taken already'
//             });
//         }

//         const user = await User.create({
//             name, email, password
//         });
//         return res.json(user);
//     } catch (error) {
//         console.log(error);
//     }
// };

// module.exports = {
//     test,
//     registerUser
// };









const User = require('../models/user');

const test = (req, res) => {
    res.json('test is working');
};

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if name is entered
        if (!name) {
            return res.json({
                error: 'name is required'
            });
        }
        // Check if password is good
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be 6 characters long'
            });
        }
        // Check email
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: 'Email is taken already'
            });
        }

        const user = await User.create({
            name, email, password
        });
        return res.json(user);
    } catch (error) {
        console.log(error);
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Find the user by email
        const user = await User.findOne({ email });

        // If user not found or password doesn't match
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // If everything is okay, send a success response
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Login failed:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    test,
    registerUser,
    loginUser
};
