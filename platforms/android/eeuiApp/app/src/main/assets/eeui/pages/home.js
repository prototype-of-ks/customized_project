// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
if(typeof eeuiLog=="undefined"){var eeuiLog={_:function(t,e){var s=e.map(function(e){return e="[object object]"===Object.prototype.toString.call(e).toLowerCase()?JSON.stringify(e):e});if(typeof this.__m==='undefined'){this.__m=app.requireModule('debug')}this.__m.addLog(t,s)},debug:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("debug",e)},log:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("log",e)},info:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("info",e)},warn:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("warn",e)},error:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("error",e)}}}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/home.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/querystringify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty,
    undef;
/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */

function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}
/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */


function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}
/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */


function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g,
      result = {},
      part;

  while (part = parser.exec(query)) {
    var key = decode(part[1]),
        value = decode(part[2]); //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //

    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}
/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */


function querystringify(obj, prefix) {
  prefix = prefix || '';
  var pairs = [],
      value,
      key; //
  // Optionally prefix with a '?' if needed
  //

  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key]; //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //

      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encodeURIComponent(key);
      value = encodeURIComponent(value); //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //

      if (key === null || value === null) continue;
      pairs.push(key + '=' + value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
} //
// Expose the module.
//


exports.stringify = querystringify;
exports.parse = querystring;

/***/ }),

/***/ "./node_modules/requires-port/index.js":
/*!*********************************************!*\
  !*** ./node_modules/requires-port/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;
  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

/***/ }),

/***/ "./node_modules/url-parse/index.js":
/*!*****************************************!*\
  !*** ./node_modules/url-parse/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var required = __webpack_require__(/*! requires-port */ "./node_modules/requires-port/index.js"),
    qs = __webpack_require__(/*! querystringify */ "./node_modules/querystringify/index.js"),
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    whitespace = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
    left = new RegExp('^' + whitespace + '+');
/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */


function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}
/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */


var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
function sanitize(address) {
  // Sanitize what is left of the address
  return address.replace('\\', '/');
}, ['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];
/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */

var ignore = {
  hash: 1,
  query: 1
};
/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */

function lolcation(loc) {
  var globalVar;
  if (typeof window !== 'undefined') globalVar = window;else if (typeof global !== 'undefined') globalVar = global;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};
  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {},
      type = _typeof(loc),
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});

    for (key in ignore) {
      delete finaldestination[key];
    }
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}
/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */


function extractProtocol(address) {
  address = trimLeft(address);
  var match = protocolre.exec(address);
  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}
/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */


function resolve(relative, base) {
  if (relative === '') return base;
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');
  return path.join('/');
}
/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */


function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = _typeof(location),
      url = this,
      i = 0; //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //


  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;
  location = lolcation(location); //
  // Extract protocol information before running the instructions.
  //

  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest; //
  // When the authority component is absent the URL starts with a path
  // component.
  //

  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : ''); //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //

    if (instruction[4]) url[key] = url[key].toLowerCase();
  } //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //


  if (parser) url.query = parser(url.query); //
  // If the URL is relative, resolve the pathname against the base URL.
  //

  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  } //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //


  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  } //
  // Parse down the `auth` for the username and password.
  //


  url.username = url.password = '';

  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null'; //
  // The href is just the compiled result.
  //

  url.href = url.toString();
}
/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */


function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;
      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var _char = part === 'pathname' ? '/' : '#';

        url[part] = value.charAt(0) !== _char ? _char + value : value;
      } else {
        url[part] = value;
      }

      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];
    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';
  url.href = url.toString();
  return url;
}
/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */


function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
  var query,
      url = this,
      protocol = url.protocol;
  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;
  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
  if (url.hash) result += url.hash;
  return result;
}

Url.prototype = {
  set: set,
  toString: toString
}; //
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//

Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;
module.exports = Url;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! (webpack)/buildin/global.js */ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_webpack@4.43.0@webpack\\buildin\\global.js")))

/***/ }),

/***/ "./node_modules/weex-ui/packages/utils/index.js":
/*!******************************************************!*\
  !*** ./node_modules/weex-ui/packages/utils/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_parse__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var Utils = {
  UrlParser: url_parse__WEBPACK_IMPORTED_MODULE_0___default.a,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && _typeof2(item) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;

    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();

    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }

          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }

    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;
      return "http".concat(/^https:/.test(bundleUrl) ? 's' : '', ":").concat(url);
    }

    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new url_parse__WEBPACK_IMPORTED_MODULE_0___default.a(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },
  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;
      return /(tb|taobao|淘宝)/i.test(appName);
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;
      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;
      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;
      return (typeof window === "undefined" ? "undefined" : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;
      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X or iPhoneXS or iPhoneXR or iPhoneXS Max
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === "undefined" ? "undefined" : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && (parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812 || parseInt(window.screen.width, 10) === 414 && parseInt(window.screen.height, 10) === 896);
      }

      return Utils.env.isIOS() && (deviceHeight === 2436 || deviceHeight === 2688 || deviceHeight === 1792 || deviceHeight === 1624);
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;
      return platform.toLowerCase() === 'android';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;
      return /(tm|tmall|天猫)/i.test(appName);
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },

    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;
      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;
      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * eeuiLog.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';
    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);

    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];

      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }

    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
    var groups = [];

    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }

    return groups;
  },

  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;

    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();

      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }

      if (newLength > len) {
        break;
      }

      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }

    return newStr;
  },

  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams: function objToParams(obj) {
    var str = '';

    for (var key in obj) {
      if (str !== '') {
        str += '&';
      }

      str += key + '=' + encodeURIComponent(obj[key]);
    }

    return str;
  },

  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj: function paramsToObj(str) {
    var obj = {};

    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (e) {
      eeuiLog.log(e);
    }

    return obj;
  },
  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300,
        // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms

      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }

      return {};
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Utils);

/***/ }),

/***/ "./node_modules/weex-ui/packages/wxc-dialog/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/weex-ui/packages/wxc-dialog/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue */ "./node_modules/weex-ui/packages/wxc-dialog/index.vue");
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_vue__WEBPACK_IMPORTED_MODULE_0___default.a; });


/***/ }),

/***/ "./node_modules/weex-ui/packages/wxc-dialog/index.vue":
/*!************************************************************!*\
  !*** ./node_modules/weex-ui/packages/wxc-dialog/index.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-072b1898!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-072b1898!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/weex-ui/packages/wxc-dialog/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/weex-ui/packages/wxc-dialog/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-072b1898!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-072b1898!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/weex-ui/packages/wxc-dialog/index.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\Project\\jhhx\\jhhx\\node_modules\\weex-ui\\packages\\wxc-dialog\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-072b1898"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./node_modules/weex-ui/packages/wxc-dialog/type.js":
/*!**********************************************************!*\
  !*** ./node_modules/weex-ui/packages/wxc-dialog/type.js ***!
  \**********************************************************/
/*! exports provided: CHECKED, UN_CHECKED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKED", function() { return CHECKED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UN_CHECKED", function() { return UN_CHECKED; });
var CHECKED = 'https://gw.alicdn.com/tfs/TB1UT3VpgMPMeJjy1XdXXasrXXa-42-42.png';
var UN_CHECKED = 'https://gw.alicdn.com/tfs/TB1hE3VpgMPMeJjy1XdXXasrXXa-42-42.png';

/***/ }),

