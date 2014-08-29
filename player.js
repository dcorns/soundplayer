
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
          controls.playTrack.className = 'turnOff';
          controls.pauseTrack.className = '';
          break;
        case 'pauseTrack':
          ui.currentTrack.pause();
          controls.playTrack.className = '';
          controls.pauseTrack.className = 'turnOff';
          break;
        default:
          alert(id+'pressed');
          break;
      }
    };

    var playing = player.playing;
    playing.trackLength = document.getElementById('lblDuration');
    playing.npImg = document.getElementById('npImg');

    controls.pauseTrack.className = 'turnOff';


    //Make test playlist
    player.playList.push({file:'api/music/Cracker Blues - Bolero maldito.mp3', graphic: 'api/graphics/16999373', title: 'Cracker Blues'});

    player.musicFile.src = player.playList[0].file;
    player.trackInfo.value = player.playList[0].title;
    player.npImg.src = player.playlist[0].graphic;

  })();



return player;
}
var player = makeplayer();

