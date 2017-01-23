var fs = require('fs');
var photo_model = require('./../models/photo');

// Devuelve una lista de las imagenes disponibles y sus metadatos
exports.list = function (req, res) {
	var photos = photo_model.photos;
	res.render('photos/index', {photos: photos});
};

// Devuelve la vista del formulario para subir una nueva foto
exports.new = function (req, res) {
	res.render('photos/new');
};

// Devuelve la vista de visualización de una foto.
// El campo photo.url contiene la url donde se encuentra el fichero de audio
exports.show = function (req, res) {
	var photo = photo_model.photos[req.params.photoId];
	photo.id = req.params.photoId;
	res.render('photos/show', {photo: photo});
};

// Escribe una nueva foto en el registro de imagenes.
exports.create = function (req, res) {
	var photo = req.files.photo;
	console.log('Nuevo fichero: ', req.body);
	var name = req.body.name;
	var url = req.body.url;
	var likes = req.body.likes;
	var id = Math.random().toString(36).substr(2, 10);

	// Escribe los metadatos de la nueva foto en el registro.
	photo_model.photos[id] = {
		name: name,
		url: url,
		likes: likes,
		tags: tags
	};

	res.redirect('/photos');
};

exports.like = function(req, res){
	var photoId = req.params.photoId;
	var photo = photo_model.photos[photoId];
	photo.likes = parseInt(photo.likes) + 1;
	res.render('photos/show', {photo: photo});
}

exports.tag = function(req, res){
	var photoId = req.params.photoId;
	var photo = photo_model.photos[photoId];
	if (req.body.OK == "OK"){
		photo.tags.push(req.body.tag);
	}
	else if (req.body.DELETE = "DELETE"){
		var i = photo.tags.indexOf(req.body.tag);
		if( i!== -1){
			photo.tags.splice(i, 1);
		}
	}

	console.log(req.body);
	res.render('photos/show', {photo: photo});
}

// Borra una foto (photoId) del registro de imagenes
exports.destroy = function (req, res) {
	var photoId = req.params.photoId;

	// Aquí debe implementarse el borrado del fichero de audio indetificado por photoId en photos.cdpsfy.es

	// Borra la entrada del registro de datos
	delete photo_model.photos[photoId];
	res.redirect('/photos');
};
