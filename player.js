
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
    ui.playListItems = [];

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
    player.playlist.push({file:'api/music/Cracker Blues - Bolero maldito.mp3', graphic: 'api/graphics/16999373.jpg', title: 'Bolero maldito'});
    player.playlist.push({file:'api/music/Enforcer - Mesmerized By Fire.mp3', graphic: 'api/graphics/81616077.png', title: 'Mesmerized By Fire'});
    player.playlist.push({file:'api/music/Hans Theessink - Johnny & The Devil.mp3', graphic: 'api/graphics/91787079.jpg', title: 'Johnny & The Devil'});
    player.playlist.push({file:'api/music/Texas in July - 1000 Lies.mp3', graphic: 'api/graphics/95688129.jpg', title: '1000 Lies'});
    player.playlist.push({file:'api/music/Textures - Singularity', graphic: '', title: 'Singularity'});

    player.ui.musicFile.src = player.playlist[0].file;
    player.ui.trackInfo.value = player.playlist[0].title;
    player.ui.npImg.src = player.playlist[0].graphic;

  })();

  function populateUiPlaylist(playListIn, playListOut){
    var list = '';
    for (var i=0; i < playListIn.length; i++){
      list = list + "<li id='ls"+i+"' >"+playListIn[i].title+"</li>"
    }
    console.log(list);
    playListOut.innerHTML = list;
  }

  populateUiPlaylist(player.playlist, player.ui.playList);

return player;
}
var player = makeplayer();