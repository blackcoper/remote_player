const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },

  playlist_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Playlist'
  },

  description: {
    type: String,
    required: false
  },

  image: {
    type: String,
    required: false
  },
});

mongoose.model('Location', Schema);
