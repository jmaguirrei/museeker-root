// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"store/actions/changeRoute.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return function (args) {
    var page = args.page,
        action = args.action;
    return {
      steps: [function () {
        return {
          domain: '_Store_',
          method: 'set',
          args: {
            currentPage: page
          },
          sideEffect: function sideEffect() {
            if (action === 'replace') window.history.replaceState(null, null, page);
            if (action === 'push') window.history.pushState(null, null, page);
            if (action === 'back') window.history.back();
          }
        };
      }]
    };
  };
};

exports.default = _default;
},{}],"../../../../../libs/belt/src/compact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compact = compact;

function compact(array) {
  return array.filter(Boolean);
}
},{}],"../../../../../libs/belt/src/get.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function get(obj, key, defaultValue) {
  // Undefined object
  if (!obj) return defaultValue;
  if (_typeof(obj) === 'object' && Object.keys(obj).length === 0) return defaultValue; // Key is number

  if (typeof key === 'number') {
    if (obj[key] === undefined) return defaultValue;
    return obj[key];
  } // Key is string


  var splittedKeys = key.split('.');
  var exit = false;
  return splittedKeys.reduce(function (acum, value) {
    if (exit) return defaultValue;

    if (!acum[value]) {
      exit = true;
      return defaultValue;
    }

    return acum[value];
  }, obj);
}
},{}],"../../../../../libs/belt/src/has.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.has = has;

function has(obj, key) {
  var splittedKeys = key.split('.');
  var hasKey = true;
  splittedKeys.reduce(function (acum, value) {
    if (!hasKey) return null;

    if (typeof acum[value] === 'undefined') {
      hasKey = false;
      return null;
    }

    return acum[value];
  }, obj);
  return hasKey;
}
},{}],"../../../../../libs/belt/src/last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.last = last;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function last() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (array.length === 0) return null;
  return _toConsumableArray(array).slice(-1)[0];
}
},{}],"../../../../../libs/belt/src/omit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.omit = omit;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function omit(obj, keys) {
  return Object.keys(obj).reduce(function (acum, key) {
    if (keys.includes(key)) return acum;
    if (typeof obj[key] === 'undefined') return acum;
    return _objectSpread({}, acum, _defineProperty({}, key, obj[key]));
  }, {});
}
},{}],"../../../../../libs/belt/src/pick.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pick = pick;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function pick(obj, keys) {
  return Object.keys(obj).reduce(function (acum, key) {
    if (!keys.includes(key)) return acum;
    if (typeof obj[key] === 'undefined') return acum;
    return _objectSpread({}, acum, _defineProperty({}, key, obj[key]));
  }, {});
}
},{}],"../../../../../libs/belt/src/random.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = random;

function random(low, high) {
  if (!low && !high) return Math.random();
  if (low && !high) return low * Math.random();
  if (!low && high) return Math.random(); // Include boths edges as possible numbers

  var length = high - low + 1;
  return low + Math.floor(length * Math.random());
}
},{}],"../../../../../libs/belt/src/range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function range() {
  var low = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var high = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!high && low > 0) return _toConsumableArray(Array(low).keys());
  if (high - low <= 0) return [];

  var array = _toConsumableArray(Array(high - low).keys());

  return array.map(function (elem) {
    return elem + low;
  });
}
},{}],"../../../../../libs/belt/src/sample.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sample = sample;

function sample() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (array.length === 0) return null;
  var rand = Math.floor(array.length * Math.random());
  return array[rand];
}
},{}],"../../../../../libs/belt/src/uid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uid = uid;

function uid() {
  var strLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var now = String(Date.now());
  var middlePos = Math.ceil(now.length / 2);
  var availableChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var availableCharsLength = availableChars.length; // Start the final string

  var str = '';

  for (var i = 1; i <= strLength; i++) {
    var randChar = availableChars.charAt(Math.floor(Math.random() * availableCharsLength)); // Append this character to the string

    str += randChar;
  }

  return "".concat(now.substr(0, middlePos), "-").concat(str, "-").concat(now.substr(middlePos));
}
},{}],"../../../../../libs/belt/src/uniq.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniq = uniq;

function uniq(array) {
  return array.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
}
},{}],"../../../../../libs/belt/src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _compact = require("./compact");

var _get = require("./get");

var _has = require("./has");

var _last = require("./last");

var _omit = require("./omit");

var _pick = require("./pick");

var _random = require("./random");

var _range = require("./range");

var _sample = require("./sample");

var _uid = require("./uid");

var _uniq = require("./uniq");

var _default = {
  compact: _compact.compact,
  get: _get.get,
  has: _has.has,
  last: _last.last,
  omit: _omit.omit,
  pick: _pick.pick,
  random: _random.random,
  range: _range.range,
  sample: _sample.sample,
  uid: _uid.uid,
  uniq: _uniq.uniq
};
exports.default = _default;
},{"./compact":"../../../../../libs/belt/src/compact.js","./get":"../../../../../libs/belt/src/get.js","./has":"../../../../../libs/belt/src/has.js","./last":"../../../../../libs/belt/src/last.js","./omit":"../../../../../libs/belt/src/omit.js","./pick":"../../../../../libs/belt/src/pick.js","./random":"../../../../../libs/belt/src/random.js","./range":"../../../../../libs/belt/src/range.js","./sample":"../../../../../libs/belt/src/sample.js","./uid":"../../../../../libs/belt/src/uid.js","./uniq":"../../../../../libs/belt/src/uniq.js"}],"store/actions/signupEmail.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(Store) {
  return function () {
    var name = Store.observables['signup.name'];
    var email = Store.observables['signup.email'].toLowerCase();

    var _id = _index.default.uid();

    return {
      steps: [function () {
        return {
          domain: '_Backend_',
          method: 'signupUserWithEmail',
          optimistic: false,
          args: {
            _id: _id,
            name: name,
            email: email
          }
        };
      }, function (res) {
        return {
          domain: '_Store_',
          method: res.error ? 'alertOn' : 'set',
          args: res.error ? {
            name: res.error,
            timeout: 4000
          } : {
            user_id: res.data._id,
            'signup.currentStep': 2
          }
        };
      }, function (res) {
        return {
          domain: '_Store_',
          method: 'set',
          args: res.error ? {
            'signin.email': email,
            'forgot.email': email // if user goes to signin he has already the email typed

          } : null
        };
      }]
    };
  };
};

exports.default = _default;
},{"../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"store/actions/signupPassword.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(Store) {
  return function () {
    var _id = Store.observables['user_id'];
    var name = Store.observables['signup.name'];
    var email = Store.observables['signup.email'];
    var password = Store.observables['signup.password'];
    var language = Store.observables.language;
    return {
      steps: [
      /*        We go next step before setting password because there is no server validation        and email send takes time      */
      function () {
        return {
          domain: '_Store_',
          method: 'set',
          args: {
            'signup.currentStep': 3
          }
        };
      }, function () {
        return {
          domain: '_Backend_',
          method: 'signupSendTokenEmail',
          optimistic: false,
          args: {
            _id: _id,
            name: name.split(' ')[0],
            language: language,
            email: email,
            password: password
          }
        };
      }]
    };
  };
};

exports.default = _default;
},{}],"store/actions/signupToken.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(Store) {
  return function () {
    var _id = Store.observables['user_id'];
    var password = Store.observables['signup.password'];
    var tokenDigits = Store.observables['signup.tokenDigits'];
    return {
      steps: [function () {
        return {
          domain: '_Backend_',
          method: 'signupFinishRegistration',
          optimistic: false,
          args: {
            _id: _id,
            password: password,
            token: tokenDigits.join('')
          }
        };
      }, function (res) {
        return {
          domain: '_Store_',
          method: res.error ? 'alertOn' : 'set',
          args: res.error ? {
            name: res.error,
            timeout: 4000
          } : {
            'signup.currentStep': 0,
            'signup.name': '',
            'signup.email': '',
            'signup.password': '',
            'signup.tokenDigits': [],
            currentPage: 'welcome'
          },
          sideEffect: function sideEffect() {
            if (!res.error) {
              window.history.replaceState(null, null, '/welcome');
            }
          }
        };
      }, function (res) {
        return {
          domain: '_Store_',
          method: 'set',
          args: res.error ? {
            'signup.tokenDigits': []
          } : null
        };
      }]
    };
  };
};

exports.default = _default;
},{}],"store/actions/signinEmail.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// import _ from '@jmaguirrei/belt';
var _default = function _default(Store) {
  return function () {
    var email = Store.observables['signin.email'].toLowerCase();
    return {
      steps: [function () {
        return {
          domain: '_Backend_',
          method: 'signinValidateEmail',
          optimistic: false,
          args: {
            email: email
          }
        };
      }, function (res) {
        return {
          domain: '_Store_',
          method: res.error ? 'alertOn' : 'set',
          args: res.error ? {
            name: res.error,
            timeout: 4000
          } : {
            'signin.name': res.data.name,
            'signin.currentStep': 1
          }
        };
      }, function (res) {
        return {
          domain: '_Store_',
          method: 'set',
          args: res.error ? {
            'signup.email': email
          } : null
        };
      }]
    };
  };
};

exports.default = _default;
},{}],"store/actions/signinPassword.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// import _ from '@jmaguirrei/belt';
var _default = function _default(Store) {
  return function () {
    var email = Store.observables['signin.email'];
    var password = Store.observables['signin.password'];
    return {
      steps: [function () {
        return {
          domain: '_Backend_',
          method: 'signinValidatePassword',
          optimistic: false,
          args: {
            email: email,
            password: password
          }
        };
      }, function (res) {
        return {
          domain: '_Store_',
          method: res.error ? 'alertOn' : 'set',
          args: res.error ? {
            name: res.error,
            timeout: 4000
          } : null,
          sideEffect: function sideEffect() {
            if (!res.error) {
              var _res$data = res.data,
                  user_id = _res$data.user_id,
                  isPasswordOK = _res$data.isPasswordOK;

              if (isPasswordOK) {
                window.location.replace("https://museeker.io/app?user=".concat(user_id));
              }
            }
          }
        };
      }]
    };
  };
};

exports.default = _default;
},{}],"store/actions/forgotEmail.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// import _ from '@jmaguirrei/belt';
var _default = function _default(Store) {
  return function () {
    var email = Store.observables['forgot.email'].toLowerCase();
    return {
      steps: [function () {
        return {
          domain: '_Backend_',
          method: 'forgotValidateEmail',
          optimistic: false,
          args: {
            email: email
          }
        };
      }, function (res) {
        return {
          domain: '_Store_',
          method: res.error ? 'alertOn' : 'set',
          args: res.error ? {
            name: res.error,
            timeout: 4000
          } : {
            user_id: res.data.user_id,
            'forgot.name': res.data.name,
            'forgot.currentStep': 1
          }
        };
      }, function (res) {
        return {
          domain: '_Store_',
          method: 'set',
          args: res.error ? {
            'signup.email': email
          } : null
        };
      }]
    };
  };
};

