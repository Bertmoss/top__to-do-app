/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfWeek/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfWeek/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfWeek)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isBefore/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/general/general__js/_alert.js":
/*!*******************************************!*\
  !*** ./src/general/general__js/_alert.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAlert": () => (/* binding */ createAlert)
/* harmony export */ });
function createAlert(text) {
  let alertDiv = document.createElement("div")
  alertDiv.setAttribute("style", "position: fixed; top: 250px; left: 0; right: 0; margin: 0 auto; width: 200px;  border: 2px solid black;  text-align: center; background-color: white " );

  let closeBtn = document.createElement("button"); 
  closeBtn.textContent = "x";
  closeBtn.addEventListener("click", () => {
    alertDiv.remove();
  })
  alertDiv.appendChild(closeBtn);
  let alertText = document.createElement("p");
  alertText.textContent = text;
  alertDiv.appendChild(alertText)
  
  let body = document.querySelector("body");
  body.appendChild(alertDiv);
  return alertDiv;
}


/***/ }),

/***/ "./src/general/general__js/_input.js":
/*!*******************************************!*\
  !*** ./src/general/general__js/_input.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendLabelInput": () => (/* binding */ appendLabelInput),
/* harmony export */   "appendRadioInputs": () => (/* binding */ appendRadioInputs),
/* harmony export */   "createBasicInput": () => (/* binding */ createBasicInput),
/* harmony export */   "createLabel": () => (/* binding */ createLabel),
/* harmony export */   "createRadioInput": () => (/* binding */ createRadioInput),
/* harmony export */   "createTextArea": () => (/* binding */ createTextArea)
/* harmony export */ });
function createBasicInput(className, type, inputName, id) {
  let input = document.createElement("input");
  input.classList.add(className);
  input.setAttribute("type", type);
  input.setAttribute("name", inputName);
  input.setAttribute("id", id);
  return input;
}

function createTextArea(className, inputName, id) {
  let textArea = document.createElement("textarea");
  textArea.classList.add(className);
  textArea.setAttribute("name", inputName);
  textArea.setAttribute("id", id);
  return textArea;
} 

function createLabel(input, text) {
  let label = document.createElement("label");
  label.classList.add("form__label")
  label.textContent = text;
  label.setAttribute("for", input.getAttribute("id"));
  return label;
}

function appendLabelInput(form, label, input) {
  form.appendChild(label);
  form.appendChild(input);
}

function createRadioInput(priorityLevel, className) {
  let radio = createBasicInput(
    className,
    "radio",
    "priority",
    `priority-${priorityLevel}`
  );
  radio.setAttribute("value", priorityLevel);
  return radio;
}

function appendRadioInputs(parent, array) {
  array.forEach((element) => {
    parent.appendChild(element);
    let label = createLabel(element, element.getAttribute("value"));
    parent.appendChild(label);
  });
}



/***/ }),

/***/ "./src/general/general__js/_table.js":
/*!*******************************************!*\
  !*** ./src/general/general__js/_table.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTable": () => (/* binding */ createTable)
/* harmony export */ });
function createTable(obj, parent) {
  let table = document.createElement("table");
  for (const [key, value] of Object.entries(obj)) {
    let row;
    if (key == "type" || key === "id" || key == "project" || key == "status") {
      continue;
    } else if (key == "date") {
      console.log(value);
      let date = value.split("-").reverse().join("-");
      row = createRow(key, date);
    } else {
      row = createRow(key, value);
    }
    table.appendChild(row);
  }
  return parent.appendChild(table);
}

function createRow(key, value) {
  let tableRow = document.createElement("tr");
  let tableHeading = document.createElement("th");
  tableHeading.textContent = key;
  let tableData = document.createElement("td");
  tableData.textContent = value;
  assignClass(key, tableData);
  tableRow.appendChild(tableHeading);
  tableRow.appendChild(tableData);
  return tableRow;
}
function assignClass(key, element) {
  switch (key) {
    case "title":
      element.classList.add("table__td--title", "table__td");
      break;
    case "details":
      element.classList.add("table__td--details", "table__td");
      break;
    case "date":
      element.classList.add("table__td--date", "table__td");
      break;
    case "priority":
      element.classList.add("table__td--priority", "table__td");
      break;
  }
}



/***/ }),

/***/ "./src/general/general__js/pub-sub.js":
/*!********************************************!*\
  !*** ./src/general/general__js/pub-sub.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pubSubFactory": () => (/* binding */ pubSubFactory)
/* harmony export */ });


function pubSubFactory() {
  const subscribers = {};

  function publish(eventName, data) {
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }
    subscribers[eventName].forEach((callback) => {
      callback(data);
    });
  }

  function subscribe(eventName, callback) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }
    subscribers[eventName].push(callback);
    const index = subscribers[eventName].length - 1;

    return {
      unsubscribe() {
        subscribers[eventName].splice(index, 1);
      },
    };
  }
  return {
    subscribe,
    publish,
    
  };
}




/***/ }),

/***/ "./src/header/header.js":
/*!******************************!*\
  !*** ./src/header/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });

const title = document.createElement("h1");
title.classList.add("header__title");
title.textContent = "Just Do It";

const header = document.querySelector("header");

header.classList.add("header", "body__header");

header.appendChild(title);



/***/ }),

/***/ "./src/main/display/__container/display__container--note.js":
/*!******************************************************************!*\
  !*** ./src/main/display/__container/display__container--note.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noteDisplay": () => (/* binding */ noteDisplay),
/* harmony export */   "subRmvNoteDisplay": () => (/* binding */ subRmvNoteDisplay),
/* harmony export */   "subscribeNote": () => (/* binding */ subscribeNote)
/* harmony export */ });
/* harmony import */ var _general_general_js_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../general/general__js/_table */ "./src/general/general__js/_table.js");
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");





let noteDisplay = document.createElement("div");
noteDisplay.classList.add("display__container-note--hidden","display__container-note");

function subscribeNote(obj) {
  /*DELETE BTN*/
  let noteDiv = document.createElement("div");
  noteDiv.setAttribute("data-id", obj.id);
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "x";
  dltBtn.setAttribute("type", "button");
  dltBtn.addEventListener("click", () => {
    obj.remove();
  });
  noteDiv.appendChild(dltBtn);
  

  /*EDIT BUTTON*/
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.setAttribute("type", "button");

  editBtn.addEventListener("click", () => {
    let tableData = document.querySelectorAll(
      `.display__container-note [data-id="${obj.id}"] .table__td`
    );
    tableData.forEach(function (td) {
      let editInput;
      if (td.classList.contains("table__td--title")) {
        editInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createBasicInput)(
          "table__edit-input",
          "text",
          "title",
          "edit-title"
        );
        editInput.setAttribute("placeholder", obj.title);
      } else if (td.classList.contains("table__td--details")) {
        editInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createTextArea)(
          "table__edit-input",
          "details",
          "edit-details"
        );
        editInput.textContent = obj.details;
      } 
      td.parentNode.replaceChild(editInput, td);
    });

    /* SUBMIT CHANGES BTN */
    let submitChangeBtn = document.querySelector(".submit-edit-btn");
    if (!submitChangeBtn) {
      submitChangeBtn = document.createElement("button");
      submitChangeBtn.textContent = "Submit";
      submitChangeBtn.classList.add("submit-edit-btn");
    }

    submitChangeBtn.addEventListener("click", () => {
      let editedInputs = document.querySelectorAll(" .table__edit-input");
      editedInputs.forEach((input) => {
        console.log(obj)
        if (input.getAttribute("name") == "title") {
          input.value == "" ?  obj.title : (obj.title = input.value);
        } else if (input.getAttribute("name") == "details") {
          console.log(input.value)
          obj.details = input.value;
        }
      });
      submitChangeBtn.remove();
      _main_pub_sub__WEBPACK_IMPORTED_MODULE_2__.displayMod.updateNotes();
    });
    noteDiv.appendChild(submitChangeBtn);
  });

  noteDiv.appendChild(editBtn);
  (0,_general_general_js_table__WEBPACK_IMPORTED_MODULE_0__.createTable)(obj, noteDiv)
  noteDisplay.appendChild(noteDiv);
}



function subRmvNoteDisplay() {
  while (noteDisplay.firstChild) {
    noteDisplay.removeChild(noteDisplay.lastChild);
  }
}






/***/ }),

/***/ "./src/main/display/__container/display__container--project.js":
/*!*********************************************************************!*\
  !*** ./src/main/display/__container/display__container--project.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectDisplay": () => (/* binding */ projectDisplay),
/* harmony export */   "subRmvProjectDisplay": () => (/* binding */ subRmvProjectDisplay),
/* harmony export */   "subRmvTasks": () => (/* binding */ subRmvTasks),
/* harmony export */   "subTaskListItem": () => (/* binding */ subTaskListItem),
/* harmony export */   "subscribeProject": () => (/* binding */ subscribeProject)
/* harmony export */ });
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");
/* harmony import */ var _general_general_js_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/general__js/_table */ "./src/general/general__js/_table.js");
/* harmony import */ var _general_general_js_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../general/general__js/_alert */ "./src/general/general__js/_alert.js");






const projectDisplay = document.createElement("div");
projectDisplay.classList.add(
  "display__container-project--hidden",
  "display__container-project"
);

function subscribeProject(obj) {
  let projectDiv = document.createElement("div");
  projectDiv.setAttribute("data-id", obj.id);
  /* delete button */
  if (obj.id !== 1) {
    //exemption for the general project
    let dltBtn = document.createElement("button");
    dltBtn.textContent = "x";
    dltBtn.setAttribute("type", "button");
    dltBtn.addEventListener("click", () => {
      if (obj.taskIdArr.length > 0) {
        let alert = (0,_general_general_js_alert__WEBPACK_IMPORTED_MODULE_3__.createAlert)(
          "There seem to be some unfinished tasks in this project. Are you sure you would like to delete it?"
        );
        let yesBtn = document.createElement("button");
        yesBtn.textContent = "Yes";
        yesBtn.addEventListener("click", () => {
          obj.removeByProject();
          obj.remove();
          alert.remove();
        });
        alert.appendChild(yesBtn);
        let noBtn = document.createElement("button");
        noBtn.textContent = "No";
        noBtn.addEventListener("click", () => {
          alert.remove();
        });
        alert.appendChild(noBtn);
      } else {
       obj.remove()

        obj.removeByProject();
      }
    });
    projectDiv.appendChild(dltBtn);
  }
  let heading = document.createElement("h3");
  heading.textContent = obj.title;
  projectDiv.appendChild(heading);
  let taskList = document.createElement("ul");
  taskList.classList.add(obj.title, "task-list");
  projectDiv.appendChild(taskList);
  projectDisplay.appendChild(projectDiv);
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.displayMod.update();
  console.log(_main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.displayMod)
}

function subRmvProjectDisplay() {
  while (projectDisplay.firstChild) {
    projectDisplay.removeChild(projectDisplay.lastChild);
  }
}

/* Removes Tasks Items when */
function subRmvTasks() {
  let taskList = document.querySelectorAll(".task-list");
  taskList.forEach((listItem) => {
    while (listItem.firstChild) {
      listItem.removeChild(listItem.lastChild);
    }
  });
}

function subTaskListItem(obj) {
  console.log(obj);
  let taskList = document.querySelector("." + obj.project);

  if (taskList) {
    taskList.setAttribute("data-id", obj.id);
  } else {
    return;
  }

  let completeInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createBasicInput)(
    "project-div__done-input",
    "checkbox",
    "complete-input",
    "complete-input"
  ); //finished checkbox
  //maybe add delete button for project here too?
  let listItem = document.createElement("li");
  listItem.setAttribute("data-li-id", obj.id);
  completeInput.addEventListener("click", () => {
    obj.complete();
    obj.status == "complete" ? obj.removeTaskFromProjectIdArr() : obj.pushId();
    let taskTable = document.querySelectorAll(
      `li[data-li-id = "${obj.id}"] th,li[data-li-id = "${obj.id}"] td`
    );
    taskTable.forEach((element) => {
      element.classList.toggle("complete");
    });
  });
  listItem.appendChild(completeInput);
  (0,_general_general_js_table__WEBPACK_IMPORTED_MODULE_2__.createTable)(obj, listItem);

  listItem.addEventListener("click", () => {
    let hiddenRows = document.querySelectorAll(
      `li[data-li-id = "${obj.id}"] tr:not(:first-child)`
    );
    hiddenRows.forEach((row) => {
      row.classList.toggle("hidden");
    });
  });

  taskList.appendChild(listItem);
  let hiddenRows = document.querySelectorAll(".task-list tr:not(:first-child)");
  hiddenRows.forEach((row) => {
    row.classList.add("hidden");
  });
}




/***/ }),

/***/ "./src/main/display/__container/display__container--task.js":
/*!******************************************************************!*\
  !*** ./src/main/display/__container/display__container--task.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subCompleteTask": () => (/* binding */ subCompleteTask),
/* harmony export */   "subRmvTaskContainer": () => (/* binding */ subRmvTaskContainer),
/* harmony export */   "subscribeTask": () => (/* binding */ subscribeTask),
/* harmony export */   "taskDisplay": () => (/* binding */ taskDisplay)
/* harmony export */ });
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");
/* harmony import */ var _general_general_js_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../general/general__js/_table */ "./src/general/general__js/_table.js");
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/endOfWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");






const taskDisplay = document.createElement("div");
taskDisplay.classList.add(
  "display__container-task"
);

/* SORT BUTTON */
let sortDiv = document.createElement("div");
let sort = document.createElement("select");
let sortPlaceholder = document.createElement("option");
sortPlaceholder.setAttribute("disabled", "");
sortPlaceholder.setAttribute("selected", "");
sortPlaceholder.setAttribute("value", " ");
sortPlaceholder.textContent = "Sort";
sort.appendChild(sortPlaceholder);

let sortPriorityDescending = document.createElement("option");

sortPriorityDescending.textContent = "Most Important";
sortPriorityDescending.setAttribute("value", "most");

let sortPriorityAscending = document.createElement("option");

sortPriorityAscending.textContent = "Least Important";
sortPriorityAscending.setAttribute("value", "least");

let sortDateAscending = document.createElement("option");
sortDateAscending.textContent = "Date (Ascending)";
sortDateAscending.setAttribute("value", "date-ascending");

let sortDateDescending = document.createElement("option");
sortDateDescending.textContent = "Date (Descending)";
sortDateDescending.setAttribute("value", "date-descending");

sort.addEventListener("click", () => {
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.displayMod.updateSorted(sort.value)
});

sort.appendChild(sortPriorityDescending);
sort.appendChild(sortPriorityAscending);
sort.appendChild(sortDateAscending);
sort.appendChild(sortDateDescending);
sortDiv.appendChild(sort);
taskDisplay.appendChild(sortDiv);

/* Complete Display button */
const completeDiv = document.createElement("div");
const completeDisplayBtn = document.createElement("button");
completeDisplayBtn.setAttribute("type", "button");
completeDisplayBtn.textContent = "COMPLETE"; // change to check svg later;
completeDisplayBtn.addEventListener("click", () => {
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.displayMod.updateComplete()
});
completeDiv.appendChild(completeDisplayBtn);
taskDisplay.appendChild(completeDiv);

/* TASK CONTAINER */
const taskContainer = document.createElement("div");
taskDisplay.appendChild(taskContainer);

/* Might have to make a separate subscribe for complete tasks */

function priorityColorSwitch(element, obj) {
  switch (obj.priority) {
    case "high":
      element.classList.add("priority-high");
      break;
    case "medium":
      element.classList.add("priority-medium");
      break;
    case "low":
      element.classList.add("priority-low");
  }
}
function subCompleteTask(obj) {
  let taskDiv = document.createElement("div");
  taskDiv.setAttribute("data-id", obj.id);
  let completeInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createBasicInput)(
    "task-div__done-input",
    "checkbox",
    "complete-input",
    "complete-input"
  );
  completeInput.setAttribute("checked", "");
  completeInput.addEventListener("click", () => {
    obj.complete();
    let taskTable = document.querySelectorAll(
      `div[data-id="${obj.id}"] th, div[data-id="${obj.id}"] td`
    );
    taskTable.forEach((element) => {
      element.classList.toggle("complete");
    });
  });

  taskDiv.appendChild(completeInput);
  (0,_general_general_js_table__WEBPACK_IMPORTED_MODULE_1__.createTable)(obj, taskDiv);

  taskContainer.appendChild(taskDiv);
  let allRows = document.querySelectorAll("th, td");
  allRows.forEach((row) => {
    row.classList.add("complete");
  });
}

