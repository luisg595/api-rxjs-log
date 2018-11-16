module.exports = function(app) {
    const log = require('../controllers/LogsController')

    app.route('/logs')
        .get(log.index)
        .post(log.store)
    
    app.route('/logs/:id')
        .get(log.show)
}