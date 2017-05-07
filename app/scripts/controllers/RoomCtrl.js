(function () {
  function RoomCtrl(Room, Message) {
    this.chatRooms = Room.all;
    this.currentRoom = null;
    // this.defaultRoom = firebase.database().ref().child("rooms").equalTo("-Kep7ykrTk74_OOqCQnl");

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

    // User Name Prompt
    this.namePrompt = function($mdDialog) {
      this.status = '  ';
      this.customFullscreen = false;
      this.showPrompt = function(ev) {
        var confirm = $mdDialog.prompt()
          .title('Welcome to BlocChat')
          .textContent('Please enter your name')
          .placeholder('Your name here')
          .ariaLabel('Your name here')
          .targetEvent(ev)
          .ok('Submit')
          .cancel('Cancel');

        $mdDialog.show(confirm).then(function(result) {
          this.status = 'Hello there ' + result + '!';
        }, function() {
          this.status = 'You need a name in order to chat';
        });
      };
    }


  }

angular
  .module('blocChat')
  .controller('RoomCtrl', ['Room', 'Message', '$mdDialog', RoomCtrl]);
})();
