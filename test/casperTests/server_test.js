'use strict';
/*global casper*/

casper.test.begin('Testing the server', 1, function suite(test) {
  casper.start('http://localhost:8080/index.html', function() {
    test.assertHttpStatus(200,'Has 200 status');
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