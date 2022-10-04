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
/* harmony export */   "subscribeNote": () => (/* binding */ subscribeNote)
/* harmony export */ });


let noteDisplay = document.createElement("div");
noteDisplay.classList.add("display__container-note--hidden","display__container-note");

function subscribeNote(obj) {
  let titleNote = document.createElement("h4");
  titleNote.textContent = obj.title;
  noteDisplay.appendChild(titleNote);
  let detailsNote = document.createElement("p");
  detailsNote.textContent = obj.details;
  noteDisplay.appendChild(detailsNote)
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
projectDisplay.classList.add("display__container-project--hidden", "display__container-project");
 
function subscribeProject(obj) {
  let projectDiv = document.createElement("div");
  projectDiv.setAttribute("data-id", obj.id);
  /* delete button */
  if (obj.id !== 1) { //exemption for the general project
    let dltBtn = document.createElement("button");
    dltBtn.textContent = "x";
    dltBtn.setAttribute("type", "button"); 
    dltBtn.addEventListener("click", () => {
      if (obj.taskIdArr.length > 0) {
        let alert = (0,_general_general_js_alert__WEBPACK_IMPORTED_MODULE_3__.createAlert)("There seem to be some unfinished tasks in this project. Are you sure you would like to delete it?");
        let yesBtn = document.createElement("button");
        yesBtn.textContent = "Yes";
        yesBtn.addEventListener("click", () => {
          
          _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.removeByProject(obj);
          console.log(`this one yo ${obj}`)
          console.log(obj)
          _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.projectRemover.remove(obj.id);

         
          alert.remove();
        })
        alert.appendChild(yesBtn);
        let noBtn = document.createElement("button");
        noBtn.textContent = "No";
        noBtn.addEventListener("click", () => {
          alert.remove();
        })
        alert.appendChild(noBtn);
      } else {
        _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.projectRemover.remove(obj.id);
        _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.removeByProject(obj);
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
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.clearDisplay();
}

function subRmvProjectDisplay() {
  while (projectDisplay.firstChild) {
    projectDisplay.removeChild(projectDisplay.lastChild);
  }
}



/* Removes Tasks Items when */
function subRmvTasks() {
  let taskList = document.querySelectorAll(".task-list")
  taskList.forEach((listItem) => {
    while (listItem.firstChild) {
      listItem.removeChild(listItem.lastChild);
    }
  } )
}

  
function subTaskListItem(obj) {
  console.log(obj);
  let taskList = document.querySelector("." + obj.project);

  if (taskList) {
  taskList.setAttribute("data-id", obj.id); 
  } else {
    return;
  }

  let completeInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createBasicInput)("project-div__done-input", "checkbox", "complete-input", "complete-input"); //finished checkbox
  
  
  let listItem = document.createElement("li");
  listItem.setAttribute("data-li-id", obj.id)
  completeInput.addEventListener("click", ()=> {
    _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.complete(obj.id);
    (obj.status == "complete") ? _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.removeTaskFromProjectIdArr(obj): obj.pushId() ;  
    let taskTable = document.querySelectorAll(`li[data-li-id = "${obj.id}"] th,li[data-li-id = "${obj.id}"] td`);
    taskTable.forEach((element) => {
      element.classList.toggle("complete");
    })
  })
  listItem.appendChild(completeInput);
  (0,_general_general_js_table__WEBPACK_IMPORTED_MODULE_2__.createTable)(obj, listItem);

  listItem.addEventListener("click", () => {
    let hiddenRows = document.querySelectorAll(`li[data-li-id = "${obj.id}"] tr:not(:first-child)`);
    hiddenRows.forEach((row) => {
      row.classList.toggle("hidden");
    })
   
  })
  
  taskList.appendChild(listItem);
  let hiddenRows = document.querySelectorAll(".task-list tr:not(:first-child)");
  hiddenRows.forEach((row) => {
    row.classList.add("hidden");
  })
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
taskDisplay.classList.add("display__container-task--hidden", "display__container-task" );

/* SORT BUTTON */
/* NEED TO ADD A SORT BY DATE OPTION */
let sortDiv = document.createElement("div");
let sort = document.createElement("select");
let sortPlaceholder = document.createElement("option");
sortPlaceholder.setAttribute("disabled","");
sortPlaceholder.setAttribute("selected","")
sortPlaceholder.setAttribute("value", " ");
sortPlaceholder.textContent = "Sort";
sort.appendChild(sortPlaceholder);

let sortPriorityDescending = document.createElement("option");

sortPriorityDescending.textContent = "Most Important";
sortPriorityDescending.setAttribute("value", "most");

let sortPriorityAscending = document.createElement("option");

sortPriorityAscending.textContent = "Least Important";
sortPriorityAscending.setAttribute("value", "least")

let sortDateAscending = document.createElement("option");
sortDateAscending.textContent = "Date (Ascending)"
sortDateAscending.setAttribute("value", "date-ascending");

let sortDateDescending = document.createElement("option");
sortDateDescending.textContent = "Date (Descending)"
sortDateDescending.setAttribute("value", "date-descending");


sort.addEventListener("click", () => {
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.displaySorted(sort.value);
   
});

sort.appendChild(sortPriorityDescending);
sort.appendChild(sortPriorityAscending);
sort.appendChild(sortDateAscending)
sort.appendChild(sortDateDescending);
sortDiv.appendChild(sort);
taskDisplay.appendChild(sortDiv);


/* Complete Display button */
const completeDiv = document.createElement("div");
const completeDisplayBtn = document.createElement("button");
completeDisplayBtn.setAttribute("type", "button");
completeDisplayBtn.textContent = "COMPLETE" // change to check svg later;
completeDisplayBtn.addEventListener("click", () => {
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.displayComplete();
  
  /* 
  taskRemover.displayComplete();
  let checkedInput = document.querySelectorAll(".task-div__done-input");
  checkedInput.forEach((input) => {
    input.setAttribute("checked", "");
    input.addEventListener("click", () => {
      let taskTable = document.querySelectorAll(`div[data-id="${obj.id}"] th, div[data-id="${obj.id}"] td`);
      taskTable.forEach((element) => {
        console.log(element)
        console.log("yoo");
        element.classList.toggle("complete");
      })
    })
  })
  let tableRows = document.querySelectorAll("tr");
  tableRows.forEach((tr) => {
    tr.classList.add("complete");
  }) */
})
completeDiv.appendChild(completeDisplayBtn);
taskDisplay.appendChild(completeDiv);





/* TASK CONTAINER */
const taskContainer = document.createElement("div");
taskDisplay.appendChild(taskContainer);

/* Might have to make a separate subscribe for complete tasks */

function priorityColorSwitch(element, obj) {
  switch(obj.priority) {
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
  let completeInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createBasicInput)("task-div__done-input", "checkbox", "complete-input", "complete-input");
  completeInput.setAttribute("checked", "");
  completeInput.addEventListener("click", ()=> {
    _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.complete(obj.id);
    let taskTable = document.querySelectorAll(`div[data-id="${obj.id}"] th, div[data-id="${obj.id}"] td`);
    taskTable.forEach((element) => {
      element.classList.toggle("complete");
    })
  })

  taskDiv.appendChild(completeInput);
  (0,_general_general_js_table__WEBPACK_IMPORTED_MODULE_1__.createTable)(obj, taskDiv);
  
  taskContainer.appendChild(taskDiv);
  let allRows = document.querySelectorAll("th, td");
  allRows.forEach((row) => {
    row.classList.add("complete");
  })
}
 

function subscribeTask(obj) {
  let taskDiv = document.createElement("div");
  taskDiv.setAttribute("data-id", obj.id);
  
  
  taskDiv.setAttribute("data-date", obj.date);
  priorityColorSwitch(taskDiv, obj)
  /* Complete checkbox */
  let completeInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createBasicInput)("task-div__done-input", "checkbox", "complete-input", "complete-input");
  
  completeInput.addEventListener("click", ()=> {
    _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.complete(obj.id);
    (obj.status == "complete") ? _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.removeTaskFromProjectIdArr(obj): obj.pushId() ;
    let taskTable = document.querySelectorAll(`div[data-id="${obj.id}"] th, div[data-id="${obj.id}"] td`);
    
    taskTable.forEach((element) => {
      element.classList.toggle("complete");
    })
    editBtn.classList.toggle("hidden");
  })

  taskDiv.appendChild(completeInput);

  /* DELETE BUTTON */
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "x";
  dltBtn.setAttribute("type", "button");
  dltBtn.addEventListener("click", () => {
    console.log(obj)
    _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.remove(obj.id);
    _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.removeTaskFromProjectIdArr(obj);
  });
  taskDiv.appendChild(dltBtn);

  /*EDIT BUTTON*/
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.setAttribute("type", "button");

  /*Have to create labels and hide them for accessibility ??*/

  editBtn.addEventListener("click", () => {
    let tableData = document.querySelectorAll(
      `[data-id="${obj.id}"] .table__td`
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
      let editedInputs = document.querySelectorAll(".table__edit-input");
      editedInputs.forEach((input) => {
        if (input.getAttribute("name") == "title") {
          input.title == "" ? obj.title : (obj.title = input.value);
        } else if (input.getAttribute("name") == "details") {
          obj.details = input.value;
        } else if (input.getAttribute("name") == "date") {
          input.value == "" ? obj.date : (obj.date = new Date(input.value));
        }
      });
      let editedPriorityInput = document.querySelector(
        ".edit-btn__input--radio:checked"
      );
      editedPriorityInput == null
        ? obj.priority
        : (obj.priority = editedPriorityInput.value);
      submitChangeBtn.remove();
      _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.clearDisplay();
    });
    taskDiv.appendChild(submitChangeBtn);
  });

  taskDiv.appendChild(editBtn);
  (0,_general_general_js_table__WEBPACK_IMPORTED_MODULE_1__.createTable)(obj, taskDiv);

  //Date Ascending Display
  if (sort.value == "date-ascending") {
    let currentDate = new Date();
    currentDate = currentDate.toISOString().split("T")[0];/* 
    currentDate = currentDate.split("-").reverse().join("-"); */
    let lastWeekDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), {weekStartsOn: 1});
    

    if (taskDiv.getAttribute("data-date")== "" ) {  //if date was not provided
      let noDateDiv = document.querySelector(".task-container__div--no-date");
      if (!noDateDiv) { 
        noDateDiv = document.createElement("div");
        noDateDiv.setAttribute("style", "background-color: pink");
        noDateDiv.classList.add("task-container__div--no-date")
        let noDateHeading = document.createElement("h1");
        noDateHeading.textContent = "Undated";
        noDateDiv.appendChild(noDateHeading);
      }       
      noDateDiv.appendChild(taskDiv);
      return taskContainer.appendChild(noDateDiv);
    }  else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(taskDiv.getAttribute("data-date")),  (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(currentDate)))  {
      let overdueDiv= document.querySelector(".task-container__div--overdue")
      if (!overdueDiv) {
      overdueDiv = document.createElement("div");
      overdueDiv.setAttribute("style", "background-color: orange");
      overdueDiv.classList.add("task-container__div--overdue")
      let overdueHeading = document.createElement("h1");
      overdueHeading.textContent = "Overdue";
      overdueDiv.appendChild(overdueHeading);
      }
      overdueDiv.appendChild(taskDiv)
      return taskContainer.appendChild(overdueDiv);

    } else if (taskDiv.getAttribute("data-date") == currentDate){ //if date is today
      let todayDiv = document.querySelector(".task-container__div--today")
      if (!todayDiv) {
        todayDiv = document.createElement("div");
        todayDiv.setAttribute("style", "background-color: green");
        todayDiv.classList.add("task-container__div--today")
        let todayHeading = document.createElement("h1");
        todayHeading.textContent = "Today";
        todayDiv.appendChild(todayHeading);
      }
      todayDiv.appendChild(taskDiv)
      return taskContainer.appendChild(todayDiv);
    } else if (((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(taskDiv.getAttribute("data-date")),  lastWeekDay))) {
      let weekDiv = document.querySelector(".task-container__div--week")
      if (!weekDiv) {
        weekDiv = document.createElement("div");
        weekDiv.setAttribute("style", "background-color: purple");
        weekDiv.classList.add("task-container__div--week")
        let weekHeading = document.createElement("h1");
        weekHeading.textContent = "This Week";
        weekDiv.appendChild(weekHeading);
      }
      weekDiv.appendChild(taskDiv)
      return taskContainer.appendChild(weekDiv);
    } else if (((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(taskDiv.getAttribute("data-date")),  lastWeekDay))) {
      let upcomingDiv = document.querySelector(".task-container__div--upcoming")
      if (!upcomingDiv) {
        upcomingDiv = document.createElement("div");
        upcomingDiv.setAttribute("style", "background-color: blue");
        upcomingDiv.classList.add("task-container__div--upcoming")
        let upcomingHeading = document.createElement("h1");
        upcomingHeading.textContent = "Upcoming";
        upcomingDiv.appendChild(upcomingHeading);
      }
      upcomingDiv.appendChild(taskDiv)
      return taskContainer.appendChild(upcomingDiv);
    }}





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
sideNav.appendChild(_side_display_side__WEBPACK_IMPORTED_MODULE_0__.nav)

let displayContainer = document.createElement("div");
displayContainer.classList.add("display__container")
let displayContent = document.createElement("div");
displayContent.classList.add("display__content")

displayContent.appendChild(_container_display_container_task__WEBPACK_IMPORTED_MODULE_2__.taskDisplay);
displayContent.appendChild(_container_display_container_note__WEBPACK_IMPORTED_MODULE_3__.noteDisplay);
displayContent.appendChild(_container_display_container_project__WEBPACK_IMPORTED_MODULE_4__.projectDisplay);

/* SHOULD REFORMAT THIS */

const home = _side_display_side__WEBPACK_IMPORTED_MODULE_0__.createListItem("Home");
const project = _side_display_side__WEBPACK_IMPORTED_MODULE_0__.createListItem("Projects");
const note = _side_display_side__WEBPACK_IMPORTED_MODULE_0__.createListItem("Notes");

home.addEventListener("click", () => {
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.taskRemover.clearDisplay();
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
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.taskRemover.clearDisplay();
  _container_display_container_note__WEBPACK_IMPORTED_MODULE_3__.noteDisplay.classList.add("display__container-note--hidden");
  _container_display_container_project__WEBPACK_IMPORTED_MODULE_4__.projectDisplay.classList.remove("display__container-project--hidden");
  _container_display_container_task__WEBPACK_IMPORTED_MODULE_2__.taskDisplay.classList.add("display__container-task--hidden");
  let hiddenRows = document.querySelectorAll(".task-list tr:not(:first-child)");
  hiddenRows.forEach((row) => {
    row.classList.add("hidden");
  }) 
});

_modal_search_modal_search__WEBPACK_IMPORTED_MODULE_5__.searchInput.addEventListener("input", () => {
  _container_display_container_note__WEBPACK_IMPORTED_MODULE_3__.noteDisplay.classList.add("display__container-note--hidden");
  _container_display_container_project__WEBPACK_IMPORTED_MODULE_4__.projectDisplay.classList.add("display__container-project--hidden");
  _container_display_container_task__WEBPACK_IMPORTED_MODULE_2__.taskDisplay.classList.remove("display__container-task--hidden");

})

displayContainer.appendChild(displayContent)
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
/* harmony export */   "projectRemover": () => (/* binding */ projectRemover),
/* harmony export */   "taskRemover": () => (/* binding */ taskRemover)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../general/general__js/pub-sub */ "./src/general/general__js/pub-sub.js");
/* harmony import */ var _display_container_display_container_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/__container/display__container--note */ "./src/main/display/__container/display__container--note.js");
/* harmony import */ var _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/__container/display__container--project */ "./src/main/display/__container/display__container--project.js");
/* harmony import */ var _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/__container/display__container--task */ "./src/main/display/__container/display__container--task.js");
/* harmony import */ var _modal_form_modal_form_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/__form/modal__form--task */ "./src/main/modal/__form/modal__form--task.js");







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