function subscribeTask(obj) {
  let taskDiv = document.createElement("div");
  taskDiv.setAttribute("data-id", obj.id);

  taskDiv.setAttribute("data-date", obj.date);
  priorityColorSwitch(taskDiv, obj);
  /* Complete checkbox */
  let completeInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createBasicInput)(
    "task-div__done-input",
    "checkbox",
    "complete-input",
    "complete-input"
  );

  completeInput.addEventListener("click", () => {
    obj.complete();
    obj.status == "complete" ? obj.removeTaskFromProjectIdArr() : obj.pushId();
    let taskTable = document.querySelectorAll(
      `div[data-id="${obj.id}"] th, div[data-id="${obj.id}"] td`
    );

    taskTable.forEach((element) => {
      element.classList.toggle("complete");
    });
    editBtn.classList.toggle("hidden");
  });

  taskDiv.appendChild(completeInput);

  /* DELETE BUTTON */
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "x";
  dltBtn.setAttribute("type", "button");
  dltBtn.addEventListener("click", () => {
    obj.remove();
    obj.removeTaskFromProjectIdArr();
  });
  taskDiv.appendChild(dltBtn);

  /*EDIT BUTTON*/
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.setAttribute("type", "button");

  /*Have to create labels and hide them for accessibility ??*/

  editBtn.addEventListener("click", () => {
    let tableData = document.querySelectorAll(
      `.display__container-task [data-id="${obj.id}"] .table__td`
    );
    //let table = document.querySelector(`[data-id="${obj.id}"] table`) //Do I really need this?
    tableData.forEach(function (td) {
      let editInput;

      if (td.classList.contains("table__td--title")) {
        editInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createBasicInput)(
          "table__edit-input",
          "text",
          "title",
          "edit-title"
        );
        editInput.setAttribute("placeholder", obj.title);
      } else if (td.classList.contains("table__td--details")) {
        editInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createTextArea)(
          "table__edit-input",
          "details",
          "edit-details"
        );
        editInput.textContent = obj.details;
      } else if (td.classList.contains("table__td--date")) {
        editInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createBasicInput)(
          "table__edit-input",
          "date",
          "date",
          "edit-date"
        );
        editInput.setAttribute("placeholder", obj.date);
      } else if (td.classList.contains("table__td--priority")) {
        editInput = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.textContent = "Priority";
        editInput.appendChild(legend);
        let low = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createRadioInput)("low", "edit-btn__input--radio");
        let medium = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createRadioInput)("medium", "edit-btn__input--radio");
        let high = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createRadioInput)("high", "edit-btn__input--radio");
        (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.appendRadioInputs)(editInput, [low, medium, high]);
      }

      td.parentNode.replaceChild(editInput, td);
    });
    /* SUBMIT CHANGES BTN */
    let submitChangeBtn = document.querySelector(".submit-edit-btn");
    if (!submitChangeBtn) {
      submitChangeBtn = document.createElement("button");
      submitChangeBtn.textContent = "Submit";
      submitChangeBtn.classList.add("submit-edit-btn");
    }

    submitChangeBtn.addEventListener("click", () => {
      let editedInputs = document.querySelectorAll(" .table__edit-input");
      editedInputs.forEach((input) => {
        console.log(obj)
        if (input.getAttribute("name") == "title") {
          input.value == "" ?  obj.title : (obj.title = input.value);
        } else if (input.getAttribute("name") == "details") {
          console.log(input.value)
          obj.details = input.value;
        } else if (input.getAttribute("name") == "date") {
          if (input.value !== "") {
            let dateProcessed = new Date(input.value);
            dateProcessed = dateProcessed.toISOString().split("T")[0];
            obj.date = dateProcessed;
          }
        }
      });
      let editedPriorityInput = document.querySelector(
        ".edit-btn__input--radio:checked"
      );
      editedPriorityInput == null
        ? obj.priority
        : (obj.priority = editedPriorityInput.value);
      submitChangeBtn.remove();
      _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.displayMod.update();
    });
    taskDiv.appendChild(submitChangeBtn);
  });

  taskDiv.appendChild(editBtn);
  (0,_general_general_js_table__WEBPACK_IMPORTED_MODULE_1__.createTable)(obj, taskDiv);

  //Date Ascending Display
  if (sort.value == "date-ascending") {
    let currentDate = new Date();
    currentDate = currentDate.toISOString().split("T")[0]; /* 
    currentDate = currentDate.split("-").reverse().join("-"); */
    let lastWeekDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), { weekStartsOn: 1 });

    if (taskDiv.getAttribute("data-date") == "") {
      //if date was not provided
      let noDateDiv = document.querySelector(".task-container__div--no-date");
      if (!noDateDiv) {
        noDateDiv = document.createElement("div");
        noDateDiv.setAttribute("style", "background-color: pink; order:0");
        noDateDiv.classList.add("task-container__div--no-date");
        let noDateHeading = document.createElement("h1");
        noDateHeading.textContent = "Undated";
        noDateDiv.appendChild(noDateHeading);
      }
      noDateDiv.appendChild(taskDiv);
      return taskContainer.appendChild(noDateDiv);
    } else if (
      (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(
        (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(taskDiv.getAttribute("data-date")),
        (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(currentDate)
      )
    ) {
      let overdueDiv = document.querySelector(".task-container__div--overdue");
      if (!overdueDiv) {
        overdueDiv = document.createElement("div");
        overdueDiv.setAttribute("style", "background-color: orange; order:4");
        overdueDiv.classList.add("task-container__div--overdue");
        let overdueHeading = document.createElement("h1");
        overdueHeading.textContent = "Overdue";
        overdueDiv.appendChild(overdueHeading);
      }
      overdueDiv.appendChild(taskDiv);
      return taskContainer.appendChild(overdueDiv);
    } else if (taskDiv.getAttribute("data-date") == currentDate) {
      //if date is today
      let todayDiv = document.querySelector(".task-container__div--today");
      if (!todayDiv) {
        todayDiv = document.createElement("div");
        todayDiv.setAttribute("style", "background-color: green; order:3");
        todayDiv.classList.add("task-container__div--today");
        let todayHeading = document.createElement("h1");
        todayHeading.textContent = "Today";
        todayDiv.appendChild(todayHeading);
      }
      todayDiv.appendChild(taskDiv);
      return taskContainer.appendChild(todayDiv);
    } else if (
      (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(taskDiv.getAttribute("data-date")), lastWeekDay)
    ) {
      let weekDiv = document.querySelector(".task-container__div--week");
      if (!weekDiv) {
        weekDiv = document.createElement("div");
        weekDiv.setAttribute("style", "background-color: purple; order:2");
        weekDiv.classList.add("task-container__div--week");
        let weekHeading = document.createElement("h1");
        weekHeading.textContent = "This Week";
        weekDiv.appendChild(weekHeading);
      }
      weekDiv.appendChild(taskDiv);
      return taskContainer.appendChild(weekDiv);
    } else if (
      (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(taskDiv.getAttribute("data-date")), lastWeekDay)
    ) {
      let upcomingDiv = document.querySelector(
        ".task-container__div--upcoming"
      );
      if (!upcomingDiv) {
        upcomingDiv = document.createElement("div");
        upcomingDiv.setAttribute("style", "background-color: blue; order: 1");
        upcomingDiv.classList.add("task-container__div--upcoming");
        let upcomingHeading = document.createElement("h1");
        upcomingHeading.textContent = "Upcoming";
        upcomingDiv.appendChild(upcomingHeading);
      }
      upcomingDiv.appendChild(taskDiv);
      return taskContainer.appendChild(upcomingDiv);
    }
  }

  taskContainer.appendChild(taskDiv);
}

function subRmvTaskContainer() {
  while (taskContainer.firstChild) {
    taskContainer.removeChild(taskContainer.lastChild);
  }
}




/***/ }),

/***/ "./src/main/display/__side/display__side.js":
/*!**************************************************!*\
  !*** ./src/main/display/__side/display__side.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createListItem": () => (/* binding */ createListItem),
/* harmony export */   "nav": () => (/* binding */ nav)
/* harmony export */ });

const nav = document.createElement("nav");
nav.classList.add("display__nav")
const navList = document.createElement("ul");
navList.classList.add("nav__list", "c-nav__list")

function createListItem(text) {
  let listItem = document.createElement("li");
  listItem.classList.add("nav__list-item", "c-nav__list-item")
  let span = document.createElement("span");
  span.textContent = text;
  listItem.appendChild(span);
  navList.appendChild(listItem)
  return listItem;
}

nav.appendChild(navList)









/***/ }),

/***/ "./src/main/display/display.js":
/*!*************************************!*\
  !*** ./src/main/display/display.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "display": () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _side_display_side__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__side/display__side */ "./src/main/display/__side/display__side.js");
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-pub-sub */ "./src/main/main-pub-sub.js");
/* harmony import */ var _container_display_container_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./__container/display__container--task */ "./src/main/display/__container/display__container--task.js");
/* harmony import */ var _container_display_container_note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./__container/display__container--note */ "./src/main/display/__container/display__container--note.js");
/* harmony import */ var _container_display_container_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./__container/display__container--project */ "./src/main/display/__container/display__container--project.js");
/* harmony import */ var _modal_search_modal_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/__search/modal__search */ "./src/main/modal/__search/modal__search.js");


/* Display Containers */





const display = document.createElement("div");

const sideNav = document.createElement("div");
sideNav.appendChild(_side_display_side__WEBPACK_IMPORTED_MODULE_0__.nav);

let displayContainer = document.createElement("div");
displayContainer.classList.add("display__container");
let displayContent = document.createElement("div");
displayContent.classList.add("display__content");

displayContent.appendChild(_container_display_container_task__WEBPACK_IMPORTED_MODULE_2__.taskDisplay);
displayContent.appendChild(_container_display_container_note__WEBPACK_IMPORTED_MODULE_3__.noteDisplay);
displayContent.appendChild(_container_display_container_project__WEBPACK_IMPORTED_MODULE_4__.projectDisplay);

/* SHOULD REFORMAT THIS */

const home = _side_display_side__WEBPACK_IMPORTED_MODULE_0__.createListItem("Home");
const project = _side_display_side__WEBPACK_IMPORTED_MODULE_0__.createListItem("Projects");
const note = _side_display_side__WEBPACK_IMPORTED_MODULE_0__.createListItem("Notes");

home.addEventListener("click", () => {
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.displayMod.update();
  _container_display_container_note__WEBPACK_IMPORTED_MODULE_3__.noteDisplay.classList.add("display__container-note--hidden");
  _container_display_container_project__WEBPACK_IMPORTED_MODULE_4__.projectDisplay.classList.add("display__container-project--hidden");
  _container_display_container_task__WEBPACK_IMPORTED_MODULE_2__.taskDisplay.classList.remove("display__container-task--hidden");
});

note.addEventListener("click", () => {
  _container_display_container_note__WEBPACK_IMPORTED_MODULE_3__.noteDisplay.classList.remove("display__container-note--hidden");
  _container_display_container_project__WEBPACK_IMPORTED_MODULE_4__.projectDisplay.classList.add("display__container-project--hidden");
  _container_display_container_task__WEBPACK_IMPORTED_MODULE_2__.taskDisplay.classList.add("display__container-task--hidden");
});

project.addEventListener("click", () => {
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.displayMod.update();
  _container_display_container_note__WEBPACK_IMPORTED_MODULE_3__.noteDisplay.classList.add("display__container-note--hidden");
  _container_display_container_project__WEBPACK_IMPORTED_MODULE_4__.projectDisplay.classList.remove("display__container-project--hidden");
  _container_display_container_task__WEBPACK_IMPORTED_MODULE_2__.taskDisplay.classList.add("display__container-task--hidden");
  let hiddenRows = document.querySelectorAll(".task-list tr:not(:first-child)");
  hiddenRows.forEach((row) => {
    row.classList.add("hidden");
  });
});

_modal_search_modal_search__WEBPACK_IMPORTED_MODULE_5__.searchInput.addEventListener("input", () => {
  _container_display_container_note__WEBPACK_IMPORTED_MODULE_3__.noteDisplay.classList.add("display__container-note--hidden");
  _container_display_container_project__WEBPACK_IMPORTED_MODULE_4__.projectDisplay.classList.add("display__container-project--hidden");
  _container_display_container_task__WEBPACK_IMPORTED_MODULE_2__.taskDisplay.classList.remove("display__container-task--hidden");
});

displayContainer.appendChild(displayContent);
display.appendChild(sideNav);
display.appendChild(displayContainer);




/***/ }),

/***/ "./src/main/main-pub-sub.js":
/*!**********************************!*\
  !*** ./src/main/main-pub-sub.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteConstructor": () => (/* binding */ NoteConstructor),
/* harmony export */   "ProjectConstructor": () => (/* binding */ ProjectConstructor),
/* harmony export */   "TaskConstructor": () => (/* binding */ TaskConstructor),
/* harmony export */   "displayMod": () => (/* binding */ displayMod)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../general/general__js/pub-sub */ "./src/general/general__js/pub-sub.js");
/* harmony import */ var _display_container_display_container_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/__container/display__container--note */ "./src/main/display/__container/display__container--note.js");
/* harmony import */ var _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/__container/display__container--project */ "./src/main/display/__container/display__container--project.js");
/* harmony import */ var _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/__container/display__container--task */ "./src/main/display/__container/display__container--task.js");
/* harmony import */ var _modal_form_modal_form_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/__form/modal__form--task */ "./src/main/modal/__form/modal__form--task.js");







//PUBSUB OBJ

let pubSubNotes = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();
let pubSubProjects = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();
let pubSubTasks = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();


/* OBJECT CLASS */
/* holds an array of all the objects. The objIdGen is used to assign unique ids to each obj */
class ObjectArrClass {
  objArr = [];
  objIdGen = 0;

  get objArr() {
    return this.objArr;
  }

  set objArr(arr) {
    if (!Array.isArray(arr)) {
      return alert("Not an array");
    }
    return (this.objArr = arr);
  }

  push(obj) {
    this.objArr.push(obj);
  }

  remove(index) {
    this.objArr.splice(index, 1);
  }
  
}

class TaskObjectArrClass extends ObjectArrClass {
  customSort(value) {
    if (value == "most") {
      this.objArr.sort(function (a, b) {
        return b.countPriority() - a.countPriority();
      });
    } else if (value == "least") {
      this.objArr.sort(function (a, b) {
        return a.countPriority() - b.countPriority();
      });
    } else if (value == "date-ascending") {
      this.objArr.sort(function (a,b) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(a.date), (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(b.date))
      });
    }  else if (value == "date-descending") {
      this.objArr.sort(function (a,b) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(b.date), (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(a.date))
      });
    }
  }
} 


let projects = new ObjectArrClass();
let tasks = new TaskObjectArrClass();
let notes = new ObjectArrClass();


/* DISPLAY MODIFIER */
//need to add note update made out of clear and displayNotes



let displayMod = (() => { 
  function _clear() {
    pubSubTasks.publish("clear", true);
  }
 function _displayTasks() {
    tasks.objArr.forEach((object) => {
      if (object.status == "complete") {
      } else {
        object.publish();
      }
    });
  }
 function update() {
    _clear();
    _displayTasks();
  };

  function _clearNotes() {
    pubSubNotes.publish("clear", true);
  }

  function _displayNotes() {
    notes.objArr.forEach((object) => {
      object.publish();
    })
  }

  function updateNotes() {
    _clearNotes();
    _displayNotes();
  }

  function _clearProjects() {
    pubSubProjects.publish("clear", true);
  }
  function _displayProjects() {
    projects.objArr.forEach((object) => {
    object.publish();
    });
  }
  function updateProjects() {
    _clearProjects();
    _displayProjects();
  }

  function _displaySearchedTasks(searchValue) {
    tasks.objArr.forEach((object) => {
      let published;
      for (const [key, value] of Object.entries(object)) {
        if ( key == "id", key == "status", key== "type" ) {
          continue;
        } else {
          let found = value.toString().toUpperCase().includes(searchValue.toUpperCase());
          if (found && !published) {
            object.publish(object);
            published = true;
          } 
        }
      }
    })
  }
  function updateSearch(searchValue) {
    _clear();
    _displaySearchedTasks(searchValue)
  }

  function _displayCompleteTasks() {
    tasks.objArr.forEach((object) => {
      if (object.status == "complete") {
        object.publishComplete();
      }})
  }
  function updateComplete() {
    _clear()
    _displayCompleteTasks()
  }

  function _sortTasks(value) {
    tasks.customSort(value);
  }
 function updateSorted (value) {
  _sortTasks(value);
  _clear()
  _displayTasks();
};

 return {
  update,
  updateProjects,
  updateSearch,
  updateComplete,
  updateSorted,
  updateNotes
 }
})() 


/* Object Constructor (Prototype for project and task constructors*/
function ObjectConstructor() {
}