/***/ "./node_modules/weex-ui/packages/wxc-overlay/index.js":
/*!************************************************************!*\
  !*** ./node_modules/weex-ui/packages/wxc-overlay/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue */ "./node_modules/weex-ui/packages/wxc-overlay/index.vue");
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_vue__WEBPACK_IMPORTED_MODULE_0___default.a; });


/***/ }),

/***/ "./node_modules/weex-ui/packages/wxc-overlay/index.vue":
/*!*************************************************************!*\
  !*** ./node_modules/weex-ui/packages/wxc-overlay/index.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-5dc5d348!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-5dc5d348!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/weex-ui/packages/wxc-overlay/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/weex-ui/packages/wxc-overlay/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-5dc5d348!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-5dc5d348!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/weex-ui/packages/wxc-overlay/index.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\Project\\jhhx\\jhhx\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5dc5d348"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./src/API/index.js":
/*!**************************!*\
  !*** ./src/API/index.js ***!
  \**************************/
/*! exports provided: encryption, openPage, openScaner, pic, ajax, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encryption", function() { return encryption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPage", function() { return openPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openScaner", function() { return openScaner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pic", function() { return pic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return ajax; });
/* harmony import */ var _jsencrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsencrypt */ "./src/API/jsencrypt.js");

var eeui = app.requireModule('eeui');
var picture = app.requireModule('eeuiPicture');
var TEST_URL = 'https://testwl.jiahua.com/scm';
var CLIENT_ID = null;
/**
 * 
 * @param {公钥} publicKey 
 * @param {加密数据} data 
 */

var encryption = function encryption(publicKey, data) {
  var rsa = new _jsencrypt__WEBPACK_IMPORTED_MODULE_0__["default"].RSAKey();
  rsa.setPublic(publicKey.modulus, publicKey.exponent);
  return rsa.encrypt_b64(JSON.stringify(data));
};
/**
 * 
 * @param {私钥} privateKey 
 * @param {解密数据} data 
 */
// export const decryption = (privateKey, data) => {
//     let encrypt = new JsEncrypt();
//     encrypt.setPrivateKey(privateKey);
//     return encrypt.decrypt(data);
// }
// let publicKey = {
//     exponent: "010001",
//     modulus: "00bcfa1e5800ce69cf076d7d1ed7f82e8abda8c6cc4a768aceed4e72f8de1748f3e61e922716943e2c540b33e026af505e7ad55e5ac8d8c65549d6fbedb9e0383e61ef0ea25da2f5c91694b641835bd0846b9e629419d78964bf140ccbd6ac38f3c3df8fe5b2c0ccc1052c666ff52f119f5df16e7acd2efc4b61e827e262c6603f"
// }
// let loginInfo = {
//     user: 'ksheen',
//     password: 'ks1234567'
// }
// eeuiLog.log(encryption(publicKey, loginInfo));

var openPage = function openPage(url) {
  eeui.openPage({
    url: url,
    pageType: 'app',
    animated: true,
    animatedType: 'push'
  });
};
var openScaner = function openScaner(params, callback) {
  eeui.openScaner(params, callback);
};
var pic = function pic(params, callback) {
  picture.create(Object.assign({
    type: 'camera'
  }, params), callback);
};
var ajax = function ajax(configs) {
  eeui.ajax(Object.assign({
    timeout: 5000
  }, configs), function (res) {
    if (res.status == 'success') {
      eeuiLog.log(configs.success);
      configs.success(res);
    } else if (res.status == 'error') {
      configs.error(res);
    }
  });
};
var obj = {
  contentType: "application/x-www-form-urlencoded;charset=UTF-8",
  data: {
    isWeb: true,
    isYES2: true,
    mode: 1,
    service: "GetPublicKey"
  },
  dataType: "json",
  headers: {
    appKey: "Global"
  },
  timeout: 0,
  type: "post",
  url: "https://testwl.jiahua.com/scm/servlet/GetPublicKey/do/global"
};
var SVR = {
  getNormalizedUri: function getNormalizedUri(params, url, form) {
    var _formKey,
        _projectKey = 'global'; // if(form){
    //     _formKey = form.getFormKey();
    //     _projectKey = form.getProjectKey();
    // }
    // if(form){
    //     if(!form.getAppEnv()){
    //         eeuiLog.log("...................appEnv is null..............");
    //     }
    // }


    var service = params['service'];
    var cmd = params['cmd'] || 'do';
    var projectKey = _projectKey || 'global';
    var key = params['itemKey'] || params['dataObjectKey'] || params['formKey'] || _formKey || ''; // if(!url){
    //     url = Svr.SvrMgr.ServletURL;
    // }

    if (service) {
      url = url + '/' + service + '/' + cmd + '/' + projectKey;
      url = key ? url + '/' + key : url;
      return url;
    }

    eeuiLog.log(url);
    return url;
  },
  transData: function transData(data) {
    if (data == null) {
      return data;
    }

    data.mode = 1;
    data.isYES2 = true; // let json = JSON.stringify(data);
    //传送数据 长度 大于 20000 开启压缩   20000长度的数据传输在30K 左右

    return data;
  },
  getPublicKey: function getPublicKey() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      isWeb: true,
      service: 'GetPublicKey'
    };
    var postData = this.transData(params),
        url = this.getNormalizedUri(params, TEST_URL + '/servlet');
    eeuiLog.log(url);
    return new Promise(function (resolve, reject) {
      ajax({
        url: url,
        method: 'POST',
        data: postData,
        dataType: 'json',
        timeout: 5000,
        success: function success(res) {
          resolve(res);
        },
        error: function error(res) {
          eeuiLog.error(res);
          reject(res);
        }
      });
    });
  },
  doLogin: function doLogin(username, password) {
    var _this = this;

    var sessionPara = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var validateCode = arguments.length > 3 ? arguments[3] : undefined;
    var tmpClientId = arguments.length > 4 ? arguments[4] : undefined;
    this.getPublicKey().then(function (publicKey) {
      eeuiLog.log(publicKey);
      var loginInfo = {};
      loginInfo.user = username;
      loginInfo.password = password;
      loginInfo.validatecode = validateCode;
      var data = encryption(publicKey, loginInfo);
      var opts = {
        url: TEST_URL + '/servlet',
        logininfo: data,
        tmpclientid: tmpClientId,
        paras: JSON.stringify(sessionPara),
        cmd: 'Login',
        service: 'Authenticate',
        timezone: 'Asia/Shanghai'
      };

      _this.getData(opts.url, opts);
    });
  },
  getData: function getData(url, params, sucCallback, errorCallback) {
    params.mode = 1;
    var returnObj = null,
        postData = this.transData(params);
    url = this.getNormalizedUri(params, url); // return

    return ajax({
      url: url,
      dataType: 'json',
      data: postData,
      // headers: { appKey: 'Global' },
      method: 'POST',
      success: function success(res) {
        eeuiLog.log(res.result.data.clietId);
        return res;
      },
      error: function error(res) {
        eeuiLog.log(res);
      }
    });
  }
};
SVR.doLogin('fy', '', {}, undefined, CLIENT_ID);
/* harmony default export */ __webpack_exports__["default"] = ({
  openPage: openPage,
  openScaner: openScaner,
  pic: pic,
  encryption: encryption
});

