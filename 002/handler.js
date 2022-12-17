const yaml = require('js-yaml');
const fs   = require('fs');

function rewrite(v) {
}

// Get document, or throw exception on error
try {
  const doc = yaml.load(fs.readFileSync('specification.yaml', 'utf8'));
  console.log(`const handler = function(e) {
    switch(e.code) {
`)

  doc['command keys'].forEach((o) => console.log(o))
  console.log(`
    }
}
`)
  //console.log(doc);
} catch (e) {
  console.log(e);
}