ObjectConstructor.prototype.publish = function () {
  switch (this.type) {
    case "project":
      pubSubProjects.publish("display", this);
      break;
    case "task":
      pubSubTasks.publish("display", this);
      break;
    case "note":
      pubSubNotes.publish("display", this)
  }
};

ObjectConstructor.prototype.displayAll = function () {
  switch (this.type) {
    case "project":
      pubSubProjects.publish("clear", true);
      projects.push(this); 
      projects.objArr.forEach((object) =>{
        object.publish();
      })
      break;
    case "task":
      pubSubTasks.publish("clear", true);
      tasks.push(this);
    
      tasks.objArr.forEach((object) => {
        if (object.status == "complete") {
        } else {
          object.publish();
        } 
      })
      break;
    case "note":
      pubSubNotes.publish("clear", true);
      notes.push(this);
      notes.objArr.forEach((object) => {
        object.publish()
      })
  }
};

ObjectConstructor.prototype.remove = function() {
  let indexOfMatch;
  switch (this.type) {
    case "project":
      indexOfMatch = projects.objArr.findIndex((obj) => {
        return obj.id === this.id ? true : false;
      });
      projects.remove(indexOfMatch);
      displayMod.updateProjects();
      break;
    case "task":
      indexOfMatch = tasks.objArr.findIndex((obj) => {
        return obj.id === this.id ? true : false;
      });
      tasks.remove(indexOfMatch);
      displayMod.update();
      break;
    case "note":
      indexOfMatch = notes.objArr.findIndex((obj) => {
        return obj.id === this.id ? true : false;
      });
      notes.remove(indexOfMatch);
      displayMod.updateNotes();
  }
};

//Project Constructor
function ProjectConstructor(title) {
  this.title = title; 
  this.id = projects.objIdGen += 1;
  this.type = "project";
  this.taskIdArr = [];
}

ProjectConstructor.prototype = Object.create(ObjectConstructor.prototype);

ProjectConstructor.prototype.removeByProject = function() {
  this.taskIdArr.forEach((element) => {
    let removeIndex = tasks.objArr.findIndex(task => task.id == element);
    tasks.objArr.splice(removeIndex, 1);
  })
};


/* Task Constructor */

function TaskConstructor(title, details, date, priority, project) {
  this.title = title;
  this.details = details;
  this.date = date;
  this.priority = priority;
  this.project = project;
  this.type = "task";
  this.status = "active";
  this.id = tasks.objIdGen += 1;
}

TaskConstructor.prototype = Object.create(ObjectConstructor.prototype);

TaskConstructor.prototype.removeTaskFromProjectIdArr = function () { 
  let projectObject = projects.objArr.find(project => project.title == this.project);
  let indexNum = projectObject.taskIdArr.findIndex(id => id == this.id );
  projectObject.taskIdArr.splice(indexNum, 1);
}

TaskConstructor.prototype.pushId = function() {
  let projectObject = projects.objArr.find(project => project.title == this.project)
  projectObject.taskIdArr.push(this.id);
}

TaskConstructor.prototype.complete = function () {
  return (this.status == "active") ? (this.status = "complete"): (this.status = "active");
}

TaskConstructor.prototype.countPriority = function () {
  switch (this.priority) {
    case "low":
      return 1;
      break;
    case "medium":
      return 2;
      break;
    case "high":
      return 3;
      break;
    default:
      return 0;
  }
};

TaskConstructor.prototype.publishComplete = function() {
  pubSubTasks.publish("displayComplete", this);
}



/* Note Constructor */

function NoteConstructor(title, details) {
  this.title = title;
  this.details = details;
  this.type = "note";
  this.id = notes.objIdGen += 1;
}

NoteConstructor.prototype = Object.create(ObjectConstructor.prototype);

/* NoteConstructor.prototype.publish = function () {
  pubSubNotes.publish("note", { title: this.title, details: this.details });
  console.log(not)
}; */


console.log(pubSubTasks);
/* Subscribers */
pubSubProjects.subscribe("display", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subscribeProject);

pubSubProjects.subscribe("display", _modal_form_modal_form_task__WEBPACK_IMPORTED_MODULE_4__.subSelectProjectInput);
pubSubNotes.subscribe("display", _display_container_display_container_note__WEBPACK_IMPORTED_MODULE_1__.subscribeNote);
pubSubNotes.subscribe("clear", _display_container_display_container_note__WEBPACK_IMPORTED_MODULE_1__.subRmvNoteDisplay);


pubSubTasks.subscribe("display", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subscribeTask);
pubSubTasks.subscribe("display", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subTaskListItem);
pubSubTasks.subscribe("clear", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subRmvTaskContainer);
pubSubTasks.subscribe("clear", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subRmvTasks);
pubSubTasks.subscribe("displayComplete", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subCompleteTask); 


pubSubProjects.subscribe("clear", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subRmvProjectDisplay);
pubSubProjects.subscribe("clear", _modal_form_modal_form_task__WEBPACK_IMPORTED_MODULE_4__.subClearSelectOptions);




/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainDiv": () => (/* binding */ mainDiv)
/* harmony export */ });
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modal */ "./src/main/modal/modal.js");
/* harmony import */ var _modal_search_modal_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/__search/modal__search */ "./src/main/modal/__search/modal__search.js");
/* harmony import */ var _display_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/display */ "./src/main/display/display.js");




const mainDiv = document.querySelector("main");
mainDiv.classList.add("main");

/* display form modal button */
const displayFormModal = document.createElement("button");
displayFormModal.setAttribute("type", "button");
displayFormModal.textContent = "+";
displayFormModal.classList.add("main__display-form-btn", "c-main__display-form-btn");
displayFormModal.addEventListener("click", () => {
  _modal_modal__WEBPACK_IMPORTED_MODULE_0__.modal.classList.remove("main__modal--hidden");
  _modal_modal__WEBPACK_IMPORTED_MODULE_0__.modal.setAttribute("style", "animation-name : swirl-in-fwd; animation-duration: 0.5s");
  

});
/*display search modal button*/
const displaySearchModal = document.createElement("button");
displaySearchModal.setAttribute("type", "button");
displaySearchModal.classList.add("main__display-search-btn", "c-main__display-search-btn");


displaySearchModal.addEventListener("click", () => {

  _modal_search_modal_search__WEBPACK_IMPORTED_MODULE_1__.searchModal.classList.remove("main__search-modal--hidden");
  _modal_search_modal_search__WEBPACK_IMPORTED_MODULE_1__.searchModal.setAttribute("style", "animation-name : swing-in-left; animation-duration: 0.5s");
 
  _modal_search_modal_search__WEBPACK_IMPORTED_MODULE_1__.searchInput.focus();
 
});



mainDiv.appendChild(_display_display__WEBPACK_IMPORTED_MODULE_2__.display);
mainDiv.appendChild(displayFormModal);
mainDiv.appendChild(displaySearchModal)
mainDiv.appendChild(_modal_modal__WEBPACK_IMPORTED_MODULE_0__.modal);
mainDiv.appendChild(_modal_search_modal_search__WEBPACK_IMPORTED_MODULE_1__.searchModal);




/***/ }),

/***/ "./src/main/modal/__form/modal__form--note.js":
/*!****************************************************!*\
  !*** ./src/main/modal/__form/modal__form--note.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noteForm": () => (/* binding */ noteForm)
/* harmony export */ });
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");



const noteForm = document.createElement("form");

/* inputs */
const noteTitle = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)(
  "form__input",
  "text",
  "note-title",
  "note-title"
);
const noteTitleLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(noteTitle, "Title:");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(noteForm, noteTitleLabel, noteTitle);

const note = document.createElement("textarea");
note.setAttribute("id", "note");
note.setAttribute("name", "note");

const noteLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(note, "Details");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(noteForm, noteLabel, note);

/* "submit" button */
const submit = document.createElement("button");
submit.setAttribute("type", "reset"); /* maybe clear instead*/
submit.textContent = "Create Note";
noteForm.appendChild(submit);

/* PUBSUB */

function publishNote() {
  let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.NoteConstructor(noteTitle.value, note.value);
  obj.displayAll();
}

submit.addEventListener("click", publishNote);




/***/ }),

/***/ "./src/main/modal/__form/modal__form--project.js":
/*!*******************************************************!*\
  !*** ./src/main/modal/__form/modal__form--project.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectForm": () => (/* binding */ projectForm)
/* harmony export */ });
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");
/* harmony import */ var _general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/general__js/_alert */ "./src/general/general__js/_alert.js");




const projectForm = document.createElement("form");

/* inputs */
const project = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)(
  "form__input",
  "text",
  "project-title",
  "project"
);
const label = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(project, "Title:");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(projectForm, label, project);

/* "submit" button */
const submit = document.createElement("button");
submit.setAttribute("type", "reset");
submit.textContent = "Create Project";
projectForm.appendChild(submit);

function displayProjects() {
  if (!project.value) {
    (0,_general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__.createAlert)("Please provide a name for your project!")
  } else {
    let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.ProjectConstructor(project.value);
    obj.displayAll();
  }
}
let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.ProjectConstructor("general");
obj.displayAll();

submit.addEventListener("click", displayProjects);




/***/ }),

/***/ "./src/main/modal/__form/modal__form--task.js":
/*!****************************************************!*\
  !*** ./src/main/modal/__form/modal__form--task.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subClearSelectOptions": () => (/* binding */ subClearSelectOptions),
/* harmony export */   "subSelectProjectInput": () => (/* binding */ subSelectProjectInput),
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");
/* harmony import */ var _general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/general__js/_alert */ "./src/general/general__js/_alert.js");
/* TO DO FORM */




/* 
format(new Date(2014, 1, 11), "yyyy-MM-dd"); */


let taskForm = document.createElement("form");
taskForm.classList.add("form");

let title = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)("form__input", "text", "title", "title");
title.setAttribute("placeholder", "Title: Groceries");
title.classList.add("form__input--text");
let titleLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(title, "Title");
titleLabel.classList.add("form__label--hidden");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(taskForm, titleLabel, title);


let textArea = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createTextArea)("form__input--textArea", "textArea", "textArea")
textArea.classList.add( /* are these necessary?? */
  "form__input--text",
  "form-input"
);
textArea.setAttribute("placeholder", "2 potatoes");

let textAreaLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(textArea, "Details");
textAreaLabel.classList.add("form__label--hidden");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(taskForm, textAreaLabel, textArea);

let div = document.createElement("div");
let date = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)("form__input", "date", "date", "date");
let dateLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(date, "Due date:");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(div, dateLabel, date);
taskForm.appendChild(div);

/* SELECT PROJECT */
const selectProject = document.createElement("select");
selectProject.setAttribute("id", "select-project");
selectProject.setAttribute("name", "project");

/* clears the select options at the same time as the project display is cleared */
function subClearSelectOptions() {
  while (selectProject.firstChild) {
    selectProject.removeChild(selectProject.lastChild);
  }
}

/* updates the select options when new projects are added */
function subSelectProjectInput(obj) {
  const option = document.createElement("option");
  option.setAttribute("value", obj.title);
  option.textContent = obj.title;
  selectProject.appendChild(option);
}

const selectLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(selectProject, "Project");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(taskForm, selectLabel, selectProject);

/*RADIO BUTTONS*/
let fieldset = document.createElement("fieldset");
let legend = document.createElement("legend");
legend.textContent = "Priority";
fieldset.appendChild(legend);


let priorityLow = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createRadioInput)("low", "form__input");
let priorityMedium = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createRadioInput)("medium", "form__input");
let priorityHigh = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createRadioInput)("high", "form__input");




(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendRadioInputs)(fieldset, [priorityLow, priorityMedium, priorityHigh]);

taskForm.appendChild(fieldset);

let submit = document.createElement("button");

submit.textContent = "Create Task";
submit.setAttribute("type", "button");
taskForm.appendChild(submit);

 
function checkDate() {
  let dateProcessed = new Date(date.value);
  if (date.value) {
    dateProcessed = dateProcessed.toISOString().split("T")[0];
    
  }
  return (!date.value ) ? "" : dateProcessed;
}

function displayTasks() {
  submit.setAttribute("type", "button");
  let radio = document.querySelector("input:checked");
  if (!title.value) {
    return (0,_general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__.createAlert)("Please create a title for your task!");
  }
  if (!radio) {
   return (0,_general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__.createAlert)("Please select a priority for your task!");
  }

  
  submit.setAttribute("type", "reset");
  let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.TaskConstructor(
    title.value,
    textArea.value,
    checkDate(),
    radio.value,
    selectProject.value
  );
  obj.pushId();
  obj.displayAll();
}

submit.addEventListener("click", displayTasks);




/***/ }),

/***/ "./src/main/modal/__search/modal__search.js":
/*!**************************************************!*\
  !*** ./src/main/modal/__search/modal__search.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchInput": () => (/* binding */ searchInput),
/* harmony export */   "searchModal": () => (/* binding */ searchModal)
/* harmony export */ });
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");



/* search modal */
let searchModal = document.createElement("div");
searchModal.classList.add("main__search-modal--hidden", "p-main__search-modal", "main__search-modal");


/* search form */
let searchForm = document.createElement("form");
let searchInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)("search-modal__input", "text", "search", "search");
searchInput.setAttribute("placeholder", "Search")
searchInput.setAttribute("autocomplete", "off")

let searchLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(searchInput, "Search");
searchLabel.classList.add("search-modal__label")
;(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(searchForm, searchLabel, searchInput);

searchInput.addEventListener("input", ()=> {
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.displayMod.updateSearch(searchInput.value);
})

function hide() {
  searchModal.classList.add("main__search-modal--hidden")
}

/* search modal hides when click outside of it */
document.addEventListener("click", function (event) {
  if (!event.target.closest(".main__search-modal")&& !event.target.matches(".main__display-search-btn")  && (searchModal.classList.contains("main__search-modal--hidden")== false)) {
    searchModal.setAttribute("style", "animation-name : swing-out-left; animation-duration: 0.5s");
    searchInput.value = "";
    setTimeout(hide, 500) 
  } 
}) 

searchModal.appendChild(searchForm);





/***/ }),

/***/ "./src/main/modal/__side/modal__side.js":
/*!**********************************************!*\
  !*** ./src/main/modal/__side/modal__side.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noteButton": () => (/* binding */ noteButton),
/* harmony export */   "projectButton": () => (/* binding */ projectButton),
/* harmony export */   "sideDiv": () => (/* binding */ sideDiv),
/* harmony export */   "taskButton": () => (/* binding */ taskButton)
/* harmony export */ });
let sideDiv = document.createElement("div");
sideDiv.classList.add("modal__side", "p-modal__side");

let taskButton = document.createElement("button");
taskButton.setAttribute("type", "button");
taskButton.textContent = 'TASK';
taskButton.classList.add("modal__side-btn")

let projectButton = document.createElement("button");
projectButton.setAttribute("type", "button");
projectButton.textContent = "PROJECT";

projectButton.classList.add("modal__side-btn")

let noteButton = document.createElement("button");
noteButton.setAttribute("type", "button");
noteButton.textContent = "NOTE";
noteButton.classList.add("modal__side-btn")


sideDiv.appendChild(taskButton)

sideDiv.appendChild(projectButton)

sideDiv.appendChild(noteButton)

 

/***/ }),

/***/ "./src/main/modal/modal.js":
/*!*********************************!*\
  !*** ./src/main/modal/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modal": () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var _side_modal_side__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__side/modal__side */ "./src/main/modal/__side/modal__side.js");
/* harmony import */ var _form_modal_form_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./__form/modal__form--task */ "./src/main/modal/__form/modal__form--task.js");
/* harmony import */ var _form_modal_form_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./__form/modal__form--project */ "./src/main/modal/__form/modal__form--project.js");
/* harmony import */ var _form_modal_form_note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./__form/modal__form--note */ "./src/main/modal/__form/modal__form--note.js");

 
 


let modal = document.createElement("div")
modal.classList.add("modal", "p-main__modal");

let closeBtn = document.createElement("button");
closeBtn.setAttribute("type", "button");
closeBtn.setAttribute("style", "position:absolute") /* has to be moved to scss!!! */
closeBtn.textContent = "x";
modal.appendChild(closeBtn);

function hideModal() {
  removeForm();
  formContainer.appendChild(_form_modal_form_task__WEBPACK_IMPORTED_MODULE_1__.taskForm);
  modal.classList.add("main__modal--hidden");
} 
closeBtn.addEventListener("click", hideModal)

/* side */
modal.appendChild(_side_modal_side__WEBPACK_IMPORTED_MODULE_0__.sideDiv);

/* form on initial load */
let formContainer = document.createElement("div");
formContainer.appendChild(_form_modal_form_task__WEBPACK_IMPORTED_MODULE_1__.taskForm);
formContainer.classList.add("modal__form")
modal.appendChild(formContainer);

