'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Device(path) {
  this.path = path;
}

Device.prototype.write = function (prefix, cmd) {
  return _fs2.default.writeFileSync(this.path + '/' + prefix, cmd);
};

Device.prototype.read = function (prop) {
  return _fs2.default.readFileSync(this.path + '/' + prop, 'utf-8');
};

exports.default = Device;