exports.default = _default;
},{}],"store/actions/forgotPassword.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(Store) {
  return function () {
    var _id = Store.observables['user_id'];
    var name = Store.observables['forgot.name'];
    var email = Store.observables['forgot.email'];
    var password = Store.observables['forgot.password'];
    var language = Store.observables.language;
    return {
      steps: [
      /*        We go next step before setting password because there is no server validation        and email send takes time      */
      function () {
        return {
          domain: '_Store_',
          method: 'set',
          args: {
            'forgot.currentStep': 2
          }
        };
      }, function () {
        return {
          domain: '_Backend_',
          method: 'forgotSendTokenEmail',
          optimistic: false,
          args: {
            _id: _id,
            name: name.split(' ')[0],
            language: language,
            email: email,
            password: password
          }
        };
      }]
    };
  };
};

exports.default = _default;
},{}],"store/actions/forgotToken.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(Store) {
  return function () {
    var email = Store.observables['signin.email'];
    var password = Store.observables['forgot.password'];
    var tokenDigits = Store.observables['forgot.tokenDigits'];
    return {
      steps: [function () {
        return {
          domain: '_Backend_',
          method: 'forgotSetNewPassword',
          optimistic: false,
          args: {
            email: email,
            password: password,
            token: tokenDigits.join('')
          }
        };
      }, function (res) {
        return {
          domain: '_Store_',
          method: res.error ? 'alertOn' : 'set',
          args: res.error ? {
            name: res.error,
            timeout: 4000
          } : {
            'forgot.password': '',
            'forgot.tokenDigits': []
          },
          sideEffect: function sideEffect() {
            if (!res.error) {
              var user_id = res.data.user_id;
              window.location.replace("https://app.museeker.io?user=".concat(user_id));
            }
          }
        };
      }, function (res) {
        return {
          domain: '_Store_',
          method: 'set',
          args: res.error ? {
            'forgot.tokenDigits': []
          } : null
        };
      }]
    };
  };
};

exports.default = _default;
},{}],"store/actions/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "changeRoute", {
  enumerable: true,
  get: function () {
    return _changeRoute.default;
  }
});
Object.defineProperty(exports, "signupEmail", {
  enumerable: true,
  get: function () {
    return _signupEmail.default;
  }
});
Object.defineProperty(exports, "signupPassword", {
  enumerable: true,
  get: function () {
    return _signupPassword.default;
  }
});
Object.defineProperty(exports, "signupToken", {
  enumerable: true,
  get: function () {
    return _signupToken.default;
  }
});
Object.defineProperty(exports, "signinEmail", {
  enumerable: true,
  get: function () {
    return _signinEmail.default;
  }
});
Object.defineProperty(exports, "signinPassword", {
  enumerable: true,
  get: function () {
    return _signinPassword.default;
  }
});
Object.defineProperty(exports, "forgotEmail", {
  enumerable: true,
  get: function () {
    return _forgotEmail.default;
  }
});
Object.defineProperty(exports, "forgotPassword", {
  enumerable: true,
  get: function () {
    return _forgotPassword.default;
  }
});
Object.defineProperty(exports, "forgotToken", {
  enumerable: true,
  get: function () {
    return _forgotToken.default;
  }
});

var _changeRoute = _interopRequireDefault(require("./changeRoute"));

var _signupEmail = _interopRequireDefault(require("./signupEmail"));

var _signupPassword = _interopRequireDefault(require("./signupPassword"));

var _signupToken = _interopRequireDefault(require("./signupToken"));

var _signinEmail = _interopRequireDefault(require("./signinEmail"));

var _signinPassword = _interopRequireDefault(require("./signinPassword"));

var _forgotEmail = _interopRequireDefault(require("./forgotEmail"));

var _forgotPassword = _interopRequireDefault(require("./forgotPassword"));

var _forgotToken = _interopRequireDefault(require("./forgotToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./changeRoute":"store/actions/changeRoute.js","./signupEmail":"store/actions/signupEmail.js","./signupPassword":"store/actions/signupPassword.js","./signupToken":"store/actions/signupToken.js","./signinEmail":"store/actions/signinEmail.js","./signinPassword":"store/actions/signinPassword.js","./forgotEmail":"store/actions/forgotEmail.js","./forgotPassword":"store/actions/forgotPassword.js","./forgotToken":"store/actions/forgotToken.js"}],"store/checks/name.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = void 0;
var MIN_LENGTH = 5;

var name = function name(str) {
  var result = str.trim().length >= MIN_LENGTH;
  return {
    result: result,
    message: result ? null : {
      en: "At least ".concat(MIN_LENGTH, " characters"),
      es: "M\xEDnimo ".concat(MIN_LENGTH, " caracteres")
    }
  };
};

exports.name = name;
},{}],"store/checks/email.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.email = void 0;
var REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var email = function email(str) {
  var result = REGEX.test(str);
  return {
    result: result,
    message: null
  };
};

exports.email = email;
},{}],"store/checks/password.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.password = void 0;
var MIN_LENGTH = 8;

var password = function password(str) {
  var noSpaces = /^\S+$/.test(str);

  if (!noSpaces && str.length > 0) {
    return {
      result: false,
      message: {
        en: 'Password can\'t contain white spaces',
        es: 'La contraseña no puede contener espacios'
      }
    };
  }

  var result = str.length >= MIN_LENGTH;
  return {
    result: result,
    message: result ? null : {
      en: "At least ".concat(MIN_LENGTH, " characters"),
      es: "M\xEDnimo ".concat(MIN_LENGTH, " caracteres")
    }
  };
};

exports.password = password;
},{}],"store/checks/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "name", {
  enumerable: true,
  get: function () {
    return _name.name;
  }
});
Object.defineProperty(exports, "email", {
  enumerable: true,
  get: function () {
    return _email.email;
  }
});
Object.defineProperty(exports, "password", {
  enumerable: true,
  get: function () {
    return _password.password;
  }
});

var _name = require("./name");

var _email = require("./email");

var _password = require("./password");
},{"./name":"store/checks/name.js","./email":"store/checks/email.js","./password":"store/checks/password.js"}],"store/alerts/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PASSWORD_IS_NOT_CORRECT = exports.EMAIL_IS_NOT_REGISTERED = exports.INVALID_FORGOT_TOKEN = exports.INVALID_SIGNUP_TOKEN = exports.EMAIL_ALREADY_REGISTERED = void 0;
var EMAIL_ALREADY_REGISTERED = {
  en: 'Email is already registered',
  es: 'Este email ya está registrado'
};
exports.EMAIL_ALREADY_REGISTERED = EMAIL_ALREADY_REGISTERED;
var INVALID_SIGNUP_TOKEN = {
  en: 'Code is not correct',
  es: 'Código incorrecto'
};
exports.INVALID_SIGNUP_TOKEN = INVALID_SIGNUP_TOKEN;
var INVALID_FORGOT_TOKEN = {
  en: 'Code is not correct',
  es: 'Código incorrecto'
};
exports.INVALID_FORGOT_TOKEN = INVALID_FORGOT_TOKEN;
var EMAIL_IS_NOT_REGISTERED = {
  en: 'This email is not registered',
  es: 'Este email no está registrado'
};
exports.EMAIL_IS_NOT_REGISTERED = EMAIL_IS_NOT_REGISTERED;
var PASSWORD_IS_NOT_CORRECT = {
  en: 'Password is not correct',
  es: 'Contraseña incorrecta'
};
exports.PASSWORD_IS_NOT_CORRECT = PASSWORD_IS_NOT_CORRECT;
},{}],"store/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(require("./actions"));

var checks = _interopRequireWildcard(require("./checks"));

var alerts = _interopRequireWildcard(require("./alerts"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = {
  actions: actions,
  checks: checks,
  alerts: alerts,
  observables: {
    // Domain properties
    user_id: '',
    language: 'en',
    // pages
    currentPage: '',
    // welcome, signin, signup, forgot
    // signup
    'signup.currentStep': 0,
    // Name, Email, Password, Token
    'signup.name': '',
    'signup.email': '',
    'signup.password': '',
    'signup.password.isVisible': false,
    'signup.tokenDigits': [],
    // 6 position numeric array
    // signin
    'signin.currentStep': 0,
    // Email, Password
    'signin.name': '',
    // setted after email is checked to be registered
    'signin.email': '',
    'signin.password': '',
    'signin.password.isVisible': false,
    // forgot
    'forgot.currentStep': 0,
    // Password, Token
    'forgot.name': '',
    // setted after email is checked to be registered
    'forgot.email': '',
    'forgot.password': '',
    'forgot.password.isVisible': false,
    'forgot.tokenDigits': [] // 6 position numeric array

  }
};
exports.default = _default;
},{"./actions":"store/actions/index.js","./checks":"store/checks/index.js","./alerts":"store/alerts/index.js"}],"lib/constants/Assets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Assets = void 0;
var IMAGES_BASE_PATH = 'https://res.cloudinary.com/jmaguirrei/image/upload';
var Assets = {
  IMAGES_BASE_PATH: IMAGES_BASE_PATH,
  COMPANY_LOGO: "".concat(IMAGES_BASE_PATH, "/company/internal/company.jpg")
};
exports.Assets = Assets;
},{}],"lib/constants/Colors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Colors = void 0;
var Colors = {
  GREEN_WELCOME: 'mediumseagreen',
  GREEN_SIGNUP: 'hsl(145, 45%, 27%)',
  BLUE_SIGNIN: 'hsl(219, 80%, 42%)',
  RED_WARNING: 'hsl(0, 65%, 60%)'
};
exports.Colors = Colors;
},{}],"lib/constants/IconsSVGs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconsSVGs = void 0;
var backspace = "\n  <svg viewBox=\"0 0 24 24\">\n    <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\n    <path d=\"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z\"/>\n  </svg>\n";
var eyeOn = "\n  <svg viewbox=\"0 0 24 24\">\n    <path d=\"M0 0h24v24H0V0z\" fill=\"none\">\n    </path>\n    <path d=\"M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z\">\n    </path>\n  </svg>\n";
var eyeOff = "\n  <svg viewbox=\"0 0 24 24\">\n    <path d=\"M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z\" fill=\"none\">\n    </path>\n    <path d=\"M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z\">\n    </path>\n  </svg>\n";
var email = "\n  <svg viewbox=\"0 0 24 24\">\n    <path d=\"M0 0h24v24H0V0z\" fill=\"none\">\n    </path>\n    <path d=\"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z\">\n    </path>\n  </svg>\n";
var close = "\n  <svg viewbox=\"0 0 24 24\">\n    <path d=\"M0 0h24v24H0V0z\" fill=\"none\">\n    </path>\n    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z\">\n    </path>\n  </svg>\n";
var chevronLeft = "\n  <svg viewbox=\"0 0 24 24\">\n    <path d=\"M0 0h24v24H0V0z\" fill=\"none\">\n    </path>\n    <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z\">\n    </path>\n  </svg>\n";
var chevronRight = "\n  <svg viewbox=\"0 0 24 24\">\n    <path d=\"M0 0h24v24H0V0z\" fill=\"none\">\n    </path>\n    <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z\">\n    </path>\n  </svg>\n";
var linkedin = "\n  <svg viewbox=\"0 0 24 24\">\n    <path fill=\"#0077B5\" d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\">\n    </path>\n  </svg>\n";
var google = "\n  <svg viewBox=\"0 0 48 48\">\n    <defs>\n      <path id=\"a\" d=\"M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z\"/>\n    </defs>\n    <clipPath id=\"b\">\n      <use xlink:href=\"#a\" overflow=\"visible\"/>\n    </clipPath>\n    <path clip-path=\"url(#b)\" fill=\"#FBBC05\" d=\"M0 37V11l17 13z\"/>\n    <path clip-path=\"url(#b)\" fill=\"#EA4335\" d=\"M0 11l17 13 7-6.1L48 14V0H0z\"/>\n    <path clip-path=\"url(#b)\" fill=\"#34A853\" d=\"M0 37l30-23 7.9 1L48 0v48H0z\"/>\n    <path clip-path=\"url(#b)\" fill=\"#4285F4\" d=\"M48 48L17 24l-4-3 35-10z\"/>\n  </svg>\n";
var facebook = "\n  <svg viewbox=\"0 0 24 24\">\n    <path fill=\"#3B5998\" d=\"M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0\">\n    </path>\n  </svg>\n";
/* --------------------------------------------------------------------------------------------- */