/* REMOVE CONSTRUCTOR */
/* used to remove objects from the display by matching the data index to the index property in each object */
/* REFACTOR REMOVE CONSTRUCTOR IT EXPOSES PUBSUB and CLASSOBJ  instead of hereditary use a composite model. Create different functions that take pubSub/ObjectArr as an argument
and prototype them!*/

function RemoveConstructor(pubSub, classObj) {
  this.pubSub = pubSub;
  this.classObj = classObj;
} /* 
RemoveConstructor.prototype.removeAll = function() {
  this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    object.publish(object);
  });
} */


RemoveConstructor.prototype.removeByProject = function (prjRmv) {
  prjRmv.taskIdArr.forEach((element) => {
    let removeIndex = this.classObj.objArr.findIndex(task => task.id == element);
    this.classObj.objArr.splice(removeIndex, 1);
})
  
/*   this.classObj.objArr.forEach((task, index) => {
   if (prjRmv.taskIdArr.find(element => /* element == task.id console.log(element))) {
      this.classObj.objArr.splice(index, 1);
    } 
  })
 */
  /* )
  let indexOfMatch = this.classObj.objArr.findIndex((obj) => {
    return obj.project === prjRmv.title ? true : false;
  });
  this.classObj.remove(indexOfMatch);
 */  
  /* this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    object.publish(object);
  }); */
};

RemoveConstructor.prototype.removeTaskFromProjectIdArr = function (obj) { 
  let projectObject = projects.objArr.find(project => project.title == obj.project);
  let indexNum = projectObject.taskIdArr.findIndex(id => id == obj.id );
  projectObject.taskIdArr.splice(indexNum, 1);
  console.log(projectObject);
}


RemoveConstructor.prototype.remove = function (dataId) {
  let indexOfMatch = this.classObj.objArr.findIndex((obj) => {
    return obj.id === dataId ? true : false;
  });

  this.classObj.remove(indexOfMatch);
  this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    object.publish(object);
  });
};

RemoveConstructor.prototype.complete = function (dataId) {
  let match = this.classObj.objArr.find((obj) => {
    return obj.id === dataId ? true : false;
  });

  (match.status == "active") ? (match.status = "complete"): (match.status = "active");
  console.log(match);

}

RemoveConstructor.prototype.clearDisplay = function () {
  this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    if (object.status == "complete") {
    } else {
      object.publish(object);
    }
  });
};

RemoveConstructor.prototype.searchTasks = function(searchValue) {
  this.pubSub.publish("clear", true);
  tasks.objArr.forEach((object) => {
    let published;
    for (const [key, value] of Object.entries(object)) {
      if (/* key == "project", */ key == "id", key == "status", key== "type" ) {
        continue;
      } else {
        let found = value.toString().toUpperCase().includes(searchValue.toUpperCase());
        if (found && !published) {
          object.publish(object);
          published = true; // it needs to hide all the other displays and switch to container search display? 
        } 
      }
    }
  })
}
RemoveConstructor.prototype.searchProjects = function(searchValue) {
 this.pubSub.publish("clear", true);
 let displayed;
  projects.objArr.forEach((object) => {
    let published;
    for (const [key, value] of Object.entries(object)) {
      if (key== "type" ) {
        continue;
      } else {
        let found = value.toString().toUpperCase().includes(searchValue.toUpperCase());
        if (found && !published) {
          object.publish(object);
          published = true;  
          displayed = true;
        } 
      }
    }
  })
  return displayed;
} 


RemoveConstructor.prototype.displayComplete = function() {
  this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    if (object.status == "complete") {
      object.publishComplete(object);
    }}
  )
}


RemoveConstructor.prototype.displaySorted = function(value) {
  tasks.customSort(value);
  this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    object.publish(object);
  });
};

let projects = new ObjectArrClass();

let pubSubProjects = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();
let projectRemover = new RemoveConstructor(pubSubProjects, projects);

let pubSubObjectConstructors = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();

/* WEIRD OBJ make this into pubSub ? */
function subPublishRequest(obj) {
  let pubSub;
  if (obj.type == "project") {
    pubSub = pubSubProjects;
  } else if (obj.type == "task") {
    pubSub = pubSubTasks;
  }
  pubSub.publish("display", obj.obj);
}

function subDisplayAllRequest(obj) {
  let pubSub;
  let objArr;
  if (obj.type == "project") {
    pubSub = pubSubProjects;
    objArr = projects;
  } else if (obj.type == "task") {
    pubSub = pubSubTasks;
    objArr = tasks;
  }
  pubSub.publish("clear", true);
  objArr.push(obj.obj);
  console.log(objArr.objArr);
  objArr.objArr.forEach((object) => {
    if (object.status == "complete") {
    } else {
      object.publish(object);
    }
    
  });
}

pubSubObjectConstructors.subscribe("publish", subPublishRequest);

pubSubObjectConstructors.subscribe("displayAll", subDisplayAllRequest);

/* Object Constructor*/
function ObjectConstructor(/* pubSub, objArr */) {
  /*   this.pubSub = pubSub;
  this.objArr = objArr; */
}
/* 
ObjectConstructor.prototype.getId = function() {this.objArr.objIdGen += 1};
 */
ObjectConstructor.prototype.publish = function (obj) {
  /* this.pubSub.publish("display", obj); */
  pubSubObjectConstructors.publish("publish", { type: this.type, obj });
};

ObjectConstructor.prototype.displayAll = function (obj) {
  pubSubObjectConstructors.publish("displayAll", { type: this.type, obj });
  /*  this.pubSub.publish("clear", true);
  this.objArr.push(obj);
  this.objArr.objArr.forEach((object) => {
    object.publish(object);
    console.log(object)
  }); */
};
ObjectConstructor.prototype.publishComplete = function(obj) {
  pubSubTasks.publish("displayComplete", obj);
}

function ProjectConstructor(title) {
  this.title = title; /* 
  this.pubSub = pubSubProjects;
  this.objArr = projects; */ /* 
  this.id = this.objArr.objIdGen += 1; */
  this.id = projects.objIdGen += 1;
  this.type = "project";
  this.taskIdArr = [];
}

ProjectConstructor.prototype = Object.create(ObjectConstructor.prototype);

/* Project Constructor */
/* function ProjectConstructor(title) {
  this.title = title;
  this.id = projects.objIdGen += 1;
}

ProjectConstructor.prototype.publish = function (obj) {
  pubSubProjects.publish("project", obj);
};

ProjectConstructor.prototype.displayAll = function (obj) {
  pubSubProjects.publish("clear", true);
  projects.push(obj);
  projects.objArr.forEach((object) => {
    object.publish(object);
  });
}; */

/* PUBSUB MODULE FORMS and DISPLAY*/
let pubSubForms = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();

/* Note Constructor */

function NoteConstructor(title, details) {
  this.title = title;
  this.details = details;
}
NoteConstructor.prototype.publish = function () {
  pubSubForms.publish("note", { title: this.title, details: this.details });
};

/* Task Constructor */

let tasks = new TaskObjectArrClass();
let pubSubTasks = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();
let taskRemover = new RemoveConstructor(pubSubTasks, tasks);

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

TaskConstructor.prototype.pushId = function() {
  let projectObject = projects.objArr.find(project => project.title == this.project)
  projectObject.taskIdArr.push(this.id);
  console.log(projectObject)
}


  /* 
  projectObject.taskIdArr.push(this.id); */ //THE ISSUE IS HERE


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

/* 
function TaskConstructor(title, details, date, priority, project) {
  this.title = title,
  this.details = details,
  this.date = date,
  this.priority = priority,
  this.project = project,
}

TaskConstructor.prototype.publish = function () {
  let obj = new TaskConstructor(
    this.title,
    this.details,
    this.date,
    this.priority,
    this.project
  );
  pubSubForms.publish("task", obj);
}; */

/* Subscribers */
pubSubProjects.subscribe("display", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subscribeProject);
/* 
pubSubProjects.subscribe("display", subProjectDisplay); */
pubSubProjects.subscribe("display", _modal_form_modal_form_task__WEBPACK_IMPORTED_MODULE_4__.subSelectProjectInput);
pubSubForms.subscribe("note", _display_container_display_container_note__WEBPACK_IMPORTED_MODULE_1__.subscribeNote);
pubSubForms.subscribe("task", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subscribeTask);
pubSubForms.subscribe("task", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subTaskListItem);

pubSubTasks.subscribe("display", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subscribeTask);
pubSubTasks.subscribe("display", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subTaskListItem);
pubSubTasks.subscribe("clear", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subRmvTaskContainer);
pubSubTasks.subscribe("clear", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subRmvTasks);
pubSubTasks.subscribe("displayComplete", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subCompleteTask); //added this trying to make the complete
/* 
pubSubTasks.subscribe("clear",subRmvProjectDisplay) */

/* 
pubSubTasks.subscribe("clear", subRmvProjectDisplay) /* ?? */

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
  _modal_search_modal_search__WEBPACK_IMPORTED_MODULE_1__.searchModal.classList.add("main__search-modal--hidden")
});
/*display search modal button*/
const displaySearchModal = document.createElement("button");
displaySearchModal.setAttribute("type", "button");
displaySearchModal.textContent = "Search";
displaySearchModal.classList.add("main__display-search-btn", "c-main__display-search-btn");
displaySearchModal.addEventListener("click", () => {
  _modal_search_modal_search__WEBPACK_IMPORTED_MODULE_1__.searchModal.classList.remove("main__search-modal--hidden");
  _modal_modal__WEBPACK_IMPORTED_MODULE_0__.modal.classList.add("main__modal--hidden");
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
  obj.publish();
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
    obj.displayAll(obj);
  }
}
let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.ProjectConstructor("general");
obj.displayAll(obj);

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
    /* dateProcessed = dateProcessed.split("-").reverse().join("-"); */
    /* dateProcessed = parseISO(dateProcessed) */
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
  obj.displayAll(obj);
}

submit.addEventListener("click", displayTasks);
/* 
submit.addEventListener("click", () => {
  let radio = document.querySelector("input:checked");
  let obj = new TaskConstructor(title.value, textArea.value, date.value, radio.value, selectProject.value);
  obj.publish();
})
 */



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
searchModal.classList.add("main__search-modal--hidden");

/* close search modal btn */
let closeBtn = document.createElement("button");
closeBtn.setAttribute("type", "button");
closeBtn.textContent = "x";
closeBtn.addEventListener("click", () => {
  searchModal.classList.add("main__search-modal--hidden");
  searchInput.value = "";
})
searchModal.appendChild(closeBtn);

/* search form */
let searchForm = document.createElement("form");
let searchInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)("search-form__search-input", "text", "search", "search");
let searchLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(searchInput, "Search");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(searchForm, searchLabel, searchInput);

