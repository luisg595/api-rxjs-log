const mongoose = require('mongoose')
mongoose.connect('mongodb://172.17.0.2/Log', { useNewUrlParser: true })
const Schema = mongoose.Schema

const LogSchema = new Schema({
    log: {
        type: String,
        required: 'Enter the log data'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Logs', LogSchema)