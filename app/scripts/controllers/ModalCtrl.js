(function() {
  function ModalCtrl($uibModal, $uibModalInstance, $cookies) {

    this.cancel = function() {
      $uibModalInstance.dismiss();
    }

    this.setCurrentUser = function(name) {
      $cookies.put('blocChatCurrentUser', name);
      this.cancel();
    }
  }


  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
