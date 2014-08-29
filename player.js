
function makeplayer() {
  var player = {
    playlist: [],
    playing: {},
    controls: {},
    ui: {}
    };
  (function () {
    var ui = player.ui;
    ui.player = document.getElementById('player');
    ui.currentTrack = document.getElementById('currentTrack');
    ui.npImg = document.getElementById('npImg');
    ui.trackInfo = document.getElementById('trackInfo');
    ui.musicFile = document.getElementById('musicFile');
    ui.playBar = document.getElementById('playBar');
    ui.playList = document.getElementById('playList');

    var controls = player.controls;
    controls.nextTrack = document.getElementById('nextTrack');
    controls.nextTrack.onclick = function(){controls.clicked(this)};
    controls.pauseTrack = document.getElementById('pauseTrack');
    controls.pauseTrack.onclick = function(){controls.clicked(this)};
    controls.playTrack = document.getElementById('playTrack');
    controls.playTrack.onclick = function(){controls.clicked(this)};
    controls.prevTrack = document.getElementById('prevTrack');
    controls.prevTrack.onclick = function(){controls.clicked(this)};

    controls.clicked = function (e){
      var id = e.id;
      switch (id){
        case 'playTrack':
          ui.currentTrack.play();
          break;
        case 'pauseTrack':
          ui.currentTrack.pause();
          break;
        default:
          alert(id+'pressed');
          break;
      }
    };

    var playing = player.playing;
    playing.trackLength = document.getElementById('lblDuration');
    playing.npImg = document.getElementById('npImg');

  })();



return player;
}
var player = makeplayer();