searchInput.addEventListener("input", ()=> {/* 
  projectRemover.searchProjects(searchInput.value) */
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.taskRemover.searchTasks(searchInput.value);
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
sideDiv.classList.add("modal__side");

let taskButton = document.createElement("button");
taskButton.setAttribute("type", "button");
taskButton.textContent = 'TASK';

let projectButton = document.createElement("button");
projectButton.setAttribute("type", "button");
projectButton.textContent = "PROJECT";

let noteButton = document.createElement("button");
noteButton.setAttribute("type", "button");
noteButton.textContent = "NOTE";

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
modal.classList.add("modal", "main__modal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0EseUVBQWdDO0FBQ2hDO0FBQ0EsNEJBQTRCLDJEQUFRO0FBQ3BDLENBQUM7QUFDRCw0RUFBbUM7QUFDbkM7QUFDQSw0QkFBNEIsaUVBQVc7QUFDdkMsQ0FBQztBQUNELHlFQUFnQztBQUNoQztBQUNBLDRCQUE0QiwyREFBUTtBQUNwQyxDQUFDOzs7QUFHYTs7Ozs7O1VDckRkO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsMEJBQTBCO0FBQ1k7QUFDSDs7O0FBR25DOztBQUVBLGlCQUFpQixrREFBTTs7QUFFdkIsaUJBQWlCLCtDQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQWZ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQmVmb3JlL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2FsZXJ0LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2dlbmVyYWwvZ2VuZXJhbF9fanMvX3RhYmxlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2dlbmVyYWwvZ2VuZXJhbF9fanMvcHViLXN1Yi5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLW5vdGUuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS10YXNrLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9fX3NpZGUvZGlzcGxheV9fc2lkZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21haW4tcHViLXN1Yi5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9fX2Zvcm0vbW9kYWxfX2Zvcm0tLW5vdGUuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9fX3NlYXJjaC9tb2RhbF9fc2VhcmNoLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19zaWRlL21vZGFsX19zaWRlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBlbmRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU2F0IFNlcCAwNiAyMDE0IDIzOjU5OjU5Ljk5OVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgZW5kIG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IFN1biBTZXAgMDcgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IC03IDogMCkgKyA2IC0gKGRheSAtIHdlZWtTdGFydHNPbik7XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNBZnRlclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBhZnRlciB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBhZnRlciAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNBZnRlcihuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQWZ0ZXIoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA+IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNCZWZvcmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGJlZm9yZSAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNCZWZvcmUobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNCZWZvcmUoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA8IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImZ1bmN0aW9uIGNyZWF0ZUFsZXJ0KHRleHQpIHtcbiAgbGV0IGFsZXJ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBhbGVydERpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInBvc2l0aW9uOiBmaXhlZDsgdG9wOiAyNTBweDsgbGVmdDogMDsgcmlnaHQ6IDA7IG1hcmdpbjogMCBhdXRvOyB3aWR0aDogMjAwcHg7ICBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgIHRleHQtYWxpZ246IGNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgXCIgKTtcblxuICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcbiAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhbGVydERpdi5yZW1vdmUoKTtcbiAgfSlcbiAgYWxlcnREaXYuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICBsZXQgYWxlcnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFsZXJ0VGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGFsZXJ0RGl2LmFwcGVuZENoaWxkKGFsZXJ0VGV4dClcbiAgXG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoYWxlcnREaXYpO1xuICByZXR1cm4gYWxlcnREaXY7XG59XG5leHBvcnQge2NyZWF0ZUFsZXJ0fSIsImZ1bmN0aW9uIGNyZWF0ZUJhc2ljSW5wdXQoY2xhc3NOYW1lLCB0eXBlLCBpbnB1dE5hbWUsIGlkKSB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGlucHV0TmFtZSk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0QXJlYShjbGFzc05hbWUsIGlucHV0TmFtZSwgaWQpIHtcbiAgbGV0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgaW5wdXROYW1lKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICByZXR1cm4gdGV4dEFyZWE7XG59IFxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChpbnB1dCwgdGV4dCkge1xuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19sYWJlbFwiKVxuICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk7XG4gIHJldHVybiBsYWJlbDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kTGFiZWxJbnB1dChmb3JtLCBsYWJlbCwgaW5wdXQpIHtcbiAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSYWRpb0lucHV0KHByaW9yaXR5TGV2ZWwsIGNsYXNzTmFtZSkge1xuICBsZXQgcmFkaW8gPSBjcmVhdGVCYXNpY0lucHV0KFxuICAgIGNsYXNzTmFtZSxcbiAgICBcInJhZGlvXCIsXG4gICAgXCJwcmlvcml0eVwiLFxuICAgIGBwcmlvcml0eS0ke3ByaW9yaXR5TGV2ZWx9YFxuICApO1xuICByYWRpby5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcmlvcml0eUxldmVsKTtcbiAgcmV0dXJuIHJhZGlvO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRSYWRpb0lucHV0cyhwYXJlbnQsIGFycmF5KSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgbGV0IGxhYmVsID0gY3JlYXRlTGFiZWwoZWxlbWVudCwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlQmFzaWNJbnB1dCwgY3JlYXRlTGFiZWwsIGFwcGVuZExhYmVsSW5wdXQsIGNyZWF0ZVJhZGlvSW5wdXQsIGFwcGVuZFJhZGlvSW5wdXRzLCBjcmVhdGVUZXh0QXJlYX0iLCJmdW5jdGlvbiBjcmVhdGVUYWJsZShvYmosIHBhcmVudCkge1xuICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcbiAgICBsZXQgcm93O1xuICAgIGlmIChrZXkgPT0gXCJ0eXBlXCIgfHwga2V5ID09PSBcImlkXCIgfHwga2V5ID09IFwicHJvamVjdFwiIHx8IGtleSA9PSBcInN0YXR1c1wiKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PSBcImRhdGVcIikge1xuICAgICAgbGV0IGRhdGUgPSB2YWx1ZS5zcGxpdChcIi1cIikucmV2ZXJzZSgpLmpvaW4oXCItXCIpO1xuICAgICAgcm93ID0gY3JlYXRlUm93KGtleSwgZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdyA9IGNyZWF0ZVJvdyhrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxuICByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKHRhYmxlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm93KGtleSwgdmFsdWUpIHtcbiAgbGV0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICBsZXQgdGFibGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICB0YWJsZUhlYWRpbmcudGV4dENvbnRlbnQgPSBrZXk7XG4gIGxldCB0YWJsZURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gIHRhYmxlRGF0YS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICBhc3NpZ25DbGFzcyhrZXksIHRhYmxlRGF0YSk7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKHRhYmxlSGVhZGluZyk7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKHRhYmxlRGF0YSk7XG4gIHJldHVybiB0YWJsZVJvdztcbn1cbmZ1bmN0aW9uIGFzc2lnbkNsYXNzKGtleSwgZWxlbWVudCkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgXCJ0aXRsZVwiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3RkLS10aXRsZVwiLCBcInRhYmxlX190ZFwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJkZXRhaWxzXCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fdGQtLWRldGFpbHNcIiwgXCJ0YWJsZV9fdGRcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZGF0ZVwiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3RkLS1kYXRlXCIsIFwidGFibGVfX3RkXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInByaW9yaXR5XCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fdGQtLXByaW9yaXR5XCIsIFwidGFibGVfX3RkXCIpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlVGFibGUsIH07IiwiXG5cbmZ1bmN0aW9uIHB1YlN1YkZhY3RvcnkoKSB7XG4gIGNvbnN0IHN1YnNjcmliZXJzID0ge307XG5cbiAgZnVuY3Rpb24gcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5sZW5ndGggLSAxO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmUsXG4gICAgcHVibGlzaCxcbiAgICBcbiAgfTtcbn1cblxuZXhwb3J0IHtwdWJTdWJGYWN0b3J5IH07XG4iLCJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xudGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRlcl9fdGl0bGVcIik7XG50aXRsZS50ZXh0Q29udGVudCA9IFwiSnVzdCBEbyBJdFwiO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuXG5oZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiLCBcImJvZHlfX2hlYWRlclwiKTtcblxuaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuZXhwb3J0IHsgaGVhZGVyIH0gOyIsIlxuXG5sZXQgbm90ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubm90ZURpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1ub3RlLS1oaWRkZW5cIixcImRpc3BsYXlfX2NvbnRhaW5lci1ub3RlXCIpO1xuXG5mdW5jdGlvbiBzdWJzY3JpYmVOb3RlKG9iaikge1xuICBsZXQgdGl0bGVOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICB0aXRsZU5vdGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIG5vdGVEaXNwbGF5LmFwcGVuZENoaWxkKHRpdGxlTm90ZSk7XG4gIGxldCBkZXRhaWxzTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXRhaWxzTm90ZS50ZXh0Q29udGVudCA9IG9iai5kZXRhaWxzO1xuICBub3RlRGlzcGxheS5hcHBlbmRDaGlsZChkZXRhaWxzTm90ZSlcbn1cblxuXG5cblxuXG5cbmV4cG9ydCB7c3Vic2NyaWJlTm90ZSwgbm90ZURpc3BsYXl9IiwiaW1wb3J0IHsgcHJvamVjdFJlbW92ZXIsIHRhc2tSZW1vdmVyIH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuaW1wb3J0IHsgY3JlYXRlQmFzaWNJbnB1dCB9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuaW1wb3J0IHsgY3JlYXRlVGFibGUgfSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9fdGFibGVcIjtcbmltcG9ydCB7IGFkZCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgY3JlYXRlQWxlcnQgfSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9fYWxlcnRcIjtcblxuXG5jb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiLCBcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0XCIpO1xuIFxuZnVuY3Rpb24gc3Vic2NyaWJlUHJvamVjdChvYmopIHtcbiAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgb2JqLmlkKTtcbiAgLyogZGVsZXRlIGJ1dHRvbiAqL1xuICBpZiAob2JqLmlkICE9PSAxKSB7IC8vZXhlbXB0aW9uIGZvciB0aGUgZ2VuZXJhbCBwcm9qZWN0XG4gICAgbGV0IGRsdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGx0QnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgZGx0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7IFxuICAgIGRsdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKG9iai50YXNrSWRBcnIubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgYWxlcnQgPSBjcmVhdGVBbGVydChcIlRoZXJlIHNlZW0gdG8gYmUgc29tZSB1bmZpbmlzaGVkIHRhc2tzIGluIHRoaXMgcHJvamVjdC4gQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGRlbGV0ZSBpdD9cIik7XG4gICAgICAgIGxldCB5ZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB5ZXNCdG4udGV4dENvbnRlbnQgPSBcIlllc1wiO1xuICAgICAgICB5ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBcbiAgICAgICAgICB0YXNrUmVtb3Zlci5yZW1vdmVCeVByb2plY3Qob2JqKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgdGhpcyBvbmUgeW8gJHtvYmp9YClcbiAgICAgICAgICBjb25zb2xlLmxvZyhvYmopXG4gICAgICAgICAgcHJvamVjdFJlbW92ZXIucmVtb3ZlKG9iai5pZCk7XG5cbiAgICAgICAgIFxuICAgICAgICAgIGFsZXJ0LnJlbW92ZSgpO1xuICAgICAgICB9KVxuICAgICAgICBhbGVydC5hcHBlbmRDaGlsZCh5ZXNCdG4pO1xuICAgICAgICBsZXQgbm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBub0J0bi50ZXh0Q29udGVudCA9IFwiTm9cIjtcbiAgICAgICAgbm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBhbGVydC5yZW1vdmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgYWxlcnQuYXBwZW5kQ2hpbGQobm9CdG4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdFJlbW92ZXIucmVtb3ZlKG9iai5pZCk7XG4gICAgICAgIHRhc2tSZW1vdmVyLnJlbW92ZUJ5UHJvamVjdChvYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGx0QnRuKTtcbiAgfVxuICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKG9iai50aXRsZSwgXCJ0YXNrLWxpc3RcIik7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuICBwcm9qZWN0RGlzcGxheS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgdGFza1JlbW92ZXIuY2xlYXJEaXNwbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHN1YlJtdlByb2plY3REaXNwbGF5KCkge1xuICB3aGlsZSAocHJvamVjdERpc3BsYXkuZmlyc3RDaGlsZCkge1xuICAgIHByb2plY3REaXNwbGF5LnJlbW92ZUNoaWxkKHByb2plY3REaXNwbGF5Lmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuXG5cbi8qIFJlbW92ZXMgVGFza3MgSXRlbXMgd2hlbiAqL1xuZnVuY3Rpb24gc3ViUm12VGFza3MoKSB7XG4gIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1saXN0XCIpXG4gIHRhc2tMaXN0LmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XG4gICAgd2hpbGUgKGxpc3RJdGVtLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGxpc3RJdGVtLnJlbW92ZUNoaWxkKGxpc3RJdGVtLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9IClcbn1cblxuICBcbmZ1bmN0aW9uIHN1YlRhc2tMaXN0SXRlbShvYmopIHtcbiAgY29uc29sZS5sb2cob2JqKTtcbiAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIG9iai5wcm9qZWN0KTtcblxuICBpZiAodGFza0xpc3QpIHtcbiAgdGFza0xpc3Quc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBvYmouaWQpOyBcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgY29tcGxldGVJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJwcm9qZWN0LWRpdl9fZG9uZS1pbnB1dFwiLCBcImNoZWNrYm94XCIsIFwiY29tcGxldGUtaW5wdXRcIiwgXCJjb21wbGV0ZS1pbnB1dFwiKTsgLy9maW5pc2hlZCBjaGVja2JveFxuICBcbiAgXG4gIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1saS1pZFwiLCBvYmouaWQpXG4gIGNvbXBsZXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIHRhc2tSZW1vdmVyLmNvbXBsZXRlKG9iai5pZCk7XG4gICAgKG9iai5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSA/IHRhc2tSZW1vdmVyLnJlbW92ZVRhc2tGcm9tUHJvamVjdElkQXJyKG9iaik6IG9iai5wdXNoSWQoKSA7ICBcbiAgICBsZXQgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgbGlbZGF0YS1saS1pZCA9IFwiJHtvYmouaWR9XCJdIHRoLGxpW2RhdGEtbGktaWQgPSBcIiR7b2JqLmlkfVwiXSB0ZGApO1xuICAgIHRhc2tUYWJsZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZVwiKTtcbiAgICB9KVxuICB9KVxuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjb21wbGV0ZUlucHV0KTtcbiAgY3JlYXRlVGFibGUob2JqLCBsaXN0SXRlbSk7XG5cbiAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgaGlkZGVuUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGxpW2RhdGEtbGktaWQgPSBcIiR7b2JqLmlkfVwiXSB0cjpub3QoOmZpcnN0LWNoaWxkKWApO1xuICAgIGhpZGRlblJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICByb3cuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9KVxuICAgXG4gIH0pXG4gIFxuICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIGxldCBoaWRkZW5Sb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWxpc3QgdHI6bm90KDpmaXJzdC1jaGlsZClcIik7XG4gIGhpZGRlblJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0pXG59XG5cbmV4cG9ydCB7XG4gIHN1YnNjcmliZVByb2plY3QsXG4gIHByb2plY3REaXNwbGF5LFxuICBzdWJUYXNrTGlzdEl0ZW0sXG4gIHN1YlJtdlByb2plY3REaXNwbGF5LFxuICBzdWJSbXZUYXNrc1xuICAvKiBnZW5lcmF0ZVByb2plY3REaXNwbGF5ICovXG59O1xuIiwiaW1wb3J0IHsgdGFza1JlbW92ZXIgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQgeyBjcmVhdGVUYWJsZSB9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL190YWJsZVwiO1xuaW1wb3J0IHsgcHJvamVjdFJlbW92ZXIgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQge1xuICBjcmVhdGVSYWRpb0lucHV0LFxuICBhcHBlbmRSYWRpb0lucHV0cyxcbiAgY3JlYXRlQmFzaWNJbnB1dCxcbiAgY3JlYXRlVGV4dEFyZWEsXG59IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuaW1wb3J0IHsgZW5kT2ZXZWVrLCBpc0FmdGVyLCBpc0JlZm9yZSwgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIiwgXCJkaXNwbGF5X19jb250YWluZXItdGFza1wiICk7XG5cbi8qIFNPUlQgQlVUVE9OICovXG4vKiBORUVEIFRPIEFERCBBIFNPUlQgQlkgREFURSBPUFRJT04gKi9cbmxldCBzb3J0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxldCBzb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbmxldCBzb3J0UGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuc29ydFBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJcIik7XG5zb3J0UGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIixcIlwiKVxuc29ydFBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiIFwiKTtcbnNvcnRQbGFjZWhvbGRlci50ZXh0Q29udGVudCA9IFwiU29ydFwiO1xuc29ydC5hcHBlbmRDaGlsZChzb3J0UGxhY2Vob2xkZXIpO1xuXG5sZXQgc29ydFByaW9yaXR5RGVzY2VuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbnNvcnRQcmlvcml0eURlc2NlbmRpbmcudGV4dENvbnRlbnQgPSBcIk1vc3QgSW1wb3J0YW50XCI7XG5zb3J0UHJpb3JpdHlEZXNjZW5kaW5nLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibW9zdFwiKTtcblxubGV0IHNvcnRQcmlvcml0eUFzY2VuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbnNvcnRQcmlvcml0eUFzY2VuZGluZy50ZXh0Q29udGVudCA9IFwiTGVhc3QgSW1wb3J0YW50XCI7XG5zb3J0UHJpb3JpdHlBc2NlbmRpbmcuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJsZWFzdFwiKVxuXG5sZXQgc29ydERhdGVBc2NlbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuc29ydERhdGVBc2NlbmRpbmcudGV4dENvbnRlbnQgPSBcIkRhdGUgKEFzY2VuZGluZylcIlxuc29ydERhdGVBc2NlbmRpbmcuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJkYXRlLWFzY2VuZGluZ1wiKTtcblxubGV0IHNvcnREYXRlRGVzY2VuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5zb3J0RGF0ZURlc2NlbmRpbmcudGV4dENvbnRlbnQgPSBcIkRhdGUgKERlc2NlbmRpbmcpXCJcbnNvcnREYXRlRGVzY2VuZGluZy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImRhdGUtZGVzY2VuZGluZ1wiKTtcblxuXG5zb3J0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tSZW1vdmVyLmRpc3BsYXlTb3J0ZWQoc29ydC52YWx1ZSk7XG4gICBcbn0pO1xuXG5zb3J0LmFwcGVuZENoaWxkKHNvcnRQcmlvcml0eURlc2NlbmRpbmcpO1xuc29ydC5hcHBlbmRDaGlsZChzb3J0UHJpb3JpdHlBc2NlbmRpbmcpO1xuc29ydC5hcHBlbmRDaGlsZChzb3J0RGF0ZUFzY2VuZGluZylcbnNvcnQuYXBwZW5kQ2hpbGQoc29ydERhdGVEZXNjZW5kaW5nKTtcbnNvcnREaXYuYXBwZW5kQ2hpbGQoc29ydCk7XG50YXNrRGlzcGxheS5hcHBlbmRDaGlsZChzb3J0RGl2KTtcblxuXG4vKiBDb21wbGV0ZSBEaXNwbGF5IGJ1dHRvbiAqL1xuY29uc3QgY29tcGxldGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgY29tcGxldGVEaXNwbGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbXBsZXRlRGlzcGxheUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuY29tcGxldGVEaXNwbGF5QnRuLnRleHRDb250ZW50ID0gXCJDT01QTEVURVwiIC8vIGNoYW5nZSB0byBjaGVjayBzdmcgbGF0ZXI7XG5jb21wbGV0ZURpc3BsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza1JlbW92ZXIuZGlzcGxheUNvbXBsZXRlKCk7XG4gIFxuICAvKiBcbiAgdGFza1JlbW92ZXIuZGlzcGxheUNvbXBsZXRlKCk7XG4gIGxldCBjaGVja2VkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stZGl2X19kb25lLWlucHV0XCIpO1xuICBjaGVja2VkSW5wdXQuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZGl2W2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGgsIGRpdltkYXRhLWlkPVwiJHtvYmouaWR9XCJdIHRkYCk7XG4gICAgICB0YXNrVGFibGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KVxuICAgICAgICBjb25zb2xlLmxvZyhcInlvb1wiKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVcIik7XG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG4gIGxldCB0YWJsZVJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIik7XG4gIHRhYmxlUm93cy5mb3JFYWNoKCh0cikgPT4ge1xuICAgIHRyLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgfSkgKi9cbn0pXG5jb21wbGV0ZURpdi5hcHBlbmRDaGlsZChjb21wbGV0ZURpc3BsYXlCdG4pO1xudGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoY29tcGxldGVEaXYpO1xuXG5cblxuXG5cbi8qIFRBU0sgQ09OVEFJTkVSICovXG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4vKiBNaWdodCBoYXZlIHRvIG1ha2UgYSBzZXBhcmF0ZSBzdWJzY3JpYmUgZm9yIGNvbXBsZXRlIHRhc2tzICovXG5cbmZ1bmN0aW9uIHByaW9yaXR5Q29sb3JTd2l0Y2goZWxlbWVudCwgb2JqKSB7XG4gIHN3aXRjaChvYmoucHJpb3JpdHkpIHtcbiAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaGlnaFwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW1lZGl1bVwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWxvd1wiKTtcbiAgfVxufSBcbmZ1bmN0aW9uIHN1YkNvbXBsZXRlVGFzayhvYmopIHtcbiAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgb2JqLmlkKTtcbiAgbGV0IGNvbXBsZXRlSW5wdXQgPSBjcmVhdGVCYXNpY0lucHV0KFwidGFzay1kaXZfX2RvbmUtaW5wdXRcIiwgXCJjaGVja2JveFwiLCBcImNvbXBsZXRlLWlucHV0XCIsIFwiY29tcGxldGUtaW5wdXRcIik7XG4gIGNvbXBsZXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcbiAgY29tcGxldGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgdGFza1JlbW92ZXIuY29tcGxldGUob2JqLmlkKTtcbiAgICBsZXQgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZGl2W2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGgsIGRpdltkYXRhLWlkPVwiJHtvYmouaWR9XCJdIHRkYCk7XG4gICAgdGFza1RhYmxlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuICAgIH0pXG4gIH0pXG5cbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZUlucHV0KTtcbiAgY3JlYXRlVGFibGUob2JqLCB0YXNrRGl2KTtcbiAgXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gIGxldCBhbGxSb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRoLCB0ZFwiKTtcbiAgYWxsUm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICByb3cuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpO1xuICB9KVxufVxuIFxuXG5mdW5jdGlvbiBzdWJzY3JpYmVUYXNrKG9iaikge1xuICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBvYmouaWQpO1xuICBcbiAgXG4gIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1kYXRlXCIsIG9iai5kYXRlKTtcbiAgcHJpb3JpdHlDb2xvclN3aXRjaCh0YXNrRGl2LCBvYmopXG4gIC8qIENvbXBsZXRlIGNoZWNrYm94ICovXG4gIGxldCBjb21wbGV0ZUlucHV0ID0gY3JlYXRlQmFzaWNJbnB1dChcInRhc2stZGl2X19kb25lLWlucHV0XCIsIFwiY2hlY2tib3hcIiwgXCJjb21wbGV0ZS1pbnB1dFwiLCBcImNvbXBsZXRlLWlucHV0XCIpO1xuICBcbiAgY29tcGxldGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgdGFza1JlbW92ZXIuY29tcGxldGUob2JqLmlkKTtcbiAgICAob2JqLnN0YXR1cyA9PSBcImNvbXBsZXRlXCIpID8gdGFza1JlbW92ZXIucmVtb3ZlVGFza0Zyb21Qcm9qZWN0SWRBcnIob2JqKTogb2JqLnB1c2hJZCgpIDtcbiAgICBsZXQgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZGl2W2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGgsIGRpdltkYXRhLWlkPVwiJHtvYmouaWR9XCJdIHRkYCk7XG4gICAgXG4gICAgdGFza1RhYmxlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuICAgIH0pXG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KVxuXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVJbnB1dCk7XG5cbiAgLyogREVMRVRFIEJVVFRPTiAqL1xuICBsZXQgZGx0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGx0QnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGRsdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBkbHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhvYmopXG4gICAgdGFza1JlbW92ZXIucmVtb3ZlKG9iai5pZCk7XG4gICAgdGFza1JlbW92ZXIucmVtb3ZlVGFza0Zyb21Qcm9qZWN0SWRBcnIob2JqKTtcbiAgfSk7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGx0QnRuKTtcblxuICAvKkVESVQgQlVUVE9OKi9cbiAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gIGVkaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblxuICAvKkhhdmUgdG8gY3JlYXRlIGxhYmVscyBhbmQgaGlkZSB0aGVtIGZvciBhY2Nlc3NpYmlsaXR5ID8/Ki9cblxuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHRhYmxlRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgW2RhdGEtaWQ9XCIke29iai5pZH1cIl0gLnRhYmxlX190ZGBcbiAgICApO1xuICAgIC8vbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGFibGVgKSAvL0RvIEkgcmVhbGx5IG5lZWQgdGhpcz9cbiAgICB0YWJsZURhdGEuZm9yRWFjaChmdW5jdGlvbiAodGQpIHtcbiAgICAgIGxldCBlZGl0SW5wdXQ7XG5cbiAgICAgIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZV9fdGQtLXRpdGxlXCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gICAgICAgICAgXCJ0YWJsZV9fZWRpdC1pbnB1dFwiLFxuICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgIFwidGl0bGVcIixcbiAgICAgICAgICBcImVkaXQtdGl0bGVcIlxuICAgICAgICApO1xuICAgICAgICBlZGl0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgb2JqLnRpdGxlKTtcbiAgICAgIH0gZWxzZSBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS1kZXRhaWxzXCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGNyZWF0ZVRleHRBcmVhKFxuICAgICAgICAgIFwidGFibGVfX2VkaXQtaW5wdXRcIixcbiAgICAgICAgICBcImRldGFpbHNcIixcbiAgICAgICAgICBcImVkaXQtZGV0YWlsc1wiXG4gICAgICAgICk7XG4gICAgICAgIGVkaXRJbnB1dC50ZXh0Q29udGVudCA9IG9iai5kZXRhaWxzO1xuICAgICAgfSBlbHNlIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZV9fdGQtLWRhdGVcIikpIHtcbiAgICAgICAgZWRpdElucHV0ID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgICAgICAgICBcInRhYmxlX19lZGl0LWlucHV0XCIsXG4gICAgICAgICAgXCJkYXRlXCIsXG4gICAgICAgICAgXCJkYXRlXCIsXG4gICAgICAgICAgXCJlZGl0LWRhdGVcIlxuICAgICAgICApO1xuICAgICAgICBlZGl0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgb2JqLmRhdGUpO1xuICAgICAgfSBlbHNlIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZV9fdGQtLXByaW9yaXR5XCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgICAgICAgbGV0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gICAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgICAgICAgZWRpdElucHV0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG4gICAgICAgIGxldCBsb3cgPSBjcmVhdGVSYWRpb0lucHV0KFwibG93XCIsIFwiZWRpdC1idG5fX2lucHV0LS1yYWRpb1wiKTtcbiAgICAgICAgbGV0IG1lZGl1bSA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJtZWRpdW1cIiwgXCJlZGl0LWJ0bl9faW5wdXQtLXJhZGlvXCIpO1xuICAgICAgICBsZXQgaGlnaCA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJoaWdoXCIsIFwiZWRpdC1idG5fX2lucHV0LS1yYWRpb1wiKTtcbiAgICAgICAgYXBwZW5kUmFkaW9JbnB1dHMoZWRpdElucHV0LCBbbG93LCBtZWRpdW0sIGhpZ2hdKTtcbiAgICAgIH1cblxuICAgICAgdGQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZWRpdElucHV0LCB0ZCk7XG4gICAgfSk7XG4gICAgLyogU1VCTUlUIENIQU5HRVMgQlROICovXG4gICAgbGV0IHN1Ym1pdENoYW5nZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWVkaXQtYnRuXCIpO1xuICAgIGlmICghc3VibWl0Q2hhbmdlQnRuKSB7XG4gICAgICBzdWJtaXRDaGFuZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgc3VibWl0Q2hhbmdlQnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgIHN1Ym1pdENoYW5nZUJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWVkaXQtYnRuXCIpO1xuICAgIH1cbiAgICBcbiAgICBzdWJtaXRDaGFuZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxldCBlZGl0ZWRJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX19lZGl0LWlucHV0XCIpO1xuICAgICAgZWRpdGVkSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpID09IFwidGl0bGVcIikge1xuICAgICAgICAgIGlucHV0LnRpdGxlID09IFwiXCIgPyBvYmoudGl0bGUgOiAob2JqLnRpdGxlID0gaW5wdXQudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT0gXCJkZXRhaWxzXCIpIHtcbiAgICAgICAgICBvYmouZGV0YWlscyA9IGlucHV0LnZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT0gXCJkYXRlXCIpIHtcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9PSBcIlwiID8gb2JqLmRhdGUgOiAob2JqLmRhdGUgPSBuZXcgRGF0ZShpbnB1dC52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxldCBlZGl0ZWRQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuZWRpdC1idG5fX2lucHV0LS1yYWRpbzpjaGVja2VkXCJcbiAgICAgICk7XG4gICAgICBlZGl0ZWRQcmlvcml0eUlucHV0ID09IG51bGxcbiAgICAgICAgPyBvYmoucHJpb3JpdHlcbiAgICAgICAgOiAob2JqLnByaW9yaXR5ID0gZWRpdGVkUHJpb3JpdHlJbnB1dC52YWx1ZSk7XG4gICAgICBzdWJtaXRDaGFuZ2VCdG4ucmVtb3ZlKCk7XG4gICAgICB0YXNrUmVtb3Zlci5jbGVhckRpc3BsYXkoKTtcbiAgICB9KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHN1Ym1pdENoYW5nZUJ0bik7XG4gIH0pO1xuXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIGNyZWF0ZVRhYmxlKG9iaiwgdGFza0Rpdik7XG5cbiAgLy9EYXRlIEFzY2VuZGluZyBEaXNwbGF5XG4gIGlmIChzb3J0LnZhbHVlID09IFwiZGF0ZS1hc2NlbmRpbmdcIikge1xuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTsvKiBcbiAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlLnNwbGl0KFwiLVwiKS5yZXZlcnNlKCkuam9pbihcIi1cIik7ICovXG4gICAgbGV0IGxhc3RXZWVrRGF5ID0gZW5kT2ZXZWVrKG5ldyBEYXRlKCksIHt3ZWVrU3RhcnRzT246IDF9KTtcbiAgICBcblxuICAgIGlmICh0YXNrRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtZGF0ZVwiKT09IFwiXCIgKSB7ICAvL2lmIGRhdGUgd2FzIG5vdCBwcm92aWRlZFxuICAgICAgbGV0IG5vRGF0ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJfX2Rpdi0tbm8tZGF0ZVwiKTtcbiAgICAgIGlmICghbm9EYXRlRGl2KSB7IFxuICAgICAgICBub0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBub0RhdGVEaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rXCIpO1xuICAgICAgICBub0RhdGVEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyX19kaXYtLW5vLWRhdGVcIilcbiAgICAgICAgbGV0IG5vRGF0ZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIG5vRGF0ZUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlVuZGF0ZWRcIjtcbiAgICAgICAgbm9EYXRlRGl2LmFwcGVuZENoaWxkKG5vRGF0ZUhlYWRpbmcpO1xuICAgICAgfSAgICAgICBcbiAgICAgIG5vRGF0ZURpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vRGF0ZURpdik7XG4gICAgfSAgZWxzZSBpZiAoaXNCZWZvcmUocGFyc2VJU08odGFza0Rpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRhdGVcIikpLCAgcGFyc2VJU08oY3VycmVudERhdGUpKSkgIHtcbiAgICAgIGxldCBvdmVyZHVlRGl2PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyX19kaXYtLW92ZXJkdWVcIilcbiAgICAgIGlmICghb3ZlcmR1ZURpdikge1xuICAgICAgb3ZlcmR1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBvdmVyZHVlRGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlXCIpO1xuICAgICAgb3ZlcmR1ZURpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJfX2Rpdi0tb3ZlcmR1ZVwiKVxuICAgICAgbGV0IG92ZXJkdWVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgb3ZlcmR1ZUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk92ZXJkdWVcIjtcbiAgICAgIG92ZXJkdWVEaXYuYXBwZW5kQ2hpbGQob3ZlcmR1ZUhlYWRpbmcpO1xuICAgICAgfVxuICAgICAgb3ZlcmR1ZURpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KVxuICAgICAgcmV0dXJuIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQob3ZlcmR1ZURpdik7XG5cbiAgICB9IGVsc2UgaWYgKHRhc2tEaXYuZ2V0QXR0cmlidXRlKFwiZGF0YS1kYXRlXCIpID09IGN1cnJlbnREYXRlKXsgLy9pZiBkYXRlIGlzIHRvZGF5XG4gICAgICBsZXQgdG9kYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyX19kaXYtLXRvZGF5XCIpXG4gICAgICBpZiAoIXRvZGF5RGl2KSB7XG4gICAgICAgIHRvZGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kYXlEaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmVlblwiKTtcbiAgICAgICAgdG9kYXlEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyX19kaXYtLXRvZGF5XCIpXG4gICAgICAgIGxldCB0b2RheUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHRvZGF5SGVhZGluZy50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICAgICAgdG9kYXlEaXYuYXBwZW5kQ2hpbGQodG9kYXlIZWFkaW5nKTtcbiAgICAgIH1cbiAgICAgIHRvZGF5RGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpXG4gICAgICByZXR1cm4gdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheURpdik7XG4gICAgfSBlbHNlIGlmICgoaXNCZWZvcmUocGFyc2VJU08odGFza0Rpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRhdGVcIikpLCAgbGFzdFdlZWtEYXkpKSkge1xuICAgICAgbGV0IHdlZWtEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyX19kaXYtLXdlZWtcIilcbiAgICAgIGlmICghd2Vla0Rpdikge1xuICAgICAgICB3ZWVrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgd2Vla0Rpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHB1cnBsZVwiKTtcbiAgICAgICAgd2Vla0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJfX2Rpdi0td2Vla1wiKVxuICAgICAgICBsZXQgd2Vla0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHdlZWtIZWFkaW5nLnRleHRDb250ZW50ID0gXCJUaGlzIFdlZWtcIjtcbiAgICAgICAgd2Vla0Rpdi5hcHBlbmRDaGlsZCh3ZWVrSGVhZGluZyk7XG4gICAgICB9XG4gICAgICB3ZWVrRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpXG4gICAgICByZXR1cm4gdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrRGl2KTtcbiAgICB9IGVsc2UgaWYgKChpc0FmdGVyKHBhcnNlSVNPKHRhc2tEaXYuZ2V0QXR0cmlidXRlKFwiZGF0YS1kYXRlXCIpKSwgIGxhc3RXZWVrRGF5KSkpIHtcbiAgICAgIGxldCB1cGNvbWluZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJfX2Rpdi0tdXBjb21pbmdcIilcbiAgICAgIGlmICghdXBjb21pbmdEaXYpIHtcbiAgICAgICAgdXBjb21pbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB1cGNvbWluZ0Rpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IGJsdWVcIik7XG4gICAgICAgIHVwY29taW5nRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lcl9fZGl2LS11cGNvbWluZ1wiKVxuICAgICAgICBsZXQgdXBjb21pbmdIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB1cGNvbWluZ0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIlVwY29taW5nXCI7XG4gICAgICAgIHVwY29taW5nRGl2LmFwcGVuZENoaWxkKHVwY29taW5nSGVhZGluZyk7XG4gICAgICB9XG4gICAgICB1cGNvbWluZ0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KVxuICAgICAgcmV0dXJuIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodXBjb21pbmdEaXYpO1xuICAgIH19XG5cblxuXG5cblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xufVxuXG5mdW5jdGlvbiBzdWJSbXZUYXNrQ29udGFpbmVyKCkge1xuICB3aGlsZSAodGFza0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgc3Vic2NyaWJlVGFzaywgdGFza0Rpc3BsYXksIHN1YlJtdlRhc2tDb250YWluZXIsIHN1YkNvbXBsZXRlVGFzayB9OyIsIlxuY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbm5hdi5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fbmF2XCIpXG5jb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xubmF2TGlzdC5jbGFzc0xpc3QuYWRkKFwibmF2X19saXN0XCIsIFwiYy1uYXZfX2xpc3RcIilcblxuZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW0odGV4dCkge1xuICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJuYXZfX2xpc3QtaXRlbVwiLCBcImMtbmF2X19saXN0LWl0ZW1cIilcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKHNwYW4pO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKVxuICByZXR1cm4gbGlzdEl0ZW07XG59XG5cbm5hdi5hcHBlbmRDaGlsZChuYXZMaXN0KVxuXG5cblxuXG5cblxuZXhwb3J0IHtuYXYsIGNyZWF0ZUxpc3RJdGVtfVxuIiwiaW1wb3J0ICogYXMgc2lkZSBmcm9tIFwiLi9fX3NpZGUvZGlzcGxheV9fc2lkZVwiO1xuaW1wb3J0IHsgdGFza1JlbW92ZXIgfSBmcm9tIFwiLi4vbWFpbi1wdWItc3ViXCI7XG4vKiBEaXNwbGF5IENvbnRhaW5lcnMgKi9cbmltcG9ydCB7IHRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS10YXNrXCI7XG5pbXBvcnQgeyBub3RlRGlzcGxheSB9IGZyb20gXCIuL19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tbm90ZVwiO1xuaW1wb3J0IHsgcHJvamVjdERpc3BsYXl9IGZyb20gXCIuL19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tcHJvamVjdFwiO1xuaW1wb3J0IHsgc2VhcmNoSW5wdXQgfSBmcm9tIFwiLi4vbW9kYWwvX19zZWFyY2gvbW9kYWxfX3NlYXJjaFwiO1xuXG5cbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5jb25zdCBzaWRlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNpZGVOYXYuYXBwZW5kQ2hpbGQoc2lkZS5uYXYpXG5cbmxldCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lclwiKVxubGV0IGRpc3BsYXlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpc3BsYXlDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250ZW50XCIpXG5cbmRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXNwbGF5KTtcbmRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKG5vdGVEaXNwbGF5KTtcbmRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3REaXNwbGF5KTtcblxuLyogU0hPVUxEIFJFRk9STUFUIFRISVMgKi9cblxuY29uc3QgaG9tZSA9IHNpZGUuY3JlYXRlTGlzdEl0ZW0oXCJIb21lXCIpO1xuY29uc3QgcHJvamVjdCA9IHNpZGUuY3JlYXRlTGlzdEl0ZW0oXCJQcm9qZWN0c1wiKTtcbmNvbnN0IG5vdGUgPSBzaWRlLmNyZWF0ZUxpc3RJdGVtKFwiTm90ZXNcIik7XG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza1JlbW92ZXIuY2xlYXJEaXNwbGF5KCk7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG59KTtcblxuXG5cbm5vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbm90ZURpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci1ub3RlLS1oaWRkZW5cIik7XG4gIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItcHJvamVjdC0taGlkZGVuXCIpO1xuICB0YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXRhc2stLWhpZGRlblwiKTtcbn0pO1xuXG5cbnByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza1JlbW92ZXIuY2xlYXJEaXNwbGF5KCk7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG4gIGxldCBoaWRkZW5Sb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWxpc3QgdHI6bm90KDpmaXJzdC1jaGlsZClcIik7XG4gIGhpZGRlblJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0pIFxufSk7XG5cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG5cbn0pXG5cbmRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUNvbnRlbnQpXG5kaXNwbGF5LmFwcGVuZENoaWxkKHNpZGVOYXYpO1xuZGlzcGxheS5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGFpbmVyKTtcblxuZXhwb3J0IHsgZGlzcGxheSB9O1xuIiwiaW1wb3J0IHsgY29tcGFyZUFzYywgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHB1YlN1YkZhY3RvcnkgfSBmcm9tIFwiLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9wdWItc3ViXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVOb3RlIH0gZnJvbSBcIi4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLW5vdGVcIjtcbmltcG9ydCB7XG4gIHN1YnNjcmliZVByb2plY3QsXG4gIHN1YlRhc2tMaXN0SXRlbSxcbiAgc3ViUm12UHJvamVjdERpc3BsYXksXG4gIHN1YlJtdlRhc2tzLFxufSBmcm9tIFwiLi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tcHJvamVjdFwiO1xuaW1wb3J0IHtcbiAgc3Vic2NyaWJlVGFzayxcbiAgc3ViUm12VGFza0NvbnRhaW5lcixcbiAgc3ViQ29tcGxldGVUYXNrLFxufSBmcm9tIFwiLi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tdGFza1wiO1xuaW1wb3J0IHtcbiAgc3ViU2VsZWN0UHJvamVjdElucHV0LFxuICBzdWJDbGVhclNlbGVjdE9wdGlvbnMsXG59IGZyb20gXCIuL21vZGFsL19fZm9ybS9tb2RhbF9fZm9ybS0tdGFza1wiO1xuXG4vKiBPQkpFQ1QgQ0xBU1MgKi9cbi8qIGhvbGRzIGFuIGFycmF5IG9mIGFsbCB0aGUgb2JqZWN0cy4gVGhlIG9iaklkR2VuIGlzIHVzZWQgdG8gYXNzaWduIHVuaXF1ZSBpZHMgdG8gZWFjaCBvYmogKi9cbmNsYXNzIE9iamVjdEFyckNsYXNzIHtcbiAgb2JqQXJyID0gW107XG4gIG9iaklkR2VuID0gMDtcblxuICBnZXQgb2JqQXJyKCkge1xuICAgIHJldHVybiB0aGlzLm9iakFycjtcbiAgfVxuXG4gIHNldCBvYmpBcnIoYXJyKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhbGVydChcIk5vdCBhbiBhcnJheVwiKTtcbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLm9iakFyciA9IGFycik7XG4gIH1cblxuICBwdXNoKG9iaikge1xuICAgIHRoaXMub2JqQXJyLnB1c2gob2JqKTtcbiAgfVxuXG4gIHJlbW92ZShpbmRleCkge1xuICAgIHRoaXMub2JqQXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgXG59XG5jbGFzcyBUYXNrT2JqZWN0QXJyQ2xhc3MgZXh0ZW5kcyBPYmplY3RBcnJDbGFzcyB7XG4gIGN1c3RvbVNvcnQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gXCJtb3N0XCIpIHtcbiAgICAgIHRoaXMub2JqQXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuY291bnRQcmlvcml0eSgpIC0gYS5jb3VudFByaW9yaXR5KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09IFwibGVhc3RcIikge1xuICAgICAgdGhpcy5vYmpBcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5jb3VudFByaW9yaXR5KCkgLSBiLmNvdW50UHJpb3JpdHkoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gXCJkYXRlLWFzY2VuZGluZ1wiKSB7XG4gICAgICB0aGlzLm9iakFyci5zb3J0KGZ1bmN0aW9uIChhLGIpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVBc2MocGFyc2VJU08oYS5kYXRlKSwgcGFyc2VJU08oYi5kYXRlKSlcbiAgICAgIH0pO1xuICAgIH0gIGVsc2UgaWYgKHZhbHVlID09IFwiZGF0ZS1kZXNjZW5kaW5nXCIpIHtcbiAgICAgIHRoaXMub2JqQXJyLnNvcnQoZnVuY3Rpb24gKGEsYikge1xuICAgICAgICByZXR1cm4gY29tcGFyZUFzYyhwYXJzZUlTTyhiLmRhdGUpLCBwYXJzZUlTTyhhLmRhdGUpKVxuICAgICAgfSk7XG4gICAgICBcblxuICAgIH1cbiAgfVxufSBcblxuLyogUkVNT1ZFIENPTlNUUlVDVE9SICovXG4vKiB1c2VkIHRvIHJlbW92ZSBvYmplY3RzIGZyb20gdGhlIGRpc3BsYXkgYnkgbWF0Y2hpbmcgdGhlIGRhdGEgaW5kZXggdG8gdGhlIGluZGV4IHByb3BlcnR5IGluIGVhY2ggb2JqZWN0ICovXG4vKiBSRUZBQ1RPUiBSRU1PVkUgQ09OU1RSVUNUT1IgSVQgRVhQT1NFUyBQVUJTVUIgYW5kIENMQVNTT0JKICBpbnN0ZWFkIG9mIGhlcmVkaXRhcnkgdXNlIGEgY29tcG9zaXRlIG1vZGVsLiBDcmVhdGUgZGlmZmVyZW50IGZ1bmN0aW9ucyB0aGF0IHRha2UgcHViU3ViL09iamVjdEFyciBhcyBhbiBhcmd1bWVudFxuYW5kIHByb3RvdHlwZSB0aGVtISovXG5cbmZ1bmN0aW9uIFJlbW92ZUNvbnN0cnVjdG9yKHB1YlN1YiwgY2xhc3NPYmopIHtcbiAgdGhpcy5wdWJTdWIgPSBwdWJTdWI7XG4gIHRoaXMuY2xhc3NPYmogPSBjbGFzc09iajtcbn0gLyogXG5SZW1vdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgdGhpcy5jbGFzc09iai5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgfSk7XG59ICovXG5cblxuUmVtb3ZlQ29uc3RydWN0b3IucHJvdG90eXBlLnJlbW92ZUJ5UHJvamVjdCA9IGZ1bmN0aW9uIChwcmpSbXYpIHtcbiAgcHJqUm12LnRhc2tJZEFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgbGV0IHJlbW92ZUluZGV4ID0gdGhpcy5jbGFzc09iai5vYmpBcnIuZmluZEluZGV4KHRhc2sgPT4gdGFzay5pZCA9PSBlbGVtZW50KTtcbiAgICB0aGlzLmNsYXNzT2JqLm9iakFyci5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xufSlcbiAgXG4vKiAgIHRoaXMuY2xhc3NPYmoub2JqQXJyLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICBpZiAocHJqUm12LnRhc2tJZEFyci5maW5kKGVsZW1lbnQgPT4gLyogZWxlbWVudCA9PSB0YXNrLmlkIGNvbnNvbGUubG9nKGVsZW1lbnQpKSkge1xuICAgICAgdGhpcy5jbGFzc09iai5vYmpBcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IFxuICB9KVxuICovXG4gIC8qIClcbiAgbGV0IGluZGV4T2ZNYXRjaCA9IHRoaXMuY2xhc3NPYmoub2JqQXJyLmZpbmRJbmRleCgob2JqKSA9PiB7XG4gICAgcmV0dXJuIG9iai5wcm9qZWN0ID09PSBwcmpSbXYudGl0bGUgPyB0cnVlIDogZmFsc2U7XG4gIH0pO1xuICB0aGlzLmNsYXNzT2JqLnJlbW92ZShpbmRleE9mTWF0Y2gpO1xuICovICBcbiAgLyogdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0aGlzLmNsYXNzT2JqLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICB9KTsgKi9cbn07XG5cblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW1vdmVUYXNrRnJvbVByb2plY3RJZEFyciA9IGZ1bmN0aW9uIChvYmopIHsgXG4gIGxldCBwcm9qZWN0T2JqZWN0ID0gcHJvamVjdHMub2JqQXJyLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09IG9iai5wcm9qZWN0KTtcbiAgbGV0IGluZGV4TnVtID0gcHJvamVjdE9iamVjdC50YXNrSWRBcnIuZmluZEluZGV4KGlkID0+IGlkID09IG9iai5pZCApO1xuICBwcm9qZWN0T2JqZWN0LnRhc2tJZEFyci5zcGxpY2UoaW5kZXhOdW0sIDEpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0T2JqZWN0KTtcbn1cblxuXG5SZW1vdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGRhdGFJZCkge1xuICBsZXQgaW5kZXhPZk1hdGNoID0gdGhpcy5jbGFzc09iai5vYmpBcnIuZmluZEluZGV4KChvYmopID0+IHtcbiAgICByZXR1cm4gb2JqLmlkID09PSBkYXRhSWQgPyB0cnVlIDogZmFsc2U7XG4gIH0pO1xuXG4gIHRoaXMuY2xhc3NPYmoucmVtb3ZlKGluZGV4T2ZNYXRjaCk7XG4gIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgdGhpcy5jbGFzc09iai5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgfSk7XG59O1xuXG5SZW1vdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoZGF0YUlkKSB7XG4gIGxldCBtYXRjaCA9IHRoaXMuY2xhc3NPYmoub2JqQXJyLmZpbmQoKG9iaikgPT4ge1xuICAgIHJldHVybiBvYmouaWQgPT09IGRhdGFJZCA/IHRydWUgOiBmYWxzZTtcbiAgfSk7XG5cbiAgKG1hdGNoLnN0YXR1cyA9PSBcImFjdGl2ZVwiKSA/IChtYXRjaC5zdGF0dXMgPSBcImNvbXBsZXRlXCIpOiAobWF0Y2guc3RhdHVzID0gXCJhY3RpdmVcIik7XG4gIGNvbnNvbGUubG9nKG1hdGNoKTtcblxufVxuXG5SZW1vdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY2xlYXJEaXNwbGF5ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnB1YlN1Yi5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIHRoaXMuY2xhc3NPYmoub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIGlmIChvYmplY3Quc3RhdHVzID09IFwiY29tcGxldGVcIikge1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5SZW1vdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGUuc2VhcmNoVGFza3MgPSBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICB0aGlzLnB1YlN1Yi5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIHRhc2tzLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBsZXQgcHVibGlzaGVkO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpIHtcbiAgICAgIGlmICgvKiBrZXkgPT0gXCJwcm9qZWN0XCIsICovIGtleSA9PSBcImlkXCIsIGtleSA9PSBcInN0YXR1c1wiLCBrZXk9PSBcInR5cGVcIiApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZm91bmQgPSB2YWx1ZS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9VcHBlckNhc2UoKSk7XG4gICAgICAgIGlmIChmb3VuZCAmJiAhcHVibGlzaGVkKSB7XG4gICAgICAgICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgICAgICAgICBwdWJsaXNoZWQgPSB0cnVlOyAvLyBpdCBuZWVkcyB0byBoaWRlIGFsbCB0aGUgb3RoZXIgZGlzcGxheXMgYW5kIHN3aXRjaCB0byBjb250YWluZXIgc2VhcmNoIGRpc3BsYXk/IFxuICAgICAgICB9IFxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5zZWFyY2hQcm9qZWN0cyA9IGZ1bmN0aW9uKHNlYXJjaFZhbHVlKSB7XG4gdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuIGxldCBkaXNwbGF5ZWQ7XG4gIHByb2plY3RzLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBsZXQgcHVibGlzaGVkO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpIHtcbiAgICAgIGlmIChrZXk9PSBcInR5cGVcIiApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZm91bmQgPSB2YWx1ZS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9VcHBlckNhc2UoKSk7XG4gICAgICAgIGlmIChmb3VuZCAmJiAhcHVibGlzaGVkKSB7XG4gICAgICAgICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgICAgICAgICBwdWJsaXNoZWQgPSB0cnVlOyAgXG4gICAgICAgICAgZGlzcGxheWVkID0gdHJ1ZTtcbiAgICAgICAgfSBcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBkaXNwbGF5ZWQ7XG59IFxuXG5cblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5kaXNwbGF5Q29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0aGlzLmNsYXNzT2JqLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBpZiAob2JqZWN0LnN0YXR1cyA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgIG9iamVjdC5wdWJsaXNoQ29tcGxldGUob2JqZWN0KTtcbiAgICB9fVxuICApXG59XG5cblxuUmVtb3ZlQ29uc3RydWN0b3IucHJvdG90eXBlLmRpc3BsYXlTb3J0ZWQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICB0YXNrcy5jdXN0b21Tb3J0KHZhbHVlKTtcbiAgdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0aGlzLmNsYXNzT2JqLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICB9KTtcbn07XG5cbmxldCBwcm9qZWN0cyA9IG5ldyBPYmplY3RBcnJDbGFzcygpO1xuXG5sZXQgcHViU3ViUHJvamVjdHMgPSBwdWJTdWJGYWN0b3J5KCk7XG5sZXQgcHJvamVjdFJlbW92ZXIgPSBuZXcgUmVtb3ZlQ29uc3RydWN0b3IocHViU3ViUHJvamVjdHMsIHByb2plY3RzKTtcblxubGV0IHB1YlN1Yk9iamVjdENvbnN0cnVjdG9ycyA9IHB1YlN1YkZhY3RvcnkoKTtcblxuLyogV0VJUkQgT0JKIG1ha2UgdGhpcyBpbnRvIHB1YlN1YiA/ICovXG5mdW5jdGlvbiBzdWJQdWJsaXNoUmVxdWVzdChvYmopIHtcbiAgbGV0IHB1YlN1YjtcbiAgaWYgKG9iai50eXBlID09IFwicHJvamVjdFwiKSB7XG4gICAgcHViU3ViID0gcHViU3ViUHJvamVjdHM7XG4gIH0gZWxzZSBpZiAob2JqLnR5cGUgPT0gXCJ0YXNrXCIpIHtcbiAgICBwdWJTdWIgPSBwdWJTdWJUYXNrcztcbiAgfVxuICBwdWJTdWIucHVibGlzaChcImRpc3BsYXlcIiwgb2JqLm9iaik7XG59XG5cbmZ1bmN0aW9uIHN1YkRpc3BsYXlBbGxSZXF1ZXN0KG9iaikge1xuICBsZXQgcHViU3ViO1xuICBsZXQgb2JqQXJyO1xuICBpZiAob2JqLnR5cGUgPT0gXCJwcm9qZWN0XCIpIHtcbiAgICBwdWJTdWIgPSBwdWJTdWJQcm9qZWN0cztcbiAgICBvYmpBcnIgPSBwcm9qZWN0cztcbiAgfSBlbHNlIGlmIChvYmoudHlwZSA9PSBcInRhc2tcIikge1xuICAgIHB1YlN1YiA9IHB1YlN1YlRhc2tzO1xuICAgIG9iakFyciA9IHRhc2tzO1xuICB9XG4gIHB1YlN1Yi5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIG9iakFyci5wdXNoKG9iai5vYmopO1xuICBjb25zb2xlLmxvZyhvYmpBcnIub2JqQXJyKTtcbiAgb2JqQXJyLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBpZiAob2JqZWN0LnN0YXR1cyA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgICB9XG4gICAgXG4gIH0pO1xufVxuXG5wdWJTdWJPYmplY3RDb25zdHJ1Y3RvcnMuc3Vic2NyaWJlKFwicHVibGlzaFwiLCBzdWJQdWJsaXNoUmVxdWVzdCk7XG5cbnB1YlN1Yk9iamVjdENvbnN0cnVjdG9ycy5zdWJzY3JpYmUoXCJkaXNwbGF5QWxsXCIsIHN1YkRpc3BsYXlBbGxSZXF1ZXN0KTtcblxuLyogT2JqZWN0IENvbnN0cnVjdG9yKi9cbmZ1bmN0aW9uIE9iamVjdENvbnN0cnVjdG9yKC8qIHB1YlN1Yiwgb2JqQXJyICovKSB7XG4gIC8qICAgdGhpcy5wdWJTdWIgPSBwdWJTdWI7XG4gIHRoaXMub2JqQXJyID0gb2JqQXJyOyAqL1xufVxuLyogXG5PYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZ2V0SWQgPSBmdW5jdGlvbigpIHt0aGlzLm9iakFyci5vYmpJZEdlbiArPSAxfTtcbiAqL1xuT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAob2JqKSB7XG4gIC8qIHRoaXMucHViU3ViLnB1Ymxpc2goXCJkaXNwbGF5XCIsIG9iaik7ICovXG4gIHB1YlN1Yk9iamVjdENvbnN0cnVjdG9ycy5wdWJsaXNoKFwicHVibGlzaFwiLCB7IHR5cGU6IHRoaXMudHlwZSwgb2JqIH0pO1xufTtcblxuT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlLmRpc3BsYXlBbGwgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHB1YlN1Yk9iamVjdENvbnN0cnVjdG9ycy5wdWJsaXNoKFwiZGlzcGxheUFsbFwiLCB7IHR5cGU6IHRoaXMudHlwZSwgb2JqIH0pO1xuICAvKiAgdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0aGlzLm9iakFyci5wdXNoKG9iaik7XG4gIHRoaXMub2JqQXJyLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICAgIGNvbnNvbGUubG9nKG9iamVjdClcbiAgfSk7ICovXG59O1xuT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2hDb21wbGV0ZSA9IGZ1bmN0aW9uKG9iaikge1xuICBwdWJTdWJUYXNrcy5wdWJsaXNoKFwiZGlzcGxheUNvbXBsZXRlXCIsIG9iaik7XG59XG5cbmZ1bmN0aW9uIFByb2plY3RDb25zdHJ1Y3Rvcih0aXRsZSkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7IC8qIFxuICB0aGlzLnB1YlN1YiA9IHB1YlN1YlByb2plY3RzO1xuICB0aGlzLm9iakFyciA9IHByb2plY3RzOyAqLyAvKiBcbiAgdGhpcy5pZCA9IHRoaXMub2JqQXJyLm9iaklkR2VuICs9IDE7ICovXG4gIHRoaXMuaWQgPSBwcm9qZWN0cy5vYmpJZEdlbiArPSAxO1xuICB0aGlzLnR5cGUgPSBcInByb2plY3RcIjtcbiAgdGhpcy50YXNrSWRBcnIgPSBbXTtcbn1cblxuUHJvamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlKTtcblxuLyogUHJvamVjdCBDb25zdHJ1Y3RvciAqL1xuLyogZnVuY3Rpb24gUHJvamVjdENvbnN0cnVjdG9yKHRpdGxlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5pZCA9IHByb2plY3RzLm9iaklkR2VuICs9IDE7XG59XG5cblByb2plY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcHViU3ViUHJvamVjdHMucHVibGlzaChcInByb2plY3RcIiwgb2JqKTtcbn07XG5cblByb2plY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZGlzcGxheUFsbCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcHViU3ViUHJvamVjdHMucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICBwcm9qZWN0cy5wdXNoKG9iaik7XG4gIHByb2plY3RzLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICB9KTtcbn07ICovXG5cbi8qIFBVQlNVQiBNT0RVTEUgRk9STVMgYW5kIERJU1BMQVkqL1xubGV0IHB1YlN1YkZvcm1zID0gcHViU3ViRmFjdG9yeSgpO1xuXG4vKiBOb3RlIENvbnN0cnVjdG9yICovXG5cbmZ1bmN0aW9uIE5vdGVDb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscykge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG59XG5Ob3RlQ29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAoKSB7XG4gIHB1YlN1YkZvcm1zLnB1Ymxpc2goXCJub3RlXCIsIHsgdGl0bGU6IHRoaXMudGl0bGUsIGRldGFpbHM6IHRoaXMuZGV0YWlscyB9KTtcbn07XG5cbi8qIFRhc2sgQ29uc3RydWN0b3IgKi9cblxubGV0IHRhc2tzID0gbmV3IFRhc2tPYmplY3RBcnJDbGFzcygpO1xubGV0IHB1YlN1YlRhc2tzID0gcHViU3ViRmFjdG9yeSgpO1xubGV0IHRhc2tSZW1vdmVyID0gbmV3IFJlbW92ZUNvbnN0cnVjdG9yKHB1YlN1YlRhc2tzLCB0YXNrcyk7XG5cbmZ1bmN0aW9uIFRhc2tDb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICB0aGlzLmRhdGUgPSBkYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIHRoaXMudHlwZSA9IFwidGFza1wiO1xuICB0aGlzLnN0YXR1cyA9IFwiYWN0aXZlXCI7XG4gIHRoaXMuaWQgPSB0YXNrcy5vYmpJZEdlbiArPSAxO1xufVxuXG5UYXNrQ29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShPYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuXG5UYXNrQ29uc3RydWN0b3IucHJvdG90eXBlLnB1c2hJZCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgcHJvamVjdE9iamVjdCA9IHByb2plY3RzLm9iakFyci5maW5kKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PSB0aGlzLnByb2plY3QpXG4gIHByb2plY3RPYmplY3QudGFza0lkQXJyLnB1c2godGhpcy5pZCk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RPYmplY3QpXG59XG5cblxuICAvKiBcbiAgcHJvamVjdE9iamVjdC50YXNrSWRBcnIucHVzaCh0aGlzLmlkKTsgKi8gLy9USEUgSVNTVUUgSVMgSEVSRVxuXG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY291bnRQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcbiAgc3dpdGNoICh0aGlzLnByaW9yaXR5KSB7XG4gICAgY2FzZSBcImxvd1wiOlxuICAgICAgcmV0dXJuIDE7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICByZXR1cm4gMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICByZXR1cm4gMztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMDtcbiAgfVxufTtcblxuLyogXG5mdW5jdGlvbiBUYXNrQ29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgdGhpcy5kZXRhaWxzID0gZGV0YWlscyxcbiAgdGhpcy5kYXRlID0gZGF0ZSxcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LFxuICB0aGlzLnByb2plY3QgPSBwcm9qZWN0LFxufVxuXG5UYXNrQ29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBvYmogPSBuZXcgVGFza0NvbnN0cnVjdG9yKFxuICAgIHRoaXMudGl0bGUsXG4gICAgdGhpcy5kZXRhaWxzLFxuICAgIHRoaXMuZGF0ZSxcbiAgICB0aGlzLnByaW9yaXR5LFxuICAgIHRoaXMucHJvamVjdFxuICApO1xuICBwdWJTdWJGb3Jtcy5wdWJsaXNoKFwidGFza1wiLCBvYmopO1xufTsgKi9cblxuLyogU3Vic2NyaWJlcnMgKi9cbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImRpc3BsYXlcIiwgc3Vic2NyaWJlUHJvamVjdCk7XG4vKiBcbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImRpc3BsYXlcIiwgc3ViUHJvamVjdERpc3BsYXkpOyAqL1xucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJTZWxlY3RQcm9qZWN0SW5wdXQpO1xucHViU3ViRm9ybXMuc3Vic2NyaWJlKFwibm90ZVwiLCBzdWJzY3JpYmVOb3RlKTtcbnB1YlN1YkZvcm1zLnN1YnNjcmliZShcInRhc2tcIiwgc3Vic2NyaWJlVGFzayk7XG5wdWJTdWJGb3Jtcy5zdWJzY3JpYmUoXCJ0YXNrXCIsIHN1YlRhc2tMaXN0SXRlbSk7XG5cbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImRpc3BsYXlcIiwgc3Vic2NyaWJlVGFzayk7XG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJkaXNwbGF5XCIsIHN1YlRhc2tMaXN0SXRlbSk7XG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJjbGVhclwiLCBzdWJSbXZUYXNrQ29udGFpbmVyKTtcbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImNsZWFyXCIsIHN1YlJtdlRhc2tzKTtcbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImRpc3BsYXlDb21wbGV0ZVwiLCBzdWJDb21wbGV0ZVRhc2spOyAvL2FkZGVkIHRoaXMgdHJ5aW5nIHRvIG1ha2UgdGhlIGNvbXBsZXRlXG4vKiBcbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImNsZWFyXCIsc3ViUm12UHJvamVjdERpc3BsYXkpICovXG5cbi8qIFxucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViUm12UHJvamVjdERpc3BsYXkpIC8qID8/ICovXG5cbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImNsZWFyXCIsIHN1YlJtdlByb2plY3REaXNwbGF5KTtcbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImNsZWFyXCIsIHN1YkNsZWFyU2VsZWN0T3B0aW9ucyk7XG5cbmV4cG9ydCB7XG4gIE5vdGVDb25zdHJ1Y3RvcixcbiAgUHJvamVjdENvbnN0cnVjdG9yLFxuICBUYXNrQ29uc3RydWN0b3IsXG4gIHByb2plY3RSZW1vdmVyLFxuICB0YXNrUmVtb3Zlcixcbn07XG4iLCJpbXBvcnQgeyBtb2RhbCB9IGZyb20gXCIuL21vZGFsL21vZGFsXCI7XG5pbXBvcnQgeyBzZWFyY2hNb2RhbCB9IGZyb20gXCIuL21vZGFsL19fc2VhcmNoL21vZGFsX19zZWFyY2hcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5L2Rpc3BsYXlcIjtcblxuY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xubWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuLyogZGlzcGxheSBmb3JtIG1vZGFsIGJ1dHRvbiAqL1xuY29uc3QgZGlzcGxheUZvcm1Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5kaXNwbGF5Rm9ybU1vZGFsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5kaXNwbGF5Rm9ybU1vZGFsLnRleHRDb250ZW50ID0gXCIrXCI7XG5kaXNwbGF5Rm9ybU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtYWluX19kaXNwbGF5LWZvcm0tYnRuXCIsIFwiYy1tYWluX19kaXNwbGF5LWZvcm0tYnRuXCIpO1xuZGlzcGxheUZvcm1Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibWFpbl9fbW9kYWwtLWhpZGRlblwiKTtcbiAgc2VhcmNoTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1haW5fX3NlYXJjaC1tb2RhbC0taGlkZGVuXCIpXG59KTtcbi8qZGlzcGxheSBzZWFyY2ggbW9kYWwgYnV0dG9uKi9cbmNvbnN0IGRpc3BsYXlTZWFyY2hNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5kaXNwbGF5U2VhcmNoTW9kYWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmRpc3BsYXlTZWFyY2hNb2RhbC50ZXh0Q29udGVudCA9IFwiU2VhcmNoXCI7XG5kaXNwbGF5U2VhcmNoTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1haW5fX2Rpc3BsYXktc2VhcmNoLWJ0blwiLCBcImMtbWFpbl9fZGlzcGxheS1zZWFyY2gtYnRuXCIpO1xuZGlzcGxheVNlYXJjaE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHNlYXJjaE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluX19zZWFyY2gtbW9kYWwtLWhpZGRlblwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1haW5fX21vZGFsLS1oaWRkZW5cIik7XG59KTtcblxuXG5cbm1haW5EaXYuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG5tYWluRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlGb3JtTW9kYWwpO1xubWFpbkRpdi5hcHBlbmRDaGlsZChkaXNwbGF5U2VhcmNoTW9kYWwpXG5tYWluRGl2LmFwcGVuZENoaWxkKG1vZGFsKTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQoc2VhcmNoTW9kYWwpO1xuXG5leHBvcnQgeyBtYWluRGl2IH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVCYXNpY0lucHV0LFxuICBhcHBlbmRMYWJlbElucHV0LFxuICBjcmVhdGVMYWJlbCxcbn0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCI7XG5pbXBvcnQgeyBOb3RlQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5cbmNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbi8qIGlucHV0cyAqL1xuY29uc3Qgbm90ZVRpdGxlID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgXCJmb3JtX19pbnB1dFwiLFxuICBcInRleHRcIixcbiAgXCJub3RlLXRpdGxlXCIsXG4gIFwibm90ZS10aXRsZVwiXG4pO1xuY29uc3Qgbm90ZVRpdGxlTGFiZWwgPSBjcmVhdGVMYWJlbChub3RlVGl0bGUsIFwiVGl0bGU6XCIpO1xuYXBwZW5kTGFiZWxJbnB1dChub3RlRm9ybSwgbm90ZVRpdGxlTGFiZWwsIG5vdGVUaXRsZSk7XG5cbmNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5ub3RlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZVwiKTtcbm5vdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5vdGVcIik7XG5cbmNvbnN0IG5vdGVMYWJlbCA9IGNyZWF0ZUxhYmVsKG5vdGUsIFwiRGV0YWlsc1wiKTtcbmFwcGVuZExhYmVsSW5wdXQobm90ZUZvcm0sIG5vdGVMYWJlbCwgbm90ZSk7XG5cbi8qIFwic3VibWl0XCIgYnV0dG9uICovXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyZXNldFwiKTsgLyogbWF5YmUgY2xlYXIgaW5zdGVhZCovXG5zdWJtaXQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBOb3RlXCI7XG5ub3RlRm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4vKiBQVUJTVUIgKi9cblxuZnVuY3Rpb24gcHVibGlzaE5vdGUoKSB7XG4gIGxldCBvYmogPSBuZXcgTm90ZUNvbnN0cnVjdG9yKG5vdGVUaXRsZS52YWx1ZSwgbm90ZS52YWx1ZSk7XG4gIG9iai5wdWJsaXNoKCk7XG59XG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHVibGlzaE5vdGUpO1xuXG5leHBvcnQgeyBub3RlRm9ybSB9O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlQmFzaWNJbnB1dCxcbiAgYXBwZW5kTGFiZWxJbnB1dCxcbiAgY3JlYXRlTGFiZWwsXG59IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuaW1wb3J0IHsgUHJvamVjdENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuaW1wb3J0IHsgY3JlYXRlQWxlcnQgfSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9fYWxlcnRcIjtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuLyogaW5wdXRzICovXG5jb25zdCBwcm9qZWN0ID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgXCJmb3JtX19pbnB1dFwiLFxuICBcInRleHRcIixcbiAgXCJwcm9qZWN0LXRpdGxlXCIsXG4gIFwicHJvamVjdFwiXG4pO1xuY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChwcm9qZWN0LCBcIlRpdGxlOlwiKTtcbmFwcGVuZExhYmVsSW5wdXQocHJvamVjdEZvcm0sIGxhYmVsLCBwcm9qZWN0KTtcblxuLyogXCJzdWJtaXRcIiBidXR0b24gKi9cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpO1xuc3VibWl0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xucHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICBpZiAoIXByb2plY3QudmFsdWUpIHtcbiAgICBjcmVhdGVBbGVydChcIlBsZWFzZSBwcm92aWRlIGEgbmFtZSBmb3IgeW91ciBwcm9qZWN0IVwiKVxuICB9IGVsc2Uge1xuICAgIGxldCBvYmogPSBuZXcgUHJvamVjdENvbnN0cnVjdG9yKHByb2plY3QudmFsdWUpO1xuICAgIG9iai5kaXNwbGF5QWxsKG9iaik7XG4gIH1cbn1cbmxldCBvYmogPSBuZXcgUHJvamVjdENvbnN0cnVjdG9yKFwiZ2VuZXJhbFwiKTtcbm9iai5kaXNwbGF5QWxsKG9iaik7XG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVByb2plY3RzKTtcblxuZXhwb3J0IHsgcHJvamVjdEZvcm0gfTtcbiIsIi8qIFRPIERPIEZPUk0gKi9cbmltcG9ydCB7XG4gIGNyZWF0ZUJhc2ljSW5wdXQsXG4gIGFwcGVuZExhYmVsSW5wdXQsXG4gIGNyZWF0ZUxhYmVsLFxuICBjcmVhdGVSYWRpb0lucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgYXBwZW5kUmFkaW9JbnB1dHNcbn0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCI7XG5pbXBvcnQgeyBUYXNrQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQge2NyZWF0ZUFsZXJ0fSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9fYWxlcnRcIjtcbmltcG9ydCB7Zm9ybWF0LCBwYXJzZUlTT30gZnJvbSBcImRhdGUtZm5zXCJcbi8qIFxuZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgXCJ5eXl5LU1NLWRkXCIpOyAqL1xuXG5cbmxldCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xudGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XG5cbmxldCB0aXRsZSA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJmb3JtX19pbnB1dFwiLCBcInRleHRcIiwgXCJ0aXRsZVwiLCBcInRpdGxlXCIpO1xudGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZTogR3JvY2VyaWVzXCIpO1xudGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0LS10ZXh0XCIpO1xubGV0IHRpdGxlTGFiZWwgPSBjcmVhdGVMYWJlbCh0aXRsZSwgXCJUaXRsZVwiKTtcbnRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcm1fX2xhYmVsLS1oaWRkZW5cIik7XG5hcHBlbmRMYWJlbElucHV0KHRhc2tGb3JtLCB0aXRsZUxhYmVsLCB0aXRsZSk7XG5cblxubGV0IHRleHRBcmVhID0gY3JlYXRlVGV4dEFyZWEoXCJmb3JtX19pbnB1dC0tdGV4dEFyZWFcIiwgXCJ0ZXh0QXJlYVwiLCBcInRleHRBcmVhXCIpXG50ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCAvKiBhcmUgdGhlc2UgbmVjZXNzYXJ5Pz8gKi9cbiAgXCJmb3JtX19pbnB1dC0tdGV4dFwiLFxuICBcImZvcm0taW5wdXRcIlxuKTtcbnRleHRBcmVhLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiMiBwb3RhdG9lc1wiKTtcblxubGV0IHRleHRBcmVhTGFiZWwgPSBjcmVhdGVMYWJlbCh0ZXh0QXJlYSwgXCJEZXRhaWxzXCIpO1xudGV4dEFyZWFMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbGFiZWwtLWhpZGRlblwiKTtcbmFwcGVuZExhYmVsSW5wdXQodGFza0Zvcm0sIHRleHRBcmVhTGFiZWwsIHRleHRBcmVhKTtcblxubGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZXQgZGF0ZSA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJmb3JtX19pbnB1dFwiLCBcImRhdGVcIiwgXCJkYXRlXCIsIFwiZGF0ZVwiKTtcbmxldCBkYXRlTGFiZWwgPSBjcmVhdGVMYWJlbChkYXRlLCBcIkR1ZSBkYXRlOlwiKTtcbmFwcGVuZExhYmVsSW5wdXQoZGl2LCBkYXRlTGFiZWwsIGRhdGUpO1xudGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcblxuLyogU0VMRUNUIFBST0pFQ1QgKi9cbmNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuc2VsZWN0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdC1wcm9qZWN0XCIpO1xuc2VsZWN0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdFwiKTtcblxuLyogY2xlYXJzIHRoZSBzZWxlY3Qgb3B0aW9ucyBhdCB0aGUgc2FtZSB0aW1lIGFzIHRoZSBwcm9qZWN0IGRpc3BsYXkgaXMgY2xlYXJlZCAqL1xuZnVuY3Rpb24gc3ViQ2xlYXJTZWxlY3RPcHRpb25zKCkge1xuICB3aGlsZSAoc2VsZWN0UHJvamVjdC5maXJzdENoaWxkKSB7XG4gICAgc2VsZWN0UHJvamVjdC5yZW1vdmVDaGlsZChzZWxlY3RQcm9qZWN0Lmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuLyogdXBkYXRlcyB0aGUgc2VsZWN0IG9wdGlvbnMgd2hlbiBuZXcgcHJvamVjdHMgYXJlIGFkZGVkICovXG5mdW5jdGlvbiBzdWJTZWxlY3RQcm9qZWN0SW5wdXQob2JqKSB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBvYmoudGl0bGUpO1xuICBvcHRpb24udGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn1cblxuY29uc3Qgc2VsZWN0TGFiZWwgPSBjcmVhdGVMYWJlbChzZWxlY3RQcm9qZWN0LCBcIlByb2plY3RcIik7XG5hcHBlbmRMYWJlbElucHV0KHRhc2tGb3JtLCBzZWxlY3RMYWJlbCwgc2VsZWN0UHJvamVjdCk7XG5cbi8qUkFESU8gQlVUVE9OUyovXG5sZXQgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG5sZXQgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbmxlZ2VuZC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbmZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG5cblxubGV0IHByaW9yaXR5TG93ID0gY3JlYXRlUmFkaW9JbnB1dChcImxvd1wiLCBcImZvcm1fX2lucHV0XCIpO1xubGV0IHByaW9yaXR5TWVkaXVtID0gY3JlYXRlUmFkaW9JbnB1dChcIm1lZGl1bVwiLCBcImZvcm1fX2lucHV0XCIpO1xubGV0IHByaW9yaXR5SGlnaCA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJoaWdoXCIsIFwiZm9ybV9faW5wdXRcIik7XG5cblxuXG5cbmFwcGVuZFJhZGlvSW5wdXRzKGZpZWxkc2V0LCBbcHJpb3JpdHlMb3csIHByaW9yaXR5TWVkaXVtLCBwcmlvcml0eUhpZ2hdKTtcblxudGFza0Zvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuXG5sZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuc3VibWl0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgVGFza1wiO1xuc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG50YXNrRm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gXG5mdW5jdGlvbiBjaGVja0RhdGUoKSB7XG4gIGxldCBkYXRlUHJvY2Vzc2VkID0gbmV3IERhdGUoZGF0ZS52YWx1ZSk7XG4gIGlmIChkYXRlLnZhbHVlKSB7XG4gICAgZGF0ZVByb2Nlc3NlZCA9IGRhdGVQcm9jZXNzZWQudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gICAgLyogZGF0ZVByb2Nlc3NlZCA9IGRhdGVQcm9jZXNzZWQuc3BsaXQoXCItXCIpLnJldmVyc2UoKS5qb2luKFwiLVwiKTsgKi9cbiAgICAvKiBkYXRlUHJvY2Vzc2VkID0gcGFyc2VJU08oZGF0ZVByb2Nlc3NlZCkgKi9cbiAgfVxuICByZXR1cm4gKCFkYXRlLnZhbHVlICkgPyBcIlwiIDogZGF0ZVByb2Nlc3NlZDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKCkge1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgbGV0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0OmNoZWNrZWRcIik7XG4gIGlmICghdGl0bGUudmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlQWxlcnQoXCJQbGVhc2UgY3JlYXRlIGEgdGl0bGUgZm9yIHlvdXIgdGFzayFcIik7XG4gIH1cbiAgaWYgKCFyYWRpbykge1xuICAgcmV0dXJuIGNyZWF0ZUFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhIHByaW9yaXR5IGZvciB5b3VyIHRhc2shXCIpO1xuICB9XG5cbiAgXG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmVzZXRcIik7XG4gIGxldCBvYmogPSBuZXcgVGFza0NvbnN0cnVjdG9yKFxuICAgIHRpdGxlLnZhbHVlLFxuICAgIHRleHRBcmVhLnZhbHVlLFxuICAgIGNoZWNrRGF0ZSgpLFxuICAgIHJhZGlvLnZhbHVlLFxuICAgIHNlbGVjdFByb2plY3QudmFsdWVcbiAgKTtcbiAgb2JqLnB1c2hJZCgpO1xuICBvYmouZGlzcGxheUFsbChvYmopO1xufVxuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlUYXNrcyk7XG4vKiBcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsZXQgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQ6Y2hlY2tlZFwiKTtcbiAgbGV0IG9iaiA9IG5ldyBUYXNrQ29uc3RydWN0b3IodGl0bGUudmFsdWUsIHRleHRBcmVhLnZhbHVlLCBkYXRlLnZhbHVlLCByYWRpby52YWx1ZSwgc2VsZWN0UHJvamVjdC52YWx1ZSk7XG4gIG9iai5wdWJsaXNoKCk7XG59KVxuICovXG5leHBvcnQgeyB0YXNrRm9ybSwgc3ViU2VsZWN0UHJvamVjdElucHV0LCBzdWJDbGVhclNlbGVjdE9wdGlvbnMgfTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUJhc2ljSW5wdXQsXG4gIGFwcGVuZExhYmVsSW5wdXQsXG4gIGNyZWF0ZUxhYmVsLFxufSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIjtcbmltcG9ydCB7dGFza1JlbW92ZXIsIHByb2plY3RSZW1vdmVyfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5cbi8qIHNlYXJjaCBtb2RhbCAqL1xubGV0IHNlYXJjaE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNlYXJjaE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtYWluX19zZWFyY2gtbW9kYWwtLWhpZGRlblwiKTtcblxuLyogY2xvc2Ugc2VhcmNoIG1vZGFsIGJ0biAqL1xubGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNsb3NlQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5jbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc2VhcmNoTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1haW5fX3NlYXJjaC1tb2RhbC0taGlkZGVuXCIpO1xuICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG59KVxuc2VhcmNoTW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4vKiBzZWFyY2ggZm9ybSAqL1xubGV0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbmxldCBzZWFyY2hJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJzZWFyY2gtZm9ybV9fc2VhcmNoLWlucHV0XCIsIFwidGV4dFwiLCBcInNlYXJjaFwiLCBcInNlYXJjaFwiKTtcbmxldCBzZWFyY2hMYWJlbCA9IGNyZWF0ZUxhYmVsKHNlYXJjaElucHV0LCBcIlNlYXJjaFwiKTtcbmFwcGVuZExhYmVsSW5wdXQoc2VhcmNoRm9ybSwgc2VhcmNoTGFiZWwsIHNlYXJjaElucHV0KTtcblxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpPT4gey8qIFxuICBwcm9qZWN0UmVtb3Zlci5zZWFyY2hQcm9qZWN0cyhzZWFyY2hJbnB1dC52YWx1ZSkgKi9cbiAgdGFza1JlbW92ZXIuc2VhcmNoVGFza3Moc2VhcmNoSW5wdXQudmFsdWUpO1xufSlcblxuXG5zZWFyY2hNb2RhbC5hcHBlbmRDaGlsZChzZWFyY2hGb3JtKTtcblxuZXhwb3J0IHtzZWFyY2hNb2RhbCwgc2VhcmNoSW5wdXR9O1xuXG4iLCJsZXQgc2lkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zaWRlRGl2LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fc2lkZVwiKTtcblxubGV0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xudGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xudGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdUQVNLJztcblxubGV0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xucHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xucHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFwiO1xuXG5sZXQgbm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5ub3RlQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5ub3RlQnV0dG9uLnRleHRDb250ZW50ID0gXCJOT1RFXCI7XG5cbnNpZGVEaXYuYXBwZW5kQ2hpbGQodGFza0J1dHRvbilcblxuc2lkZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKVxuXG5zaWRlRGl2LmFwcGVuZENoaWxkKG5vdGVCdXR0b24pXG5cbmV4cG9ydCB7c2lkZURpdiwgdGFza0J1dHRvbiwgbm90ZUJ1dHRvbiwgcHJvamVjdEJ1dHRvbn0gIiwiaW1wb3J0ICogYXMgc2lkZSBmcm9tIFwiLi9fX3NpZGUvbW9kYWxfX3NpZGVcIlxuaW1wb3J0IHt0YXNrRm9ybX0gZnJvbSBcIi4vX19mb3JtL21vZGFsX19mb3JtLS10YXNrXCIgXG5pbXBvcnQge3Byb2plY3RGb3JtfSBmcm9tIFwiLi9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXByb2plY3RcIiBcbmltcG9ydCB7bm90ZUZvcm19IGZyb20gXCIuL19fZm9ybS9tb2RhbF9fZm9ybS0tbm90ZVwiXG5cbmxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbm1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiLCBcIm1haW5fX21vZGFsXCIpO1xuXG5sZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY2xvc2VCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmNsb3NlQnRuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwicG9zaXRpb246YWJzb2x1dGVcIikgLyogaGFzIHRvIGJlIG1vdmVkIHRvIHNjc3MhISEgKi9cbmNsb3NlQnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG5tb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbmZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcbiAgcmVtb3ZlRm9ybSgpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1haW5fX21vZGFsLS1oaWRkZW5cIik7XG59IFxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVNb2RhbClcblxuLyogc2lkZSAqL1xubW9kYWwuYXBwZW5kQ2hpbGQoc2lkZS5zaWRlRGl2KTtcblxuLyogZm9ybSBvbiBpbml0aWFsIGxvYWQgKi9cbmxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX2Zvcm1cIilcbm1vZGFsLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG4vKiByZW1vdmUgZm9ybSBmdW5jICovXG5mdW5jdGlvbiByZW1vdmVGb3JtKCkge1xuICB3aGlsZSAoZm9ybUNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgZm9ybUNvbnRhaW5lci5maXJzdENoaWxkLnJlc2V0KClcbiAgICBmb3JtQ29udGFpbmVyLnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIuZmlyc3RDaGlsZClcbiAgfVxufVxuXG4vKiBzaWRlIGJ1dHRvbiBldmVudCBsaXN0ZW5lcnMgKi9cbnNpZGUudGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gIHJlbW92ZUZvcm0oKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG59KVxuc2lkZS5wcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgcmVtb3ZlRm9ybSgpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbn0pXG5zaWRlLm5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobm90ZUZvcm0pO1xufSlcblxuXG5leHBvcnQge21vZGFsfSAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyAqL1xuaW1wb3J0IHtoZWFkZXJ9IGZyb20gXCIuL2hlYWRlci9oZWFkZXJcIlxuaW1wb3J0IHttYWluRGl2fSBmcm9tIFwiLi9tYWluL21haW5cIiBcblxuXG5sZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbmJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==