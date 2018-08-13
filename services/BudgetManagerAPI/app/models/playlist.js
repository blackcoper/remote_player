const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },

  description: {
    type: String,
    required: false
  },

  audio_id: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Audio'
  },

  background: {
    type: [String],
    required: false
  }
});

mongoose.model('Playlist', Schema);
