(function () {
  function RoomCtrl(Room, Message) {
    this.chatRooms = Room.all;
    this.name = name;
    this.addRoom = function(){
      Room.add(this.name);
      this.name = ''
    }
    
    this.messages = Message.getByRoomId('-Kep7zf8dnMUc4qFJXUO');
  }

angular
  .module('blocChat')
  .controller('RoomCtrl', ['Room', 'Message', RoomCtrl]);
})();
