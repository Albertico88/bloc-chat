(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      var userNameValue = prompt("What your name is boiiii?");
      $cookies.put('blocChatCurrentUser', userNameValue);
      console.log('Stored: ' + $cookies.get('blocChatCurrentUser'));
      // console.log(this.currentUser);

      // fire off an AngularMaterial Dialog - Can't be closed
      // get username in form field
      // set value of username == value from form field
      // store currentUser in a ngCookie

    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', BlocChatCookies]);
})();
