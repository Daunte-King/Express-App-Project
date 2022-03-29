const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const artistSchema = new Schema ({
    artist: String,
    decade: String,

})

module.exports = mongoose.model('Artist', artistSchema);
