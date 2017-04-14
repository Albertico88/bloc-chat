(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      // allow users to set their name
    }
  }


  angular
    .module('blocChat')
    .run(['$cookies', BlocChatCookies]);
})();