var IconsSVGs = {
  // Keyboard
  backspace: backspace,
  // Forms
  'eye-on': eyeOn,
  'eye-off': eyeOff,
  email: email,
  // Navigation
  close: close,
  'chevron-left': chevronLeft,
  'chevron-right': chevronRight,
  // Social
  facebook: facebook,
  linkedin: linkedin,
  google: google
};
exports.IconsSVGs = IconsSVGs;
},{}],"lib/constants/Sizes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sizes = void 0;
var Sizes = {
  HEADER_HEIGHT: '55px',
  TABS_HEIGHT: '50px'
};
exports.Sizes = Sizes;
},{}],"lib/control/SigninControl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SigninControl = void 0;

var _index = _interopRequireDefault(require("../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ------------------------------------------------------------------------------------------------===== SIGNIN WORFLOW =====0: EMAIL    isRegistered ?    - false: error    - true: continue1: PASSWORD    - ko: error    - ok: => Dashboard!    - forgot => ===== FORGOT WORFLOW =====-------------------------------------------------------------------------------------------------*/
var SigninControl = function SigninControl(store) {
  var language = store.get('language');
  var currentStep = store.get('signin.currentStep');

  var currentCheck = _index.default.get({
    0: store.check('email', store.get('signin.email')),
    1: store.check('password', store.get('signin.password'))
  }, currentStep, {});

  var checkResult = _index.default.get(currentCheck, 'result', false);

  var alert = store.alerts.find(function (item) {
    return item.isVisible;
  });
  return {
    state: {
      currentStep: currentStep,
      leftEnabled: currentStep > 0,
      rightEnabled: checkResult,
      checkText: _index.default.get(currentCheck, "message.".concat(language), ''),
      alertText: _index.default.get(alert, "message.".concat(language), '')
    },
    actions: {
      onClickLeft: function onClickLeft() {
        // const currentStep = store.get('signin.currentStep');
        if (currentStep > 0) store.set({
          'signin.currentStep': currentStep - 1
        });
      },
      onClickRight: function onClickRight() {
        // const currentStep = store.get('signin.currentStep');
        if (currentStep === 0) store.call('signinEmail');
        if (currentStep === 1) store.call('signinPassword');
      }
    }
  };
};

exports.SigninControl = SigninControl;
},{"../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"lib/control/SignupControl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignupControl = void 0;

var _index = _interopRequireDefault(require("../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ------------------------------------------------------------------------------------------------===== SIGNUP WORFLOW =====0: NAME1: EMAIL    isRegistered ?    - true: error    - false: continue2: PASSWORD    sendEmail (signupToken)3: TOKEN    - ko: error    - ok: isRegistered, setPassword => Welcome!-------------------------------------------------------------------------------------------------*/
var SignupControl = function SignupControl(store) {
  var language = store.get('language');
  var currentStep = store.get('signup.currentStep');

  var currentCheck = _index.default.get({
    0: store.check('name', store.get('signup.name')),
    1: store.check('email', store.get('signup.email')),
    2: store.check('password', store.get('signup.password')),
    3: {
      result: store.get('signup.tokenDigits').length === 6
    }
  }, currentStep, {});

  var checkResult = _index.default.get(currentCheck, 'result', false);

  var alert = store.alerts.find(function (item) {
    return item.isVisible;
  });
  return {
    state: {
      currentStep: currentStep,
      leftEnabled: currentStep > 0,
      rightEnabled: checkResult,
      checkText: _index.default.get(currentCheck, "message.".concat(language), ''),
      alertText: _index.default.get(alert, "message.".concat(language), '')
    },
    actions: {
      onClickLeft: function onClickLeft() {
        // const currentStep = store.get('signup.currentStep');
        if (currentStep > 0) store.set({
          'signup.currentStep': currentStep - 1
        });
      },
      onClickRight: function onClickRight() {
        // const currentStep = store.get('signup.currentStep');
        if (currentStep === 0) store.set({
          'signup.currentStep': 1
        });
        if (currentStep === 1) store.call('signupEmail');
        if (currentStep === 2) store.call('signupPassword');
        if (currentStep === 3) store.call('signupToken');
      }
    }
  };
};

exports.SignupControl = SignupControl;
},{"../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"lib/control/ForgotControl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForgotControl = void 0;

var _index = _interopRequireDefault(require("../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ------------------------------------------------------------------------------------------------===== FORGOT WORFLOW =====0: EMAIL (prepopulate with signin.email)    isRegistered ?    - false: error    - true: continue1: PASSWORD (new)    sendEmail (forgotToken)3: TOKEN    - ko: error    - ok: setPassword => Dashboard!-------------------------------------------------------------------------------------------------*/
var ForgotControl = function ForgotControl(store) {
  var language = store.get('language');
  var currentStep = store.get('forgot.currentStep');

  var currentCheck = _index.default.get({
    0: store.check('email', store.get('signin.email')),
    1: store.check('password', store.get('forgot.password')),
    2: {
      result: store.get('forgot.tokenDigits').length === 6
    }
  }, currentStep, {});

  var checkResult = _index.default.get(currentCheck, 'result', false);

  var alert = store.alerts.find(function (item) {
    return item.isVisible;
  });
  return {
    state: {
      currentStep: currentStep,
      leftEnabled: currentStep > 0,
      rightEnabled: checkResult,
      checkText: _index.default.get(currentCheck, "message.".concat(language), ''),
      alertText: _index.default.get(alert, "message.".concat(language), '')
    },
    actions: {
      onClickLeft: function onClickLeft() {
        // const currentStep = store.get('forgot.currentStep');
        if (currentStep > 0) store.set({
          'forgot.currentStep': currentStep - 1
        });
      },
      onClickRight: function onClickRight() {
        // const currentStep = store.get('forgot.currentStep');
        if (currentStep === 0) store.call('forgotEmail');
        if (currentStep === 1) store.call('forgotPassword');
        if (currentStep === 2) store.call('forgotToken');
      }
    }
  };
};

exports.ForgotControl = ForgotControl;
},{"../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"lib/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Assets", {
  enumerable: true,
  get: function () {
    return _Assets.Assets;
  }
});
Object.defineProperty(exports, "Colors", {
  enumerable: true,
  get: function () {
    return _Colors.Colors;
  }
});
Object.defineProperty(exports, "IconsSVGs", {
  enumerable: true,
  get: function () {
    return _IconsSVGs.IconsSVGs;
  }
});
Object.defineProperty(exports, "Sizes", {
  enumerable: true,
  get: function () {
    return _Sizes.Sizes;
  }
});
Object.defineProperty(exports, "SigninControl", {
  enumerable: true,
  get: function () {
    return _SigninControl.SigninControl;
  }
});
Object.defineProperty(exports, "SignupControl", {
  enumerable: true,
  get: function () {
    return _SignupControl.SignupControl;
  }
});
Object.defineProperty(exports, "ForgotControl", {
  enumerable: true,
  get: function () {
    return _ForgotControl.ForgotControl;
  }
});

var _Assets = require("./constants/Assets");

var _Colors = require("./constants/Colors");

var _IconsSVGs = require("./constants/IconsSVGs");

var _Sizes = require("./constants/Sizes");

var _SigninControl = require("./control/SigninControl");

var _SignupControl = require("./control/SignupControl");

var _ForgotControl = require("./control/ForgotControl");
},{"./constants/Assets":"lib/constants/Assets.js","./constants/Colors":"lib/constants/Colors.js","./constants/IconsSVGs":"lib/constants/IconsSVGs.js","./constants/Sizes":"lib/constants/Sizes.js","./control/SigninControl":"lib/control/SigninControl.js","./control/SignupControl":"lib/control/SignupControl.js","./control/ForgotControl":"lib/control/ForgotControl.js"}],"ui/components/Button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(client, id) {
  return client.hoc({
    id: id,
    classes: {
      div: "\n        cursor: pointer;\n        text-align: center;\n        transition: all .6s ease;\n        user-select: none;\n        width: 100%;\n        box-shadow: inset 0px 0px 200px hsla(0, 0%, 0%, 0), 0px 1px 3px -1px black;\n        &:hover {\n          box-shadow: inset 0px 0px 200px hsla(0, 0%, 0%, 0.3), 0px 1px 3px -1px black;\n        }\n      ",
      a: "\n        text-decoration: none;\n        color: inherit;\n      "
    },
    styles: {
      div: function div(color, bgColor, height) {
        return "\n        background-color: ".concat(bgColor, ";\n        border-radius: ").concat(height, "px;\n        color: ").concat(color, ";\n        height: ").concat(height, "px;\n        line-height: ").concat(height, "px;\n      ");
      }
    },
    render: function render(_ref) {
      var props = _ref.props,
          classes = _ref.classes,
          styles = _ref.styles;
      var text = props.text,
          color = props.color,
          bgColor = props.bgColor,
          height = props.height,
          href = props.href,
          onClick = props.onClick;
      return client.h("div", {
        onclick: onClick,
        className: classes.div,
        style: styles.div(color, bgColor, height)
      }, href ? client.h("a", {
        href: href,
        "class": "".concat(classes.a)
      }, text) : text);
    }
  });
};

exports.default = _default;
},{}],"ui/components/Carrousel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(client, id) {
  return client.hoc({
    id: id,
    styles: {
      container: "\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        padding: 10px 20px;\n      ",
      inner: function inner(currentStep) {
        return "\n        display: flex;\n        transition: transform .4s ease;\n        transform: translate3d(".concat(-100 * currentStep, "%, 0, 0);\n      ");
      },
      screen: "\n        min-width: 100%;\n        padding: 20px 20px 40px;\n      "
    },
    render: function render(_ref) {
      var props = _ref.props,
          styles = _ref.styles;
      var screens = props.screens,
          currentStep = props.currentStep;
      return client.h("main", {
        className: "carrousel",
        style: styles.container
      }, client.h("div", {
        style: styles.inner(currentStep)
      }, screens.map(function (screen) {
        return client.h("div", {
          style: styles.screen
        }, screen());
      })));
    }
  });
};

