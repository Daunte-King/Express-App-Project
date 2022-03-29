const artist = require('../models/artist');

module.exports = {
    index,
    new: newArtist,
    create,
    delete: deleteSong,
    show
};

function index(req, res) {
    artist.find({}, function(err, artists) {
        res.render('artists/index', {title: "All Artists", songs});
    });
}

function newArtist(req, res) {
    res.render('songs/new'), {title: "Add Artist"};
}

function create(req, res) {
    const artist = new Artist(req.body);
    artist.save(function(err){
        if (err) return res.render('artists/new');
        console.log(artist);
        res.redirect('/artists/new');
    })
}

function deleteArtist(req, res) {
    Artist.findByIdAndRemove (req.params.id, function(err, artist){
        res.redirect('/artists')
    })
}

function show(req, res) {
    Artist.findById(req.params.id, function (err, artist){
        res.render('artists/show', {title: "Artist Details",artist});
    })
}
