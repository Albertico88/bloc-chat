(function () {
  function RoomCtrl(Room, Message) {
    this.chatRooms = Room.all;
    this.name = name;
    this.getByRoomId = Message.getByRoomId;


    this.setCurrentRoom = function(room) {
      this.currentRoom = room;
      this.messages = Message.getByRoomId(room.$id);
    }

    this.addRoom = function(){
      Room.add(this.name);
      this.name = ''
    }
  }

angular
  .module('blocChat')
  .controller('RoomCtrl', ['Room', 'Message', RoomCtrl]);
})();
