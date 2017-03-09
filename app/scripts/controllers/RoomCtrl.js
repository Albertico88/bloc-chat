(function () {
  function RoomCtrl(Room) {
    this.chatRooms = Room.all;
    this.name = name;
    this.addRoom = function(){
      Room.add(this.name);
      this.name = ''
    }
  }

angular
  .module('blocChat')
  .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
