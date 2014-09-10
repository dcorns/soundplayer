'use strict';
/*global casper*/

casper.test.begin('testing the server', 1, function suite(test) {

  casper.start('http://localhost:8080', function() {
    test.assertHttpStatus(200);
  });

  casper.then(function(){
    this.log('and then?');
    this.echo(this.getHTML('body'));
  });

  casper.run(function(){
    test.done();
  });

});