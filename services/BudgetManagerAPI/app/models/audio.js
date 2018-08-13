const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },

  album: {
    type: String,
    index: true,
    required: false
  },

  artist: {
    type: String,
    index: true,
    required: false
  },

  genre: {
    type: String,
    index: true,
    required: false
  },

  type: {
    type: String,
    required: true
  },

  filename: {
    type: String,
    required: true
  },
});

mongoose.model('Audio', Schema);
