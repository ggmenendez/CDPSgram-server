/*

Modelo de datos de canciones (photo)

photo_id: {
	name: nombre de la canción,
	url: url del fichero de audio
}

*/

var photos_url = process.env.PHOTOS_URL || "http://localhost:8000"

exports.photos = {
	1: {
		name: 'Wood',
		url: photos_url + '/photos/photo1.jpg',
		likes: '0',
		tags: []
	},
	2: {
		name: 'Desktop',
		url: photos_url + '/photos/photo2.jpg',
		likes: '0',
		tags: []
	},
	3: {
		name: 'Man',
		url: photos_url + '/photos/photo3.jpg',
		likes: '0',
		tags: []
	},
	4: {
		name: 'Woman',
		url: photos_url + '/photos/photo4.jpg',
		likes: '0',
		tags: []
	},
	5: {
		name: 'People',
		url: photos_url + '/photos/photo5.jpg',
		likes: '0',
		tags: []
	}
};
