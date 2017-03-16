(function() {
  function Message($firebaseArray){
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      getByRoomId: function(roomId){
        var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(1);
        return $firebaseArray(ref);
      }
    };
  }


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