/***/ }),

/***/ "./src/API/jsencrypt.js":
/*!******************************!*\
  !*** ./src/API/jsencrypt.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 *create by 2012-08-25 pm 17:48
 *@author hexinglun@gmail.com
 *BASE64 Encode and Decode By UTF-8 unicode
 *可以和java的BASE64编码和解码互相转化
 */
var BASE64;
var modificationNavigator = {
  appName: 'Netscape',
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
};
var modificationWindow = {
  ASN1: null,
  BASE64: null,
  Hex: null,
  crypto: null,
  href: null
};

(function () {
  var BASE64_MAPPING = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];
  /**
   *ascii convert to binary
   */

  var _toBinary = function _toBinary(ascii) {
    var binary = new Array();

    while (ascii > 0) {
      var b = ascii % 2;
      ascii = Math.floor(ascii / 2);
      binary.push(b);
    }
    /*
    var len = binary.length;
    if(6-len > 0){
    	for(var i = 6-len ; i > 0 ; --i){
    		binary.push(0);
    	}
    }*/


    binary.reverse();
    return binary;
  };
  /**
   *binary convert to decimal
   */


  var _toDecimal = function _toDecimal(binary) {
    var dec = 0;
    var p = 0;

    for (var i = binary.length - 1; i >= 0; --i) {
      var b = binary[i];

      if (b == 1) {
        dec += Math.pow(2, p);
      }

      ++p;
    }

    return dec;
  };
  /**
   *unicode convert to utf-8
   */


  var _toUTF8Binary = function _toUTF8Binary(c, binaryArray) {
    var mustLen = 8 - (c + 1) + (c - 1) * 6;
    var fatLen = binaryArray.length;
    var diff = mustLen - fatLen;

    while (--diff >= 0) {
      binaryArray.unshift(0);
    }

    var binary = [];
    var _c = c;

    while (--_c >= 0) {
      binary.push(1);
    }

    binary.push(0);
    var i = 0,
        len = 8 - (c + 1);

    for (; i < len; ++i) {
      binary.push(binaryArray[i]);
    }

    for (var j = 0; j < c - 1; ++j) {
      binary.push(1);
      binary.push(0);
      var sum = 6;

      while (--sum >= 0) {
        binary.push(binaryArray[i++]);
      }
    }

    return binary;
  };

  var __BASE64 = {
    /**
     *BASE64 Encode
     */
    encoder: function encoder(str) {
      var base64_Index = [];
      var binaryArray = [];

      for (var i = 0, len = str.length; i < len; ++i) {
        var unicode = str.charCodeAt(i);

        var _tmpBinary = _toBinary(unicode);

        if (unicode < 0x80) {
          var _tmpdiff = 8 - _tmpBinary.length;

          while (--_tmpdiff >= 0) {
            _tmpBinary.unshift(0);
          }

          binaryArray = binaryArray.concat(_tmpBinary);
        } else if (unicode >= 0x80 && unicode <= 0x7FF) {
          binaryArray = binaryArray.concat(_toUTF8Binary(2, _tmpBinary));
        } else if (unicode >= 0x800 && unicode <= 0xFFFF) {
          //UTF-8 3byte
          binaryArray = binaryArray.concat(_toUTF8Binary(3, _tmpBinary));
        } else if (unicode >= 0x10000 && unicode <= 0x1FFFFF) {
          //UTF-8 4byte
          binaryArray = binaryArray.concat(_toUTF8Binary(4, _tmpBinary));
        } else if (unicode >= 0x200000 && unicode <= 0x3FFFFFF) {
          //UTF-8 5byte
          binaryArray = binaryArray.concat(_toUTF8Binary(5, _tmpBinary));
        } else if (unicode >= 4000000 && unicode <= 0x7FFFFFFF) {
          //UTF-8 6byte
          binaryArray = binaryArray.concat(_toUTF8Binary(6, _tmpBinary));
        }
      }

      var extra_Zero_Count = 0;

      for (var i = 0, len = binaryArray.length; i < len; i += 6) {
        var diff = i + 6 - len;

        if (diff == 2) {
          extra_Zero_Count = 2;
        } else if (diff == 4) {
          extra_Zero_Count = 4;
        } //if(extra_Zero_Count > 0){
        //	len += extra_Zero_Count+1;
        //}


        var _tmpExtra_Zero_Count = extra_Zero_Count;

        while (--_tmpExtra_Zero_Count >= 0) {
          binaryArray.push(0);
        }

        base64_Index.push(_toDecimal(binaryArray.slice(i, i + 6)));
      }

      var base64 = '';

      for (var i = 0, len = base64_Index.length; i < len; ++i) {
        base64 += BASE64_MAPPING[base64_Index[i]];
      }

      for (var i = 0, len = extra_Zero_Count / 2; i < len; ++i) {
        base64 += '=';
      }

      return base64;
    },

    /**
     *BASE64  Decode for UTF-8 
     */
    decoder: function decoder(_base64Str) {
      var _len = _base64Str.length;
      var extra_Zero_Count = 0;
      /**
       *计算在进行BASE64编码的时候，补了几个0
       */

      if (_base64Str.charAt(_len - 1) == '=') {
        //alert(_base64Str.charAt(_len-1));
        //alert(_base64Str.charAt(_len-2));
        if (_base64Str.charAt(_len - 2) == '=') {
          //两个等号说明补了4个0
          extra_Zero_Count = 4;
          _base64Str = _base64Str.substring(0, _len - 2);
        } else {
          //一个等号说明补了2个0
          extra_Zero_Count = 2;
          _base64Str = _base64Str.substring(0, _len - 1);
        }
      }

      var binaryArray = [];

      for (var i = 0, len = _base64Str.length; i < len; ++i) {
        var c = _base64Str.charAt(i);

        for (var j = 0, size = BASE64_MAPPING.length; j < size; ++j) {
          if (c == BASE64_MAPPING[j]) {
            var _tmp = _toBinary(j);
            /*不足6位的补0*/


            var _tmpLen = _tmp.length;

            if (6 - _tmpLen > 0) {
              for (var k = 6 - _tmpLen; k > 0; --k) {
                _tmp.unshift(0);
              }
            }

            binaryArray = binaryArray.concat(_tmp);
            break;
          }
        }
      }

      if (extra_Zero_Count > 0) {
        binaryArray = binaryArray.slice(0, binaryArray.length - extra_Zero_Count);
      }

      var unicode = [];
      var unicodeBinary = [];

      for (var i = 0, len = binaryArray.length; i < len;) {
        if (binaryArray[i] == 0) {
          unicode = unicode.concat(_toDecimal(binaryArray.slice(i, i + 8)));
          i += 8;
        } else {
          var sum = 0;

          while (i < len) {
            if (binaryArray[i] == 1) {
              ++sum;
            } else {
              break;
            }

            ++i;
          }

          unicodeBinary = unicodeBinary.concat(binaryArray.slice(i + 1, i + 8 - sum));
          i += 8 - sum;

          while (sum > 1) {
            unicodeBinary = unicodeBinary.concat(binaryArray.slice(i + 2, i + 8));
            i += 8;
            --sum;
          }

          unicode = unicode.concat(_toDecimal(unicodeBinary));
          unicodeBinary = [];
        }
      }

      return unicode;
    }
  };
  BASE64 = __BASE64;
  modificationWindow.BASE64 = __BASE64;
})(); // Copyright (c) 2005  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.
// Basic JavaScript BN library - subset useful for RSA encryption.
// Bits per digit


