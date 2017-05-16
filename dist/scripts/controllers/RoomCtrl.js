(function () {
  function RoomCtrl(Room, Message, $uibModal) {
    this.chatRooms = Room.all;
    this.currentRoom = null;
    // this.defaultRoom = firebase.database().ref().child("rooms").equalTo("-Kep7ykrTk74_OOqCQnl");

    this.open = function() {
      $uibModal.open({
        templateUrl: '/templates/nameModal.html',
        size: 'lg',
        keyboard: false,
        controller: 'ModalCtrl as modal'
      });
    }

    this.setCurrentRoom = function(room) {
      this.currentRoom = room;
      this.messages = Message.getByRoomId(room.$id);
      console.log("Clicked on" + " " + room.name);
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
    // Function to sumbit message when Enter is pressed
  }

angular
  .module('blocChat')
  .controller('RoomCtrl', ['Room', 'Message', '$uibModal', RoomCtrl]);
})();
