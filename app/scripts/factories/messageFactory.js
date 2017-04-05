(function() {
  function Message($firebaseArray){
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    var getByRoomId = function(roomId) {
      var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId);
      return $firebaseArray(ref);
    }

    return {
      getByRoomId: getByRoomId
    }
  };



  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
