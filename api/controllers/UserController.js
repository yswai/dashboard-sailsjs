/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  findAll: function(req, res) {
    UserService.getUsers(function(users) {
      return res.json(users);
    });
  },
  test: function(req, res) {
    return res.send('This is a test');
  }
};