exports.default = _default;
},{}],"ui/components/Icons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(client, id) {
  var IconsSVGs = client.lib.IconsSVGs;
  return client.hoc({
    id: id,
    styles: {
      div: function div(size, enabled) {
        var inStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        return "\n        transition: all .6s ease;\n        width: ".concat(size, "px;\n        height: ").concat(size, "px;\n        cursor: ").concat(enabled ? 'pointer' : 'auto', ";\n        opacity: ").concat(enabled ? 1 : 0.5, ";\n        ").concat(inStyle, "\n      ");
      }
    },
    render: function render(_ref) {
      var props = _ref.props,
          styles = _ref.styles;
      var icon = props.icon,
          size = props.size,
          _props$enabled = props.enabled,
          enabled = _props$enabled === void 0 ? true : _props$enabled,
          inStyle = props.inStyle,
          _props$className = props.className,
          className = _props$className === void 0 ? '' : _props$className;
      if (!IconsSVGs[icon]) return false;

      var onClick = function onClick() {
        return enabled ? props.onClick() : undefined;
      };

      return client.h("div", {
        className: className,
        style: styles.div(size, enabled, inStyle),
        onclick: onClick
      }, client.h("div", {
        __innerHTML: IconsSVGs[icon]
      }));
    }
  });
};

exports.default = _default;
},{}],"ui/components/Input.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(client, id) {
  return client.hoc({
    id: id,
    styles: {
      input: "\n        font-size: 18px;\n        border: none;\n        outline: none;\n        padding: 20px;\n        background: hsl(0, 0%, 98%);\n        border-radius: 5px;\n        margin-bottom: 30px;\n        width: 100%;\n      "
    },
    actions: function actions(props) {
      return {
        onKeyDown: function onKeyDown(e) {
          // Tab pressed
          if (e.keyCode === 9) {
            e.preventDefault();
            props.onClickRight();
          }
        }
      };
    },
    // ariaLabel={label}
    render: function render(_ref) {
      var props = _ref.props,
          styles = _ref.styles,
          actions = _ref.actions;
      return client.h("input", {
        type: props.type,
        placeholder: props.placeholder || '***',
        value: props.value,
        style: styles.input,
        onchange: props.onInput,
        onkeydown: actions.onKeyDown
      });
    }
  });
};

exports.default = _default;
},{}],"ui/components/Modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var breakpoint = '768px';

var _default = function _default(client, id) {
  return client.hoc({
    id: id,
    styles: {
      subcomponent: function subcomponent(isSelected) {
        return "\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        transition: opacity .3s ease;\n        opacity: ".concat(isSelected ? 1 : 0, ";\n        pointer-events: ").concat(isSelected ? 'auto' : 'none', ";\n      ");
      }
    },
    classes: {
      container: "\n        display: flex;\n        align-items: center;\n        justify-content:center;\n        background: hsl(0, 0%, 20%);\n        position: fixed;\n        top: 0; bottom: 0; left: 0; right: 0;\n      ",
      modal: "\n        position: relative;\n        background: white;\n        min-width: 500px;\n        width: 40%;\n        max-width: 500px;\n        min-height: 90%;\n        max-height: 90%;\n        border-radius: 10px;\n        overflow: hidden;\n        @media (max-width: ".concat(breakpoint, ") {\n          & {\n            min-height: 100%;\n            min-width: 100%;\n            max-width: 100%;\n            width: 100%;\n            border-radius: 0;\n          }\n        }\n      ")
    },
    render: function render(_ref) {
      var props = _ref.props,
          styles = _ref.styles,
          classes = _ref.classes;
      // return ui.html`<div>Modal</div>`;
      var pages = props.pages,
          currentPage = props.currentPage;
      return client.h("div", {
        className: "modal ".concat(classes.container)
      }, client.h("div", {
        className: classes.modal
      }, Object.keys(pages).map(function (key) {
        var component = pages[key];
        return client.h("div", {
          style: styles.subcomponent(key === currentPage)
        }, function () {
          return component();
        });
      })));
    }
  });
};

exports.default = _default;
},{}],"ui/components/Navigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Icons = _interopRequireDefault(require("./Icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = 50;

var _default = function _default(client, id) {
  var IconsComp = (0, _Icons.default)(client);
  return client.hoc({
    id: id,
    styles: {
      container: "\n        display: flex;\n        align-items: center;\n        margin: 50px 30px;\n      ",
      text: function text(_text, color) {
        return "\n        flex: 1;\n        text-align: center;\n        opacity: ".concat(_text ? 1 : 0, ";\n        transition: opacity .6s ease;\n        color: ").concat(color || 'initial', ";\n      ");
      }
    },
    classes: {
      'signup-right-enabled': "\n        background-position: center;\n        transition: background 0.3s;\n        background: ".concat(client.lib.Colors.GREEN_SIGNUP, ";\n        border-radius: 50%;\n        fill: white;\n        box-shadow: -1px 1px 3px -1px black;\n        &:active {\n          background-color: hsla(0, 0%, 0%, 0.8);\n          background-size: 100%;\n          transition: background 0s;\n        }\n      "),
      'signin-right-enabled': "\n        background-position: center;\n        transition: background 0.3s;\n        background: ".concat(client.lib.Colors.BLUE_SIGNIN, ";\n        border-radius: 50%;\n        fill: white;\n        box-shadow: -1px 1px 3px -1px black;\n        &:active {\n          background-color: hsla(0, 0%, 0%, 0.8);\n          background-size: 100%;\n          transition: background 0s;\n        }\n      ")
    },
    render: function render(_ref) {
      var props = _ref.props,
          styles = _ref.styles,
          classes = _ref.classes;
      var currentPage = props.currentPage,
          onClickLeft = props.onClickLeft,
          onClickRight = props.onClickRight,
          leftEnabled = props.leftEnabled,
          rightEnabled = props.rightEnabled,
          text = props.text,
          color = props.color;
      return client.h("div", {
        "class": "navigation",
        style: styles.container
      }, client.h(IconsComp, {
        icon: 'chevron-left',
        onClick: onClickLeft,
        size: size,
        enabled: leftEnabled
      }), client.h("div", {
        style: styles.text(text, color)
      }, text || ''), client.h(IconsComp, {
        icon: 'chevron-right',
        onClick: onClickRight,
        size: size,
        enabled: rightEnabled,
        className: !rightEnabled ? '' : currentPage === 'signup' ? classes['signup-right-enabled'] : classes['signin-right-enabled'] // forgot also uses signin styles

      }));
    }
  });
};

exports.default = _default;
},{"./Icons":"ui/components/Icons.js"}],"ui/components/NumKeyboard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Icons = _interopRequireDefault(require("./Icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(client, id) {
  var IconsComp = (0, _Icons.default)(client);
  return client.hoc({
    id: id,
    classes: {
      container: "\n        padding: 20px;\n      ",
      range: "\n        display: flex;\n        justify-content:center;\n      ",
      digitspan: "\n        user-select: none;\n      "
    },
    styles: {
      digit: function digit(isSvg) {
        return "\n        cursor: pointer;\n        background: hsl(0, 0%, 80%);\n        font-size: 24px;\n        font-family: sans-serif;\n        border-radius: 10px;\n        margin: 10px 5px;\n        min-width: 40px;\n        height: 40px;\n        text-align: center;\n        line-height: 40px;\n        box-shadow: 0px 1px 3px -1px black;\n        padding: ".concat(isSvg ? '6px' : '0px', ";\n      ");
      }
    },
    render: function render(_ref) {
      var props = _ref.props,
          classes = _ref.classes,
          styles = _ref.styles;
      var onPressNum = props.onPressNum,
          onPressDel = props.onPressDel;
      var ranges = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 0]];
      return client.h("div", {
        className: "keyboard ".concat(classes.container)
      }, client.h("div", {
        className: classes.range
      }, ranges[0].map(function (i) {
        return client.h("div", {
          style: styles.digit(false),
          onclick: function onclick() {
            return onPressNum(i);
          }
        }, client.h("span", {
          className: classes.digitspan
        }, "$", i));
      })), client.h("div", {
        "class": classes.range
      }, ranges[1].map(function (i) {
        return client.h("div", {
          style: styles.digit(false),
          onclick: function onclick() {
            return onPressNum(i);
          }
        }, client.h("span", {
          className: classes.digitspan
        }, i));
      }), client.h("div", {
        style: styles.digit(true)
      }, client.h(IconsComp, {
        icon: 'backspace',
        onClick: onPressDel,
        size: 30
      }))));
    }
  });
};

exports.default = _default;
},{"./Icons":"ui/components/Icons.js"}],"ui/components/Progress.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(client, id) {
  return client.hoc({
    id: id,
    styles: {
      container: "\n        display: flex;\n        justify-content: center;\n        margin-top: 8px;\n      ",
      item: function item(isSelected) {
        return "\n        background: ".concat(isSelected ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 90%)', ";\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        margin: 0 5px;\n      ");
      }
    },
    render: function render(_ref) {
      var props = _ref.props,
          styles = _ref.styles;
      var numSteps = props.numSteps,
          currentStep = props.currentStep;
      return client.h("div", {
        "class": "progress",
        style: styles.container
      }, _index.default.range(numSteps).map(function (item) {
        var isSelected = item === currentStep;
        return client.h("div", {
          style: styles.item(isSelected)
        });
      }));
    }
  });
};