var dbits;
var modificationNavigator = {
  appName: 'Netscape',
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
};
var modificationWindow = {
  ASN1: null,
  BASE64: null,
  Hex: null,
  crypto: null,
  href: null
}; // JavaScript engine analysis

var canary = 0xdeadbeefcafe;
var j_lm = (canary & 0xffffff) == 0xefcafe; // (public) Constructor

function BigInteger(a, b, c) {
  if (a != null) if ("number" == typeof a) this.fromNumber(a, b, c);else if (b == null && "string" != typeof a) this.fromString(a, 256);else this.fromString(a, b);
} // return new, unset BigInteger


function nbi() {
  return new BigInteger(null);
} // am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.
// am1: use a single mult and divide to get the high bits,
// max digit bits should be 26 because
// max internal value = 2*dvalue^2-2*dvalue (< 2^53)


function am1(i, x, w, j, c, n) {
  while (--n >= 0) {
    var v = x * this[i++] + w[j] + c;
    c = Math.floor(v / 0x4000000);
    w[j++] = v & 0x3ffffff;
  }

  return c;
} // am2 avoids a big mult-and-extract completely.
// Max digit bits should be <= 30 because we do bitwise ops
// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)


function am2(i, x, w, j, c, n) {
  var xl = x & 0x7fff,
      xh = x >> 15;

  while (--n >= 0) {
    var l = this[i] & 0x7fff;
    var h = this[i++] >> 15;
    var m = xh * l + h * xl;
    l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
    c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
    w[j++] = l & 0x3fffffff;
  }

  return c;
} // Alternately, set max digit bits to 28 since some
// browsers slow down when dealing with 32-bit numbers.


function am3(i, x, w, j, c, n) {
  var xl = x & 0x3fff,
      xh = x >> 14;

  while (--n >= 0) {
    var l = this[i] & 0x3fff;
    var h = this[i++] >> 14;
    var m = xh * l + h * xl;
    l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
    c = (l >> 28) + (m >> 14) + xh * h;
    w[j++] = l & 0xfffffff;
  }

  return c;
}

if (j_lm && modificationNavigator.appName == "Microsoft Internet Explorer") {
  BigInteger.prototype.am = am2;
  dbits = 30;
} else if (j_lm && modificationNavigator.appName != "Netscape") {
  BigInteger.prototype.am = am1;
  dbits = 26;
} else {
  // Mozilla/Netscape seems to prefer am3
  BigInteger.prototype.am = am3;
  dbits = 28;
}

BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP; // Digit conversions

var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array();
var rr, vv;
rr = "0".charCodeAt(0);

for (vv = 0; vv <= 9; ++vv) {
  BI_RC[rr++] = vv;
}

rr = "a".charCodeAt(0);

for (vv = 10; vv < 36; ++vv) {
  BI_RC[rr++] = vv;
}

rr = "A".charCodeAt(0);

for (vv = 10; vv < 36; ++vv) {
  BI_RC[rr++] = vv;
}

function int2char(n) {
  return BI_RM.charAt(n);
}

function intAt(s, i) {
  var c = BI_RC[s.charCodeAt(i)];
  return c == null ? -1 : c;
} // (protected) copy this to r


function bnpCopyTo(r) {
  for (var i = this.t - 1; i >= 0; --i) {
    r[i] = this[i];
  }

  r.t = this.t;
  r.s = this.s;
} // (protected) set from integer value x, -DV <= x < DV


function bnpFromInt(x) {
  this.t = 1;
  this.s = x < 0 ? -1 : 0;
  if (x > 0) this[0] = x;else if (x < -1) this[0] = x + this.DV;else this.t = 0;
} // return bigint initialized to value


function nbv(i) {
  var r = nbi();
  r.fromInt(i);
  return r;
} // (protected) set from string and radix


function bnpFromString(s, b) {
  var k;
  if (b == 16) k = 4;else if (b == 8) k = 3;else if (b == 256) k = 8; // byte array
  else if (b == 2) k = 1;else if (b == 32) k = 5;else if (b == 4) k = 2;else {
      this.fromRadix(s, b);
      return;
    }
  this.t = 0;
  this.s = 0;
  var i = s.length,
      mi = false,
      sh = 0;

  while (--i >= 0) {
    var x = k == 8 ? s[i] & 0xff : intAt(s, i);

    if (x < 0) {
      if (s.charAt(i) == "-") mi = true;
      continue;
    }

    mi = false;
    if (sh == 0) this[this.t++] = x;else if (sh + k > this.DB) {
      this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
      this[this.t++] = x >> this.DB - sh;
    } else this[this.t - 1] |= x << sh;
    sh += k;
    if (sh >= this.DB) sh -= this.DB;
  }

  if (k == 8 && (s[0] & 0x80) != 0) {
    this.s = -1;
    if (sh > 0) this[this.t - 1] |= (1 << this.DB - sh) - 1 << sh;
  }

  this.clamp();
  if (mi) BigInteger.ZERO.subTo(this, this);
} // (protected) clamp off excess high words


function bnpClamp() {
  var c = this.s & this.DM;

  while (this.t > 0 && this[this.t - 1] == c) {
    --this.t;
  }
} // (public) return string representation in given radix


function bnToString(b) {
  if (this.s < 0) return "-" + this.negate().toString(b);
  var k;
  if (b == 16) k = 4;else if (b == 8) k = 3;else if (b == 2) k = 1;else if (b == 32) k = 5;else if (b == 4) k = 2;else return this.toRadix(b);
  var km = (1 << k) - 1,
      d,
      m = false,
      r = "",
      i = this.t;
  var p = this.DB - i * this.DB % k;

  if (i-- > 0) {
    if (p < this.DB && (d = this[i] >> p) > 0) {
      m = true;
      r = int2char(d);
    }

    while (i >= 0) {
      if (p < k) {
        d = (this[i] & (1 << p) - 1) << k - p;
        d |= this[--i] >> (p += this.DB - k);
      } else {
        d = this[i] >> (p -= k) & km;

        if (p <= 0) {
          p += this.DB;
          --i;
        }
      }

      if (d > 0) m = true;
      if (m) r += int2char(d);
    }
  }

  return m ? r : "0";
} // (public) -this


function bnNegate() {
  var r = nbi();
  BigInteger.ZERO.subTo(this, r);
  return r;
} // (public) |this|


function bnAbs() {
  return this.s < 0 ? this.negate() : this;
} // (public) return + if this > a, - if this < a, 0 if equal


function bnCompareTo(a) {
  var r = this.s - a.s;
  if (r != 0) return r;
  var i = this.t;
  r = i - a.t;
  if (r != 0) return this.s < 0 ? -r : r;

  while (--i >= 0) {
    if ((r = this[i] - a[i]) != 0) return r;
  }

  return 0;
} // returns bit length of the integer x


