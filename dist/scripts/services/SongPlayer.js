(function(){
  function SongPlayer(Fixtures){
    var SongPlayer = {};

    /*
    * @desc Grabs the album from Fixtures
    * @params
    */
    var currentAlbum = Fixtures.getAlbum();

    /*
    * @desc Buzz object audio file
    * @type {Object}
    */
    var currentBuzzObject = null;

    /*
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {Object} song
    */

    var setSong = function(song){
      if (currentBuzzObject){
        stopSong(song)
        // currentBuzzObject.stop();
        // SongPlayer.currentSong.playing = null;
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });
      SongPlayer.currentSong = song;
    };

    /*
    * @function playSong
    * @desc Sets song.playing to true
    * @param {Object} song
    */

    var playSong = function(song){
      currentBuzzObject.play();
      SongPlayer.currentSong.playing = true;
    };

    var stopSong = function(song){
      currentBuzzObject.stop();
      SongPlayer.currentSong.playing = null;
    };

    /*
    * @func getSongIndex
    * @desc Retruns the index of song being played
    *
    */

    var getSongIndex = function(song){
      return currentAlbum.songs.indexOf(song);
    };


    SongPlayer.currentSong = null;

    /*
    * @function SongPlayer.play
    * @desc Plays the user selected song
    * @params {Object} song
    */

    SongPlayer.play = function(song){
      song = song || SongPlayer.currentSong
      if (SongPlayer.currentSong !== song){
        setSong(song);
        playSong(song);

      } else if (SongPlayer.currentSong === song){
        if (currentBuzzObject.isPaused()){
          playSong(song);
        }
      }
    };

    /*
    * @func SongPlayer.pause
    * @desc Pauses a user selected song
    * @params {Object} song
    */

    SongPlayer.pause = function(song){
      song = song || SongPlayer.currentSong
      currentBuzzObject.pause();
      song.playing = false;
    }

    SongPlayer.previous = function(){
      var currentSongIndex = getSongIndex(SongPlayer.currentSong)
      currentSongIndex--;

      if (currentSongIndex < 0) {
        stopSong(song);
        // currentBuzzObject.stop();
        // SongPlayer.currentSong.playing = null;
      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };

    SongPlayer.next = function(){
      var currentSongIndex = getSongIndex(SongPlayer.currentSong)
      currentSongIndex++;

      if (currentSongIndex >= currentAlbum.songs.length) {
        stopSong(song);
        // currentBuzzObject.stop()
        // SongPlayer.currentSong.playing = null;
      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };

    return SongPlayer;
  }

  angular
    .module("blocjams")
    .factory("SongPlayer", ["Fixtures", SongPlayer]);
})();
