const mongoose = require('mongoose');
const upload = require('@BudgetManager/app/libraries/upload');
const api = {};
const limit = 10;

api.store = (Audio, Token) => (req, res) => {
  if (Token) {
    // User.findOne({ _id: req.query.user_id }, (error, user) => {
      // if (error) res.status(400).json(error);
    if (req.body) {
      const Audio = new Audio({
        name: req.body.name,
        album: req.body.album,
        artist: req.body.artist,
        genre: req.body.genre,
        type: req.body.type,
        filename: req.body.filename,
      });

      Audio.save(error => {
        if (error) return res.status(400).json(error);
        res.status(200).json({ success: true, message: "Audio registration successful" });
      })
    } else {
      res.status(400).json({ success: false, message: "Invalid Audio" })
    }
    // })

  } else return res.status(403).send({ success: false, message: 'Unauthorized' });
}

api.upload = (Audio, Token) => (req, res) => {
  if (token) {
    if (req.files) {
      for (var i in req.files) {
        return upload.file(appRoot + "BudgetManagerAPI/public/audio",req.files[i],function(e){
          // res.json({name:i,url:e.path});
          res.status(200).json({ success: true, name: i, url: e.path, message: "upload successful" });
        });
      }
    } else res.status(400).json({ success: false, message: "Invalid File" })
  } else return res.status(403).send({ success: false, message: 'Unauthorized' });
}

api.getAll = (Audio, Token) => (req, res) => {
  if (Token) {
    const skip = req.params && req.params.page ?  req.params.page : 0;
    Audio.find({}).limit(limit).skip(skip).exec((error, Audio) => {
      if (error) return res.status(400).json(error);
      res.status(200).json(Audio);
      return true;
    })
  } else return res.status(403).send({ success: false, message: 'Unauthorized' });
}

api.edit = (Audio, Token) => (req, res) => {
  if (Token) {
    Audio.findOneAndUpdate({ _id: req.body._id }, req.body, (error, Audio) => {
      if (error) res.status(400).json(error);
      res.status(200).json(Audio);
    })
  } else return res.status(401).send({ success: false, message: 'Unauthorized' });
}

api.remove = (Audio, Token) => (req, res) => {
  if (Token) {
    Audio.remove({ _id: req.query._id }, (error, removed) => {
      if (error) res.status(400).json(error);
      res.status(200).json({ success: true, message: 'Removed successfully' });
    })
  } else return res.status(401).send({ success: false, message: 'Unauthorized' });
}

module.exports = api;