exports.default = _default;
},{"../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"ui/components/Token.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(client, id) {
  return client.hoc({
    id: id,
    classes: {
      container: "\n        display: flex;\n        margin: 10px 20px;\n        justify-content: space-between;\n      ",
      digit: "\n        font-size: 34px;\n        flex: 1;\n        height: 50px;\n        line-height:50px;\n        text-align: center;\n        max-width: 50px;\n        background: hsl(0, 0%, 95%);\n        border: 1px solid hsl(0,0%,90%);\n        border-radius: 5px;\n        user-select: none;\n      "
    },
    render: function render(_ref) {
      var props = _ref.props,
          classes = _ref.classes;
      var tokenDigits = props.tokenDigits;
      var range = [0, 1, 2, 3, 4, 5];
      return client.h("div", {
        "class": "token ".concat(classes.container)
      }, range.map(function (i) {
        return client.h("div", {
          className: classes.digit
        }, tokenDigits[i] || '');
      }));
    }
  });
};

exports.default = _default;
},{}],"ui/components/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _Button.default;
  }
});
Object.defineProperty(exports, "Carrousel", {
  enumerable: true,
  get: function () {
    return _Carrousel.default;
  }
});
Object.defineProperty(exports, "Icons", {
  enumerable: true,
  get: function () {
    return _Icons.default;
  }
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function () {
    return _Input.default;
  }
});
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function () {
    return _Modal.default;
  }
});
Object.defineProperty(exports, "Navigation", {
  enumerable: true,
  get: function () {
    return _Navigation.default;
  }
});
Object.defineProperty(exports, "NumKeyboard", {
  enumerable: true,
  get: function () {
    return _NumKeyboard.default;
  }
});
Object.defineProperty(exports, "Progress", {
  enumerable: true,
  get: function () {
    return _Progress.default;
  }
});
Object.defineProperty(exports, "Token", {
  enumerable: true,
  get: function () {
    return _Token.default;
  }
});

var _Button = _interopRequireDefault(require("./Button"));

var _Carrousel = _interopRequireDefault(require("./Carrousel"));

var _Icons = _interopRequireDefault(require("./Icons"));

var _Input = _interopRequireDefault(require("./Input"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _Navigation = _interopRequireDefault(require("./Navigation"));

var _NumKeyboard = _interopRequireDefault(require("./NumKeyboard"));

var _Progress = _interopRequireDefault(require("./Progress"));

var _Token = _interopRequireDefault(require("./Token"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Button":"ui/components/Button.js","./Carrousel":"ui/components/Carrousel.js","./Icons":"ui/components/Icons.js","./Input":"ui/components/Input.js","./Modal":"ui/components/Modal.js","./Navigation":"ui/components/Navigation.js","./NumKeyboard":"ui/components/NumKeyboard.js","./Progress":"ui/components/Progress.js","./Token":"ui/components/Token.js"}],"ui/fragments/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(client, id) {
  var size = client.lib.Sizes.HEADER_HEIGHT;
  var Progress = client.ui.components.Progress;
  return client.hoc({
    id: id,
    actions: function actions(props, store) {
      return {
        onNavigateBack: function onNavigateBack() {
          return store.call('changeRoute', {
            page: '',
            action: 'back'
          });
        }
      };
    },
    classes: {
      container: "\n        min-height: ".concat(size, ";\n        max-height: ").concat(size, ";\n        display: flex;\n        align-items: center;\n        padding: 0 25px;\n        border-bottom: 1px solid hsl(0, 0%, 95%);\n      "),
      image: "\n        max-height: 32px;\n      "
    },
    styles: {
      container: function container(numSteps) {
        return "\n        justify-content: ".concat(numSteps > 0 ? 'space-between' : 'center', ";\n      ");
      }
    },
    render: function render(_ref) {
      var props = _ref.props,
          classes = _ref.classes,
          styles = _ref.styles;
      var _props$numSteps = props.numSteps,
          numSteps = _props$numSteps === void 0 ? 0 : _props$numSteps,
          currentStep = props.currentStep;
      var src = client.lib.Assets.COMPANY_LOGO;
      return client.h("header", {
        "class": classes.container,
        style: styles.container(numSteps)
      }, client.h("img", {
        src: src,
        alt: "company-name",
        className: classes.image
      }), numSteps > 0 ? client.h(Progress, {
        numSteps: numSteps,
        currentStep: currentStep
      }) : '');
    }
  });
};

exports.default = _default;
},{}],"ui/fragments/Tabs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(client, id) {
  var size = client.lib.Sizes.TABS_HEIGHT;
  var _client$lib$Colors = client.lib.Colors,
      GREEN_SIGNUP = _client$lib$Colors.GREEN_SIGNUP,
      BLUE_SIGNIN = _client$lib$Colors.BLUE_SIGNIN;
  return client.hoc({
    id: id,
    state: function state(props, store) {
      return {
        language: store.get('language'),
        currentPage: store.get('currentPage')
      };
    },
    actions: function actions(props, store) {
      return {
        onSelectSignUp: function onSelectSignUp() {
          return store.call('changeRoute', {
            page: 'signup',
            action: 'replace'
          });
        },
        onSelectSignIn: function onSelectSignIn() {
          return store.call('changeRoute', {
            page: 'signin',
            action: 'replace'
          });
        }
      };
    },
    classes: {
      container: "\n        display: flex;\n        width: 100%;\n        align-items: center;\n        min-height: ".concat(size, ";\n        max-height: ").concat(size, ";\n      ")
    },
    styles: {
      tab: function tab(i, color, isSelected) {
        return "\n        height: ".concat(size, ";\n        padding: 8px 0px;\n        flex: 1;\n        font-size: 20px;\n        text-align: center;\n        cursor: pointer;\n        user-select: none;\n        color: ").concat(isSelected ? color : 'hsl(0, 0%, 40%)', ";\n        background: ").concat(isSelected ? 'white' : 'hsl(0, 0%, 95%)', ";\n        border-top: 1px solid hsl(0, 0%, ").concat(isSelected ? 100 : 80, "%);\n        border-right: ").concat(isSelected && i === 0 ? '1px solid hsl(0, 0%, 80%)' : '1px solid transparent', ";\n        border-left: ").concat(isSelected && i === 1 ? '1px solid hsl(0, 0%, 80%)' : '1px solid transparent', ";\n      ");
      }
    },
    render: function render(_ref) {
      var styles = _ref.styles,
          actions = _ref.actions,
          state = _ref.state,
          classes = _ref.classes;
      var language = state.language,
          currentPage = state.currentPage;
      var onSelectSignUp = actions.onSelectSignUp,
          onSelectSignIn = actions.onSelectSignIn;
      var isSignupSelected = currentPage === 'signup';
      return client.h("div", {
        className: "tabs ".concat(classes.container)
      }, client.h("button", {
        style: styles.tab(0, GREEN_SIGNUP, isSignupSelected),
        onclick: onSelectSignUp
      }, _index.default.get({
        en: 'Sign Up',
        es: 'Registro'
      }, language)), client.h("button", {
        style: styles.tab(1, BLUE_SIGNIN, !isSignupSelected),
        onclick: onSelectSignIn
      }, _index.default.get({
        en: 'Sign In',
        es: 'Acceso'
      }, language)));
    }
  });
};

exports.default = _default;
},{"../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"ui/fragments/PasswordOptions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(client, id) {
  var Icons = client.ui.components.Icons;
  return client.hoc({
    id: id,
    actions: function actions(props, store) {
      return {
        onClickEye: function onClickEye() {
          return store.toggle("".concat(props.page, ".password.isVisible"));
        },
        onClickForgot: function onClickForgot() {
          return store.set({
            currentPage: 'forgot'
          });
        }
      };
    },
    state: function state(props, store) {
      return {
        language: store.get('language'),
        isPasswordVisible: store.get("".concat(props.page, ".password.isVisible")),
        isIconVisible: store.get("".concat(props.page, ".password")).length > 0
      };
    },
    classes: {
      container: "\n        width: 100%;\n        display: flex;\n        align-items: center;\n        padding: 10px;\n        margin-bottom: 30px;\n      "
    },
    styles: {
      forgot: function forgot(_forgot) {
        return "\n        font-size: 14px;\n        user-select: none;\n        flex: 1;\n        opacity: ".concat(_forgot ? 1 : 0, ";\n        pointer-events: ").concat(_forgot ? 'auto' : 'none', ";\n        cursor: pointer;\n      ");
      },
      icon: function icon(isVisible) {
        return "\n        opacity: ".concat(isVisible ? 1 : 0, ";\n        pointer-events: ").concat(isVisible ? 'auto' : 'none', ";\n      ");
      }
    },
    render: function render(_ref) {
      var props = _ref.props,
          classes = _ref.classes,
          state = _ref.state,
          actions = _ref.actions,
          styles = _ref.styles;
      var isPasswordVisible = state.isPasswordVisible,
          isIconVisible = state.isIconVisible,
          language = state.language;
      var _props$forgot = props.forgot,
          forgot = _props$forgot === void 0 ? false : _props$forgot;
      return client.h("div", {
        "class": "password-options ".concat(classes.container)
      }, client.h("div", {
        style: styles.forgot(forgot),
        onclick: actions.onClickForgot
      }, _index.default.get({
        en: 'Forgot password?',
        es: '¿Olvidaste tu contraseña?'
      }, language)), client.h(Icons, {
        icon: isPasswordVisible ? 'eye-off' : 'eye-on',
        size: 20,
        onClick: isIconVisible ? actions.onClickEye : function () {
          return undefined;
        },
        inStyle: styles.icon(isIconVisible)
      }));
    }
  });
};

exports.default = _default;
},{"../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"ui/fragments/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function () {
    return _Header.default;
  }
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function () {
    return _Tabs.default;
  }
});
Object.defineProperty(exports, "PasswordOptions", {
  enumerable: true,
  get: function () {
    return _PasswordOptions.default;
  }
});

var _Header = _interopRequireDefault(require("./Header"));

var _Tabs = _interopRequireDefault(require("./Tabs"));

var _PasswordOptions = _interopRequireDefault(require("./PasswordOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Header":"ui/fragments/Header.js","./Tabs":"ui/fragments/Tabs.js","./PasswordOptions":"ui/fragments/PasswordOptions.js"}],"ui/pages/<Forgot>/<>/Email.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(client, id) {
  var Input = client.ui.components.Input;
  return client.hoc({
    id: id,
    state: function state(props, store) {
      return {
        language: store.get('language'),
        email: store.get('forgot.email')
      };
    },
    actions: function actions(props, store) {
      return {
        onInput: function onInput(e) {
          var email = e.target.value;
          store.set({
            'signin.email': email,
            'forgot.email': email
          });
        },
        onClickRight: function onClickRight() {
          var _client$lib$ForgotCon = client.lib.ForgotControl(store),
              state = _client$lib$ForgotCon.state,
              actions = _client$lib$ForgotCon.actions;

          var enabled = state.rightEnabled;
          if (enabled) actions.onClickRight();
        }
      };
    },
    styles: {
      wrapper: "\n        display: flex;\n        flex-flow: column;\n        height: 100%;\n        justify-content: space-around;\n      ",
      title: "\n        font-size: 28px;\n        padding: 20px 20px 10px 20px;\n      ",
      subtitle: "\n        font-size: 24px;\n        padding: 10px 20px 20px 20px;\n      "
    },
    render: function render(_ref) {
      var actions = _ref.actions,
          state = _ref.state,
          styles = _ref.styles;
      var language = state.language;
      return client.h("div", {
        style: styles.wrapper
      }, client.h("div", null, client.h("div", {
        style: styles.title
      }, _index.default.get({
        en: 'Password recovery',
        es: 'Recuperación de contraseña'
      }, language)), client.h("div", {
        style: styles.subtitle
      }, _index.default.get({
        en: 'Enter your email',
        es: 'Ingresa tu email'
      }, language))), client.h(Input, {
        label: 'email',
        type: 'text',
        placeholder: _index.default.get({
          en: 'Your email',
          es: 'Tu email'
        }, language),
        value: state.email,
        onInput: actions.onInput,
        onClickRight: actions.onClickRight
      }));
    }
  });
};

