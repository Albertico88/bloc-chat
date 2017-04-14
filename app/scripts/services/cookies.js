(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      console.log("You are not signed in");
      // Modal pops to allow users to set their name
    }
  }


  angular
    .module('blocChat')
    .run(['$cookies', BlocChatCookies]);
})();
