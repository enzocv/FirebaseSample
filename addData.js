var database = firebase.database();

var usuario = " ";
var key_users = "";

var p = [];

/**
 * get key
 */
var ref = database.ref("users");
ref.orderByKey().on("child_added", function(snapshot) {
  console.log(snapshot.key); //keys
  key_users = snapshot.key;
  p.push(key_users);
});

/**
 * get values / nodes
 * delay in loading the data
 */
getid("save").addEventListener("click",function(){
    var ref_user = database.ref("users/"+p[1]); //referencia
    ref_user.on('value', function(snapshot){
        //codigo
        usuario = snapshot.val(); //valores
        console.log( usuario );
    });
});