exports.default = _default;
},{"../../../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"ui/pages/<Forgot>/<>/Password.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(client, id) {
  var Input = client.ui.components.Input;
  var PasswordOptions = client.ui.fragments.PasswordOptions;
  return client.hoc({
    id: id,
    state: function state(props, store) {
      return {
        language: store.get('language'),
        name: store.get('forgot.name').split(' ')[0],
        password: store.get('forgot.password'),
        isPasswordVisible: store.get('forgot.password.isVisible')
      };
    },
    actions: function actions(props, store) {
      return {
        onInput: function onInput(e) {
          store.set({
            'forgot.password': e.target.value
          });
        },
        onClickRight: function onClickRight() {
          var _client$lib$ForgotCon = client.lib.ForgotControl(store),
              state = _client$lib$ForgotCon.state,
              actions = _client$lib$ForgotCon.actions;

          var enabled = state.rightEnabled;
          if (enabled) actions.onClickRight();
        }
      };
    },
    styles: {
      wrapper: "\n        display: flex;\n        flex-flow: column;\n        height: 100%;\n        justify-content: space-around;\n      ",
      title: "\n        font-size: 28px;\n        padding: 20px 20px 10px 20px;\n      ",
      subtitle: "\n        font-size: 24px;\n        padding: 10px 20px 20px 20px;\n      ",
      'input-wrapper': "\n        display: flex;\n        flex-flow: column;\n      "
    },
    render: function render(_ref) {
      var state = _ref.state,
          styles = _ref.styles,
          actions = _ref.actions;
      var language = state.language,
          name = state.name,
          password = state.password;
      return client.h("div", {
        style: styles.wrapper
      }, client.h("div", null, client.h("div", {
        style: styles.title
      }, _index.default.get({
        en: "Don't worry ".concat(name, "!"),
        es: "\xA1No te preocupes ".concat(name, "!")
      }, language)), client.h("div", {
        style: styles.subtitle
      }, _index.default.get({
        en: 'Just type a new password',
        es: 'Sólo ingresa una nueva contraseña'
      }, language))), client.h("div", {
        style: styles['input-wrapper']
      }, client.h(Input, {
        label: 'password',
        type: state.isPasswordVisible ? 'text' : 'password',
        placeholder: '********',
        value: password,
        onInput: actions.onInput,
        onClickRight: actions.onClickRight
      }), client.h(PasswordOptions, {
        page: "forgot"
      })));
    }
  });
};

exports.default = _default;
},{"../../../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"ui/pages/<Forgot>/<>/Token.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(client, id) {
  var _client$ui$components = client.ui.components,
      Token = _client$ui$components.Token,
      NumKeyboard = _client$ui$components.NumKeyboard;
  return client.hoc({
    id: id,
    state: function state(props, store) {
      return {
        language: store.get('language'),
        tokenDigits: store.get('forgot.tokenDigits')
      };
    },
    actions: function actions(props, store) {
      return {
        onPressNum: function onPressNum(digit) {
          if (store.get('forgot.tokenDigits').length < 6) {
            store.set({
              'forgot.tokenDigits': function forgotTokenDigits(value) {
                return value.concat(String(digit));
              }
            });
          }
        },
        onPressDel: function onPressDel() {
          if (store.get('forgot.tokenDigits').length > 0) {
            store.set({
              'forgot.tokenDigits': function forgotTokenDigits(value) {
                return value.slice(0, -1);
              }
            });
          }
        }
      };
    },
    styles: {
      wrapper: "\n        display: flex;\n        flex-flow: column;\n        height: 100%;\n        justify-content: space-around;\n      ",
      title: "\n        font-size: 28px;\n        padding: 20px 20px 10px 20px;\n      ",
      subtitle: "\n        font-size: 24px;\n        padding: 10px 20px 20px 20px;\n      "
    },
    render: function render(_ref) {
      var state = _ref.state,
          styles = _ref.styles,
          actions = _ref.actions;
      var language = state.language,
          tokenDigits = state.tokenDigits;
      var onPressNum = actions.onPressNum,
          onPressDel = actions.onPressDel;
      return client.h("div", {
        style: styles.wrapper
      }, client.h("div", null, client.h("div", {
        style: styles.title
      }, _index.default.get({
        en: 'Let\'s change your password:',
        es: 'Vamos a cambiar tu contraseña:'
      }, language)), client.h("div", {
        style: styles.subtitle
      }, _index.default.get({
        en: 'Enter the code received by email',
        es: 'Ingresa el código recibido por email'
      }, language))), client.h(Token, {
        tokenDigits: tokenDigits
      }), client.h(NumKeyboard, {
        onPressNum: onPressNum,
        onPressDel: onPressDel
      }));
    }
  });
};

exports.default = _default;
},{"../../../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"ui/pages/<Forgot>/Forgot.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(client, id) {
  var _client$ui$components = client.ui.components,
      Carrousel = _client$ui$components.Carrousel,
      Navigation = _client$ui$components.Navigation;
  var _client$ui$fragments = client.ui.fragments,
      Header = _client$ui$fragments.Header,
      Tabs = _client$ui$fragments.Tabs;
  var _client$ui$pages = client.ui.pages,
      ForgotEmail = _client$ui$pages.ForgotEmail,
      ForgotPassword = _client$ui$pages.ForgotPassword,
      ForgotToken = _client$ui$pages.ForgotToken;
  return client.hoc({
    id: id,
    state: function state(props, store) {
      return client.lib.ForgotControl(store).state;
    },
    actions: function actions(props, store) {
      return client.lib.ForgotControl(store).actions;
    },
    classes: {
      container: "\n        display: flex;\n        flex-flow: column;\n        justify-content: space-around;\n        height: 100%;\n        position: relative;\n      "
    },
    render: function render(_ref) {
      var state = _ref.state,
          actions = _ref.actions,
          classes = _ref.classes;
      var currentStep = state.currentStep,
          leftEnabled = state.leftEnabled,
          rightEnabled = state.rightEnabled,
          checkText = state.checkText,
          alertText = state.alertText;
      var onClickLeft = actions.onClickLeft,
          onClickRight = actions.onClickRight;
      return client.h("div", {
        id: "forgot",
        "class": classes.container
      }, client.h(Header, {
        numSteps: 3,
        currentStep: currentStep
      }), client.h(Carrousel, {
        currentStep: currentStep,
        screens: [ForgotEmail, ForgotPassword, ForgotToken]
      }), client.h(Navigation, {
        currentPage: 'forgot',
        onClickLeft: onClickLeft,
        onClickRight: onClickRight,
        leftEnabled: leftEnabled,
        rightEnabled: rightEnabled,
        text: alertText || checkText,
        color: alertText ? client.lib.Colors.RED_WARNING : ''
      }), client.h(Tabs, null));
    }
  });
};

exports.default = _default;
},{}],"ui/pages/<SignIn>/<>/Email.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(client, id) {
  var Input = client.ui.components.Input;
  return client.hoc({
    id: id,
    state: function state(props, store) {
      return {
        language: store.get('language'),
        email: store.get('signin.email')
      };
    },
    actions: function actions(props, store) {
      return {
        onInput: function onInput(e) {
          var email = e.target.value;
          store.set({
            'signin.email': email,
            'forgot.email': email
          });
        },
        onClickRight: function onClickRight() {
          var _client$lib$SigninCon = client.lib.SigninControl(store),
              state = _client$lib$SigninCon.state,
              actions = _client$lib$SigninCon.actions;

          var enabled = state.rightEnabled;
          if (enabled) actions.onClickRight();
        }
      };
    },
    styles: {
      wrapper: "\n        display: flex;\n        flex-flow: column;\n        height: 100%;\n        justify-content: space-around;\n      ",
      title: "\n        font-size: 28px;\n        padding: 20px 20px 10px 20px;\n      ",
      subtitle: "\n        font-size: 24px;\n        padding: 10px 20px 20px 20px;\n      "
    },
    render: function render(_ref) {
      var state = _ref.state,
          styles = _ref.styles,
          actions = _ref.actions;
      var language = state.language,
          email = state.email;
      return client.h("div", {
        style: styles.wrapper
      }, client.h("div", null, client.h("div", {
        style: styles.title
      }, _index.default.get({
        en: 'Welcome back!',
        es: '¡Bienvenid@ de nuevo!'
      }, language)), client.h("div", {
        style: styles.subtitle
      }, _index.default.get({
        en: 'Enter your email',
        es: 'Ingresa tu email'
      }, language))), client.h(Input, {
        label: "email",
        type: "text",
        placeholder: _index.default.get({
          en: 'Your email',
          es: 'Tu email'
        }, language, 'ddd'),
        value: email,
        onInput: actions.onInput,
        onClickRight: actions.onClickRight
      }));
    }
  });
};
/*          <Input {...{            label: 'email',            type: 'text',            placeholder: _.get({ en: 'Your email', es: 'Tu email' }, language),            value: email,            onInput: actions.onInput,            onClickRight: actions.onClickRight,          }}/>*/


