var fs = require('fs')

function Device (path) {
  this.path = path
}

Device.prototype.run = function (prefix, cmd) {
  return fs.writeFileSync(this.path + '/' + prefix, cmd)
}

Device.prototype.read = function (prop) {
  return fs.readFileSync(this.path + '/' + prop, 'utf-8')
}

module.exports = Device
