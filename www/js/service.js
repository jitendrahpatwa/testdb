app.factory('serviceDB', function() {

	return {
		init: function($cordovaSQLite){
			db = window.openDatabase("besties.db", "1", "SQLite DB", "20000000");

		    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
		    console.log("serviceDB created");
		},
		create: function($scope,$timeout, $cordovaSQLite){
			console.log("serviceDB");
		}
	}
});