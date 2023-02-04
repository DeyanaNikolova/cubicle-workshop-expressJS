const User = require('../models/User');


exports.getUserByName = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });

exports.login = async (username, password) => {
    const user = await this.getUserByName(username);

    const isValid = await user.validatePassword(password)
    if(!user || !isValid){
        throw 'Invalid username or password!';
    }
    return user;
};


// exports.register = async (username, password) =>{
//     await User.create({ username, password });
// };
