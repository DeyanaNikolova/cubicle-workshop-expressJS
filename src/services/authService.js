const User = require('../models/User');


exports.getUserByName = (username) => User.findOne({ username });

exports.register = (username, password) => User.findOne({ username,  });


exports.login = (username, password) =>{

}
