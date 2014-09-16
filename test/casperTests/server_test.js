'use strict';
/*global casper*/

casper.test.begin('Testing the server', 3, function suite(test) {
  casper.start('http://localhost:8080/index.html', function() {
    test.assertHttpStatus(200,'Has 200 status');
    //Element Counts
    test.assertElementCount('div',2,'Testing div count');
    //Test Title text
    test.assertEvalEqual(function(){
      return __utils__.findOne('title').textContent;},'World Player');
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