(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {

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
