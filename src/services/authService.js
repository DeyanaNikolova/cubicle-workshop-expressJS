const User = require('../models/User');
const config = require('../config');
const jwt = require('../lib/jsonwebtoken');

exports.getUserByName = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });

exports.login = async (username, password) => {
    const user = await this.getUserByName(username);

    const isValid = await user.validatePassword(password);
    if (!user || !isValid) {
        throw 'Invalid username or password!';
    }

    const payload = { _id: user._id, username: user.username };
    const token = await jwt.sign(payload, config.SECRET, { expiresIn: '2h' });

    return token;
};


// exports.register = async (username, password) =>{
//     await User.create({ username, password });
// };