function nbits(x) {
  var r = 1,
      t;

  if ((t = x >>> 16) != 0) {
    x = t;
    r += 16;
  }

  if ((t = x >> 8) != 0) {
    x = t;
    r += 8;
  }

  if ((t = x >> 4) != 0) {
    x = t;
    r += 4;
  }

  if ((t = x >> 2) != 0) {
    x = t;
    r += 2;
  }

  if ((t = x >> 1) != 0) {
    x = t;
    r += 1;
  }

  return r;
} // (public) return the number of bits in "this"


function bnBitLength() {
  if (this.t <= 0) return 0;
  return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
} // (protected) r = this << n*DB


function bnpDLShiftTo(n, r) {
  var i;

  for (i = this.t - 1; i >= 0; --i) {
    r[i + n] = this[i];
  }

  for (i = n - 1; i >= 0; --i) {
    r[i] = 0;
  }

  r.t = this.t + n;
  r.s = this.s;
} // (protected) r = this >> n*DB


function bnpDRShiftTo(n, r) {
  for (var i = n; i < this.t; ++i) {
    r[i - n] = this[i];
  }

  r.t = Math.max(this.t - n, 0);
  r.s = this.s;
} // (protected) r = this << n


function bnpLShiftTo(n, r) {
  var bs = n % this.DB;
  var cbs = this.DB - bs;
  var bm = (1 << cbs) - 1;
  var ds = Math.floor(n / this.DB),
      c = this.s << bs & this.DM,
      i;

  for (i = this.t - 1; i >= 0; --i) {
    r[i + ds + 1] = this[i] >> cbs | c;
    c = (this[i] & bm) << bs;
  }

  for (i = ds - 1; i >= 0; --i) {
    r[i] = 0;
  }

  r[ds] = c;
  r.t = this.t + ds + 1;
  r.s = this.s;
  r.clamp();
} // (protected) r = this >> n


function bnpRShiftTo(n, r) {
  r.s = this.s;
  var ds = Math.floor(n / this.DB);

  if (ds >= this.t) {
    r.t = 0;
    return;
  }

  var bs = n % this.DB;
  var cbs = this.DB - bs;
  var bm = (1 << bs) - 1;
  r[0] = this[ds] >> bs;

  for (var i = ds + 1; i < this.t; ++i) {
    r[i - ds - 1] |= (this[i] & bm) << cbs;
    r[i - ds] = this[i] >> bs;
  }

  if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
  r.t = this.t - ds;
  r.clamp();
} // (protected) r = this - a


function bnpSubTo(a, r) {
  var i = 0,
      c = 0,
      m = Math.min(a.t, this.t);

  while (i < m) {
    c += this[i] - a[i];
    r[i++] = c & this.DM;
    c >>= this.DB;
  }

  if (a.t < this.t) {
    c -= a.s;

    while (i < this.t) {
      c += this[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }

    c += this.s;
  } else {
    c += this.s;

    while (i < a.t) {
      c -= a[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }

    c -= a.s;
  }

  r.s = c < 0 ? -1 : 0;
  if (c < -1) r[i++] = this.DV + c;else if (c > 0) r[i++] = c;
  r.t = i;
  r.clamp();
} // (protected) r = this * a, r != this,a (HAC 14.12)
// "this" should be the larger one if appropriate.


function bnpMultiplyTo(a, r) {
  var x = this.abs(),
      y = a.abs();
  var i = x.t;
  r.t = i + y.t;

  while (--i >= 0) {
    r[i] = 0;
  }

  for (i = 0; i < y.t; ++i) {
    r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
  }

  r.s = 0;
  r.clamp();
  if (this.s != a.s) BigInteger.ZERO.subTo(r, r);
} // (protected) r = this^2, r != this (HAC 14.16)


function bnpSquareTo(r) {
  var x = this.abs();
  var i = r.t = 2 * x.t;

  while (--i >= 0) {
    r[i] = 0;
  }

  for (i = 0; i < x.t - 1; ++i) {
    var c = x.am(i, x[i], r, 2 * i, 0, 1);

    if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
      r[i + x.t] -= x.DV;
      r[i + x.t + 1] = 1;
    }
  }

  if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
  r.s = 0;
  r.clamp();
} // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
// r != q, this != m.  q or r may be null.


function bnpDivRemTo(m, q, r) {
  var pm = m.abs();
  if (pm.t <= 0) return;
  var pt = this.abs();

  if (pt.t < pm.t) {
    if (q != null) q.fromInt(0);
    if (r != null) this.copyTo(r);
    return;
  }

  if (r == null) r = nbi();
  var y = nbi(),
      ts = this.s,
      ms = m.s;
  var nsh = this.DB - nbits(pm[pm.t - 1]); // normalize modulus

  if (nsh > 0) {
    pm.lShiftTo(nsh, y);
    pt.lShiftTo(nsh, r);
  } else {
    pm.copyTo(y);
    pt.copyTo(r);
  }

  var ys = y.t;
  var y0 = y[ys - 1];
  if (y0 == 0) return;
  var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
  var d1 = this.FV / yt,
      d2 = (1 << this.F1) / yt,
      e = 1 << this.F2;
  var i = r.t,
      j = i - ys,
      t = q == null ? nbi() : q;
  y.dlShiftTo(j, t);

  if (r.compareTo(t) >= 0) {
    r[r.t++] = 1;
    r.subTo(t, r);
  }

  BigInteger.ONE.dlShiftTo(ys, t);
  t.subTo(y, y); // "negative" y so we can replace sub with am later

  while (y.t < ys) {
    y[y.t++] = 0;
  }

  while (--j >= 0) {
    // Estimate quotient digit
    var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);

    if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
      // Try it out
      y.dlShiftTo(j, t);
      r.subTo(t, r);

      while (r[i] < --qd) {
        r.subTo(t, r);
      }
    }
  }

  if (q != null) {
    r.drShiftTo(ys, q);
    if (ts != ms) BigInteger.ZERO.subTo(q, q);
  }

  r.t = ys;
  r.clamp();
  if (nsh > 0) r.rShiftTo(nsh, r); // Denormalize remainder

  if (ts < 0) BigInteger.ZERO.subTo(r, r);
} // (public) this mod a


function bnMod(a) {
  var r = nbi();
  this.abs().divRemTo(a, null, r);
  if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
  return r;
} // Modular reduction using "classic" algorithm


function Classic(m) {
  this.m = m;
}

function cConvert(x) {
  if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);else return x;
}

function cRevert(x) {
  return x;
}

function cReduce(x) {
  x.divRemTo(this.m, null, x);
}

function cMulTo(x, y, r) {
  x.multiplyTo(y, r);
  this.reduce(r);
}

function cSqrTo(x, r) {
  x.squareTo(r);
  this.reduce(r);
}

Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo; // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
// justification:
//         xy == 1 (mod m)
//         xy =  1+km
//   xy(2-xy) = (1+km)(1-km)
// x[y(2-xy)] = 1-k^2m^2
// x[y(2-xy)] == 1 (mod m^2)
// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
// JS multiply "overflows" differently from C/C++, so care is needed here.

