(function() {
  function BlocChatCookies($cookies) {
    let self = this;
    var currentUser = $cookies.get('blocChatCurrentUser');

    if (!currentUser || currentUser === '') {
      swal({
        title: "Set Username",
        text: "Hi there stranger, what is your name?",
        type: "input",
        showCancelButton: false,
        closeOnConfirm: false,
        animation: "slide-from-top",
        allowEscapeKey: false,
        allowOutsideClick: false,
        inputPlaceholder: "Enter your name"
      },
      function(inputValue){
        if (inputValue === false) return false;

        if (inputValue === " ") {
          swal.showInputError("You need to enter a name in order to chat!");
          return false
        }

        self.cookieUser = inputValue;
        $cookies.put('blocChatCurrentUser', self.cookieUser);

        swal({
          title: "Success!",
          text: "Welcome " + inputValue + "!",
          type: "success",
          timer: 3000,
          showConfirmButton: false
        });
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', BlocChatCookies]);
})();