/* remove form func */
function removeForm() {
  while (formContainer.firstChild) {
    formContainer.firstChild.reset()
    formContainer.removeChild(formContainer.firstChild)
  }
}

/* side button event listeners */
_side_modal_side__WEBPACK_IMPORTED_MODULE_0__.taskButton.addEventListener("click", () =>{
  removeForm();
  formContainer.appendChild(_form_modal_form_task__WEBPACK_IMPORTED_MODULE_1__.taskForm);
})
_side_modal_side__WEBPACK_IMPORTED_MODULE_0__.projectButton.addEventListener("click", () =>{
  removeForm();
  formContainer.appendChild(_form_modal_form_project__WEBPACK_IMPORTED_MODULE_2__.projectForm);
})
_side_modal_side__WEBPACK_IMPORTED_MODULE_0__.noteButton.addEventListener("click", () =>{
  removeForm();
  formContainer.appendChild(_form_modal_form_note__WEBPACK_IMPORTED_MODULE_3__.noteForm);
})
/* hide modal when clicked outside of the modal */
document.addEventListener("click", function (event) {
 if (!event.target.closest(".p-main__modal")&& !event.target.matches(".main__display-form-btn")  && (modal.classList.contains("main__modal--hidden")== false)) {
    modal.setAttribute("style", "animation-name : swirl-out-bck; animation-duration: 0.6s");
    setTimeout(hideModal, 600) 
  } 
})

 

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header */ "./src/header/header.js");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main */ "./src/main/main.js");
/* import "./style.scss"; */

 


let body = document.querySelector("body");

body.appendChild(_header_header__WEBPACK_IMPORTED_MODULE_0__.header);