function bnpInvDigit() {
  if (this.t < 1) return 0;
  var x = this[0];
  if ((x & 1) == 0) return 0;
  var y = x & 3; // y == 1/x mod 2^2

  y = y * (2 - (x & 0xf) * y) & 0xf; // y == 1/x mod 2^4

  y = y * (2 - (x & 0xff) * y) & 0xff; // y == 1/x mod 2^8

  y = y * (2 - ((x & 0xffff) * y & 0xffff)) & 0xffff; // y == 1/x mod 2^16
  // last step - calculate inverse mod DV directly;
  // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints

  y = y * (2 - x * y % this.DV) % this.DV; // y == 1/x mod 2^dbits
  // we really want the negative inverse, and -DV < y < DV

  return y > 0 ? this.DV - y : -y;
} // Montgomery reduction


function Montgomery(m) {
  this.m = m;
  this.mp = m.invDigit();
  this.mpl = this.mp & 0x7fff;
  this.mph = this.mp >> 15;
  this.um = (1 << m.DB - 15) - 1;
  this.mt2 = 2 * m.t;
} // xR mod m


function montConvert(x) {
  var r = nbi();
  x.abs().dlShiftTo(this.m.t, r);
  r.divRemTo(this.m, null, r);
  if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
  return r;
} // x/R mod m


function montRevert(x) {
  var r = nbi();
  x.copyTo(r);
  this.reduce(r);
  return r;
} // x = x/R mod m (HAC 14.32)


function montReduce(x) {
  while (x.t <= this.mt2) {
    // pad x so am has enough room later
    x[x.t++] = 0;
  }

  for (var i = 0; i < this.m.t; ++i) {
    // faster way of calculating u0 = x[i]*mp mod DV
    var j = x[i] & 0x7fff;
    var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM; // use am to combine the multiply-shift-add into one call

    j = i + this.m.t;
    x[j] += this.m.am(0, u0, x, i, 0, this.m.t); // propagate carry

    while (x[j] >= x.DV) {
      x[j] -= x.DV;
      x[++j]++;
    }
  }

  x.clamp();
  x.drShiftTo(this.m.t, x);
  if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
} // r = "x^2/R mod m"; x != r


function montSqrTo(x, r) {
  x.squareTo(r);
  this.reduce(r);
} // r = "xy/R mod m"; x,y != r


function montMulTo(x, y, r) {
  x.multiplyTo(y, r);
  this.reduce(r);
}

Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo; // (protected) true iff this is even

function bnpIsEven() {
  return (this.t > 0 ? this[0] & 1 : this.s) == 0;
} // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)


function bnpExp(e, z) {
  if (e > 0xffffffff || e < 1) return BigInteger.ONE;
  var r = nbi(),
      r2 = nbi(),
      g = z.convert(this),
      i = nbits(e) - 1;
  g.copyTo(r);

  while (--i >= 0) {
    z.sqrTo(r, r2);
    if ((e & 1 << i) > 0) z.mulTo(r2, g, r);else {
      var t = r;
      r = r2;
      r2 = t;
    }
  }

  return z.revert(r);
} // (public) this^e % m, 0 <= e < 2^32


function bnModPowInt(e, m) {
  var z;
  if (e < 256 || m.isEven()) z = new Classic(m);else z = new Montgomery(m);
  return this.exp(e, z);
} // protected


BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp; // public

BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt; // "constants"

BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1); // prng4.js - uses Arcfour as a PRNG

function Arcfour() {
  this.i = 0;
  this.j = 0;
  this.S = new Array();
} // Initialize arcfour context from key, an array of ints, each from [0..255]


function ARC4init(key) {
  var i, j, t;

  for (i = 0; i < 256; ++i) {
    this.S[i] = i;
  }

  j = 0;

  for (i = 0; i < 256; ++i) {
    j = j + this.S[i] + key[i % key.length] & 255;
    t = this.S[i];
    this.S[i] = this.S[j];
    this.S[j] = t;
  }

  this.i = 0;
  this.j = 0;
}

function ARC4next() {
  var t;
  this.i = this.i + 1 & 255;
  this.j = this.j + this.S[this.i] & 255;
  t = this.S[this.i];
  this.S[this.i] = this.S[this.j];
  this.S[this.j] = t;
  return this.S[t + this.S[this.i] & 255];
}

Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next; // Plug in your RNG constructor here

function prng_newstate() {
  return new Arcfour();
} // Pool size must be a multiple of 4 and greater than 32.
// An array of bytes the size of the pool will be passed to init()


var rng_psize = 256; // Random number generator - requires a PRNG backend, e.g. prng4.js
// For best results, put code like
// <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
// in your main HTML document.

var rng_state;
var rng_pool;
var rng_pptr; // Mix in a 32-bit integer into the pool

function rng_seed_int(x) {
  rng_pool[rng_pptr++] ^= x & 255;
  rng_pool[rng_pptr++] ^= x >> 8 & 255;
  rng_pool[rng_pptr++] ^= x >> 16 & 255;
  rng_pool[rng_pptr++] ^= x >> 24 & 255;
  if (rng_pptr >= rng_psize) rng_pptr -= rng_psize;
} // Mix in the current time (w/milliseconds) into the pool


function rng_seed_time() {
  rng_seed_int(new Date().getTime());
} // Initialize the pool with junk if needed.


if (rng_pool == null) {
  rng_pool = new Array();
  rng_pptr = 0;
  var t;

  if (modificationWindow.crypto && modificationWindow.crypto.getRandomValues) {
    // Use webcrypto if available
    var ua = new Uint8Array(32);
    modificationWindow.crypto.getRandomValues(ua);

    for (t = 0; t < 32; ++t) {
      rng_pool[rng_pptr++] = ua[t];
    }
  }

  if (modificationNavigator.appName == "Netscape" && modificationNavigator.appVersion < "5" && modificationWindow.crypto) {
    // Extract entropy (256 bits) from NS4 RNG if available
    var z = modificationWindow.crypto.random(32);

    for (t = 0; t < z.length; ++t) {
      rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
    }
  }

  while (rng_pptr < rng_psize) {
    // extract some randomness from Math.random()
    t = Math.floor(65536 * Math.random());
    rng_pool[rng_pptr++] = t >>> 8;
    rng_pool[rng_pptr++] = t & 255;
  }

  rng_pptr = 0;
  rng_seed_time(); //rng_seed_int(window.screenX);
  //rng_seed_int(window.screenY);
}

function rng_get_byte() {
  if (rng_state == null) {
    rng_seed_time();
    rng_state = prng_newstate();
    rng_state.init(rng_pool);

    for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) {
      rng_pool[rng_pptr] = 0;
    }

    rng_pptr = 0; //rng_pool = null;
  } // TODO: allow reseeding after first request


  return rng_state.next();
}

function rng_get_bytes(ba) {
  var i;

  for (i = 0; i < ba.length; ++i) {
    ba[i] = rng_get_byte();
  }
}

function SecureRandom() {}

SecureRandom.prototype.nextBytes = rng_get_bytes; // Depends on jsbn.js and rng.js
// Version 1.1: support utf-8 encoding in pkcs1pad2
// convert a (hex) string to a bignum object

function parseBigInt(str, r) {
  return new BigInteger(str, r);
}

function linebrk(s, n) {
  var ret = "";
  var i = 0;

  while (i + n < s.length) {
    ret += s.substring(i, i + n) + "\n";
    i += n;
  }

  return ret + s.substring(i, s.length);
}

