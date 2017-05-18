(function () {
  function RoomCtrl(Room, Message) {
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
      this.content = " ";
    }
  }

angular
  .module('blocChat')
  .controller('RoomCtrl', ['Room', 'Message', RoomCtrl]);
})();
