const passport = require('passport'),
      config = require('@config'),
      models = require('@BudgetManager/app/setup');

module.exports = (app) => {
  const api = app.BudgetManagerAPI.app.api.audio;

  app.route('/api/v1/audio')
     .post(passport.authenticate('jwt', config.session), api.store(models.Audio, app.get('budgetsecret')))
     .get(passport.authenticate('jwt', config.session), api.getAll(models.Audio, app.get('budgetsecret')))

  app.route('/api/v1/audio/:id')
    .put(passport.authenticate('jwt', config.session), api.edit(models.Audio, app.get('budgetsecret')))
    .delete(passport.authenticate('jwt', config.session), api.remove(models.Audio, app.get('budgetsecret')))
    
