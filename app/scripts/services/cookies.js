(function() {
  function BlocChatCookies($cookies, $mdDialog) {
    let self = this;
    var currentUser = $cookies.get('blocChatCurrentUser');

    if (!currentUser || currentUser === '') {
      self.status = " ";
      debugger;
      this.showPrompt = function(event) {
        debugger;
        var confirm = $mdDialog.prompt()
          .title('Welcome to BlocChat')
          .textContent('Please enter your name')
          .placeholder('Your name here')
          .ariaLabel('Your name here')
          .targetEvent(event)
          .ok('Submit')
          .cancel('Cancel');
        $mdDialog.show(confirm).then(function(result) {
          self.status = 'Hello there ' + result + '!';
          self.currentUser = result;
        }, function() {
          self.status = 'You need a name in order to chat';
        });
      }
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$mdDialog', BlocChatCookies]);
})();
