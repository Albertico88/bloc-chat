(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {


      // Angular Material Dialog Prompt
         var prompt = function($mdDialog) {
           this.customFullscreen = false;
           this.showPrompt = function(ev) {
             var confirm = $mdDialog.prompt()
                .title('What is your name?')
                .textContent('Text context goes here...')
                .placeholder('You\'r awesome name')
                .ariaLabel('You\'r awesome name')
                .initialValue('Buddy')
                .targetEvent(ev)
                .ok('Okay!')
                .cancel('You don\'t have a name?');

              $mdDialog.show(confirm).then(function(result) {
              this.status = 'Cool name ' + result + '.';
              }, function() {
              this.status = 'You don\'t have a name?';
              });
          }
        }
  // Need to DO:
      // fire off an AngularMaterial Dialog - Can't be closed
      // get username in form field
      // set value of username == value from form field
      // store currentUser in a ngCookie


// Working Prompt
      // var userNameValue = prompt("What is your name?");
      // $cookies.put('blocChatCurrentUser', userNameValue);

      console.log('New Cookie created for: ' + $cookies.get('blocChatCurrentUser'));
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', BlocChatCookies]);
})();
