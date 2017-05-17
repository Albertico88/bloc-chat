(function() {
  function ModalCtrl($uibModal, $uibModalInstance, $cookies) {

    this.cancel = function() {
      $uibModalInstance.dismiss();
    }

    // this.setCurrentUser = function(name) {
    //   $cookies.put('blocChatCurrentUser', name);
    //   this.cancel();
    //   swal({
    //     title: "Success!",
    //     text: "Welcome " + name + "!",
    //     type: "success",
    //     timer: 6000
    //   });
    // }
  }


  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
