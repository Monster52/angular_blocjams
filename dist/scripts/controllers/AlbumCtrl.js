(function() {
  function AlbumCtrl(Fixtures, SongPlayer) {
    this.albumData = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;

  }

  angular
    .module("blocjams")
    .controller("AlbumCtrl", ["Fixtures", "SongPlayer", AlbumCtrl]);
})();
