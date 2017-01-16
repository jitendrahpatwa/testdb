app.factory('serviceDB', function() {

	return {
		init: function($cordovaSQLite){
			db = window.openDatabase("besties.db", "1", "SQLite DB", "20000000");
			//$cordovaSQLite.execute(db,"DROP DATABASE besties.db");
			//`self` data table
			$cordovaSQLite.execute(db,"CREATE TABLE IF NOT EXISTS self(id integer primary key,uid text,name text,gender text,email text,contact text,dob text,age text,hobbies text,profilePic text,dummyPic text,faviAns text,regLat text,regLong text,regAddress text,created text,updated text)");
		    
			//`contacts` table `and update friends` to get distance
		    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS contacts(id integer primary key, uid text, uname text,contact text,gender text,isActive text,dob text,age text,email text,profilePic text,dummyPic text,lat text,lon text,address text,distance text,joinwithmedate text,created text,updated text)");
		    
		    //`invited contactslist` table
		    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS joinincontacts(id integer primary key, uid text, uname text,contact text,gender text,isActive text,dob text,age text,email text,profilePic text,dummyPic text,listen text,token text,accepted text,created text,updated text)");

			//`track me` self table
		    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS trackme(id integer primary key, lat text,long text,address text,deviceid text,created text,updated text)");

			//found to `invite` table
		    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS invite(id integer primary key,friendID text,friendContact text,lat text,long text,address text,inviteName text,inviteDesc text,date text,time text,ampm text,accepted text,created text,updated text)");

			//after invite `meet done` table
		    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS meet(id integer primary key,friendID text,friendContact text,lat text,long text,address text,eventName text,eventDesc text,date text,time text,ampm text,accepted text,created text,updated text)");

			//my `tasks` table
		    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS tasks(id integer primary key,taskname text,taskdetail text,lat text,long text,address text,token text,created text,updated text)");

		    //`chats` table
		    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text,caos text)");
			console.log("serviceDB created");
		},
		create: function($scope,$timeout, $cordovaSQLite){
			console.log("serviceDB");
		},
		trackmylocation:function($cordovaGeolocation){
			var watchOptions = {
			    timeout : 3000,
			    enableHighAccuracy: false // may cause errors if true
			  };

			  var watch = $cordovaGeolocation.watchPosition(watchOptions);
			  watch.then(
			    null,
			    function(err) {
			      // error
			      alert("error:"+err);
			    },
			    function(position) {
			      var lat  = position.coords.latitude;
			      var long = position.coords.longitude;
			      alert("lat:"+lat+" long:"+long);
			  });
		}
	}
});