(function() {
  function AlbumCtrl(Fixtures) {
    this.albumData = Fixtures.getAlbum();

  }

  angular
    .module("blocjams")
    .controller("AlbumCtrl", ["Fixtures", AlbumCtrl]);
})();
