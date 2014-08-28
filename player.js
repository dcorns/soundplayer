function player() {
  var playlist = [];
  var playing = {};
  var controls = {};
  var ui = {};

  function makeUi(){
    ui.player = document.getElementById('player');
    ui.currentTrack = document.getElementById('currentTrack');
    ui.npImg = document.getElementById('npImg');
    ui.trackInfo = document.getElementById('trackInfo');
    ui.musicFile = document.getElementById('musicFile');
    ui.playBar = document.getElementById('playBar');
    ui.playList = document.getElementById('playList');
  }
}