body.appendChild(_main_main__WEBPACK_IMPORTED_MODULE_1__.mainDiv);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDO0FBQ0QsNEVBQW1DO0FBQ25DO0FBQ0EsNEJBQTRCLGlFQUFXO0FBQ3ZDLENBQUM7QUFDRCx5RUFBZ0M7QUFDaEM7QUFDQSw0QkFBNEIsMkRBQVE7QUFDcEMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYTs7Ozs7O1VDM0RkO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsMEJBQTBCO0FBQ1k7QUFDSDs7O0FBR25DOztBQUVBLGlCQUFpQixrREFBTTs7QUFFdkIsaUJBQWlCLCtDQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQWZ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQmVmb3JlL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2FsZXJ0LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2dlbmVyYWwvZ2VuZXJhbF9fanMvX3RhYmxlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2dlbmVyYWwvZ2VuZXJhbF9fanMvcHViLXN1Yi5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLW5vdGUuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS10YXNrLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9fX3NpZGUvZGlzcGxheV9fc2lkZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21haW4tcHViLXN1Yi5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9fX2Zvcm0vbW9kYWxfX2Zvcm0tLW5vdGUuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9fX3NlYXJjaC9tb2RhbF9fc2VhcmNoLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19zaWRlL21vZGFsX19zaWRlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBlbmRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU2F0IFNlcCAwNiAyMDE0IDIzOjU5OjU5Ljk5OVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgZW5kIG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IFN1biBTZXAgMDcgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IC03IDogMCkgKyA2IC0gKGRheSAtIHdlZWtTdGFydHNPbik7XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNBZnRlclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBhZnRlciB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBhZnRlciAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNBZnRlcihuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQWZ0ZXIoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA+IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNCZWZvcmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGJlZm9yZSAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNCZWZvcmUobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNCZWZvcmUoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA8IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImZ1bmN0aW9uIGNyZWF0ZUFsZXJ0KHRleHQpIHtcbiAgbGV0IGFsZXJ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBhbGVydERpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInBvc2l0aW9uOiBmaXhlZDsgdG9wOiAyNTBweDsgbGVmdDogMDsgcmlnaHQ6IDA7IG1hcmdpbjogMCBhdXRvOyB3aWR0aDogMjAwcHg7ICBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgIHRleHQtYWxpZ246IGNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgXCIgKTtcblxuICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcbiAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhbGVydERpdi5yZW1vdmUoKTtcbiAgfSlcbiAgYWxlcnREaXYuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICBsZXQgYWxlcnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFsZXJ0VGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGFsZXJ0RGl2LmFwcGVuZENoaWxkKGFsZXJ0VGV4dClcbiAgXG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoYWxlcnREaXYpO1xuICByZXR1cm4gYWxlcnREaXY7XG59XG5leHBvcnQge2NyZWF0ZUFsZXJ0fSIsImZ1bmN0aW9uIGNyZWF0ZUJhc2ljSW5wdXQoY2xhc3NOYW1lLCB0eXBlLCBpbnB1dE5hbWUsIGlkKSB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGlucHV0TmFtZSk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0QXJlYShjbGFzc05hbWUsIGlucHV0TmFtZSwgaWQpIHtcbiAgbGV0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgaW5wdXROYW1lKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICByZXR1cm4gdGV4dEFyZWE7XG59IFxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChpbnB1dCwgdGV4dCkge1xuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19sYWJlbFwiKVxuICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk7XG4gIHJldHVybiBsYWJlbDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kTGFiZWxJbnB1dChmb3JtLCBsYWJlbCwgaW5wdXQpIHtcbiAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSYWRpb0lucHV0KHByaW9yaXR5TGV2ZWwsIGNsYXNzTmFtZSkge1xuICBsZXQgcmFkaW8gPSBjcmVhdGVCYXNpY0lucHV0KFxuICAgIGNsYXNzTmFtZSxcbiAgICBcInJhZGlvXCIsXG4gICAgXCJwcmlvcml0eVwiLFxuICAgIGBwcmlvcml0eS0ke3ByaW9yaXR5TGV2ZWx9YFxuICApO1xuICByYWRpby5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcmlvcml0eUxldmVsKTtcbiAgcmV0dXJuIHJhZGlvO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRSYWRpb0lucHV0cyhwYXJlbnQsIGFycmF5KSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgbGV0IGxhYmVsID0gY3JlYXRlTGFiZWwoZWxlbWVudCwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlQmFzaWNJbnB1dCwgY3JlYXRlTGFiZWwsIGFwcGVuZExhYmVsSW5wdXQsIGNyZWF0ZVJhZGlvSW5wdXQsIGFwcGVuZFJhZGlvSW5wdXRzLCBjcmVhdGVUZXh0QXJlYX0iLCJmdW5jdGlvbiBjcmVhdGVUYWJsZShvYmosIHBhcmVudCkge1xuICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcbiAgICBsZXQgcm93O1xuICAgIGlmIChrZXkgPT0gXCJ0eXBlXCIgfHwga2V5ID09PSBcImlkXCIgfHwga2V5ID09IFwicHJvamVjdFwiIHx8IGtleSA9PSBcInN0YXR1c1wiKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PSBcImRhdGVcIikge1xuICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgbGV0IGRhdGUgPSB2YWx1ZS5zcGxpdChcIi1cIikucmV2ZXJzZSgpLmpvaW4oXCItXCIpO1xuICAgICAgcm93ID0gY3JlYXRlUm93KGtleSwgZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdyA9IGNyZWF0ZVJvdyhrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxuICByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKHRhYmxlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm93KGtleSwgdmFsdWUpIHtcbiAgbGV0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICBsZXQgdGFibGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICB0YWJsZUhlYWRpbmcudGV4dENvbnRlbnQgPSBrZXk7XG4gIGxldCB0YWJsZURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gIHRhYmxlRGF0YS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICBhc3NpZ25DbGFzcyhrZXksIHRhYmxlRGF0YSk7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKHRhYmxlSGVhZGluZyk7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKHRhYmxlRGF0YSk7XG4gIHJldHVybiB0YWJsZVJvdztcbn1cbmZ1bmN0aW9uIGFzc2lnbkNsYXNzKGtleSwgZWxlbWVudCkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgXCJ0aXRsZVwiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3RkLS10aXRsZVwiLCBcInRhYmxlX190ZFwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJkZXRhaWxzXCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fdGQtLWRldGFpbHNcIiwgXCJ0YWJsZV9fdGRcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZGF0ZVwiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3RkLS1kYXRlXCIsIFwidGFibGVfX3RkXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInByaW9yaXR5XCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fdGQtLXByaW9yaXR5XCIsIFwidGFibGVfX3RkXCIpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlVGFibGUsIH07IiwiXG5cbmZ1bmN0aW9uIHB1YlN1YkZhY3RvcnkoKSB7XG4gIGNvbnN0IHN1YnNjcmliZXJzID0ge307XG5cbiAgZnVuY3Rpb24gcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5sZW5ndGggLSAxO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmUsXG4gICAgcHVibGlzaCxcbiAgICBcbiAgfTtcbn1cblxuZXhwb3J0IHtwdWJTdWJGYWN0b3J5IH07XG4iLCJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xudGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRlcl9fdGl0bGVcIik7XG50aXRsZS50ZXh0Q29udGVudCA9IFwiSnVzdCBEbyBJdFwiO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuXG5oZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiLCBcImJvZHlfX2hlYWRlclwiKTtcblxuaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuZXhwb3J0IHsgaGVhZGVyIH0gOyIsImltcG9ydCB7Y3JlYXRlVGFibGV9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL190YWJsZVwiXG5pbXBvcnQge2NyZWF0ZUJhc2ljSW5wdXQsIGNyZWF0ZVRleHRBcmVhfSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIlxuaW1wb3J0IHtkaXNwbGF5TW9kfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCJcblxuXG5sZXQgbm90ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubm90ZURpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1ub3RlLS1oaWRkZW5cIixcImRpc3BsYXlfX2NvbnRhaW5lci1ub3RlXCIpO1xuXG5mdW5jdGlvbiBzdWJzY3JpYmVOb3RlKG9iaikge1xuICAvKkRFTEVURSBCVE4qL1xuICBsZXQgbm90ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5vdGVEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBvYmouaWQpO1xuICBsZXQgZGx0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGx0QnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGRsdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBkbHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvYmoucmVtb3ZlKCk7XG4gIH0pO1xuICBub3RlRGl2LmFwcGVuZENoaWxkKGRsdEJ0bik7XG4gIFxuXG4gIC8qRURJVCBCVVRUT04qL1xuICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgdGFibGVEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGAuZGlzcGxheV9fY29udGFpbmVyLW5vdGUgW2RhdGEtaWQ9XCIke29iai5pZH1cIl0gLnRhYmxlX190ZGBcbiAgICApO1xuICAgIHRhYmxlRGF0YS5mb3JFYWNoKGZ1bmN0aW9uICh0ZCkge1xuICAgICAgbGV0IGVkaXRJbnB1dDtcbiAgICAgIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZV9fdGQtLXRpdGxlXCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gICAgICAgICAgXCJ0YWJsZV9fZWRpdC1pbnB1dFwiLFxuICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgIFwidGl0bGVcIixcbiAgICAgICAgICBcImVkaXQtdGl0bGVcIlxuICAgICAgICApO1xuICAgICAgICBlZGl0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgb2JqLnRpdGxlKTtcbiAgICAgIH0gZWxzZSBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS1kZXRhaWxzXCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGNyZWF0ZVRleHRBcmVhKFxuICAgICAgICAgIFwidGFibGVfX2VkaXQtaW5wdXRcIixcbiAgICAgICAgICBcImRldGFpbHNcIixcbiAgICAgICAgICBcImVkaXQtZGV0YWlsc1wiXG4gICAgICAgICk7XG4gICAgICAgIGVkaXRJbnB1dC50ZXh0Q29udGVudCA9IG9iai5kZXRhaWxzO1xuICAgICAgfSBcbiAgICAgIHRkLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVkaXRJbnB1dCwgdGQpO1xuICAgIH0pO1xuXG4gICAgLyogU1VCTUlUIENIQU5HRVMgQlROICovXG4gICAgbGV0IHN1Ym1pdENoYW5nZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWVkaXQtYnRuXCIpO1xuICAgIGlmICghc3VibWl0Q2hhbmdlQnRuKSB7XG4gICAgICBzdWJtaXRDaGFuZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgc3VibWl0Q2hhbmdlQnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgIHN1Ym1pdENoYW5nZUJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWVkaXQtYnRuXCIpO1xuICAgIH1cblxuICAgIHN1Ym1pdENoYW5nZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGV0IGVkaXRlZElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIgLnRhYmxlX19lZGl0LWlucHV0XCIpO1xuICAgICAgZWRpdGVkSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG9iailcbiAgICAgICAgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT0gXCJ0aXRsZVwiKSB7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPT0gXCJcIiA/ICBvYmoudGl0bGUgOiAob2JqLnRpdGxlID0gaW5wdXQudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT0gXCJkZXRhaWxzXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSlcbiAgICAgICAgICBvYmouZGV0YWlscyA9IGlucHV0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHN1Ym1pdENoYW5nZUJ0bi5yZW1vdmUoKTtcbiAgICAgIGRpc3BsYXlNb2QudXBkYXRlTm90ZXMoKTtcbiAgICB9KTtcbiAgICBub3RlRGl2LmFwcGVuZENoaWxkKHN1Ym1pdENoYW5nZUJ0bik7XG4gIH0pO1xuXG4gIG5vdGVEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIGNyZWF0ZVRhYmxlKG9iaiwgbm90ZURpdilcbiAgbm90ZURpc3BsYXkuYXBwZW5kQ2hpbGQobm90ZURpdik7XG59XG5cblxuXG5mdW5jdGlvbiBzdWJSbXZOb3RlRGlzcGxheSgpIHtcbiAgd2hpbGUgKG5vdGVEaXNwbGF5LmZpcnN0Q2hpbGQpIHtcbiAgICBub3RlRGlzcGxheS5yZW1vdmVDaGlsZChub3RlRGlzcGxheS5sYXN0Q2hpbGQpO1xuICB9XG59XG5cblxuXG5cbmV4cG9ydCB7c3Vic2NyaWJlTm90ZSwgc3ViUm12Tm90ZURpc3BsYXksIG5vdGVEaXNwbGF5fSIsImltcG9ydCB7IGRpc3BsYXlNb2QgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQgeyBjcmVhdGVCYXNpY0lucHV0IH0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCI7XG5pbXBvcnQgeyBjcmVhdGVUYWJsZSB9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL190YWJsZVwiO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBjcmVhdGVBbGVydCB9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19hbGVydFwiO1xuXG5jb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFxuICBcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIixcbiAgXCJkaXNwbGF5X19jb250YWluZXItcHJvamVjdFwiXG4pO1xuXG5mdW5jdGlvbiBzdWJzY3JpYmVQcm9qZWN0KG9iaikge1xuICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBvYmouaWQpO1xuICAvKiBkZWxldGUgYnV0dG9uICovXG4gIGlmIChvYmouaWQgIT09IDEpIHtcbiAgICAvL2V4ZW1wdGlvbiBmb3IgdGhlIGdlbmVyYWwgcHJvamVjdFxuICAgIGxldCBkbHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRsdEJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgIGRsdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIGRsdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKG9iai50YXNrSWRBcnIubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgYWxlcnQgPSBjcmVhdGVBbGVydChcbiAgICAgICAgICBcIlRoZXJlIHNlZW0gdG8gYmUgc29tZSB1bmZpbmlzaGVkIHRhc2tzIGluIHRoaXMgcHJvamVjdC4gQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGRlbGV0ZSBpdD9cIlxuICAgICAgICApO1xuICAgICAgICBsZXQgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgeWVzQnRuLnRleHRDb250ZW50ID0gXCJZZXNcIjtcbiAgICAgICAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgb2JqLnJlbW92ZUJ5UHJvamVjdCgpO1xuICAgICAgICAgIG9iai5yZW1vdmUoKTtcbiAgICAgICAgICBhbGVydC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFsZXJ0LmFwcGVuZENoaWxkKHllc0J0bik7XG4gICAgICAgIGxldCBub0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIG5vQnRuLnRleHRDb250ZW50ID0gXCJOb1wiO1xuICAgICAgICBub0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0LnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWxlcnQuYXBwZW5kQ2hpbGQobm9CdG4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICBvYmoucmVtb3ZlKClcblxuICAgICAgICBvYmoucmVtb3ZlQnlQcm9qZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkbHRCdG4pO1xuICB9XG4gIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQob2JqLnRpdGxlLCBcInRhc2stbGlzdFwiKTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG4gIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICBkaXNwbGF5TW9kLnVwZGF0ZSgpO1xuICBjb25zb2xlLmxvZyhkaXNwbGF5TW9kKVxufVxuXG5mdW5jdGlvbiBzdWJSbXZQcm9qZWN0RGlzcGxheSgpIHtcbiAgd2hpbGUgKHByb2plY3REaXNwbGF5LmZpcnN0Q2hpbGQpIHtcbiAgICBwcm9qZWN0RGlzcGxheS5yZW1vdmVDaGlsZChwcm9qZWN0RGlzcGxheS5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbi8qIFJlbW92ZXMgVGFza3MgSXRlbXMgd2hlbiAqL1xuZnVuY3Rpb24gc3ViUm12VGFza3MoKSB7XG4gIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1saXN0XCIpO1xuICB0YXNrTGlzdC5mb3JFYWNoKChsaXN0SXRlbSkgPT4ge1xuICAgIHdoaWxlIChsaXN0SXRlbS5maXJzdENoaWxkKSB7XG4gICAgICBsaXN0SXRlbS5yZW1vdmVDaGlsZChsaXN0SXRlbS5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1YlRhc2tMaXN0SXRlbShvYmopIHtcbiAgY29uc29sZS5sb2cob2JqKTtcbiAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIG9iai5wcm9qZWN0KTtcblxuICBpZiAodGFza0xpc3QpIHtcbiAgICB0YXNrTGlzdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG9iai5pZCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGNvbXBsZXRlSW5wdXQgPSBjcmVhdGVCYXNpY0lucHV0KFxuICAgIFwicHJvamVjdC1kaXZfX2RvbmUtaW5wdXRcIixcbiAgICBcImNoZWNrYm94XCIsXG4gICAgXCJjb21wbGV0ZS1pbnB1dFwiLFxuICAgIFwiY29tcGxldGUtaW5wdXRcIlxuICApOyAvL2ZpbmlzaGVkIGNoZWNrYm94XG4gIC8vbWF5YmUgYWRkIGRlbGV0ZSBidXR0b24gZm9yIHByb2plY3QgaGVyZSB0b28/XG4gIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1saS1pZFwiLCBvYmouaWQpO1xuICBjb21wbGV0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb2JqLmNvbXBsZXRlKCk7XG4gICAgb2JqLnN0YXR1cyA9PSBcImNvbXBsZXRlXCIgPyBvYmoucmVtb3ZlVGFza0Zyb21Qcm9qZWN0SWRBcnIoKSA6IG9iai5wdXNoSWQoKTtcbiAgICBsZXQgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGBsaVtkYXRhLWxpLWlkID0gXCIke29iai5pZH1cIl0gdGgsbGlbZGF0YS1saS1pZCA9IFwiJHtvYmouaWR9XCJdIHRkYFxuICAgICk7XG4gICAgdGFza1RhYmxlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuICAgIH0pO1xuICB9KTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY29tcGxldGVJbnB1dCk7XG4gIGNyZWF0ZVRhYmxlKG9iaiwgbGlzdEl0ZW0pO1xuXG4gIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGhpZGRlblJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgYGxpW2RhdGEtbGktaWQgPSBcIiR7b2JqLmlkfVwiXSB0cjpub3QoOmZpcnN0LWNoaWxkKWBcbiAgICApO1xuICAgIGhpZGRlblJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICByb3cuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICBsZXQgaGlkZGVuUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1saXN0IHRyOm5vdCg6Zmlyc3QtY2hpbGQpXCIpO1xuICBoaWRkZW5Sb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgc3Vic2NyaWJlUHJvamVjdCxcbiAgcHJvamVjdERpc3BsYXksXG4gIHN1YlRhc2tMaXN0SXRlbSxcbiAgc3ViUm12UHJvamVjdERpc3BsYXksXG4gIHN1YlJtdlRhc2tzLFxuICAvKiBnZW5lcmF0ZVByb2plY3REaXNwbGF5ICovXG59O1xuIiwiaW1wb3J0IHsgZGlzcGxheU1vZCB9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcbmltcG9ydCB7IGNyZWF0ZVRhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX3RhYmxlXCI7XG5cbmltcG9ydCB7XG4gIGNyZWF0ZVJhZGlvSW5wdXQsXG4gIGFwcGVuZFJhZGlvSW5wdXRzLFxuICBjcmVhdGVCYXNpY0lucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbn0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCI7XG5pbXBvcnQgeyBlbmRPZldlZWssIGlzQWZ0ZXIsIGlzQmVmb3JlLCBwYXJzZUlTTyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFxuICBcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrXCJcbik7XG5cbi8qIFNPUlQgQlVUVE9OICovXG5sZXQgc29ydERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZXQgc29ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5sZXQgc29ydFBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbnNvcnRQbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbnNvcnRQbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbnNvcnRQbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIiBcIik7XG5zb3J0UGxhY2Vob2xkZXIudGV4dENvbnRlbnQgPSBcIlNvcnRcIjtcbnNvcnQuYXBwZW5kQ2hpbGQoc29ydFBsYWNlaG9sZGVyKTtcblxubGV0IHNvcnRQcmlvcml0eURlc2NlbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG5zb3J0UHJpb3JpdHlEZXNjZW5kaW5nLnRleHRDb250ZW50ID0gXCJNb3N0IEltcG9ydGFudFwiO1xuc29ydFByaW9yaXR5RGVzY2VuZGluZy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm1vc3RcIik7XG5cbmxldCBzb3J0UHJpb3JpdHlBc2NlbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG5zb3J0UHJpb3JpdHlBc2NlbmRpbmcudGV4dENvbnRlbnQgPSBcIkxlYXN0IEltcG9ydGFudFwiO1xuc29ydFByaW9yaXR5QXNjZW5kaW5nLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibGVhc3RcIik7XG5cbmxldCBzb3J0RGF0ZUFzY2VuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5zb3J0RGF0ZUFzY2VuZGluZy50ZXh0Q29udGVudCA9IFwiRGF0ZSAoQXNjZW5kaW5nKVwiO1xuc29ydERhdGVBc2NlbmRpbmcuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJkYXRlLWFzY2VuZGluZ1wiKTtcblxubGV0IHNvcnREYXRlRGVzY2VuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5zb3J0RGF0ZURlc2NlbmRpbmcudGV4dENvbnRlbnQgPSBcIkRhdGUgKERlc2NlbmRpbmcpXCI7XG5zb3J0RGF0ZURlc2NlbmRpbmcuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJkYXRlLWRlc2NlbmRpbmdcIik7XG5cbnNvcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGlzcGxheU1vZC51cGRhdGVTb3J0ZWQoc29ydC52YWx1ZSlcbn0pO1xuXG5zb3J0LmFwcGVuZENoaWxkKHNvcnRQcmlvcml0eURlc2NlbmRpbmcpO1xuc29ydC5hcHBlbmRDaGlsZChzb3J0UHJpb3JpdHlBc2NlbmRpbmcpO1xuc29ydC5hcHBlbmRDaGlsZChzb3J0RGF0ZUFzY2VuZGluZyk7XG5zb3J0LmFwcGVuZENoaWxkKHNvcnREYXRlRGVzY2VuZGluZyk7XG5zb3J0RGl2LmFwcGVuZENoaWxkKHNvcnQpO1xudGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoc29ydERpdik7XG5cbi8qIENvbXBsZXRlIERpc3BsYXkgYnV0dG9uICovXG5jb25zdCBjb21wbGV0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBjb21wbGV0ZURpc3BsYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29tcGxldGVEaXNwbGF5QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5jb21wbGV0ZURpc3BsYXlCdG4udGV4dENvbnRlbnQgPSBcIkNPTVBMRVRFXCI7IC8vIGNoYW5nZSB0byBjaGVjayBzdmcgbGF0ZXI7XG5jb21wbGV0ZURpc3BsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGlzcGxheU1vZC51cGRhdGVDb21wbGV0ZSgpXG59KTtcbmNvbXBsZXRlRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlRGlzcGxheUJ0bik7XG50YXNrRGlzcGxheS5hcHBlbmRDaGlsZChjb21wbGV0ZURpdik7XG5cbi8qIFRBU0sgQ09OVEFJTkVSICovXG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4vKiBNaWdodCBoYXZlIHRvIG1ha2UgYSBzZXBhcmF0ZSBzdWJzY3JpYmUgZm9yIGNvbXBsZXRlIHRhc2tzICovXG5cbmZ1bmN0aW9uIHByaW9yaXR5Q29sb3JTd2l0Y2goZWxlbWVudCwgb2JqKSB7XG4gIHN3aXRjaCAob2JqLnByaW9yaXR5KSB7XG4gICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWhpZ2hcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1tZWRpdW1cIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibG93XCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1sb3dcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIHN1YkNvbXBsZXRlVGFzayhvYmopIHtcbiAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgb2JqLmlkKTtcbiAgbGV0IGNvbXBsZXRlSW5wdXQgPSBjcmVhdGVCYXNpY0lucHV0KFxuICAgIFwidGFzay1kaXZfX2RvbmUtaW5wdXRcIixcbiAgICBcImNoZWNrYm94XCIsXG4gICAgXCJjb21wbGV0ZS1pbnB1dFwiLFxuICAgIFwiY29tcGxldGUtaW5wdXRcIlxuICApO1xuICBjb21wbGV0ZUlucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XG4gIGNvbXBsZXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvYmouY29tcGxldGUoKTtcbiAgICBsZXQgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGBkaXZbZGF0YS1pZD1cIiR7b2JqLmlkfVwiXSB0aCwgZGl2W2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGRgXG4gICAgKTtcbiAgICB0YXNrVGFibGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVcIik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVJbnB1dCk7XG4gIGNyZWF0ZVRhYmxlKG9iaiwgdGFza0Rpdik7XG5cbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgbGV0IGFsbFJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGgsIHRkXCIpO1xuICBhbGxSb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdWJzY3JpYmVUYXNrKG9iaikge1xuICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBvYmouaWQpO1xuXG4gIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1kYXRlXCIsIG9iai5kYXRlKTtcbiAgcHJpb3JpdHlDb2xvclN3aXRjaCh0YXNrRGl2LCBvYmopO1xuICAvKiBDb21wbGV0ZSBjaGVja2JveCAqL1xuICBsZXQgY29tcGxldGVJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gICAgXCJ0YXNrLWRpdl9fZG9uZS1pbnB1dFwiLFxuICAgIFwiY2hlY2tib3hcIixcbiAgICBcImNvbXBsZXRlLWlucHV0XCIsXG4gICAgXCJjb21wbGV0ZS1pbnB1dFwiXG4gICk7XG5cbiAgY29tcGxldGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9iai5jb21wbGV0ZSgpO1xuICAgIG9iai5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiID8gb2JqLnJlbW92ZVRhc2tGcm9tUHJvamVjdElkQXJyKCkgOiBvYmoucHVzaElkKCk7XG4gICAgbGV0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgZGl2W2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGgsIGRpdltkYXRhLWlkPVwiJHtvYmouaWR9XCJdIHRkYFxuICAgICk7XG5cbiAgICB0YXNrVGFibGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVcIik7XG4gICAgfSk7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcblxuICB0YXNrRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlSW5wdXQpO1xuXG4gIC8qIERFTEVURSBCVVRUT04gKi9cbiAgbGV0IGRsdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRsdEJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICBkbHRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgZGx0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb2JqLnJlbW92ZSgpO1xuICAgIG9iai5yZW1vdmVUYXNrRnJvbVByb2plY3RJZEFycigpO1xuICB9KTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChkbHRCdG4pO1xuXG4gIC8qRURJVCBCVVRUT04qL1xuICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXG4gIC8qSGF2ZSB0byBjcmVhdGUgbGFiZWxzIGFuZCBoaWRlIHRoZW0gZm9yIGFjY2Vzc2liaWxpdHkgPz8qL1xuXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgdGFibGVEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGAuZGlzcGxheV9fY29udGFpbmVyLXRhc2sgW2RhdGEtaWQ9XCIke29iai5pZH1cIl0gLnRhYmxlX190ZGBcbiAgICApO1xuICAgIC8vbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGFibGVgKSAvL0RvIEkgcmVhbGx5IG5lZWQgdGhpcz9cbiAgICB0YWJsZURhdGEuZm9yRWFjaChmdW5jdGlvbiAodGQpIHtcbiAgICAgIGxldCBlZGl0SW5wdXQ7XG5cbiAgICAgIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZV9fdGQtLXRpdGxlXCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gICAgICAgICAgXCJ0YWJsZV9fZWRpdC1pbnB1dFwiLFxuICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgIFwidGl0bGVcIixcbiAgICAgICAgICBcImVkaXQtdGl0bGVcIlxuICAgICAgICApO1xuICAgICAgICBlZGl0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgb2JqLnRpdGxlKTtcbiAgICAgIH0gZWxzZSBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS1kZXRhaWxzXCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGNyZWF0ZVRleHRBcmVhKFxuICAgICAgICAgIFwidGFibGVfX2VkaXQtaW5wdXRcIixcbiAgICAgICAgICBcImRldGFpbHNcIixcbiAgICAgICAgICBcImVkaXQtZGV0YWlsc1wiXG4gICAgICAgICk7XG4gICAgICAgIGVkaXRJbnB1dC50ZXh0Q29udGVudCA9IG9iai5kZXRhaWxzO1xuICAgICAgfSBlbHNlIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZV9fdGQtLWRhdGVcIikpIHtcbiAgICAgICAgZWRpdElucHV0ID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgICAgICAgICBcInRhYmxlX19lZGl0LWlucHV0XCIsXG4gICAgICAgICAgXCJkYXRlXCIsXG4gICAgICAgICAgXCJkYXRlXCIsXG4gICAgICAgICAgXCJlZGl0LWRhdGVcIlxuICAgICAgICApO1xuICAgICAgICBlZGl0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgb2JqLmRhdGUpO1xuICAgICAgfSBlbHNlIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZV9fdGQtLXByaW9yaXR5XCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgICAgICAgbGV0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gICAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgICAgICAgZWRpdElucHV0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG4gICAgICAgIGxldCBsb3cgPSBjcmVhdGVSYWRpb0lucHV0KFwibG93XCIsIFwiZWRpdC1idG5fX2lucHV0LS1yYWRpb1wiKTtcbiAgICAgICAgbGV0IG1lZGl1bSA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJtZWRpdW1cIiwgXCJlZGl0LWJ0bl9faW5wdXQtLXJhZGlvXCIpO1xuICAgICAgICBsZXQgaGlnaCA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJoaWdoXCIsIFwiZWRpdC1idG5fX2lucHV0LS1yYWRpb1wiKTtcbiAgICAgICAgYXBwZW5kUmFkaW9JbnB1dHMoZWRpdElucHV0LCBbbG93LCBtZWRpdW0sIGhpZ2hdKTtcbiAgICAgIH1cblxuICAgICAgdGQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZWRpdElucHV0LCB0ZCk7XG4gICAgfSk7XG4gICAgLyogU1VCTUlUIENIQU5HRVMgQlROICovXG4gICAgbGV0IHN1Ym1pdENoYW5nZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWVkaXQtYnRuXCIpO1xuICAgIGlmICghc3VibWl0Q2hhbmdlQnRuKSB7XG4gICAgICBzdWJtaXRDaGFuZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgc3VibWl0Q2hhbmdlQnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgIHN1Ym1pdENoYW5nZUJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWVkaXQtYnRuXCIpO1xuICAgIH1cblxuICAgIHN1Ym1pdENoYW5nZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGV0IGVkaXRlZElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIgLnRhYmxlX19lZGl0LWlucHV0XCIpO1xuICAgICAgZWRpdGVkSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG9iailcbiAgICAgICAgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT0gXCJ0aXRsZVwiKSB7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPT0gXCJcIiA/ICBvYmoudGl0bGUgOiAob2JqLnRpdGxlID0gaW5wdXQudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT0gXCJkZXRhaWxzXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSlcbiAgICAgICAgICBvYmouZGV0YWlscyA9IGlucHV0LnZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT0gXCJkYXRlXCIpIHtcbiAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGxldCBkYXRlUHJvY2Vzc2VkID0gbmV3IERhdGUoaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgZGF0ZVByb2Nlc3NlZCA9IGRhdGVQcm9jZXNzZWQudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gICAgICAgICAgICBvYmouZGF0ZSA9IGRhdGVQcm9jZXNzZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxldCBlZGl0ZWRQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuZWRpdC1idG5fX2lucHV0LS1yYWRpbzpjaGVja2VkXCJcbiAgICAgICk7XG4gICAgICBlZGl0ZWRQcmlvcml0eUlucHV0ID09IG51bGxcbiAgICAgICAgPyBvYmoucHJpb3JpdHlcbiAgICAgICAgOiAob2JqLnByaW9yaXR5ID0gZWRpdGVkUHJpb3JpdHlJbnB1dC52YWx1ZSk7XG4gICAgICBzdWJtaXRDaGFuZ2VCdG4ucmVtb3ZlKCk7XG4gICAgICBkaXNwbGF5TW9kLnVwZGF0ZSgpO1xuICAgIH0pO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoc3VibWl0Q2hhbmdlQnRuKTtcbiAgfSk7XG5cbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgY3JlYXRlVGFibGUob2JqLCB0YXNrRGl2KTtcblxuICAvL0RhdGUgQXNjZW5kaW5nIERpc3BsYXlcbiAgaWYgKHNvcnQudmFsdWUgPT0gXCJkYXRlLWFzY2VuZGluZ1wiKSB7XG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdOyAvKiBcbiAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlLnNwbGl0KFwiLVwiKS5yZXZlcnNlKCkuam9pbihcIi1cIik7ICovXG4gICAgbGV0IGxhc3RXZWVrRGF5ID0gZW5kT2ZXZWVrKG5ldyBEYXRlKCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xuXG4gICAgaWYgKHRhc2tEaXYuZ2V0QXR0cmlidXRlKFwiZGF0YS1kYXRlXCIpID09IFwiXCIpIHtcbiAgICAgIC8vaWYgZGF0ZSB3YXMgbm90IHByb3ZpZGVkXG4gICAgICBsZXQgbm9EYXRlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lcl9fZGl2LS1uby1kYXRlXCIpO1xuICAgICAgaWYgKCFub0RhdGVEaXYpIHtcbiAgICAgICAgbm9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbm9EYXRlRGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcGluazsgb3JkZXI6MFwiKTtcbiAgICAgICAgbm9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lcl9fZGl2LS1uby1kYXRlXCIpO1xuICAgICAgICBsZXQgbm9EYXRlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgbm9EYXRlSGVhZGluZy50ZXh0Q29udGVudCA9IFwiVW5kYXRlZFwiO1xuICAgICAgICBub0RhdGVEaXYuYXBwZW5kQ2hpbGQobm9EYXRlSGVhZGluZyk7XG4gICAgICB9XG4gICAgICBub0RhdGVEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICByZXR1cm4gdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChub0RhdGVEaXYpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBpc0JlZm9yZShcbiAgICAgICAgcGFyc2VJU08odGFza0Rpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRhdGVcIikpLFxuICAgICAgICBwYXJzZUlTTyhjdXJyZW50RGF0ZSlcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGxldCBvdmVyZHVlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lcl9fZGl2LS1vdmVyZHVlXCIpO1xuICAgICAgaWYgKCFvdmVyZHVlRGl2KSB7XG4gICAgICAgIG92ZXJkdWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdmVyZHVlRGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyBvcmRlcjo0XCIpO1xuICAgICAgICBvdmVyZHVlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lcl9fZGl2LS1vdmVyZHVlXCIpO1xuICAgICAgICBsZXQgb3ZlcmR1ZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIG92ZXJkdWVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJPdmVyZHVlXCI7XG4gICAgICAgIG92ZXJkdWVEaXYuYXBwZW5kQ2hpbGQob3ZlcmR1ZUhlYWRpbmcpO1xuICAgICAgfVxuICAgICAgb3ZlcmR1ZURpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG92ZXJkdWVEaXYpO1xuICAgIH0gZWxzZSBpZiAodGFza0Rpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRhdGVcIikgPT0gY3VycmVudERhdGUpIHtcbiAgICAgIC8vaWYgZGF0ZSBpcyB0b2RheVxuICAgICAgbGV0IHRvZGF5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lcl9fZGl2LS10b2RheVwiKTtcbiAgICAgIGlmICghdG9kYXlEaXYpIHtcbiAgICAgICAgdG9kYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RheURpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IGdyZWVuOyBvcmRlcjozXCIpO1xuICAgICAgICB0b2RheURpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJfX2Rpdi0tdG9kYXlcIik7XG4gICAgICAgIGxldCB0b2RheUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHRvZGF5SGVhZGluZy50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICAgICAgdG9kYXlEaXYuYXBwZW5kQ2hpbGQodG9kYXlIZWFkaW5nKTtcbiAgICAgIH1cbiAgICAgIHRvZGF5RGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgcmV0dXJuIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlEaXYpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBpc0JlZm9yZShwYXJzZUlTTyh0YXNrRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtZGF0ZVwiKSksIGxhc3RXZWVrRGF5KVxuICAgICkge1xuICAgICAgbGV0IHdlZWtEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyX19kaXYtLXdlZWtcIik7XG4gICAgICBpZiAoIXdlZWtEaXYpIHtcbiAgICAgICAgd2Vla0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHdlZWtEaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7IG9yZGVyOjJcIik7XG4gICAgICAgIHdlZWtEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyX19kaXYtLXdlZWtcIik7XG4gICAgICAgIGxldCB3ZWVrSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgd2Vla0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRoaXMgV2Vla1wiO1xuICAgICAgICB3ZWVrRGl2LmFwcGVuZENoaWxkKHdlZWtIZWFkaW5nKTtcbiAgICAgIH1cbiAgICAgIHdlZWtEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICByZXR1cm4gdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrRGl2KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgaXNBZnRlcihwYXJzZUlTTyh0YXNrRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtZGF0ZVwiKSksIGxhc3RXZWVrRGF5KVxuICAgICkge1xuICAgICAgbGV0IHVwY29taW5nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIudGFzay1jb250YWluZXJfX2Rpdi0tdXBjb21pbmdcIlxuICAgICAgKTtcbiAgICAgIGlmICghdXBjb21pbmdEaXYpIHtcbiAgICAgICAgdXBjb21pbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB1cGNvbWluZ0Rpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IGJsdWU7IG9yZGVyOiAxXCIpO1xuICAgICAgICB1cGNvbWluZ0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJfX2Rpdi0tdXBjb21pbmdcIik7XG4gICAgICAgIGxldCB1cGNvbWluZ0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHVwY29taW5nSGVhZGluZy50ZXh0Q29udGVudCA9IFwiVXBjb21pbmdcIjtcbiAgICAgICAgdXBjb21pbmdEaXYuYXBwZW5kQ2hpbGQodXBjb21pbmdIZWFkaW5nKTtcbiAgICAgIH1cbiAgICAgIHVwY29taW5nRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgcmV0dXJuIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodXBjb21pbmdEaXYpO1xuICAgIH1cbiAgfVxuXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG59XG5cbmZ1bmN0aW9uIHN1YlJtdlRhc2tDb250YWluZXIoKSB7XG4gIHdoaWxlICh0YXNrQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICB0YXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tDb250YWluZXIubGFzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgeyBzdWJzY3JpYmVUYXNrLCB0YXNrRGlzcGxheSwgc3ViUm12VGFza0NvbnRhaW5lciwgc3ViQ29tcGxldGVUYXNrIH07XG4iLCJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5uYXYuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX25hdlwiKVxuY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbm5hdkxpc3QuY2xhc3NMaXN0LmFkZChcIm5hdl9fbGlzdFwiLCBcImMtbmF2X19saXN0XCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKHRleHQpIHtcbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2X19saXN0LWl0ZW1cIiwgXCJjLW5hdl9fbGlzdC1pdGVtXCIpXG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSlcbiAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG5uYXYuYXBwZW5kQ2hpbGQobmF2TGlzdClcblxuXG5cblxuXG5cbmV4cG9ydCB7bmF2LCBjcmVhdGVMaXN0SXRlbX1cbiIsImltcG9ydCAqIGFzIHNpZGUgZnJvbSBcIi4vX19zaWRlL2Rpc3BsYXlfX3NpZGVcIjtcbmltcG9ydCB7IGRpc3BsYXlNb2QgfSBmcm9tIFwiLi4vbWFpbi1wdWItc3ViXCI7XG4vKiBEaXNwbGF5IENvbnRhaW5lcnMgKi9cbmltcG9ydCB7IHRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS10YXNrXCI7XG5pbXBvcnQgeyBub3RlRGlzcGxheSB9IGZyb20gXCIuL19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tbm90ZVwiO1xuaW1wb3J0IHsgcHJvamVjdERpc3BsYXkgfSBmcm9tIFwiLi9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3RcIjtcbmltcG9ydCB7IHNlYXJjaElucHV0IH0gZnJvbSBcIi4uL21vZGFsL19fc2VhcmNoL21vZGFsX19zZWFyY2hcIjtcblxuY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2lkZU5hdi5hcHBlbmRDaGlsZChzaWRlLm5hdik7XG5cbmxldCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lclwiKTtcbmxldCBkaXNwbGF5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaXNwbGF5Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGVudFwiKTtcblxuZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpc3BsYXkpO1xuZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQobm90ZURpc3BsYXkpO1xuZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpO1xuXG4vKiBTSE9VTEQgUkVGT1JNQVQgVEhJUyAqL1xuXG5jb25zdCBob21lID0gc2lkZS5jcmVhdGVMaXN0SXRlbShcIkhvbWVcIik7XG5jb25zdCBwcm9qZWN0ID0gc2lkZS5jcmVhdGVMaXN0SXRlbShcIlByb2plY3RzXCIpO1xuY29uc3Qgbm90ZSA9IHNpZGUuY3JlYXRlTGlzdEl0ZW0oXCJOb3Rlc1wiKTtcblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXNwbGF5TW9kLnVwZGF0ZSgpO1xuICBub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcbiAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIik7XG4gIHRhc2tEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5X19jb250YWluZXItdGFzay0taGlkZGVuXCIpO1xufSk7XG5cbm5vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbm90ZURpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci1ub3RlLS1oaWRkZW5cIik7XG4gIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItcHJvamVjdC0taGlkZGVuXCIpO1xuICB0YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXRhc2stLWhpZGRlblwiKTtcbn0pO1xuXG5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRpc3BsYXlNb2QudXBkYXRlKCk7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG4gIGxldCBoaWRkZW5Sb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWxpc3QgdHI6bm90KDpmaXJzdC1jaGlsZClcIik7XG4gIGhpZGRlblJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0pO1xufSk7XG5cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG59KTtcblxuZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGVudCk7XG5kaXNwbGF5LmFwcGVuZENoaWxkKHNpZGVOYXYpO1xuZGlzcGxheS5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGFpbmVyKTtcblxuZXhwb3J0IHsgZGlzcGxheSB9O1xuIiwiaW1wb3J0IHsgY29tcGFyZUFzYywgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHB1YlN1YkZhY3RvcnkgfSBmcm9tIFwiLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9wdWItc3ViXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVOb3RlLCBzdWJSbXZOb3RlRGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1ub3RlXCI7XG5pbXBvcnQge1xuICBzdWJzY3JpYmVQcm9qZWN0LFxuICBzdWJUYXNrTGlzdEl0ZW0sXG4gIHN1YlJtdlByb2plY3REaXNwbGF5LFxuICBzdWJSbXZUYXNrcyxcbn0gZnJvbSBcIi4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3RcIjtcbmltcG9ydCB7XG4gIHN1YnNjcmliZVRhc2ssXG4gIHN1YlJtdlRhc2tDb250YWluZXIsXG4gIHN1YkNvbXBsZXRlVGFzayxcbn0gZnJvbSBcIi4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXRhc2tcIjtcbmltcG9ydCB7XG4gIHN1YlNlbGVjdFByb2plY3RJbnB1dCxcbiAgc3ViQ2xlYXJTZWxlY3RPcHRpb25zLFxufSBmcm9tIFwiLi9tb2RhbC9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXRhc2tcIjtcblxuLy9QVUJTVUIgT0JKXG5cbmxldCBwdWJTdWJOb3RlcyA9IHB1YlN1YkZhY3RvcnkoKTtcbmxldCBwdWJTdWJQcm9qZWN0cyA9IHB1YlN1YkZhY3RvcnkoKTtcbmxldCBwdWJTdWJUYXNrcyA9IHB1YlN1YkZhY3RvcnkoKTtcblxuXG4vKiBPQkpFQ1QgQ0xBU1MgKi9cbi8qIGhvbGRzIGFuIGFycmF5IG9mIGFsbCB0aGUgb2JqZWN0cy4gVGhlIG9iaklkR2VuIGlzIHVzZWQgdG8gYXNzaWduIHVuaXF1ZSBpZHMgdG8gZWFjaCBvYmogKi9cbmNsYXNzIE9iamVjdEFyckNsYXNzIHtcbiAgb2JqQXJyID0gW107XG4gIG9iaklkR2VuID0gMDtcblxuICBnZXQgb2JqQXJyKCkge1xuICAgIHJldHVybiB0aGlzLm9iakFycjtcbiAgfVxuXG4gIHNldCBvYmpBcnIoYXJyKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhbGVydChcIk5vdCBhbiBhcnJheVwiKTtcbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLm9iakFyciA9IGFycik7XG4gIH1cblxuICBwdXNoKG9iaikge1xuICAgIHRoaXMub2JqQXJyLnB1c2gob2JqKTtcbiAgfVxuXG4gIHJlbW92ZShpbmRleCkge1xuICAgIHRoaXMub2JqQXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgXG59XG5cbmNsYXNzIFRhc2tPYmplY3RBcnJDbGFzcyBleHRlbmRzIE9iamVjdEFyckNsYXNzIHtcbiAgY3VzdG9tU29ydCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBcIm1vc3RcIikge1xuICAgICAgdGhpcy5vYmpBcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYi5jb3VudFByaW9yaXR5KCkgLSBhLmNvdW50UHJpb3JpdHkoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gXCJsZWFzdFwiKSB7XG4gICAgICB0aGlzLm9iakFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLmNvdW50UHJpb3JpdHkoKSAtIGIuY291bnRQcmlvcml0eSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBcImRhdGUtYXNjZW5kaW5nXCIpIHtcbiAgICAgIHRoaXMub2JqQXJyLnNvcnQoZnVuY3Rpb24gKGEsYikge1xuICAgICAgICByZXR1cm4gY29tcGFyZUFzYyhwYXJzZUlTTyhhLmRhdGUpLCBwYXJzZUlTTyhiLmRhdGUpKVxuICAgICAgfSk7XG4gICAgfSAgZWxzZSBpZiAodmFsdWUgPT0gXCJkYXRlLWRlc2NlbmRpbmdcIikge1xuICAgICAgdGhpcy5vYmpBcnIuc29ydChmdW5jdGlvbiAoYSxiKSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlQXNjKHBhcnNlSVNPKGIuZGF0ZSksIHBhcnNlSVNPKGEuZGF0ZSkpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0gXG5cblxubGV0IHByb2plY3RzID0gbmV3IE9iamVjdEFyckNsYXNzKCk7XG5sZXQgdGFza3MgPSBuZXcgVGFza09iamVjdEFyckNsYXNzKCk7XG5sZXQgbm90ZXMgPSBuZXcgT2JqZWN0QXJyQ2xhc3MoKTtcblxuXG4vKiBESVNQTEFZIE1PRElGSUVSICovXG4vL25lZWQgdG8gYWRkIG5vdGUgdXBkYXRlIG1hZGUgb3V0IG9mIGNsZWFyIGFuZCBkaXNwbGF5Tm90ZXNcblxuXG5cbmxldCBkaXNwbGF5TW9kID0gKCgpID0+IHsgXG4gIGZ1bmN0aW9uIF9jbGVhcigpIHtcbiAgICBwdWJTdWJUYXNrcy5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIH1cbiBmdW5jdGlvbiBfZGlzcGxheVRhc2tzKCkge1xuICAgIHRhc2tzLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIGlmIChvYmplY3Quc3RhdHVzID09IFwiY29tcGxldGVcIikge1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0LnB1Ymxpc2goKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBfY2xlYXIoKTtcbiAgICBfZGlzcGxheVRhc2tzKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gX2NsZWFyTm90ZXMoKSB7XG4gICAgcHViU3ViTm90ZXMucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2Rpc3BsYXlOb3RlcygpIHtcbiAgICBub3Rlcy5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3QucHVibGlzaCgpO1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVOb3RlcygpIHtcbiAgICBfY2xlYXJOb3RlcygpO1xuICAgIF9kaXNwbGF5Tm90ZXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jbGVhclByb2plY3RzKCkge1xuICAgIHB1YlN1YlByb2plY3RzLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgfVxuICBmdW5jdGlvbiBfZGlzcGxheVByb2plY3RzKCkge1xuICAgIHByb2plY3RzLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaCgpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzKCkge1xuICAgIF9jbGVhclByb2plY3RzKCk7XG4gICAgX2Rpc3BsYXlQcm9qZWN0cygpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2Rpc3BsYXlTZWFyY2hlZFRhc2tzKHNlYXJjaFZhbHVlKSB7XG4gICAgdGFza3Mub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgbGV0IHB1Ymxpc2hlZDtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpIHtcbiAgICAgICAgaWYgKCBrZXkgPT0gXCJpZFwiLCBrZXkgPT0gXCJzdGF0dXNcIiwga2V5PT0gXCJ0eXBlXCIgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGZvdW5kID0gdmFsdWUudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgIGlmIChmb3VuZCAmJiAhcHVibGlzaGVkKSB7XG4gICAgICAgICAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICAgICAgICAgICAgcHVibGlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVTZWFyY2goc2VhcmNoVmFsdWUpIHtcbiAgICBfY2xlYXIoKTtcbiAgICBfZGlzcGxheVNlYXJjaGVkVGFza3Moc2VhcmNoVmFsdWUpXG4gIH1cblxuICBmdW5jdGlvbiBfZGlzcGxheUNvbXBsZXRlVGFza3MoKSB7XG4gICAgdGFza3Mub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgaWYgKG9iamVjdC5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgIG9iamVjdC5wdWJsaXNoQ29tcGxldGUoKTtcbiAgICAgIH19KVxuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZUNvbXBsZXRlKCkge1xuICAgIF9jbGVhcigpXG4gICAgX2Rpc3BsYXlDb21wbGV0ZVRhc2tzKClcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zb3J0VGFza3ModmFsdWUpIHtcbiAgICB0YXNrcy5jdXN0b21Tb3J0KHZhbHVlKTtcbiAgfVxuIGZ1bmN0aW9uIHVwZGF0ZVNvcnRlZCAodmFsdWUpIHtcbiAgX3NvcnRUYXNrcyh2YWx1ZSk7XG4gIF9jbGVhcigpXG4gIF9kaXNwbGF5VGFza3MoKTtcbn07XG5cbiByZXR1cm4ge1xuICB1cGRhdGUsXG4gIHVwZGF0ZVByb2plY3RzLFxuICB1cGRhdGVTZWFyY2gsXG4gIHVwZGF0ZUNvbXBsZXRlLFxuICB1cGRhdGVTb3J0ZWQsXG4gIHVwZGF0ZU5vdGVzXG4gfVxufSkoKSBcblxuXG4vKiBPYmplY3QgQ29uc3RydWN0b3IgKFByb3RvdHlwZSBmb3IgcHJvamVjdCBhbmQgdGFzayBjb25zdHJ1Y3RvcnMqL1xuZnVuY3Rpb24gT2JqZWN0Q29uc3RydWN0b3IoKSB7XG59XG5cbk9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5wdWJsaXNoID0gZnVuY3Rpb24gKCkge1xuICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgIGNhc2UgXCJwcm9qZWN0XCI6XG4gICAgICBwdWJTdWJQcm9qZWN0cy5wdWJsaXNoKFwiZGlzcGxheVwiLCB0aGlzKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0YXNrXCI6XG4gICAgICBwdWJTdWJUYXNrcy5wdWJsaXNoKFwiZGlzcGxheVwiLCB0aGlzKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJub3RlXCI6XG4gICAgICBwdWJTdWJOb3Rlcy5wdWJsaXNoKFwiZGlzcGxheVwiLCB0aGlzKVxuICB9XG59O1xuXG5PYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZGlzcGxheUFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICBjYXNlIFwicHJvamVjdFwiOlxuICAgICAgcHViU3ViUHJvamVjdHMucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICAgICAgcHJvamVjdHMucHVzaCh0aGlzKTsgXG4gICAgICBwcm9qZWN0cy5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PntcbiAgICAgICAgb2JqZWN0LnB1Ymxpc2goKTtcbiAgICAgIH0pXG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidGFza1wiOlxuICAgICAgcHViU3ViVGFza3MucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICAgICAgdGFza3MucHVzaCh0aGlzKTtcbiAgICBcbiAgICAgIHRhc2tzLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgICAgaWYgKG9iamVjdC5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqZWN0LnB1Ymxpc2goKTtcbiAgICAgICAgfSBcbiAgICAgIH0pXG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibm90ZVwiOlxuICAgICAgcHViU3ViTm90ZXMucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICAgICAgbm90ZXMucHVzaCh0aGlzKTtcbiAgICAgIG5vdGVzLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgICAgb2JqZWN0LnB1Ymxpc2goKVxuICAgICAgfSlcbiAgfVxufTtcblxuT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICBsZXQgaW5kZXhPZk1hdGNoO1xuICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgIGNhc2UgXCJwcm9qZWN0XCI6XG4gICAgICBpbmRleE9mTWF0Y2ggPSBwcm9qZWN0cy5vYmpBcnIuZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5pZCA9PT0gdGhpcy5pZCA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgcHJvamVjdHMucmVtb3ZlKGluZGV4T2ZNYXRjaCk7XG4gICAgICBkaXNwbGF5TW9kLnVwZGF0ZVByb2plY3RzKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidGFza1wiOlxuICAgICAgaW5kZXhPZk1hdGNoID0gdGFza3Mub2JqQXJyLmZpbmRJbmRleCgob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBvYmouaWQgPT09IHRoaXMuaWQgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRhc2tzLnJlbW92ZShpbmRleE9mTWF0Y2gpO1xuICAgICAgZGlzcGxheU1vZC51cGRhdGUoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJub3RlXCI6XG4gICAgICBpbmRleE9mTWF0Y2ggPSBub3Rlcy5vYmpBcnIuZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5pZCA9PT0gdGhpcy5pZCA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgbm90ZXMucmVtb3ZlKGluZGV4T2ZNYXRjaCk7XG4gICAgICBkaXNwbGF5TW9kLnVwZGF0ZU5vdGVzKCk7XG4gIH1cbn07XG5cbi8vUHJvamVjdCBDb25zdHJ1Y3RvclxuZnVuY3Rpb24gUHJvamVjdENvbnN0cnVjdG9yKHRpdGxlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTsgXG4gIHRoaXMuaWQgPSBwcm9qZWN0cy5vYmpJZEdlbiArPSAxO1xuICB0aGlzLnR5cGUgPSBcInByb2plY3RcIjtcbiAgdGhpcy50YXNrSWRBcnIgPSBbXTtcbn1cblxuUHJvamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlKTtcblxuUHJvamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW1vdmVCeVByb2plY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy50YXNrSWRBcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGxldCByZW1vdmVJbmRleCA9IHRhc2tzLm9iakFyci5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09IGVsZW1lbnQpO1xuICAgIHRhc2tzLm9iakFyci5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xuICB9KVxufTtcblxuXG4vKiBUYXNrIENvbnN0cnVjdG9yICovXG5cbmZ1bmN0aW9uIFRhc2tDb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICB0aGlzLmRhdGUgPSBkYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIHRoaXMudHlwZSA9IFwidGFza1wiO1xuICB0aGlzLnN0YXR1cyA9IFwiYWN0aXZlXCI7XG4gIHRoaXMuaWQgPSB0YXNrcy5vYmpJZEdlbiArPSAxO1xufVxuXG5UYXNrQ29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShPYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuXG5UYXNrQ29uc3RydWN0b3IucHJvdG90eXBlLnJlbW92ZVRhc2tGcm9tUHJvamVjdElkQXJyID0gZnVuY3Rpb24gKCkgeyBcbiAgbGV0IHByb2plY3RPYmplY3QgPSBwcm9qZWN0cy5vYmpBcnIuZmluZChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgPT0gdGhpcy5wcm9qZWN0KTtcbiAgbGV0IGluZGV4TnVtID0gcHJvamVjdE9iamVjdC50YXNrSWRBcnIuZmluZEluZGV4KGlkID0+IGlkID09IHRoaXMuaWQgKTtcbiAgcHJvamVjdE9iamVjdC50YXNrSWRBcnIuc3BsaWNlKGluZGV4TnVtLCAxKTtcbn1cblxuVGFza0NvbnN0cnVjdG9yLnByb3RvdHlwZS5wdXNoSWQgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHByb2plY3RPYmplY3QgPSBwcm9qZWN0cy5vYmpBcnIuZmluZChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgPT0gdGhpcy5wcm9qZWN0KVxuICBwcm9qZWN0T2JqZWN0LnRhc2tJZEFyci5wdXNoKHRoaXMuaWQpO1xufVxuXG5UYXNrQ29uc3RydWN0b3IucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKHRoaXMuc3RhdHVzID09IFwiYWN0aXZlXCIpID8gKHRoaXMuc3RhdHVzID0gXCJjb21wbGV0ZVwiKTogKHRoaXMuc3RhdHVzID0gXCJhY3RpdmVcIik7XG59XG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY291bnRQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcbiAgc3dpdGNoICh0aGlzLnByaW9yaXR5KSB7XG4gICAgY2FzZSBcImxvd1wiOlxuICAgICAgcmV0dXJuIDE7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICByZXR1cm4gMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICByZXR1cm4gMztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMDtcbiAgfVxufTtcblxuVGFza0NvbnN0cnVjdG9yLnByb3RvdHlwZS5wdWJsaXNoQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgcHViU3ViVGFza3MucHVibGlzaChcImRpc3BsYXlDb21wbGV0ZVwiLCB0aGlzKTtcbn1cblxuXG5cbi8qIE5vdGUgQ29uc3RydWN0b3IgKi9cblxuZnVuY3Rpb24gTm90ZUNvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgdGhpcy50eXBlID0gXCJub3RlXCI7XG4gIHRoaXMuaWQgPSBub3Rlcy5vYmpJZEdlbiArPSAxO1xufVxuXG5Ob3RlQ29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShPYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuXG4vKiBOb3RlQ29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAoKSB7XG4gIHB1YlN1Yk5vdGVzLnB1Ymxpc2goXCJub3RlXCIsIHsgdGl0bGU6IHRoaXMudGl0bGUsIGRldGFpbHM6IHRoaXMuZGV0YWlscyB9KTtcbiAgY29uc29sZS5sb2cobm90KVxufTsgKi9cblxuXG5jb25zb2xlLmxvZyhwdWJTdWJUYXNrcyk7XG4vKiBTdWJzY3JpYmVycyAqL1xucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJzY3JpYmVQcm9qZWN0KTtcblxucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJTZWxlY3RQcm9qZWN0SW5wdXQpO1xucHViU3ViTm90ZXMuc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJzY3JpYmVOb3RlKTtcbnB1YlN1Yk5vdGVzLnN1YnNjcmliZShcImNsZWFyXCIsIHN1YlJtdk5vdGVEaXNwbGF5KTtcblxuXG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJkaXNwbGF5XCIsIHN1YnNjcmliZVRhc2spO1xucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJUYXNrTGlzdEl0ZW0pO1xucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViUm12VGFza0NvbnRhaW5lcik7XG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJjbGVhclwiLCBzdWJSbXZUYXNrcyk7XG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJkaXNwbGF5Q29tcGxldGVcIiwgc3ViQ29tcGxldGVUYXNrKTsgXG5cblxucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViUm12UHJvamVjdERpc3BsYXkpO1xucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViQ2xlYXJTZWxlY3RPcHRpb25zKTtcblxuZXhwb3J0IHtcbiAgTm90ZUNvbnN0cnVjdG9yLFxuICBQcm9qZWN0Q29uc3RydWN0b3IsXG4gIFRhc2tDb25zdHJ1Y3RvcixcbiAgZGlzcGxheU1vZCxcbn07XG4iLCJpbXBvcnQgeyBtb2RhbCB9IGZyb20gXCIuL21vZGFsL21vZGFsXCI7XG5pbXBvcnQgeyBzZWFyY2hNb2RhbCwgc2VhcmNoSW5wdXQgfSBmcm9tIFwiLi9tb2RhbC9fX3NlYXJjaC9tb2RhbF9fc2VhcmNoXCI7XG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheS9kaXNwbGF5XCI7XG5cbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbm1haW5EaXYuY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cbi8qIGRpc3BsYXkgZm9ybSBtb2RhbCBidXR0b24gKi9cbmNvbnN0IGRpc3BsYXlGb3JtTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuZGlzcGxheUZvcm1Nb2RhbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuZGlzcGxheUZvcm1Nb2RhbC50ZXh0Q29udGVudCA9IFwiK1wiO1xuZGlzcGxheUZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKFwibWFpbl9fZGlzcGxheS1mb3JtLWJ0blwiLCBcImMtbWFpbl9fZGlzcGxheS1mb3JtLWJ0blwiKTtcbmRpc3BsYXlGb3JtTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5fX21vZGFsLS1oaWRkZW5cIik7XG4gIG1vZGFsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYW5pbWF0aW9uLW5hbWUgOiBzd2lybC1pbi1md2Q7IGFuaW1hdGlvbi1kdXJhdGlvbjogMC41c1wiKTtcbiAgXG5cbn0pO1xuLypkaXNwbGF5IHNlYXJjaCBtb2RhbCBidXR0b24qL1xuY29uc3QgZGlzcGxheVNlYXJjaE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmRpc3BsYXlTZWFyY2hNb2RhbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuZGlzcGxheVNlYXJjaE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtYWluX19kaXNwbGF5LXNlYXJjaC1idG5cIiwgXCJjLW1haW5fX2Rpc3BsYXktc2VhcmNoLWJ0blwiKTtcblxuXG5kaXNwbGF5U2VhcmNoTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuICBzZWFyY2hNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibWFpbl9fc2VhcmNoLW1vZGFsLS1oaWRkZW5cIik7XG4gIHNlYXJjaE1vZGFsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYW5pbWF0aW9uLW5hbWUgOiBzd2luZy1pbi1sZWZ0OyBhbmltYXRpb24tZHVyYXRpb246IDAuNXNcIik7XG4gXG4gIHNlYXJjaElucHV0LmZvY3VzKCk7XG4gXG59KTtcblxuXG5cbm1haW5EaXYuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG5tYWluRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlGb3JtTW9kYWwpO1xubWFpbkRpdi5hcHBlbmRDaGlsZChkaXNwbGF5U2VhcmNoTW9kYWwpXG5tYWluRGl2LmFwcGVuZENoaWxkKG1vZGFsKTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQoc2VhcmNoTW9kYWwpO1xuXG5leHBvcnQgeyBtYWluRGl2IH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVCYXNpY0lucHV0LFxuICBhcHBlbmRMYWJlbElucHV0LFxuICBjcmVhdGVMYWJlbCxcbn0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCI7XG5pbXBvcnQgeyBOb3RlQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5cbmNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbi8qIGlucHV0cyAqL1xuY29uc3Qgbm90ZVRpdGxlID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgXCJmb3JtX19pbnB1dFwiLFxuICBcInRleHRcIixcbiAgXCJub3RlLXRpdGxlXCIsXG4gIFwibm90ZS10aXRsZVwiXG4pO1xuY29uc3Qgbm90ZVRpdGxlTGFiZWwgPSBjcmVhdGVMYWJlbChub3RlVGl0bGUsIFwiVGl0bGU6XCIpO1xuYXBwZW5kTGFiZWxJbnB1dChub3RlRm9ybSwgbm90ZVRpdGxlTGFiZWwsIG5vdGVUaXRsZSk7XG5cbmNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5ub3RlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZVwiKTtcbm5vdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5vdGVcIik7XG5cbmNvbnN0IG5vdGVMYWJlbCA9IGNyZWF0ZUxhYmVsKG5vdGUsIFwiRGV0YWlsc1wiKTtcbmFwcGVuZExhYmVsSW5wdXQobm90ZUZvcm0sIG5vdGVMYWJlbCwgbm90ZSk7XG5cbi8qIFwic3VibWl0XCIgYnV0dG9uICovXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyZXNldFwiKTsgLyogbWF5YmUgY2xlYXIgaW5zdGVhZCovXG5zdWJtaXQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBOb3RlXCI7XG5ub3RlRm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4vKiBQVUJTVUIgKi9cblxuZnVuY3Rpb24gcHVibGlzaE5vdGUoKSB7XG4gIGxldCBvYmogPSBuZXcgTm90ZUNvbnN0cnVjdG9yKG5vdGVUaXRsZS52YWx1ZSwgbm90ZS52YWx1ZSk7XG4gIG9iai5kaXNwbGF5QWxsKCk7XG59XG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHVibGlzaE5vdGUpO1xuXG5leHBvcnQgeyBub3RlRm9ybSB9O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlQmFzaWNJbnB1dCxcbiAgYXBwZW5kTGFiZWxJbnB1dCxcbiAgY3JlYXRlTGFiZWwsXG59IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuaW1wb3J0IHsgUHJvamVjdENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuaW1wb3J0IHsgY3JlYXRlQWxlcnQgfSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9fYWxlcnRcIjtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuLyogaW5wdXRzICovXG5jb25zdCBwcm9qZWN0ID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgXCJmb3JtX19pbnB1dFwiLFxuICBcInRleHRcIixcbiAgXCJwcm9qZWN0LXRpdGxlXCIsXG4gIFwicHJvamVjdFwiXG4pO1xuY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChwcm9qZWN0LCBcIlRpdGxlOlwiKTtcbmFwcGVuZExhYmVsSW5wdXQocHJvamVjdEZvcm0sIGxhYmVsLCBwcm9qZWN0KTtcblxuLyogXCJzdWJtaXRcIiBidXR0b24gKi9cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpO1xuc3VibWl0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xucHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICBpZiAoIXByb2plY3QudmFsdWUpIHtcbiAgICBjcmVhdGVBbGVydChcIlBsZWFzZSBwcm92aWRlIGEgbmFtZSBmb3IgeW91ciBwcm9qZWN0IVwiKVxuICB9IGVsc2Uge1xuICAgIGxldCBvYmogPSBuZXcgUHJvamVjdENvbnN0cnVjdG9yKHByb2plY3QudmFsdWUpO1xuICAgIG9iai5kaXNwbGF5QWxsKCk7XG4gIH1cbn1cbmxldCBvYmogPSBuZXcgUHJvamVjdENvbnN0cnVjdG9yKFwiZ2VuZXJhbFwiKTtcbm9iai5kaXNwbGF5QWxsKCk7XG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVByb2plY3RzKTtcblxuZXhwb3J0IHsgcHJvamVjdEZvcm0gfTtcbiIsIi8qIFRPIERPIEZPUk0gKi9cbmltcG9ydCB7XG4gIGNyZWF0ZUJhc2ljSW5wdXQsXG4gIGFwcGVuZExhYmVsSW5wdXQsXG4gIGNyZWF0ZUxhYmVsLFxuICBjcmVhdGVSYWRpb0lucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgYXBwZW5kUmFkaW9JbnB1dHNcbn0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCI7XG5pbXBvcnQgeyBUYXNrQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQge2NyZWF0ZUFsZXJ0fSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9fYWxlcnRcIjtcbmltcG9ydCB7Zm9ybWF0LCBwYXJzZUlTT30gZnJvbSBcImRhdGUtZm5zXCJcbi8qIFxuZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgXCJ5eXl5LU1NLWRkXCIpOyAqL1xuXG5cbmxldCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xudGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XG5cbmxldCB0aXRsZSA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJmb3JtX19pbnB1dFwiLCBcInRleHRcIiwgXCJ0aXRsZVwiLCBcInRpdGxlXCIpO1xudGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZTogR3JvY2VyaWVzXCIpO1xudGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0LS10ZXh0XCIpO1xubGV0IHRpdGxlTGFiZWwgPSBjcmVhdGVMYWJlbCh0aXRsZSwgXCJUaXRsZVwiKTtcbnRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcm1fX2xhYmVsLS1oaWRkZW5cIik7XG5hcHBlbmRMYWJlbElucHV0KHRhc2tGb3JtLCB0aXRsZUxhYmVsLCB0aXRsZSk7XG5cblxubGV0IHRleHRBcmVhID0gY3JlYXRlVGV4dEFyZWEoXCJmb3JtX19pbnB1dC0tdGV4dEFyZWFcIiwgXCJ0ZXh0QXJlYVwiLCBcInRleHRBcmVhXCIpXG50ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCAvKiBhcmUgdGhlc2UgbmVjZXNzYXJ5Pz8gKi9cbiAgXCJmb3JtX19pbnB1dC0tdGV4dFwiLFxuICBcImZvcm0taW5wdXRcIlxuKTtcbnRleHRBcmVhLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiMiBwb3RhdG9lc1wiKTtcblxubGV0IHRleHRBcmVhTGFiZWwgPSBjcmVhdGVMYWJlbCh0ZXh0QXJlYSwgXCJEZXRhaWxzXCIpO1xudGV4dEFyZWFMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbGFiZWwtLWhpZGRlblwiKTtcbmFwcGVuZExhYmVsSW5wdXQodGFza0Zvcm0sIHRleHRBcmVhTGFiZWwsIHRleHRBcmVhKTtcblxubGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZXQgZGF0ZSA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJmb3JtX19pbnB1dFwiLCBcImRhdGVcIiwgXCJkYXRlXCIsIFwiZGF0ZVwiKTtcbmxldCBkYXRlTGFiZWwgPSBjcmVhdGVMYWJlbChkYXRlLCBcIkR1ZSBkYXRlOlwiKTtcbmFwcGVuZExhYmVsSW5wdXQoZGl2LCBkYXRlTGFiZWwsIGRhdGUpO1xudGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcblxuLyogU0VMRUNUIFBST0pFQ1QgKi9cbmNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuc2VsZWN0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdC1wcm9qZWN0XCIpO1xuc2VsZWN0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdFwiKTtcblxuLyogY2xlYXJzIHRoZSBzZWxlY3Qgb3B0aW9ucyBhdCB0aGUgc2FtZSB0aW1lIGFzIHRoZSBwcm9qZWN0IGRpc3BsYXkgaXMgY2xlYXJlZCAqL1xuZnVuY3Rpb24gc3ViQ2xlYXJTZWxlY3RPcHRpb25zKCkge1xuICB3aGlsZSAoc2VsZWN0UHJvamVjdC5maXJzdENoaWxkKSB7XG4gICAgc2VsZWN0UHJvamVjdC5yZW1vdmVDaGlsZChzZWxlY3RQcm9qZWN0Lmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuLyogdXBkYXRlcyB0aGUgc2VsZWN0IG9wdGlvbnMgd2hlbiBuZXcgcHJvamVjdHMgYXJlIGFkZGVkICovXG5mdW5jdGlvbiBzdWJTZWxlY3RQcm9qZWN0SW5wdXQob2JqKSB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBvYmoudGl0bGUpO1xuICBvcHRpb24udGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn1cblxuY29uc3Qgc2VsZWN0TGFiZWwgPSBjcmVhdGVMYWJlbChzZWxlY3RQcm9qZWN0LCBcIlByb2plY3RcIik7XG5hcHBlbmRMYWJlbElucHV0KHRhc2tGb3JtLCBzZWxlY3RMYWJlbCwgc2VsZWN0UHJvamVjdCk7XG5cbi8qUkFESU8gQlVUVE9OUyovXG5sZXQgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG5sZXQgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbmxlZ2VuZC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbmZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG5cblxubGV0IHByaW9yaXR5TG93ID0gY3JlYXRlUmFkaW9JbnB1dChcImxvd1wiLCBcImZvcm1fX2lucHV0XCIpO1xubGV0IHByaW9yaXR5TWVkaXVtID0gY3JlYXRlUmFkaW9JbnB1dChcIm1lZGl1bVwiLCBcImZvcm1fX2lucHV0XCIpO1xubGV0IHByaW9yaXR5SGlnaCA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJoaWdoXCIsIFwiZm9ybV9faW5wdXRcIik7XG5cblxuXG5cbmFwcGVuZFJhZGlvSW5wdXRzKGZpZWxkc2V0LCBbcHJpb3JpdHlMb3csIHByaW9yaXR5TWVkaXVtLCBwcmlvcml0eUhpZ2hdKTtcblxudGFza0Zvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuXG5sZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuc3VibWl0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgVGFza1wiO1xuc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG50YXNrRm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gXG5mdW5jdGlvbiBjaGVja0RhdGUoKSB7XG4gIGxldCBkYXRlUHJvY2Vzc2VkID0gbmV3IERhdGUoZGF0ZS52YWx1ZSk7XG4gIGlmIChkYXRlLnZhbHVlKSB7XG4gICAgZGF0ZVByb2Nlc3NlZCA9IGRhdGVQcm9jZXNzZWQudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gICAgXG4gIH1cbiAgcmV0dXJuICghZGF0ZS52YWx1ZSApID8gXCJcIiA6IGRhdGVQcm9jZXNzZWQ7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGxldCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dDpjaGVja2VkXCIpO1xuICBpZiAoIXRpdGxlLnZhbHVlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUFsZXJ0KFwiUGxlYXNlIGNyZWF0ZSBhIHRpdGxlIGZvciB5b3VyIHRhc2shXCIpO1xuICB9XG4gIGlmICghcmFkaW8pIHtcbiAgIHJldHVybiBjcmVhdGVBbGVydChcIlBsZWFzZSBzZWxlY3QgYSBwcmlvcml0eSBmb3IgeW91ciB0YXNrIVwiKTtcbiAgfVxuXG4gIFxuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpO1xuICBsZXQgb2JqID0gbmV3IFRhc2tDb25zdHJ1Y3RvcihcbiAgICB0aXRsZS52YWx1ZSxcbiAgICB0ZXh0QXJlYS52YWx1ZSxcbiAgICBjaGVja0RhdGUoKSxcbiAgICByYWRpby52YWx1ZSxcbiAgICBzZWxlY3RQcm9qZWN0LnZhbHVlXG4gICk7XG4gIG9iai5wdXNoSWQoKTtcbiAgb2JqLmRpc3BsYXlBbGwoKTtcbn1cblxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5VGFza3MpO1xuXG5leHBvcnQgeyB0YXNrRm9ybSwgc3ViU2VsZWN0UHJvamVjdElucHV0LCBzdWJDbGVhclNlbGVjdE9wdGlvbnMgfTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUJhc2ljSW5wdXQsXG4gIGFwcGVuZExhYmVsSW5wdXQsXG4gIGNyZWF0ZUxhYmVsLFxufSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIjtcbmltcG9ydCB7IGRpc3BsYXlNb2QgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5cbi8qIHNlYXJjaCBtb2RhbCAqL1xubGV0IHNlYXJjaE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNlYXJjaE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtYWluX19zZWFyY2gtbW9kYWwtLWhpZGRlblwiLCBcInAtbWFpbl9fc2VhcmNoLW1vZGFsXCIsIFwibWFpbl9fc2VhcmNoLW1vZGFsXCIpO1xuXG5cbi8qIHNlYXJjaCBmb3JtICovXG5sZXQgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xubGV0IHNlYXJjaElucHV0ID0gY3JlYXRlQmFzaWNJbnB1dChcInNlYXJjaC1tb2RhbF9faW5wdXRcIiwgXCJ0ZXh0XCIsIFwic2VhcmNoXCIsIFwic2VhcmNoXCIpO1xuc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJTZWFyY2hcIilcbnNlYXJjaElucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKVxuXG5sZXQgc2VhcmNoTGFiZWwgPSBjcmVhdGVMYWJlbChzZWFyY2hJbnB1dCwgXCJTZWFyY2hcIik7XG5zZWFyY2hMYWJlbC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLW1vZGFsX19sYWJlbFwiKVxuYXBwZW5kTGFiZWxJbnB1dChzZWFyY2hGb3JtLCBzZWFyY2hMYWJlbCwgc2VhcmNoSW5wdXQpO1xuXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCk9PiB7XG4gIGRpc3BsYXlNb2QudXBkYXRlU2VhcmNoKHNlYXJjaElucHV0LnZhbHVlKTtcbn0pXG5cbmZ1bmN0aW9uIGhpZGUoKSB7XG4gIHNlYXJjaE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtYWluX19zZWFyY2gtbW9kYWwtLWhpZGRlblwiKVxufVxuXG4vKiBzZWFyY2ggbW9kYWwgaGlkZXMgd2hlbiBjbGljayBvdXRzaWRlIG9mIGl0ICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubWFpbl9fc2VhcmNoLW1vZGFsXCIpJiYgIWV2ZW50LnRhcmdldC5tYXRjaGVzKFwiLm1haW5fX2Rpc3BsYXktc2VhcmNoLWJ0blwiKSAgJiYgKHNlYXJjaE1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcIm1haW5fX3NlYXJjaC1tb2RhbC0taGlkZGVuXCIpPT0gZmFsc2UpKSB7XG4gICAgc2VhcmNoTW9kYWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJhbmltYXRpb24tbmFtZSA6IHN3aW5nLW91dC1sZWZ0OyBhbmltYXRpb24tZHVyYXRpb246IDAuNXNcIik7XG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHNldFRpbWVvdXQoaGlkZSwgNTAwKSBcbiAgfSBcbn0pIFxuXG5zZWFyY2hNb2RhbC5hcHBlbmRDaGlsZChzZWFyY2hGb3JtKTtcblxuZXhwb3J0IHtzZWFyY2hNb2RhbCwgc2VhcmNoSW5wdXR9O1xuXG4iLCJsZXQgc2lkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zaWRlRGl2LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fc2lkZVwiLCBcInAtbW9kYWxfX3NpZGVcIik7XG5cbmxldCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnRhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbnRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnVEFTSyc7XG50YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fc2lkZS1idG5cIilcblxubGV0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xucHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xucHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFwiO1xuXG5wcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fc2lkZS1idG5cIilcblxubGV0IG5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubm90ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xubm90ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTk9URVwiO1xubm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX3NpZGUtYnRuXCIpXG5cblxuc2lkZURpdi5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKVxuXG5zaWRlRGl2LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pXG5cbnNpZGVEaXYuYXBwZW5kQ2hpbGQobm90ZUJ1dHRvbilcblxuZXhwb3J0IHtzaWRlRGl2LCB0YXNrQnV0dG9uLCBub3RlQnV0dG9uLCBwcm9qZWN0QnV0dG9ufSAiLCJpbXBvcnQgKiBhcyBzaWRlIGZyb20gXCIuL19fc2lkZS9tb2RhbF9fc2lkZVwiXG5pbXBvcnQge3Rhc2tGb3JtfSBmcm9tIFwiLi9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXRhc2tcIiBcbmltcG9ydCB7cHJvamVjdEZvcm19IGZyb20gXCIuL19fZm9ybS9tb2RhbF9fZm9ybS0tcHJvamVjdFwiIFxuaW1wb3J0IHtub3RlRm9ybX0gZnJvbSBcIi4vX19mb3JtL21vZGFsX19mb3JtLS1ub3RlXCJcblxubGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxubW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIsIFwicC1tYWluX19tb2RhbFwiKTtcblxubGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNsb3NlQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5jbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInBvc2l0aW9uOmFic29sdXRlXCIpIC8qIGhhcyB0byBiZSBtb3ZlZCB0byBzY3NzISEhICovXG5jbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xubW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG5mdW5jdGlvbiBoaWRlTW9kYWwoKSB7XG4gIHJlbW92ZUZvcm0oKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtYWluX19tb2RhbC0taGlkZGVuXCIpO1xufSBcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlTW9kYWwpXG5cbi8qIHNpZGUgKi9cbm1vZGFsLmFwcGVuZENoaWxkKHNpZGUuc2lkZURpdik7XG5cbi8qIGZvcm0gb24gaW5pdGlhbCBsb2FkICovXG5sZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5mb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbmZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19mb3JtXCIpXG5tb2RhbC5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuLyogcmVtb3ZlIGZvcm0gZnVuYyAqL1xuZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcbiAgd2hpbGUgKGZvcm1Db250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGZvcm1Db250YWluZXIuZmlyc3RDaGlsZC5yZXNldCgpXG4gICAgZm9ybUNvbnRhaW5lci5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuLyogc2lkZSBidXR0b24gZXZlbnQgbGlzdGVuZXJzICovXG5zaWRlLnRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xufSlcbnNpZGUucHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gIHJlbW92ZUZvcm0oKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG59KVxuc2lkZS5ub3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgcmVtb3ZlRm9ybSgpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVGb3JtKTtcbn0pXG4vKiBoaWRlIG1vZGFsIHdoZW4gY2xpY2tlZCBvdXRzaWRlIG9mIHRoZSBtb2RhbCAqL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucC1tYWluX19tb2RhbFwiKSYmICFldmVudC50YXJnZXQubWF0Y2hlcyhcIi5tYWluX19kaXNwbGF5LWZvcm0tYnRuXCIpICAmJiAobW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWFpbl9fbW9kYWwtLWhpZGRlblwiKT09IGZhbHNlKSkge1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYW5pbWF0aW9uLW5hbWUgOiBzd2lybC1vdXQtYmNrOyBhbmltYXRpb24tZHVyYXRpb246IDAuNnNcIik7XG4gICAgc2V0VGltZW91dChoaWRlTW9kYWwsIDYwMCkgXG4gIH0gXG59KVxuXG5leHBvcnQge21vZGFsfSAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyAqL1xuaW1wb3J0IHtoZWFkZXJ9IGZyb20gXCIuL2hlYWRlci9oZWFkZXJcIlxuaW1wb3J0IHttYWluRGl2fSBmcm9tIFwiLi9tYWluL21haW5cIiBcblxuXG5sZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbmJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==