exports.default = _default;
},{"../../../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"ui/pages/<SignIn>/<>/Password.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(client, id) {
  var Input = client.ui.components.Input;
  var PasswordOptions = client.ui.fragments.PasswordOptions;
  return client.hoc({
    id: id,
    state: function state(props, store) {
      return {
        language: store.get('language'),
        name: store.get('signin.name').split(' ')[0],
        password: store.get('signin.password'),
        isPasswordVisible: store.get('signin.password.isVisible')
      };
    },
    actions: function actions(props, store) {
      return {
        onInput: function onInput(e) {
          store.set({
            'signin.password': e.target.value
          });
        },
        onClickRight: function onClickRight() {
          var _client$lib$SigninCon = client.lib.SigninControl(store),
              state = _client$lib$SigninCon.state,
              actions = _client$lib$SigninCon.actions;

          var enabled = state.rightEnabled;
          if (enabled) actions.onClickRight();
        }
      };
    },
    styles: {
      wrapper: "\n        display: flex;\n        flex-flow: column;\n        height: 100%;\n        justify-content: space-around;\n      ",
      title: "\n        font-size: 28px;\n        padding: 20px 20px 10px 20px;\n      ",
      subtitle: "\n        font-size: 24px;\n        padding: 10px 20px 20px 20px;\n      ",
      'input-wrapper': "\n        display: flex;\n        flex-flow: column;\n      "
    },
    render: function render(_ref) {
      var state = _ref.state,
          styles = _ref.styles,
          actions = _ref.actions;
      var language = state.language,
          name = state.name,
          password = state.password,
          isPasswordVisible = state.isPasswordVisible;
      return client.h("div", {
        style: styles.wrapper
      }, client.h("div", null, client.h("div", {
        style: styles.title
      }, _index.default.get({
        en: "Hello ".concat(name, "!"),
        es: "\xA1Hola ".concat(name, "!")
      }, language)), client.h("div", {
        style: styles.subtitle
      }, _index.default.get({
        en: 'Enter your password',
        es: 'Ingresa tu contraseña'
      }, language))), client.h("div", {
        style: styles['input-wrapper']
      }, client.h(Input, {
        label: 'password',
        type: isPasswordVisible ? 'text' : 'password',
        placeholder: '********',
        value: password,
        onInput: actions.onInput,
        onClickRight: actions.onClickRight
      }), client.h(PasswordOptions, {
        forgot: true,
        page: 'signin'
      })));
    }
  });
};

exports.default = _default;
},{"../../../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"ui/pages/<SignIn>/SignIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(client, id) {
  var _client$ui$components = client.ui.components,
      Carrousel = _client$ui$components.Carrousel,
      Navigation = _client$ui$components.Navigation;
  var _client$ui$fragments = client.ui.fragments,
      Header = _client$ui$fragments.Header,
      Tabs = _client$ui$fragments.Tabs;
  var _client$ui$pages = client.ui.pages,
      SignInEmail = _client$ui$pages.SignInEmail,
      SignInPassword = _client$ui$pages.SignInPassword;
  return client.hoc({
    id: id,
    state: function state(props, store) {
      return client.lib.SigninControl(store).state;
    },
    actions: function actions(props, store) {
      return client.lib.SigninControl(store).actions;
    },
    classes: {
      container: "\n        display: flex;\n        flex-flow: column;\n        justify-content: space-around;\n        height: 100%;\n        position: relative;\n      "
    },
    render: function render(_ref) {
      var state = _ref.state,
          actions = _ref.actions,
          classes = _ref.classes;
      var currentStep = state.currentStep,
          leftEnabled = state.leftEnabled,
          rightEnabled = state.rightEnabled,
          checkText = state.checkText,
          alertText = state.alertText;
      var onClickLeft = actions.onClickLeft,
          onClickRight = actions.onClickRight;
      return client.h("div", {
        id: "sign-in",
        "class": classes.container
      }, client.h(Header, {
        numSteps: 2,
        currentStep: currentStep
      }), client.h(Carrousel, {
        currentStep: currentStep,
        screens: [SignInEmail, SignInPassword]
      }), client.h(Navigation, {
        currentPage: 'signin',
        onClickLeft: onClickLeft,
        onClickRight: onClickRight,
        leftEnabled: leftEnabled,
        rightEnabled: rightEnabled,
        text: alertText || checkText,
        color: alertText ? client.lib.Colors.RED_WARNING : ''
      }), client.h(Tabs, null));
    }
  });
};

exports.default = _default;
},{}],"ui/pages/<SignUp>/<>/Email.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(client, id) {
  var Input = client.ui.components.Input;
  return client.hoc({
    id: id,
    state: function state(props, store) {
      return {
        language: store.get('language'),
        name: store.get('signup.name').split(' ')[0],
        email: store.get('signup.email')
      };
    },
    actions: function actions(props, store) {
      return {
        onInput: function onInput(e) {
          store.set({
            'signup.email': e.target.value
          });
        },
        onClickRight: function onClickRight() {
          var _client$lib$SignupCon = client.lib.SignupControl(store),
              state = _client$lib$SignupCon.state,
              actions = _client$lib$SignupCon.actions;

          var enabled = state.rightEnabled;
          if (enabled) actions.onClickRight();
        }
      };
    },
    styles: {
      wrapper: "\n        display: flex;\n        flex-flow: column;\n        height: 100%;\n        justify-content: space-around;\n      ",
      title: "\n        font-size: 28px;\n        padding: 20px 20px 10px 20px;\n      ",
      subtitle: "\n        font-size: 24px;\n        padding: 10px 20px 20px 20px;\n      "
    },
    render: function render(_ref) {
      var state = _ref.state,
          styles = _ref.styles,
          actions = _ref.actions;
      var language = state.language,
          name = state.name,
          email = state.email;
      return client.h("div", {
        style: styles.wrapper
      }, client.h("div", null, client.h("div", {
        style: styles.title
      }, _index.default.get({
        en: "Hello ".concat(name, "!"),
        es: "\xA1Hola ".concat(name, "!")
      }, language)), client.h("div", {
        style: styles.subtitle
      }, _index.default.get({
        en: 'What email do you want to use?',
        es: '¿Qué email deseas usar?'
      }, language))), client.h(Input, {
        label: 'email',
        type: 'text',
        placeholder: _index.default.get({
          en: 'Your email',
          es: 'Tu email'
        }, language),
        value: email,
        onInput: actions.onInput,
        onClickRight: actions.onClickRight
      }));
    }
  });
};

exports.default = _default;
},{"../../../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"ui/pages/<SignUp>/<>/Name.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(client, id) {
  var Input = client.ui.components.Input;
  return client.hoc({
    id: id,
    state: function state(props, store) {
      return {
        language: store.get('language'),
        name: store.get('signup.name')
      };
    },
    actions: function actions(props, store) {
      return {
        onInput: function onInput(e) {
          store.set({
            'signup.name': e.target.value
          });
        },
        onClickRight: function onClickRight() {
          var _client$lib$SignupCon = client.lib.SignupControl(store),
              state = _client$lib$SignupCon.state,
              actions = _client$lib$SignupCon.actions;

          var enabled = state.rightEnabled;
          if (enabled) actions.onClickRight();
        }
      };
    },
    styles: {
      wrapper: "\n        display: flex;\n        flex-flow: column;\n        height: 100%;\n        justify-content: space-around;\n      ",
      title: "\n        font-size: 28px;\n        padding: 20px 20px 10px 20px;\n      ",
      subtitle: "\n        font-size: 24px;\n        padding: 10px 20px 20px 20px;\n      "
    },
    render: function render(_ref) {
      var state = _ref.state,
          styles = _ref.styles,
          actions = _ref.actions;
      var language = state.language,
          name = state.name;
      console.log("language, name", language, name);
      return client.h("div", {
        style: styles.wrapper
      }, client.h("div", null, client.h("div", {
        style: styles.title
      }, _index.default.get({
        en: 'Welcome!',
        es: '¡Bienvenid@!'
      }, language)), client.h("div", {
        style: styles.subtitle
      }, _index.default.get({
        en: 'What\'s your name?',
        es: '¿Cuál es tu nombre?'
      }, language))), client.h(Input, {
        label: 'name',
        type: 'text',
        placeholder: _index.default.get({
          en: 'Your name',
          es: 'Tu nombre'
        }, language),
        value: name,
        onInput: actions.onInput,
        onClickRight: actions.onClickRight
      }));
    }
  });
};

exports.default = _default;
},{"../../../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"ui/pages/<SignUp>/<>/Password.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(client, id) {
  var Input = client.ui.components.Input;
  var PasswordOptions = client.ui.fragments.PasswordOptions;
  return client.hoc({
    id: id,
    state: function state(props, store) {
      return {
        language: store.get('language'),
        password: store.get('signup.password'),
        isPasswordVisible: store.get('signup.password.isVisible')
      };
    },
    actions: function actions(props, store) {
      return {
        onInput: function onInput(e) {
          store.set({
            'signup.password': e.target.value
          });
        },
        onClickRight: function onClickRight() {
          var _client$lib$SignupCon = client.lib.SignupControl(store),
              state = _client$lib$SignupCon.state,
              actions = _client$lib$SignupCon.actions;

          var enabled = state.rightEnabled;
          if (enabled) actions.onClickRight();
        }
      };
    },
    styles: {
      wrapper: "\n        display: flex;\n        flex-flow: column;\n        height: 100%;\n        justify-content: space-around;\n      ",
      title: "\n        font-size: 28px;\n        padding: 20px 20px 10px 20px;\n      ",
      subtitle: "\n        font-size: 24px;\n        padding: 10px 20px 20px 20px;\n      ",
      'input-wrapper': "\n        display: flex;\n        flex-flow: column;\n      "
    },
    render: function render(_ref) {
      var state = _ref.state,
          styles = _ref.styles,
          actions = _ref.actions;
      var language = state.language,
          isPasswordVisible = state.isPasswordVisible,
          password = state.password;
      return client.h("div", {
        style: styles.wrapper
      }, client.h("div", null, client.h("div", {
        style: styles.title
      }, _index.default.get({
        en: 'Perfect, now:',
        es: 'Perfecto, ahora:'
      }, language)), client.h("div", {
        style: styles.subtitle
      }, _index.default.get({
        en: 'Choose a password',
        es: 'Elige una contraseña'
      }, language))), client.h("div", {
        style: styles['input-wrapper']
      }, client.h(Input, {
        label: 'password',
        type: isPasswordVisible ? 'text' : 'password',
        placeholder: '********',
        value: password,
        onInput: actions.onInput,
        onClickRight: actions.onClickRight
      }), client.h(PasswordOptions, {
        page: "signup"
      })));
    }
  });
};

exports.default = _default;
},{"../../../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"ui/pages/<SignUp>/<>/Token.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(client, id) {
  var _client$ui$components = client.ui.components,
      Token = _client$ui$components.Token,
      NumKeyboard = _client$ui$components.NumKeyboard;
  return client.hoc({
    id: id,
    state: function state(props, store) {
      return {
        language: store.get('language'),
        tokenDigits: store.get('signup.tokenDigits')
      };
    },
    actions: function actions(props, store) {
      return {
        onPressNum: function onPressNum(digit) {
          if (store.get('signup.tokenDigits').length < 6) {
            store.set({
              'signup.tokenDigits': function signupTokenDigits(value) {
                return value.concat(String(digit));
              }
            });
          }
        },
        onPressDel: function onPressDel() {
          if (store.get('signup.tokenDigits').length > 0) {
            store.set({
              'signup.tokenDigits': function signupTokenDigits(value) {
                return value.slice(0, -1);
              }
            });
          }
        }
      };
    },
    styles: {
      wrapper: "\n        display: flex;\n        flex-flow: column;\n        height: 100%;\n        justify-content: space-around;\n      ",
      title: "\n        font-size: 28px;\n        padding: 20px 20px 10px 20px;\n      ",
      subtitle: "\n        font-size: 24px;\n        padding: 10px 20px 20px 20px;\n      "
    },
    render: function render(_ref) {
      var state = _ref.state,
          styles = _ref.styles,
          actions = _ref.actions;
      var language = state.language,
          tokenDigits = state.tokenDigits;
      var onPressNum = actions.onPressNum,
          onPressDel = actions.onPressDel;
      return client.h("div", {
        style: styles.wrapper
      }, client.h("div", null, client.h("div", {
        style: styles.title
      }, _index.default.get({
        en: 'Excelent! Last step:',
        es: '¡Excelente! Último paso:'
      }, language)), client.h("div", {
        style: styles.subtitle
      }, _index.default.get({
        en: 'Enter the code received by email',
        es: 'Ingresa el código recibido por email'
      }, language))), client.h(Token, {
        tokenDigits: tokenDigits
      }), client.h(NumKeyboard, {
        onPressNum: onPressNum,
        onPressDel: onPressDel
      }));
    }
  });
};

exports.default = _default;
},{"../../../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"ui/pages/<SignUp>/SignUp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(client, id) {
  var _client$ui$components = client.ui.components,
      Navigation = _client$ui$components.Navigation,
      Carrousel = _client$ui$components.Carrousel;
  var _client$ui$fragments = client.ui.fragments,
      Header = _client$ui$fragments.Header,
      Tabs = _client$ui$fragments.Tabs;
  var _client$ui$pages = client.ui.pages,
      SignUpName = _client$ui$pages.SignUpName,
      SignUpEmail = _client$ui$pages.SignUpEmail,
      SignUpPassword = _client$ui$pages.SignUpPassword,
      SignUpToken = _client$ui$pages.SignUpToken;
  return client.hoc({
    id: id,
    state: function state(props, store) {
      return client.lib.SignupControl(store).state;
    },
    actions: function actions(props, store) {
      return client.lib.SignupControl(store).actions;
    },
    classes: {
      container: "\n        display: flex;\n        flex-flow: column;\n        justify-content: space-around;\n        height: 100%;\n        position: relative;\n      "
    },
    render: function render(_ref) {
      var state = _ref.state,
          actions = _ref.actions,
          classes = _ref.classes;
      var currentStep = state.currentStep,
          leftEnabled = state.leftEnabled,
          rightEnabled = state.rightEnabled,
          checkText = state.checkText,
          alertText = state.alertText;
      var onClickLeft = actions.onClickLeft,
          onClickRight = actions.onClickRight;
      return client.h("div", {
        id: "sign-up",
        className: classes.container
      }, client.h(Header, {
        numSteps: 4,
        currentStep: currentStep
      }), client.h(Carrousel, {
        currentStep: currentStep,
        screens: [SignUpName, SignUpEmail, SignUpPassword, SignUpToken]
      }), client.h(Navigation, {
        currentPage: 'signup',
        onClickLeft: onClickLeft,
        onClickRight: onClickRight,
        leftEnabled: leftEnabled,
        rightEnabled: rightEnabled,
        text: alertText || checkText,
        color: alertText ? client.lib.Colors.RED_WARNING : ''
      }), client.h(Tabs, null));
    }
  });
};

exports.default = _default;
},{}],"ui/pages/<Welcome>/Welcome.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../../../../../libs/belt/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(client, id) {
  var Button = client.ui.components.Button;
  var Header = client.ui.fragments.Header;
  return client.hoc({
    id: id,
    state: function state(props, store) {
      return {
        language: store.get('language'),
        user_id: store.get('user_id')
      };
    },
    styles: {
      wrapper: "\n        display: flex;\n        flex-flow: column;\n        height: 100%;\n        justify-content: space-between;\n        align-items: center;\n        padding-bottom: 20%;\n      ",
      title: "\n        font-size: 28px;\n        padding: 20px 20px 10px 20px;\n      ",
      subtitle: "\n        font-size: 22px;\n        padding: 10px 20px 20px 20px;\n        color: hsl(0, 0%, 35%);\n      ",
      button: "\n        padding: 60px;\n        width: 100%;\n        font-size: 20px;\n      "
    },
    render: function render(_ref) {
      var state = _ref.state,
          styles = _ref.styles;
      var language = state.language,
          user_id = state.user_id;
      return client.h("div", {
        id: "welcome",
        style: styles.wrapper
      }, client.h(Header, null), client.h("main", {
        style: styles.title
      }, _index.default.get({
        en: 'Welcome!',
        es: '¡Bienvenid@!'
      }, language)), client.h("div", {
        style: styles.subtitle
      }, _index.default.get({
        en: 'You successfully registered your account',
        es: 'Has registrado exitosamente tu cuenta'
      }, language)), client.h("div", {
        style: styles.button
      }, client.h(Button, {
        text: _index.default.get({
          en: 'Open the app',
          es: 'Abrir la app'
        }, language),
        color: 'white',
        bgColor: client.lib.Colors.GREEN_WELCOME,
        height: 44,
        href: "/app?user=".concat(user_id)
      })));
    }
  });
};

