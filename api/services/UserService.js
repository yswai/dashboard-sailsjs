module.exports = {

  getUsers: function(next) {
    User.find().exec(function(err, users) {
      if(err) throw err;
      next(users);
    });
  }

};
