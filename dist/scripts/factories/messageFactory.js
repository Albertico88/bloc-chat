(function() {
  function Message($firebaseArray, $cookies) {
    var rootRef = firebase.database().ref();
    var roomRef = rootRef.child("messages").orderByChild("roomId");

    return {
      getByRoomId: function(roomId) {
        return $firebaseArray(roomRef.equalTo(roomId));
      },

      send: function(newMessage, roomId) {
        messages = rootRef.child('messages')
        message = {
          content: newMessage,
          roomId: roomId,
          user: $cookies.get('blocChatCurrentUser')
        }
        
        messages.push(message);
        return $firebaseArray(roomRef.equalTo(roomId));
      }
    }
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
