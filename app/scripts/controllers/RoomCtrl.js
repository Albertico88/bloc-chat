(function () {
  function RoomCtrl(Room, Message, $cookies) {
    this.chatRooms = Room.all;
    this.currentRoom = null;
    // this.defaultRoom = firebase.database().ref().child("rooms").equalTo("-Kep7ykrTk74_OOqCQnl");

    this.setCurrentRoom = function(room) {
      this.currentRoom = room;
      this.messages = Message.getByRoomId(room.$id);
    }

    this.addRoom = function(){
      Room.add(this.name);
      this.name = '';
    }

    this.newMessage = function(currentRoom){
      Message.send(this.content, currentRoom.$id);
      console.log('New message added to ' + currentRoom.name + ": " + this.content);
      this.content = " ";
    }

    this.setCurrentUser = function(result){
      $cookies.put('blocChatCurrentUser', result);
    }
  }

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', 'Message', '$cookies', RoomCtrl]);
})();
