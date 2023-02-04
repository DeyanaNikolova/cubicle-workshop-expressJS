const User = require('../models/User');


exports.getUserByName = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });


// exports.register = async (username, password) =>{
//     await User.create({ username, password });
// };
