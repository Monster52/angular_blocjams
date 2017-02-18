(function(){
  function SongPlayer(){
    var SongPlayer = {};

    var currentSong = null;

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
        currentBuzzObject.stop();
        currentSong.playing = null;
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });
      currentSong = song;
    };

    /*
    * @function playSong
    * @desc Sets song.playing to true
    * @param {Object} song
    */

    var playSong = function(song){
      currentBuzzObject.play();
      currentSong.playing = true;
    }

    /*
    * @function SongPlayer.play
    * @desc Plays the user selected song
    * @params {Object} song
    */

    SongPlayer.play = function(song){
      if (currentSong !== song){
        setSong(song);
        playSong(song);

      } else if (currentSong === song){
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
      currentBuzzObject.pause();
      song.playing = false;
    }

    return SongPlayer;
  }

  angular
    .module("blocjams")
    .factory("SongPlayer", SongPlayer);
})();
