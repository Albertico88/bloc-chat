(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    // if (!currentUser || currentUser === '') {

// Working Prompt
      // var userNameValue = prompt("What is your name?");
      // $cookies.put('blocChatCurrentUser', userNameValue);

      console.log('New Cookie created for: ' + $cookies.get('blocChatCurrentUser'));
  }

  angular
    .module('blocChat')
    .run(['$cookies', BlocChatCookies]);
})();
