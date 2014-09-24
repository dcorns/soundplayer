'use strict';
/*global casper*/
casper.test.comment('Acceptance Test Begin');
casper.test.begin('Testing the server', 19, function suite(test) {
  casper.start('http://localhost:8080/index.html', function() {
    test.assertHttpStatus(200,'Has 200 status');
    //Element Counts
    test.assertElementCount('div',2,'Page has 2 div tags');
    //Test Title text
    test.assertEvalEqual(function(){
      return __utils__.findOne('title').textContent;},'World Player','Title is World Player');
    //Player tests
    test.assertExists('#player',"player exists");
    test.assertExists('#player'+' img','player has an image');
    test.assertExists('#player'+' audio', 'player has audio');
    test.assertExists('#player'+' audio'+' track', 'audio has track');
    test.assertExists('#player'+' audio'+' source', 'audio has source');
    test.assertExists('#player'+' #playBar','player has playBar for player controls');
    test.assertExists('#player'+' #playBar'+' #prevTrack','playBar has prevTrack control');
    test.assertExists('#player'+' #playBar'+' #nextTrack','playBar has nextTrack control');
    test.assertExists('#player'+' #playBar'+' #playTrack','playBar has playTrack control');
    test.assertExists('#player'+' #playBar'+' #pauseTrack','playBar has pauseTrack control');
    test.assertExists('#player'+' #playBar'+' #lblDuration','playBar has duration label');
    test.assertExists('#player'+' #playBar'+' #lblElapsedTime','playBar has elapsed time label');
    test.assertExists('#player'+' #playList','player has playList');
    test.assertEvalEqual(function(){
        return document.getElementById('pauseTrack').getAttribute('class');
      },'turnOff','pauseTrack starts with the turnOff class');
    test.assertEvalEqual(function(){
      return document.getElementById('playTrack').getAttribute('class');
    },'clPlayTrack','playTrack starts with the clPlayTrack class');
    casper.then(function(){
      casper.click('#playTrack');
    });
    casper.then(function(){
      casper.capture('images/startpage.png');
        test.assertEvalEqual(function(){
          return document.getElementById('playTrack').getAttribute('class');
        },'turnOff','playTrack gets turnOff class after when clicked');
    });


    //can play/pause
    //can forward to next track
    //can reverse to previous track
    //can play mp3 file
    //can stream file
    //can select from playlist
    //can add to playlist
    //can remove from playlist
    //can open and close playlist
    //displays mp3 meta data

    /*test.assertExists('h1.page-title');
    test.assertSelectorHasText('h1.page-title', 'Hello');
    test.assertVisible('footer');*/
  }).run(function() {
    test.done();
  });
});
  /*casper.then(function(){
    this.log('and then?');
    this.echo(this.getHTML('body'));
  });*/

 /* casper.run(function(){
    test.done();
  });

});*/