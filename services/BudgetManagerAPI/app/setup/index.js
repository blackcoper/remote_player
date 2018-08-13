const mongoose = require('mongoose'),
      UserModel = require('@BudgetManagerModels/user'),
      BudgetModel = require('@BudgetManagerModels/budget'),
      ClientModel = require('@BudgetManagerModels/client');
      LocationModel = require('@BudgetManagerModels/location');
      PlaylistModel = require('@BudgetManagerModels/playlist');
      AudioModel = require('@BudgetManagerModels/audio');

const models = {
  User: mongoose.model('User'),
  Budget: mongoose.model('Budget'),
  Client: mongoose.model('Client'),

  Location: mongoose.model('Location'),
  Playlist: mongoose.model('Playlist'),
  Audio: mongoose.model('Audio')

}

module.exports = models;
