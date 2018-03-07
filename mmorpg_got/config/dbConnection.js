/*importar o mongodb*/
var mongo = require('mongodb');

var connMongoDB = function(){
	console.log('entrou na função de conexão');
	var db = new mongo.Db(
		'got',
		new mongo.Server(
			'localhost', //string contendo o endereço do servidor
			27017, //porta de conexao
			{}
		),
		{}
	);
	return db;
}

module.exports = function(){
	return connMongoDB;
}