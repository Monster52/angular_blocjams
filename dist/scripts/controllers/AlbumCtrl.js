(function() {
  function AlbumCtrl() {
    this.albumData = angular.copy(albumPicasso);

  }

  angular
    .module("blocjams")
    .controller("AlbumCtrl", AlbumCtrl);
})();
