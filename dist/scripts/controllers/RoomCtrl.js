(function () {
  function RoomCtrl(Room) {
    this.chatRooms = Room.all;
  }

angular
  .module('blocChat')
  .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