function byte2Hex(b) {
  if (b < 0x10) return "0" + b.toString(16);else return b.toString(16);
} // PKCS#1 (type 2, random) pad input string s to n bytes, and return a bigint


function pkcs1pad2(s, n) {
  if (n < s.length + 11) {
    // TODO: fix for utf-8
    alert("Message too long for RSA");
    return null;
  }

  var ba = new Array();
  var i = s.length - 1;

  while (i >= 0 && n > 0) {
    var c = s.charCodeAt(i--);

    if (c < 128) {
      // encode using utf-8
      ba[--n] = c;
    } else if (c > 127 && c < 2048) {
      ba[--n] = c & 63 | 128;
      ba[--n] = c >> 6 | 192;
    } else {
      ba[--n] = c & 63 | 128;
      ba[--n] = c >> 6 & 63 | 128;
      ba[--n] = c >> 12 | 224;
    }
  }

  ba[--n] = 0;
  var rng = new SecureRandom();
  var x = new Array();

  while (n > 2) {
    // random non-zero pad
    x[0] = 0;

    while (x[0] == 0) {
      rng.nextBytes(x);
    }

    ba[--n] = x[0];
  }

  ba[--n] = 2;
  ba[--n] = 0;
  return new BigInteger(ba);
} // "empty" RSA key constructor


function RSAKey() {
  this.n = null;
  this.e = 0;
  this.d = null;
  this.p = null;
  this.q = null;
  this.dmp1 = null;
  this.dmq1 = null;
  this.coeff = null;
} // Set the public key fields N and e from hex strings


function RSASetPublic(N, E) {
  if (N != null && E != null && N.length > 0 && E.length > 0) {
    this.n = parseBigInt(N, 16);
    this.e = parseInt(E, 16);
  } else alert("Invalid RSA public key");
} // Perform raw public operation on "x": return x^e (mod n)


function RSADoPublic(x) {
  return x.modPowInt(this.e, this.n);
} // Return the PKCS#1 RSA encryption of "text" as an even-length hex string


function RSAEncrypt(text) {
  var m = pkcs1pad2(text, this.n.bitLength() + 7 >> 3);
  if (m == null) return null;
  var c = this.doPublic(m);
  if (c == null) return null;
  var h = c.toString(16);
  if ((h.length & 1) == 0) return h;else return "0" + h;
} // Return the PKCS#1 RSA encryption of "text" as a Base64-encoded string
//function RSAEncryptB64(text) {
//  var h = this.encrypt(text);
//  if(h) return hex2b64(h); else return null;
//}


function RSAEncryptB64(text) {
  var h = this.encrypt(text);
  if (h) return BASE64.encoder(h);else return null;
} // protected


RSAKey.prototype.doPublic = RSADoPublic; // public

RSAKey.prototype.setPublic = RSASetPublic;
RSAKey.prototype.encrypt = RSAEncrypt;
RSAKey.prototype.encrypt_b64 = RSAEncryptB64;
/* harmony default export */ __webpack_exports__["default"] = ({
  RSAKey: RSAKey
});

/***/ }),

/***/ "./src/pages/home.vue?entry=true":
/*!***************************************!*\
  !*** ./src/pages/home.vue?entry=true ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-324fb87d!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./home.vue */ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-324fb87d!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/home.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./home.vue */ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/home.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-324fb87d!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./home.vue */ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-324fb87d!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/home.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\Project\\jhhx\\jhhx\\src\\pages\\home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-324fb87d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/weex-ui/packages/wxc-dialog/index.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./node_modules/weex-ui/packages/wxc-dialog/index.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wxc_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wxc-overlay */ "./node_modules/weex-ui/packages/wxc-overlay/index.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/weex-ui/packages/wxc-dialog/type.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/weex-ui/packages/utils/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    WxcOverlay: _wxc_overlay__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    show: {
      type: Boolean,
      "default": false
    },
    single: {
      type: Boolean,
      "default": false
    },
    title: {
      type: String,
      "default": ''
    },
    content: {
      type: String,
      "default": ''
    },
    top: {
      type: Number,
      "default": 400
    },
    cancelText: {
      type: String,
      "default": '取消'
    },
    confirmText: {
      type: String,
      "default": '确定'
    },
    mainBtnColor: {
      type: String,
      "default": '#EE9900'
    },
    secondBtnColor: {
      type: String,
      "default": '#666666'
    },
    showNoPrompt: {
      type: Boolean,
      "default": false
    },
    noPromptText: {
      type: String,
      "default": '不再提示'
    },
    isChecked: {
      type: Boolean,
      "default": false
    },
    left: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      noPromptIcon: _type__WEBPACK_IMPORTED_MODULE_1__["UN_CHECKED"],
      pageHeight: 1334,
      isWeb: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].env.isWeb()
    };
  },
  created: function created() {
    var _weex$config$env = weex.config.env,
        deviceHeight = _weex$config$env.deviceHeight,
        deviceWidth = _weex$config$env.deviceWidth;
    this.pageHeight = deviceHeight / deviceWidth * 750;
  },
  methods: {
    secondaryClicked: function secondaryClicked() {
      this.$emit('wxcDialogCancelBtnClicked', {
        type: 'cancel'
      });
    },
    primaryClicked: function primaryClicked(e) {
      this.$emit('wxcDialogConfirmBtnClicked', {
        type: 'confirm'
      });
    },
    noPromptClicked: function noPromptClicked(e) {
      var isChecked = !this.isChecked;
      this.noPromptIcon = isChecked ? _type__WEBPACK_IMPORTED_MODULE_1__["CHECKED"] : _type__WEBPACK_IMPORTED_MODULE_1__["UN_CHECKED"];
      this.$emit('wxcDialogNoPromptClicked', {
        isChecked: isChecked
      });
    }
  }
});

/***/ }),

/***/ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/weex-ui/packages/wxc-overlay/index.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./node_modules/weex-ui/packages/wxc-overlay/index.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/weex-ui/packages/utils/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var animation = weex.requireModule('animation');

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    show: {
      type: Boolean,
      "default": true
    },
    top: {
      type: Number,
      "default": 0
    },
    left: {
      type: Number,
      "default": 0
    },
    hasAnimation: {
      type: Boolean,
      "default": true
    },
    duration: {
      type: [Number, String],
      "default": 300
    },
    timingFunction: {
      type: Array,
      "default": function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    opacity: {
      type: [Number, String],
      "default": 0.6
    },
    canAutoClose: {
      type: Boolean,
      "default": true
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: "rgba(0, 0, 0,".concat(this.opacity, ")"),
        left: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].env.isWeb() ? this.left + 'px' : 0,
        top: this.top + 'px'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;
      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction,
          canAutoClose = this.canAutoClose;
      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      var overlayEl = this.$refs['wxc-overlay'];

      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    }
  }
});

/***/ }),

