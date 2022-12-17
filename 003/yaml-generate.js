const yaml = require('js-yaml');
const fs   = require('fs');

const buildConstants = function(d) {
  let built = d.reduce((p, c, i, a) => p + `const ${Object.keys(c)[0]} = ${c[Object.keys(c)[0]]}
`,'')
  return built
}

const buildBindings = function(d) {
  let built = d.reduce((p, c, i, a) => p + `case "${Object.keys(c)[0]}": ${c[Object.keys(c)[0]]}; break
`,'')
  return built
}

const buildCommands = function(commands) {
  let built = commands.reduce((p, c, i, a) => p + `const ${c} = function(d) => d
`,'')
  return built
}

const buildInitialObjects = function(initialObjects) {
  let built = initialObjects.reduce((p, c, i, a) => p + `let ${c} = {}
`,'')
  return built
}

// Get document, or throw exception on error
try {
  const doc = yaml.load(fs.readFileSync('specification.yaml', 'utf8'));
  
  console.log(doc.htmlPrefix)

  let constants = buildConstants(doc.constants)
  console.log(constants)

  let bindings = buildBindings(doc.keyBindingsKeys)
  console.log(doc.keyBindingsPrefix)
  console.log(bindings)
  console.log(doc.keyBindingsPostfix)

  let commands = buildCommands(doc.commands)
  console.log(commands)

  let initialObjects = buildInitialObjects(doc.initialObjects)
  console.log(initialObjects)

  console.log(doc.htmlPostfix)
  //console.log(doc);
} catch (e) {
  console.log(e);
}