(function() {
  function ModalCtrl($uibModal, $uibModalInstance, $cookies) {

    this.cancel = function() {
      $uibModalInstance.dismiss();
    }

    this.setCurrentUser = function(name) {
      $cookies.put('blocChatCurrentUser', name);
      this.cancel();
      swal("Success!", "Welcome to Bloc Chat " + name + "!" , "success");
    }
  }


  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