/***/ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/home.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/home.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weex_ui_packages_wxc_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weex-ui/packages/wxc-dialog */ "./node_modules/weex-ui/packages/wxc-dialog/index.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/API */ "./src/API/index.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var eeui = app.requireModule('eeui');

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'home',
  components: {
    WxcDialog: weex_ui_packages_wxc_dialog__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loginPageImg: 'root://images/login_page_img.png',
      matterLists: [{
        id: 0,
        src: 'root://images/loading_call.png',
        url: 'loading_call.js'
      }, {
        id: 1,
        src: 'root://images/loading.png',
        url: 'loading.js'
      }, {
        id: 2,
        src: 'root://images/unloading.png',
        url: 'unloading.js'
      }, {
        id: 3,
        src: 'root://images/instore_check_weight.png',
        url: 'instock_check_weight.js'
      }, {
        id: 4,
        src: 'root://images/outstore_check_weight.png',
        url: 'outstock_check_weight.js'
      }, {
        id: 5,
        src: 'root://images/owned_buckets_instock.png',
        url: 'owned_buckets_instock.js'
      }, {
        id: 6,
        src: 'root://images/packaging_collar.png',
        url: 'packaging_collar.js'
      }],
      signOutShow: false
    };
  },
  methods: {
    jumpTo: function jumpTo(matter) {
      if (matter.url) {
        _API__WEBPACK_IMPORTED_MODULE_1__["default"].openPage(matter.url);
      }
    },
    signOut: function signOut() {
      this.signOutShow = true;
    },
    wxcDialogCancelBtnClicked: function wxcDialogCancelBtnClicked() {
      this.signOutShow = false;
    },
    wxcDialogConfirmBtnClicked: function wxcDialogConfirmBtnClicked() {
      eeui.clearAllCaches();
      _API__WEBPACK_IMPORTED_MODULE_1__["default"].openPage('index.js');
    }
  }
});

/***/ }),

/***/ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-072b1898!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/weex-ui/packages/wxc-dialog/index.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-072b1898!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./node_modules/weex-ui/packages/wxc-dialog/index.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "width": "750",
    "zIndex": 99999
  },
  "dialog-box": {
    "position": "fixed",
    "left": "96",
    "width": "558",
    "backgroundColor": "#FFFFFF"
  },
  "dialog-content": {
    "paddingTop": "36",
    "paddingBottom": "36",
    "paddingLeft": "36",
    "paddingRight": "36"
  },
  "content-title": {
    "color": "#333333",
    "fontSize": "36",
    "textAlign": "center",
    "marginBottom": "24"
  },
  "content-subtext": {
    "color": "#666666",
    "fontSize": "26",
    "lineHeight": "36",
    "textAlign": "center"
  },
  "dialog-footer": {
    "flexDirection": "row",
    "alignItems": "center",
    "borderTopColor": "#F3F3F3",
    "borderTopWidth": "1"
  },
  "footer-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "flex": 1,
    "height": "90"
  },
  "cancel": {
    "borderRightColor": "#F3F3F3",
    "borderRightWidth": "1"
  },
  "btn-text": {
    "fontSize": "36",
    "color": "#666666"
  },
  "no-prompt": {
    "width": "486",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row",
    "marginTop": "24"
  },
  "no-prompt-icon": {
    "width": "24",
    "height": "24",
    "marginRight": "12"
  },
  "no-prompt-text": {
    "fontSize": "24",
    "color": "#A5A5A5"
  }
}

/***/ }),

/***/ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-324fb87d!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/home.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-324fb87d!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/home.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "flex": 1,
    "backgroundColor": "rgb(35,35,35)"
  },
  "img-content": {
    "marginBottom": "20"
  },
  "login-page-img": {
    "width": "750",
    "height": "300"
  },
  "wrapper": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30"
  },
  "matters-content": {
    "marginBottom": "20"
  },
  "matter-img": {
    "width": "220",
    "height": "160"
  },
  "sign-out": {
    "justifyContent": "center",
    "alignItems": "center",
    "width": "750",
    "position": "absolute",
    "bottom": "40"
  },
  "button": {
    "width": "600",
    "height": "60",
    "backgroundColor": "rgb(53,78,181)"
  }
}

/***/ }),

/***/ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-5dc5d348!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/weex-ui/packages/wxc-overlay/index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-5dc5d348!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./node_modules/weex-ui/packages/wxc-overlay/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": "750",
    "position": "fixed",
    "bottom": 0,
    "right": 0
  }
}

/***/ }),

/***/ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-072b1898!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/weex-ui/packages/wxc-dialog/index.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-072b1898!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./node_modules/weex-ui/packages/wxc-dialog/index.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [(_vm.show) ? _c('wxc-overlay', {
    attrs: {
      "left": _vm.left,
      "show": true,
      "hasAnimation": false
    }
  }) : _vm._e(), (_vm.show) ? _c('div', {
    staticClass: ["dialog-box"],
    style: {
      top: _vm.top + 'px',
      left: ((_vm.isWeb ? _vm.left : 0) + 96) + 'px'
    }
  }, [_c('div', {
    staticClass: ["dialog-content"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["content-title"]
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._t("content", [_c('text', {
    staticClass: ["content-subtext"]
  }, [_vm._v(_vm._s(_vm.content))])]), (_vm.showNoPrompt) ? _c('div', {
    staticClass: ["no-prompt"],
    on: {
      "click": _vm.noPromptClicked
    }
  }, [_c('image', {
    staticClass: ["no-prompt-icon"],
    attrs: {
      "src": _vm.noPromptIcon
    }
  }), _c('text', {
    staticClass: ["no-prompt-text"]
  }, [_vm._v(_vm._s(_vm.noPromptText))])]) : _vm._e()], 2), _c('div', {
    staticClass: ["dialog-footer"]
  }, [(!_vm.single) ? _c('div', {
    staticClass: ["footer-btn", "cancel"],
    on: {
      "click": _vm.secondaryClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: {
      color: _vm.secondBtnColor
    }
  }, [_vm._v(_vm._s(_vm.cancelText))])]) : _vm._e(), _c('div', {
    staticClass: ["footer-btn", "confirm"],
    on: {
      "click": _vm.primaryClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: {
      color: _vm.mainBtnColor
    }
  }, [_vm._v(_vm._s(_vm.confirmText))])])])]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-324fb87d!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/home.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-324fb87d!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/home.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('div', {
    staticClass: ["img-content"]
  }, [_c('image', {
    staticClass: ["login-page-img"],
    attrs: {
      "src": _vm.loginPageImg
    }
  })]), _c('div', {
    staticClass: ["wrapper"]
  }, _vm._l((_vm.matterLists), function(matter) {
    return _c('div', {
      key: matter.id,
      staticClass: ["matters-content"],
      on: {
        "click": function($event) {
          _vm.jumpTo(matter)
        }
      }
    }, [_c('image', {
      staticClass: ["matter-img"],
      attrs: {
        "src": matter.src
      }
    })])
  })), _c('div', {
    staticClass: ["sign-out"]
  }, [_c('button', {
    staticClass: ["button"],
    attrs: {
      "text": "退出"
    },
    on: {
      "click": _vm.signOut
    }
  })], 1), _c('wxc-dialog', {
    attrs: {
      "title": "退出",
      "content": "确认退出?",
      "show": _vm.signOutShow
    },
    on: {
      "wxcDialogCancelBtnClicked": _vm.wxcDialogCancelBtnClicked,
      "wxcDialogConfirmBtnClicked": _vm.wxcDialogConfirmBtnClicked
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-5dc5d348!C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/weex-ui/packages/wxc-overlay/index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-5dc5d348!C:/Users/kshee/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./node_modules/weex-ui/packages/wxc-overlay/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\kshee\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_webpack@4.43.0@webpack\\buildin\\global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ })

/******/ });