exports.default = _default;
},{"../../../../../../../../libs/belt/src/index.js":"../../../../../libs/belt/src/index.js"}],"ui/pages/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ForgotEmail", {
  enumerable: true,
  get: function () {
    return _Email.default;
  }
});
Object.defineProperty(exports, "ForgotPassword", {
  enumerable: true,
  get: function () {
    return _Password.default;
  }
});
Object.defineProperty(exports, "ForgotToken", {
  enumerable: true,
  get: function () {
    return _Token.default;
  }
});
Object.defineProperty(exports, "Forgot", {
  enumerable: true,
  get: function () {
    return _Forgot.default;
  }
});
Object.defineProperty(exports, "SignInEmail", {
  enumerable: true,
  get: function () {
    return _Email2.default;
  }
});
Object.defineProperty(exports, "SignInPassword", {
  enumerable: true,
  get: function () {
    return _Password2.default;
  }
});
Object.defineProperty(exports, "SignIn", {
  enumerable: true,
  get: function () {
    return _SignIn.default;
  }
});
Object.defineProperty(exports, "SignUpEmail", {
  enumerable: true,
  get: function () {
    return _Email3.default;
  }
});
Object.defineProperty(exports, "SignUpName", {
  enumerable: true,
  get: function () {
    return _Name.default;
  }
});
Object.defineProperty(exports, "SignUpPassword", {
  enumerable: true,
  get: function () {
    return _Password3.default;
  }
});
Object.defineProperty(exports, "SignUpToken", {
  enumerable: true,
  get: function () {
    return _Token2.default;
  }
});
Object.defineProperty(exports, "SignUp", {
  enumerable: true,
  get: function () {
    return _SignUp.default;
  }
});
Object.defineProperty(exports, "Welcome", {
  enumerable: true,
  get: function () {
    return _Welcome.default;
  }
});

var _Email = _interopRequireDefault(require("./<Forgot>/<>/Email"));

var _Password = _interopRequireDefault(require("./<Forgot>/<>/Password"));

var _Token = _interopRequireDefault(require("./<Forgot>/<>/Token"));

var _Forgot = _interopRequireDefault(require("./<Forgot>/Forgot"));

var _Email2 = _interopRequireDefault(require("./<SignIn>/<>/Email"));

var _Password2 = _interopRequireDefault(require("./<SignIn>/<>/Password"));

var _SignIn = _interopRequireDefault(require("./<SignIn>/SignIn"));

var _Email3 = _interopRequireDefault(require("./<SignUp>/<>/Email"));

var _Name = _interopRequireDefault(require("./<SignUp>/<>/Name"));

var _Password3 = _interopRequireDefault(require("./<SignUp>/<>/Password"));

var _Token2 = _interopRequireDefault(require("./<SignUp>/<>/Token"));

var _SignUp = _interopRequireDefault(require("./<SignUp>/SignUp"));

var _Welcome = _interopRequireDefault(require("./<Welcome>/Welcome"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./<Forgot>/<>/Email":"ui/pages/<Forgot>/<>/Email.js","./<Forgot>/<>/Password":"ui/pages/<Forgot>/<>/Password.js","./<Forgot>/<>/Token":"ui/pages/<Forgot>/<>/Token.js","./<Forgot>/Forgot":"ui/pages/<Forgot>/Forgot.js","./<SignIn>/<>/Email":"ui/pages/<SignIn>/<>/Email.js","./<SignIn>/<>/Password":"ui/pages/<SignIn>/<>/Password.js","./<SignIn>/SignIn":"ui/pages/<SignIn>/SignIn.js","./<SignUp>/<>/Email":"ui/pages/<SignUp>/<>/Email.js","./<SignUp>/<>/Name":"ui/pages/<SignUp>/<>/Name.js","./<SignUp>/<>/Password":"ui/pages/<SignUp>/<>/Password.js","./<SignUp>/<>/Token":"ui/pages/<SignUp>/<>/Token.js","./<SignUp>/SignUp":"ui/pages/<SignUp>/SignUp.js","./<Welcome>/Welcome":"ui/pages/<Welcome>/Welcome.js"}],"ui/Root.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(client) {
  var Modal = client.ui.components.Modal;
  var _client$ui$pages = client.ui.pages,
      SignIn = _client$ui$pages.SignIn,
      SignUp = _client$ui$pages.SignUp,
      Welcome = _client$ui$pages.Welcome,
      Forgot = _client$ui$pages.Forgot;
  return client.hoc({
    id: 1000,
    state: function state(props, store) {
      return {
        currentPage: store.get('currentPage') || props.currentPage
      };
    },
    render: function render(_ref) {
      var state = _ref.state;
      var currentPage = state.currentPage;
      return client.h("div", {
        id: "root"
      }, client.h(Modal, {
        currentPage: currentPage,
        pages: {
          signin: SignIn,
          signup: SignUp,
          welcome: Welcome,
          forgot: Forgot
        }
      }));
    }
  });
};

exports.default = _default;
},{}],"../config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = _interopRequireDefault(require("./client/store"));

var lib = _interopRequireWildcard(require("./client/lib"));

var components = _interopRequireWildcard(require("./client/ui/components"));

var fragments = _interopRequireWildcard(require("./client/ui/fragments"));

var pages = _interopRequireWildcard(require("./client/ui/pages"));

var _Root = _interopRequireDefault(require("./client/ui/Root"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  client: {
    store: _store.default,
    lib: lib,
    rootComponent: _Root.default,
    components: components,
    fragments: fragments,
    pages: pages,
    rootNodeId: 'root'
  },
  env: {
    development: {
      httpPort: 4101,
      socketPort: null,
      baseUrl: 'localhost',
      baseFolder: '',
      useServiceWorker: false,
      useManifest: false
    },
    production: {
      httpPort: 4101,
      socketPort: null,
      baseUrl: 'museeker.io',
      baseFolder: 'base-sign',
      useServiceWorker: true,
      useManifest: false
    }
  }
};
exports.default = _default;
},{"./client/store":"store/index.js","./client/lib":"lib/index.js","./client/ui/components":"ui/components/index.js","./client/ui/fragments":"ui/fragments/index.js","./client/ui/pages":"ui/pages/index.js","./client/ui/Root":"ui/Root.js"}],"main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("../config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = window.jmaguirrei.client;

var _default = client.init(_config.default.client);

exports.default = _default;
},{"../config.js":"../config.js"}]},{},["main.js"], null)