
var props = require('..');
var fs = require('fs');
var path = require('path');

fs.readdirSync('test/cases').forEach(function(file){
  if (/\.out$|^\./.test(file)) return;
  var base = path.basename(file, '.js');
  describe(base, function(){
    it('should work', function(){
      var js = fs.readFileSync('test/cases/' + file, 'utf8');
      var out = fs.readFileSync('test/cases/' + base + '.out', 'utf8').trim().split(/\s+/);
      props(js).should.eql(out);
    })
  })
});
