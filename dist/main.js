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
          obj.removeByProject();
          
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
    obj.complete()
    (obj.status == "complete") ? obj.removeTaskFromProjectIdArr() : obj.pushId() ;  
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
    obj.complete()
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
    obj.complete();
    (obj.status == "complete") ? obj.removeTaskFromProjectIdArr(): obj.pushId() ;
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

ProjectConstructor.prototype.removeByProject = function() {
  this.taskIdArr.forEach((element) => {
    let removeIndex = tasks.objArr.findIndex(task => task.id == element);
    tasks.objArr.splice(removeIndex, 1);
  })
};

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


//Probably should only be in task constructor
TaskConstructor.prototype.removeTaskFromProjectIdArr = function () { 
  let projectObject = projects.objArr.find(project => project.title == this.project);
  let indexNum = projectObject.taskIdArr.findIndex(id => id == this.id );
  projectObject.taskIdArr.splice(indexNum, 1);
}

TaskConstructor.prototype.pushId = function() {
  let projectObject = projects.objArr.find(project => project.title == this.project)
  projectObject.taskIdArr.push(this.id);
  console.log(projectObject)
}

TaskConstructor.prototype.complete = function () {
  let match = tasks.objArr.find((obj) => {
    return obj.id === this.id ? true : false;
  });
 return (match.status == "active") ? (match.status = "complete"): (match.status = "active");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BLDBCQUEwQjtBQUNZO0FBQ0g7OztBQUduQzs7QUFFQSxpQkFBaUIsa0RBQU07O0FBRXZCLGlCQUFpQiwrQ0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0FmdGVyL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0JlZm9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsL2dlbmVyYWxfX2pzL19hbGVydC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsL2dlbmVyYWxfX2pzL190YWJsZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsL2dlbmVyYWxfX2pzL3B1Yi1zdWIuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1ub3RlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tdGFzay5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvX19zaWRlL2Rpc3BsYXlfX3NpZGUuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tYWluLXB1Yi1zdWIuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tYWluLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLS1ub3RlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLS10YXNrLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19zZWFyY2gvbW9kYWxfX3NlYXJjaC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL19fc2lkZS9tb2RhbF9fc2lkZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgZW5kT2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFNhdCBTZXAgMDYgMjAxNCAyMzo1OTo1OS45OTlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIGVuZCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBTdW4gU2VwIDA3IDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyAtNyA6IDApICsgNiAtIChkYXkgLSB3ZWVrU3RhcnRzT24pO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQWZ0ZXJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYWZ0ZXIgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYWZ0ZXIgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0FmdGVyKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPiBkYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQmVmb3JlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYmVmb3JlIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQmVmb3JlKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPCBkYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsOyAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJmdW5jdGlvbiBjcmVhdGVBbGVydCh0ZXh0KSB7XG4gIGxldCBhbGVydERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgYWxlcnREaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJwb3NpdGlvbjogZml4ZWQ7IHRvcDogMjUwcHg7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBtYXJnaW46IDAgYXV0bzsgd2lkdGg6IDIwMHB4OyAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICB0ZXh0LWFsaWduOiBjZW50ZXI7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlIFwiICk7XG5cbiAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG4gIGNsb3NlQnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWxlcnREaXYucmVtb3ZlKCk7XG4gIH0pXG4gIGFsZXJ0RGl2LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgbGV0IGFsZXJ0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhbGVydFRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBhbGVydERpdi5hcHBlbmRDaGlsZChhbGVydFRleHQpXG4gIFxuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGFsZXJ0RGl2KTtcbiAgcmV0dXJuIGFsZXJ0RGl2O1xufVxuZXhwb3J0IHtjcmVhdGVBbGVydH0iLCJmdW5jdGlvbiBjcmVhdGVCYXNpY0lucHV0KGNsYXNzTmFtZSwgdHlwZSwgaW5wdXROYW1lLCBpZCkge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBpbnB1dE5hbWUpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dEFyZWEoY2xhc3NOYW1lLCBpbnB1dE5hbWUsIGlkKSB7XG4gIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGlucHV0TmFtZSk7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgcmV0dXJuIHRleHRBcmVhO1xufSBcblxuZnVuY3Rpb24gY3JlYXRlTGFiZWwoaW5wdXQsIHRleHQpIHtcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbGFiZWxcIilcbiAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXQuZ2V0QXR0cmlidXRlKFwiaWRcIikpO1xuICByZXR1cm4gbGFiZWw7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZExhYmVsSW5wdXQoZm9ybSwgbGFiZWwsIGlucHV0KSB7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmFkaW9JbnB1dChwcmlvcml0eUxldmVsLCBjbGFzc05hbWUpIHtcbiAgbGV0IHJhZGlvID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgICBjbGFzc05hbWUsXG4gICAgXCJyYWRpb1wiLFxuICAgIFwicHJpb3JpdHlcIixcbiAgICBgcHJpb3JpdHktJHtwcmlvcml0eUxldmVsfWBcbiAgKTtcbiAgcmFkaW8uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJpb3JpdHlMZXZlbCk7XG4gIHJldHVybiByYWRpbztcbn1cblxuZnVuY3Rpb24gYXBwZW5kUmFkaW9JbnB1dHMocGFyZW50LCBhcnJheSkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIGxldCBsYWJlbCA9IGNyZWF0ZUxhYmVsKGVsZW1lbnQsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIH0pO1xufVxuXG5leHBvcnQge2NyZWF0ZUJhc2ljSW5wdXQsIGNyZWF0ZUxhYmVsLCBhcHBlbmRMYWJlbElucHV0LCBjcmVhdGVSYWRpb0lucHV0LCBhcHBlbmRSYWRpb0lucHV0cywgY3JlYXRlVGV4dEFyZWF9IiwiZnVuY3Rpb24gY3JlYXRlVGFibGUob2JqLCBwYXJlbnQpIHtcbiAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmopKSB7XG4gICAgbGV0IHJvdztcbiAgICBpZiAoa2V5ID09IFwidHlwZVwiIHx8IGtleSA9PT0gXCJpZFwiIHx8IGtleSA9PSBcInByb2plY3RcIiB8fCBrZXkgPT0gXCJzdGF0dXNcIikge1xuICAgICAgY29udGludWU7XG4gICAgfSBlbHNlIGlmIChrZXkgPT0gXCJkYXRlXCIpIHtcbiAgICAgIGxldCBkYXRlID0gdmFsdWUuc3BsaXQoXCItXCIpLnJldmVyc2UoKS5qb2luKFwiLVwiKTtcbiAgICAgIHJvdyA9IGNyZWF0ZVJvdyhrZXksIGRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3cgPSBjcmVhdGVSb3coa2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbiAgcmV0dXJuIHBhcmVudC5hcHBlbmRDaGlsZCh0YWJsZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdyhrZXksIHZhbHVlKSB7XG4gIGxldCB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgbGV0IHRhYmxlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgdGFibGVIZWFkaW5nLnRleHRDb250ZW50ID0ga2V5O1xuICBsZXQgdGFibGVEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgYXNzaWduQ2xhc3Moa2V5LCB0YWJsZURhdGEpO1xuICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0YWJsZUhlYWRpbmcpO1xuICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0YWJsZURhdGEpO1xuICByZXR1cm4gdGFibGVSb3c7XG59XG5mdW5jdGlvbiBhc3NpZ25DbGFzcyhrZXksIGVsZW1lbnQpIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlIFwidGl0bGVcIjpcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhYmxlX190ZC0tdGl0bGVcIiwgXCJ0YWJsZV9fdGRcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZGV0YWlsc1wiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3RkLS1kZXRhaWxzXCIsIFwidGFibGVfX3RkXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRhdGVcIjpcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhYmxlX190ZC0tZGF0ZVwiLCBcInRhYmxlX190ZFwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwcmlvcml0eVwiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3RkLS1wcmlvcml0eVwiLCBcInRhYmxlX190ZFwiKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRhYmxlLCB9OyIsIlxuXG5mdW5jdGlvbiBwdWJTdWJGYWN0b3J5KCkge1xuICBjb25zdCBzdWJzY3JpYmVycyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICBjb25zdCBpbmRleCA9IHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ubGVuZ3RoIC0gMTtcblxuICAgIHJldHVybiB7XG4gICAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgc3Vic2NyaWJlLFxuICAgIHB1Ymxpc2gsXG4gICAgXG4gIH07XG59XG5cbmV4cG9ydCB7cHViU3ViRmFjdG9yeSB9O1xuIiwiXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfX3RpdGxlXCIpO1xudGl0bGUudGV4dENvbnRlbnQgPSBcIkp1c3QgRG8gSXRcIjtcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcblxuaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIiwgXCJib2R5X19oZWFkZXJcIik7XG5cbmhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbmV4cG9ydCB7IGhlYWRlciB9IDsiLCJcblxubGV0IG5vdGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm5vdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIsXCJkaXNwbGF5X19jb250YWluZXItbm90ZVwiKTtcblxuZnVuY3Rpb24gc3Vic2NyaWJlTm90ZShvYmopIHtcbiAgbGV0IHRpdGxlTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgdGl0bGVOb3RlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBub3RlRGlzcGxheS5hcHBlbmRDaGlsZCh0aXRsZU5vdGUpO1xuICBsZXQgZGV0YWlsc05vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGV0YWlsc05vdGUudGV4dENvbnRlbnQgPSBvYmouZGV0YWlscztcbiAgbm90ZURpc3BsYXkuYXBwZW5kQ2hpbGQoZGV0YWlsc05vdGUpXG59XG5cblxuXG5cblxuXG5leHBvcnQge3N1YnNjcmliZU5vdGUsIG5vdGVEaXNwbGF5fSIsImltcG9ydCB7IHByb2plY3RSZW1vdmVyLCB0YXNrUmVtb3ZlciB9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcbmltcG9ydCB7IGNyZWF0ZUJhc2ljSW5wdXQgfSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIjtcbmltcG9ydCB7IGNyZWF0ZVRhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX3RhYmxlXCI7XG5pbXBvcnQgeyBhZGQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGNyZWF0ZUFsZXJ0IH0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2FsZXJ0XCI7XG5cblxuY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIiwgXCJkaXNwbGF5X19jb250YWluZXItcHJvamVjdFwiKTtcbiBcbmZ1bmN0aW9uIHN1YnNjcmliZVByb2plY3Qob2JqKSB7XG4gIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG9iai5pZCk7XG4gIC8qIGRlbGV0ZSBidXR0b24gKi9cbiAgaWYgKG9iai5pZCAhPT0gMSkgeyAvL2V4ZW1wdGlvbiBmb3IgdGhlIGdlbmVyYWwgcHJvamVjdFxuICAgIGxldCBkbHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRsdEJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgIGRsdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpOyBcbiAgICBkbHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChvYmoudGFza0lkQXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGFsZXJ0ID0gY3JlYXRlQWxlcnQoXCJUaGVyZSBzZWVtIHRvIGJlIHNvbWUgdW5maW5pc2hlZCB0YXNrcyBpbiB0aGlzIHByb2plY3QuIEFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBkZWxldGUgaXQ/XCIpO1xuICAgICAgICBsZXQgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgeWVzQnRuLnRleHRDb250ZW50ID0gXCJZZXNcIjtcbiAgICAgICAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgb2JqLnJlbW92ZUJ5UHJvamVjdCgpO1xuICAgICAgICAgIFxuICAgICAgICAgIHByb2plY3RSZW1vdmVyLnJlbW92ZShvYmouaWQpO1xuXG4gICAgICAgICBcbiAgICAgICAgICBhbGVydC5yZW1vdmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgYWxlcnQuYXBwZW5kQ2hpbGQoeWVzQnRuKTtcbiAgICAgICAgbGV0IG5vQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbm9CdG4udGV4dENvbnRlbnQgPSBcIk5vXCI7XG4gICAgICAgIG5vQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgYWxlcnQucmVtb3ZlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIGFsZXJ0LmFwcGVuZENoaWxkKG5vQnRuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RSZW1vdmVyLnJlbW92ZShvYmouaWQpO1xuICAgIFxuICAgICAgICBvYmoucmVtb3ZlQnlQcm9qZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkbHRCdG4pO1xuICB9XG4gIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQob2JqLnRpdGxlLCBcInRhc2stbGlzdFwiKTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG4gIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICB0YXNrUmVtb3Zlci5jbGVhckRpc3BsYXkoKTtcbn1cblxuZnVuY3Rpb24gc3ViUm12UHJvamVjdERpc3BsYXkoKSB7XG4gIHdoaWxlIChwcm9qZWN0RGlzcGxheS5maXJzdENoaWxkKSB7XG4gICAgcHJvamVjdERpc3BsYXkucmVtb3ZlQ2hpbGQocHJvamVjdERpc3BsYXkubGFzdENoaWxkKTtcbiAgfVxufVxuXG5cblxuLyogUmVtb3ZlcyBUYXNrcyBJdGVtcyB3aGVuICovXG5mdW5jdGlvbiBzdWJSbXZUYXNrcygpIHtcbiAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWxpc3RcIilcbiAgdGFza0xpc3QuZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICB3aGlsZSAobGlzdEl0ZW0uZmlyc3RDaGlsZCkge1xuICAgICAgbGlzdEl0ZW0ucmVtb3ZlQ2hpbGQobGlzdEl0ZW0ubGFzdENoaWxkKTtcbiAgICB9XG4gIH0gKVxufVxuXG4gIFxuZnVuY3Rpb24gc3ViVGFza0xpc3RJdGVtKG9iaikge1xuICBjb25zb2xlLmxvZyhvYmopO1xuICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgb2JqLnByb2plY3QpO1xuXG4gIGlmICh0YXNrTGlzdCkge1xuICB0YXNrTGlzdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG9iai5pZCk7IFxuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBjb21wbGV0ZUlucHV0ID0gY3JlYXRlQmFzaWNJbnB1dChcInByb2plY3QtZGl2X19kb25lLWlucHV0XCIsIFwiY2hlY2tib3hcIiwgXCJjb21wbGV0ZS1pbnB1dFwiLCBcImNvbXBsZXRlLWlucHV0XCIpOyAvL2ZpbmlzaGVkIGNoZWNrYm94XG4gIFxuICBcbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxpLWlkXCIsIG9iai5pZClcbiAgY29tcGxldGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgb2JqLmNvbXBsZXRlKClcbiAgICAob2JqLnN0YXR1cyA9PSBcImNvbXBsZXRlXCIpID8gb2JqLnJlbW92ZVRhc2tGcm9tUHJvamVjdElkQXJyKCkgOiBvYmoucHVzaElkKCkgOyAgXG4gICAgbGV0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGxpW2RhdGEtbGktaWQgPSBcIiR7b2JqLmlkfVwiXSB0aCxsaVtkYXRhLWxpLWlkID0gXCIke29iai5pZH1cIl0gdGRgKTtcbiAgICB0YXNrVGFibGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVcIik7XG4gICAgfSlcbiAgfSlcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY29tcGxldGVJbnB1dCk7XG4gIGNyZWF0ZVRhYmxlKG9iaiwgbGlzdEl0ZW0pO1xuXG4gIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGhpZGRlblJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBsaVtkYXRhLWxpLWlkID0gXCIke29iai5pZH1cIl0gdHI6bm90KDpmaXJzdC1jaGlsZClgKTtcbiAgICBoaWRkZW5Sb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSlcbiAgIFxuICB9KVxuICBcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICBsZXQgaGlkZGVuUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1saXN0IHRyOm5vdCg6Zmlyc3QtY2hpbGQpXCIpO1xuICBoaWRkZW5Sb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9KVxufVxuXG5leHBvcnQge1xuICBzdWJzY3JpYmVQcm9qZWN0LFxuICBwcm9qZWN0RGlzcGxheSxcbiAgc3ViVGFza0xpc3RJdGVtLFxuICBzdWJSbXZQcm9qZWN0RGlzcGxheSxcbiAgc3ViUm12VGFza3NcbiAgLyogZ2VuZXJhdGVQcm9qZWN0RGlzcGxheSAqL1xufTtcbiIsImltcG9ydCB7IHRhc2tSZW1vdmVyIH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuaW1wb3J0IHsgY3JlYXRlVGFibGUgfSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9fdGFibGVcIjtcbmltcG9ydCB7IHByb2plY3RSZW1vdmVyIH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlUmFkaW9JbnB1dCxcbiAgYXBwZW5kUmFkaW9JbnB1dHMsXG4gIGNyZWF0ZUJhc2ljSW5wdXQsXG4gIGNyZWF0ZVRleHRBcmVhLFxufSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIjtcbmltcG9ydCB7IGVuZE9mV2VlaywgaXNBZnRlciwgaXNCZWZvcmUsIHBhcnNlSVNPIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IHRhc2tEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItdGFzay0taGlkZGVuXCIsIFwiZGlzcGxheV9fY29udGFpbmVyLXRhc2tcIiApO1xuXG4vKiBTT1JUIEJVVFRPTiAqL1xuLyogTkVFRCBUTyBBREQgQSBTT1JUIEJZIERBVEUgT1BUSU9OICovXG5sZXQgc29ydERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZXQgc29ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5sZXQgc29ydFBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbnNvcnRQbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiXCIpO1xuc29ydFBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsXCJcIilcbnNvcnRQbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIiBcIik7XG5zb3J0UGxhY2Vob2xkZXIudGV4dENvbnRlbnQgPSBcIlNvcnRcIjtcbnNvcnQuYXBwZW5kQ2hpbGQoc29ydFBsYWNlaG9sZGVyKTtcblxubGV0IHNvcnRQcmlvcml0eURlc2NlbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG5zb3J0UHJpb3JpdHlEZXNjZW5kaW5nLnRleHRDb250ZW50ID0gXCJNb3N0IEltcG9ydGFudFwiO1xuc29ydFByaW9yaXR5RGVzY2VuZGluZy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm1vc3RcIik7XG5cbmxldCBzb3J0UHJpb3JpdHlBc2NlbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG5zb3J0UHJpb3JpdHlBc2NlbmRpbmcudGV4dENvbnRlbnQgPSBcIkxlYXN0IEltcG9ydGFudFwiO1xuc29ydFByaW9yaXR5QXNjZW5kaW5nLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibGVhc3RcIilcblxubGV0IHNvcnREYXRlQXNjZW5kaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbnNvcnREYXRlQXNjZW5kaW5nLnRleHRDb250ZW50ID0gXCJEYXRlIChBc2NlbmRpbmcpXCJcbnNvcnREYXRlQXNjZW5kaW5nLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiZGF0ZS1hc2NlbmRpbmdcIik7XG5cbmxldCBzb3J0RGF0ZURlc2NlbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuc29ydERhdGVEZXNjZW5kaW5nLnRleHRDb250ZW50ID0gXCJEYXRlIChEZXNjZW5kaW5nKVwiXG5zb3J0RGF0ZURlc2NlbmRpbmcuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJkYXRlLWRlc2NlbmRpbmdcIik7XG5cblxuc29ydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0YXNrUmVtb3Zlci5kaXNwbGF5U29ydGVkKHNvcnQudmFsdWUpO1xuICAgXG59KTtcblxuc29ydC5hcHBlbmRDaGlsZChzb3J0UHJpb3JpdHlEZXNjZW5kaW5nKTtcbnNvcnQuYXBwZW5kQ2hpbGQoc29ydFByaW9yaXR5QXNjZW5kaW5nKTtcbnNvcnQuYXBwZW5kQ2hpbGQoc29ydERhdGVBc2NlbmRpbmcpXG5zb3J0LmFwcGVuZENoaWxkKHNvcnREYXRlRGVzY2VuZGluZyk7XG5zb3J0RGl2LmFwcGVuZENoaWxkKHNvcnQpO1xudGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoc29ydERpdik7XG5cblxuLyogQ29tcGxldGUgRGlzcGxheSBidXR0b24gKi9cbmNvbnN0IGNvbXBsZXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGNvbXBsZXRlRGlzcGxheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb21wbGV0ZURpc3BsYXlCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmNvbXBsZXRlRGlzcGxheUJ0bi50ZXh0Q29udGVudCA9IFwiQ09NUExFVEVcIiAvLyBjaGFuZ2UgdG8gY2hlY2sgc3ZnIGxhdGVyO1xuY29tcGxldGVEaXNwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tSZW1vdmVyLmRpc3BsYXlDb21wbGV0ZSgpO1xuICBcbiAgLyogXG4gIHRhc2tSZW1vdmVyLmRpc3BsYXlDb21wbGV0ZSgpO1xuICBsZXQgY2hlY2tlZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWRpdl9fZG9uZS1pbnB1dFwiKTtcbiAgY2hlY2tlZElucHV0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGV0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGRpdltkYXRhLWlkPVwiJHtvYmouaWR9XCJdIHRoLCBkaXZbZGF0YS1pZD1cIiR7b2JqLmlkfVwiXSB0ZGApO1xuICAgICAgdGFza1RhYmxlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudClcbiAgICAgICAgY29uc29sZS5sb2coXCJ5b29cIik7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuICAgICAgfSlcbiAgICB9KVxuICB9KVxuICBsZXQgdGFibGVSb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRyXCIpO1xuICB0YWJsZVJvd3MuZm9yRWFjaCgodHIpID0+IHtcbiAgICB0ci5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG4gIH0pICovXG59KVxuY29tcGxldGVEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVEaXNwbGF5QnRuKTtcbnRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKGNvbXBsZXRlRGl2KTtcblxuXG5cblxuXG4vKiBUQVNLIENPTlRBSU5FUiAqL1xuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuLyogTWlnaHQgaGF2ZSB0byBtYWtlIGEgc2VwYXJhdGUgc3Vic2NyaWJlIGZvciBjb21wbGV0ZSB0YXNrcyAqL1xuXG5mdW5jdGlvbiBwcmlvcml0eUNvbG9yU3dpdGNoKGVsZW1lbnQsIG9iaikge1xuICBzd2l0Y2gob2JqLnByaW9yaXR5KSB7XG4gICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWhpZ2hcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1tZWRpdW1cIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibG93XCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1sb3dcIik7XG4gIH1cbn0gXG5mdW5jdGlvbiBzdWJDb21wbGV0ZVRhc2sob2JqKSB7XG4gIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG9iai5pZCk7XG4gIGxldCBjb21wbGV0ZUlucHV0ID0gY3JlYXRlQmFzaWNJbnB1dChcInRhc2stZGl2X19kb25lLWlucHV0XCIsIFwiY2hlY2tib3hcIiwgXCJjb21wbGV0ZS1pbnB1dFwiLCBcImNvbXBsZXRlLWlucHV0XCIpO1xuICBjb21wbGV0ZUlucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XG4gIGNvbXBsZXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIG9iai5jb21wbGV0ZSgpXG4gICAgbGV0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGRpdltkYXRhLWlkPVwiJHtvYmouaWR9XCJdIHRoLCBkaXZbZGF0YS1pZD1cIiR7b2JqLmlkfVwiXSB0ZGApO1xuICAgIHRhc2tUYWJsZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZVwiKTtcbiAgICB9KVxuICB9KVxuXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVJbnB1dCk7XG4gIGNyZWF0ZVRhYmxlKG9iaiwgdGFza0Rpdik7XG4gIFxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICBsZXQgYWxsUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0aCwgdGRcIik7XG4gIGFsbFJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgfSlcbn1cbiBcblxuZnVuY3Rpb24gc3Vic2NyaWJlVGFzayhvYmopIHtcbiAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgb2JqLmlkKTtcbiAgXG4gIFxuICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImRhdGEtZGF0ZVwiLCBvYmouZGF0ZSk7XG4gIHByaW9yaXR5Q29sb3JTd2l0Y2godGFza0Rpdiwgb2JqKVxuICAvKiBDb21wbGV0ZSBjaGVja2JveCAqL1xuICBsZXQgY29tcGxldGVJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJ0YXNrLWRpdl9fZG9uZS1pbnB1dFwiLCBcImNoZWNrYm94XCIsIFwiY29tcGxldGUtaW5wdXRcIiwgXCJjb21wbGV0ZS1pbnB1dFwiKTtcbiAgXG4gIGNvbXBsZXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIG9iai5jb21wbGV0ZSgpO1xuICAgIChvYmouc3RhdHVzID09IFwiY29tcGxldGVcIikgPyBvYmoucmVtb3ZlVGFza0Zyb21Qcm9qZWN0SWRBcnIoKTogb2JqLnB1c2hJZCgpIDtcbiAgICBsZXQgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZGl2W2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGgsIGRpdltkYXRhLWlkPVwiJHtvYmouaWR9XCJdIHRkYCk7XG4gICAgXG4gICAgdGFza1RhYmxlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuICAgIH0pXG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KVxuXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVJbnB1dCk7XG5cbiAgLyogREVMRVRFIEJVVFRPTiAqL1xuICBsZXQgZGx0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGx0QnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGRsdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBkbHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhvYmopXG4gICAgdGFza1JlbW92ZXIucmVtb3ZlKG9iai5pZCk7XG4gICAgb2JqLnJlbW92ZVRhc2tGcm9tUHJvamVjdElkQXJyKCk7XG4gIH0pO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKGRsdEJ0bik7XG5cbiAgLypFRElUIEJVVFRPTiovXG4gIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICBlZGl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cbiAgLypIYXZlIHRvIGNyZWF0ZSBsYWJlbHMgYW5kIGhpZGUgdGhlbSBmb3IgYWNjZXNzaWJpbGl0eSA/PyovXG5cbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCB0YWJsZURhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgYFtkYXRhLWlkPVwiJHtvYmouaWR9XCJdIC50YWJsZV9fdGRgXG4gICAgKTtcbiAgICAvL2xldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtvYmouaWR9XCJdIHRhYmxlYCkgLy9EbyBJIHJlYWxseSBuZWVkIHRoaXM/XG4gICAgdGFibGVEYXRhLmZvckVhY2goZnVuY3Rpb24gKHRkKSB7XG4gICAgICBsZXQgZWRpdElucHV0O1xuXG4gICAgICBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS10aXRsZVwiKSkge1xuICAgICAgICBlZGl0SW5wdXQgPSBjcmVhdGVCYXNpY0lucHV0KFxuICAgICAgICAgIFwidGFibGVfX2VkaXQtaW5wdXRcIixcbiAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICBcInRpdGxlXCIsXG4gICAgICAgICAgXCJlZGl0LXRpdGxlXCJcbiAgICAgICAgKTtcbiAgICAgICAgZWRpdElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIG9iai50aXRsZSk7XG4gICAgICB9IGVsc2UgaWYgKHRkLmNsYXNzTGlzdC5jb250YWlucyhcInRhYmxlX190ZC0tZGV0YWlsc1wiKSkge1xuICAgICAgICBlZGl0SW5wdXQgPSBjcmVhdGVUZXh0QXJlYShcbiAgICAgICAgICBcInRhYmxlX19lZGl0LWlucHV0XCIsXG4gICAgICAgICAgXCJkZXRhaWxzXCIsXG4gICAgICAgICAgXCJlZGl0LWRldGFpbHNcIlxuICAgICAgICApO1xuICAgICAgICBlZGl0SW5wdXQudGV4dENvbnRlbnQgPSBvYmouZGV0YWlscztcbiAgICAgIH0gZWxzZSBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS1kYXRlXCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gICAgICAgICAgXCJ0YWJsZV9fZWRpdC1pbnB1dFwiLFxuICAgICAgICAgIFwiZGF0ZVwiLFxuICAgICAgICAgIFwiZGF0ZVwiLFxuICAgICAgICAgIFwiZWRpdC1kYXRlXCJcbiAgICAgICAgKTtcbiAgICAgICAgZWRpdElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIG9iai5kYXRlKTtcbiAgICAgIH0gZWxzZSBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS1wcmlvcml0eVwiKSkge1xuICAgICAgICBlZGl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gICAgICAgIGxldCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gICAgICAgIGVkaXRJbnB1dC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuICAgICAgICBsZXQgbG93ID0gY3JlYXRlUmFkaW9JbnB1dChcImxvd1wiLCBcImVkaXQtYnRuX19pbnB1dC0tcmFkaW9cIik7XG4gICAgICAgIGxldCBtZWRpdW0gPSBjcmVhdGVSYWRpb0lucHV0KFwibWVkaXVtXCIsIFwiZWRpdC1idG5fX2lucHV0LS1yYWRpb1wiKTtcbiAgICAgICAgbGV0IGhpZ2ggPSBjcmVhdGVSYWRpb0lucHV0KFwiaGlnaFwiLCBcImVkaXQtYnRuX19pbnB1dC0tcmFkaW9cIik7XG4gICAgICAgIGFwcGVuZFJhZGlvSW5wdXRzKGVkaXRJbnB1dCwgW2xvdywgbWVkaXVtLCBoaWdoXSk7XG4gICAgICB9XG5cbiAgICAgIHRkLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVkaXRJbnB1dCwgdGQpO1xuICAgIH0pO1xuICAgIC8qIFNVQk1JVCBDSEFOR0VTIEJUTiAqL1xuICAgIGxldCBzdWJtaXRDaGFuZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1lZGl0LWJ0blwiKTtcbiAgICBpZiAoIXN1Ym1pdENoYW5nZUJ0bikge1xuICAgICAgc3VibWl0Q2hhbmdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHN1Ym1pdENoYW5nZUJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICBzdWJtaXRDaGFuZ2VCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1lZGl0LWJ0blwiKTtcbiAgICB9XG4gICAgXG4gICAgc3VibWl0Q2hhbmdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgZWRpdGVkSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fZWRpdC1pbnB1dFwiKTtcbiAgICAgIGVkaXRlZElucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSA9PSBcInRpdGxlXCIpIHtcbiAgICAgICAgICBpbnB1dC50aXRsZSA9PSBcIlwiID8gb2JqLnRpdGxlIDogKG9iai50aXRsZSA9IGlucHV0LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpID09IFwiZGV0YWlsc1wiKSB7XG4gICAgICAgICAgb2JqLmRldGFpbHMgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpID09IFwiZGF0ZVwiKSB7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPT0gXCJcIiA/IG9iai5kYXRlIDogKG9iai5kYXRlID0gbmV3IERhdGUoaW5wdXQudmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsZXQgZWRpdGVkUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmVkaXQtYnRuX19pbnB1dC0tcmFkaW86Y2hlY2tlZFwiXG4gICAgICApO1xuICAgICAgZWRpdGVkUHJpb3JpdHlJbnB1dCA9PSBudWxsXG4gICAgICAgID8gb2JqLnByaW9yaXR5XG4gICAgICAgIDogKG9iai5wcmlvcml0eSA9IGVkaXRlZFByaW9yaXR5SW5wdXQudmFsdWUpO1xuICAgICAgc3VibWl0Q2hhbmdlQnRuLnJlbW92ZSgpO1xuICAgICAgdGFza1JlbW92ZXIuY2xlYXJEaXNwbGF5KCk7XG4gICAgfSk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChzdWJtaXRDaGFuZ2VCdG4pO1xuICB9KTtcblxuICB0YXNrRGl2LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICBjcmVhdGVUYWJsZShvYmosIHRhc2tEaXYpO1xuXG4gIC8vRGF0ZSBBc2NlbmRpbmcgRGlzcGxheVxuICBpZiAoc29ydC52YWx1ZSA9PSBcImRhdGUtYXNjZW5kaW5nXCIpIHtcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGUudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07LyogXG4gICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZS5zcGxpdChcIi1cIikucmV2ZXJzZSgpLmpvaW4oXCItXCIpOyAqL1xuICAgIGxldCBsYXN0V2Vla0RheSA9IGVuZE9mV2VlayhuZXcgRGF0ZSgpLCB7d2Vla1N0YXJ0c09uOiAxfSk7XG4gICAgXG5cbiAgICBpZiAodGFza0Rpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRhdGVcIik9PSBcIlwiICkgeyAgLy9pZiBkYXRlIHdhcyBub3QgcHJvdmlkZWRcbiAgICAgIGxldCBub0RhdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyX19kaXYtLW5vLWRhdGVcIik7XG4gICAgICBpZiAoIW5vRGF0ZURpdikgeyBcbiAgICAgICAgbm9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbm9EYXRlRGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcGlua1wiKTtcbiAgICAgICAgbm9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lcl9fZGl2LS1uby1kYXRlXCIpXG4gICAgICAgIGxldCBub0RhdGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBub0RhdGVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJVbmRhdGVkXCI7XG4gICAgICAgIG5vRGF0ZURpdi5hcHBlbmRDaGlsZChub0RhdGVIZWFkaW5nKTtcbiAgICAgIH0gICAgICAgXG4gICAgICBub0RhdGVEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICByZXR1cm4gdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChub0RhdGVEaXYpO1xuICAgIH0gIGVsc2UgaWYgKGlzQmVmb3JlKHBhcnNlSVNPKHRhc2tEaXYuZ2V0QXR0cmlidXRlKFwiZGF0YS1kYXRlXCIpKSwgIHBhcnNlSVNPKGN1cnJlbnREYXRlKSkpICB7XG4gICAgICBsZXQgb3ZlcmR1ZURpdj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lcl9fZGl2LS1vdmVyZHVlXCIpXG4gICAgICBpZiAoIW92ZXJkdWVEaXYpIHtcbiAgICAgIG92ZXJkdWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgb3ZlcmR1ZURpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IG9yYW5nZVwiKTtcbiAgICAgIG92ZXJkdWVEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyX19kaXYtLW92ZXJkdWVcIilcbiAgICAgIGxldCBvdmVyZHVlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgIG92ZXJkdWVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJPdmVyZHVlXCI7XG4gICAgICBvdmVyZHVlRGl2LmFwcGVuZENoaWxkKG92ZXJkdWVIZWFkaW5nKTtcbiAgICAgIH1cbiAgICAgIG92ZXJkdWVEaXYuYXBwZW5kQ2hpbGQodGFza0RpdilcbiAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG92ZXJkdWVEaXYpO1xuXG4gICAgfSBlbHNlIGlmICh0YXNrRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtZGF0ZVwiKSA9PSBjdXJyZW50RGF0ZSl7IC8vaWYgZGF0ZSBpcyB0b2RheVxuICAgICAgbGV0IHRvZGF5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lcl9fZGl2LS10b2RheVwiKVxuICAgICAgaWYgKCF0b2RheURpdikge1xuICAgICAgICB0b2RheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZGF5RGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogZ3JlZW5cIik7XG4gICAgICAgIHRvZGF5RGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lcl9fZGl2LS10b2RheVwiKVxuICAgICAgICBsZXQgdG9kYXlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB0b2RheUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgICAgIHRvZGF5RGl2LmFwcGVuZENoaWxkKHRvZGF5SGVhZGluZyk7XG4gICAgICB9XG4gICAgICB0b2RheURpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KVxuICAgICAgcmV0dXJuIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlEaXYpO1xuICAgIH0gZWxzZSBpZiAoKGlzQmVmb3JlKHBhcnNlSVNPKHRhc2tEaXYuZ2V0QXR0cmlidXRlKFwiZGF0YS1kYXRlXCIpKSwgIGxhc3RXZWVrRGF5KSkpIHtcbiAgICAgIGxldCB3ZWVrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lcl9fZGl2LS13ZWVrXCIpXG4gICAgICBpZiAoIXdlZWtEaXYpIHtcbiAgICAgICAgd2Vla0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHdlZWtEaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGVcIik7XG4gICAgICAgIHdlZWtEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyX19kaXYtLXdlZWtcIilcbiAgICAgICAgbGV0IHdlZWtIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB3ZWVrSGVhZGluZy50ZXh0Q29udGVudCA9IFwiVGhpcyBXZWVrXCI7XG4gICAgICAgIHdlZWtEaXYuYXBwZW5kQ2hpbGQod2Vla0hlYWRpbmcpO1xuICAgICAgfVxuICAgICAgd2Vla0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KVxuICAgICAgcmV0dXJuIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQod2Vla0Rpdik7XG4gICAgfSBlbHNlIGlmICgoaXNBZnRlcihwYXJzZUlTTyh0YXNrRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtZGF0ZVwiKSksICBsYXN0V2Vla0RheSkpKSB7XG4gICAgICBsZXQgdXBjb21pbmdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyX19kaXYtLXVwY29taW5nXCIpXG4gICAgICBpZiAoIXVwY29taW5nRGl2KSB7XG4gICAgICAgIHVwY29taW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdXBjb21pbmdEaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBibHVlXCIpO1xuICAgICAgICB1cGNvbWluZ0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJfX2Rpdi0tdXBjb21pbmdcIilcbiAgICAgICAgbGV0IHVwY29taW5nSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgdXBjb21pbmdIZWFkaW5nLnRleHRDb250ZW50ID0gXCJVcGNvbWluZ1wiO1xuICAgICAgICB1cGNvbWluZ0Rpdi5hcHBlbmRDaGlsZCh1cGNvbWluZ0hlYWRpbmcpO1xuICAgICAgfVxuICAgICAgdXBjb21pbmdEaXYuYXBwZW5kQ2hpbGQodGFza0RpdilcbiAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHVwY29taW5nRGl2KTtcbiAgICB9fVxuXG5cblxuXG5cbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbn1cblxuZnVuY3Rpb24gc3ViUm12VGFza0NvbnRhaW5lcigpIHtcbiAgd2hpbGUgKHRhc2tDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbmV4cG9ydCB7IHN1YnNjcmliZVRhc2ssIHRhc2tEaXNwbGF5LCBzdWJSbXZUYXNrQ29udGFpbmVyLCBzdWJDb21wbGV0ZVRhc2sgfTsiLCJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5uYXYuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX25hdlwiKVxuY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbm5hdkxpc3QuY2xhc3NMaXN0LmFkZChcIm5hdl9fbGlzdFwiLCBcImMtbmF2X19saXN0XCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKHRleHQpIHtcbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2X19saXN0LWl0ZW1cIiwgXCJjLW5hdl9fbGlzdC1pdGVtXCIpXG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSlcbiAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG5uYXYuYXBwZW5kQ2hpbGQobmF2TGlzdClcblxuXG5cblxuXG5cbmV4cG9ydCB7bmF2LCBjcmVhdGVMaXN0SXRlbX1cbiIsImltcG9ydCAqIGFzIHNpZGUgZnJvbSBcIi4vX19zaWRlL2Rpc3BsYXlfX3NpZGVcIjtcbmltcG9ydCB7IHRhc2tSZW1vdmVyIH0gZnJvbSBcIi4uL21haW4tcHViLXN1YlwiO1xuLyogRGlzcGxheSBDb250YWluZXJzICovXG5pbXBvcnQgeyB0YXNrRGlzcGxheSB9IGZyb20gXCIuL19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tdGFza1wiO1xuaW1wb3J0IHsgbm90ZURpc3BsYXkgfSBmcm9tIFwiLi9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLW5vdGVcIjtcbmltcG9ydCB7IHByb2plY3REaXNwbGF5fSBmcm9tIFwiLi9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3RcIjtcbmltcG9ydCB7IHNlYXJjaElucHV0IH0gZnJvbSBcIi4uL21vZGFsL19fc2VhcmNoL21vZGFsX19zZWFyY2hcIjtcblxuXG5jb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuY29uc3Qgc2lkZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zaWRlTmF2LmFwcGVuZENoaWxkKHNpZGUubmF2KVxuXG5sZXQgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXJcIilcbmxldCBkaXNwbGF5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaXNwbGF5Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGVudFwiKVxuXG5kaXNwbGF5Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGlzcGxheSk7XG5kaXNwbGF5Q29udGVudC5hcHBlbmRDaGlsZChub3RlRGlzcGxheSk7XG5kaXNwbGF5Q29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0RGlzcGxheSk7XG5cbi8qIFNIT1VMRCBSRUZPUk1BVCBUSElTICovXG5cbmNvbnN0IGhvbWUgPSBzaWRlLmNyZWF0ZUxpc3RJdGVtKFwiSG9tZVwiKTtcbmNvbnN0IHByb2plY3QgPSBzaWRlLmNyZWF0ZUxpc3RJdGVtKFwiUHJvamVjdHNcIik7XG5jb25zdCBub3RlID0gc2lkZS5jcmVhdGVMaXN0SXRlbShcIk5vdGVzXCIpO1xuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tSZW1vdmVyLmNsZWFyRGlzcGxheSgpO1xuICBub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcbiAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIik7XG4gIHRhc2tEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5X19jb250YWluZXItdGFzay0taGlkZGVuXCIpO1xufSk7XG5cblxuXG5ub3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG59KTtcblxuXG5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tSZW1vdmVyLmNsZWFyRGlzcGxheSgpO1xuICBub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcbiAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIik7XG4gIHRhc2tEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItdGFzay0taGlkZGVuXCIpO1xuICBsZXQgaGlkZGVuUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1saXN0IHRyOm5vdCg6Zmlyc3QtY2hpbGQpXCIpO1xuICBoaWRkZW5Sb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9KSBcbn0pO1xuXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICBub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcbiAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIik7XG4gIHRhc2tEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5X19jb250YWluZXItdGFzay0taGlkZGVuXCIpO1xuXG59KVxuXG5kaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlDb250ZW50KVxuZGlzcGxheS5hcHBlbmRDaGlsZChzaWRlTmF2KTtcbmRpc3BsYXkuYXBwZW5kQ2hpbGQoZGlzcGxheUNvbnRhaW5lcik7XG5cbmV4cG9ydCB7IGRpc3BsYXkgfTtcbiIsImltcG9ydCB7IGNvbXBhcmVBc2MsIHBhcnNlSVNPIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBwdWJTdWJGYWN0b3J5IH0gZnJvbSBcIi4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvcHViLXN1YlwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlTm90ZSB9IGZyb20gXCIuL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1ub3RlXCI7XG5pbXBvcnQge1xuICBzdWJzY3JpYmVQcm9qZWN0LFxuICBzdWJUYXNrTGlzdEl0ZW0sXG4gIHN1YlJtdlByb2plY3REaXNwbGF5LFxuICBzdWJSbXZUYXNrcyxcbn0gZnJvbSBcIi4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3RcIjtcbmltcG9ydCB7XG4gIHN1YnNjcmliZVRhc2ssXG4gIHN1YlJtdlRhc2tDb250YWluZXIsXG4gIHN1YkNvbXBsZXRlVGFzayxcbn0gZnJvbSBcIi4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXRhc2tcIjtcbmltcG9ydCB7XG4gIHN1YlNlbGVjdFByb2plY3RJbnB1dCxcbiAgc3ViQ2xlYXJTZWxlY3RPcHRpb25zLFxufSBmcm9tIFwiLi9tb2RhbC9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXRhc2tcIjtcblxuLyogT0JKRUNUIENMQVNTICovXG4vKiBob2xkcyBhbiBhcnJheSBvZiBhbGwgdGhlIG9iamVjdHMuIFRoZSBvYmpJZEdlbiBpcyB1c2VkIHRvIGFzc2lnbiB1bmlxdWUgaWRzIHRvIGVhY2ggb2JqICovXG5jbGFzcyBPYmplY3RBcnJDbGFzcyB7XG4gIG9iakFyciA9IFtdO1xuICBvYmpJZEdlbiA9IDA7XG5cbiAgZ2V0IG9iakFycigpIHtcbiAgICByZXR1cm4gdGhpcy5vYmpBcnI7XG4gIH1cblxuICBzZXQgb2JqQXJyKGFycikge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYWxlcnQoXCJOb3QgYW4gYXJyYXlcIik7XG4gICAgfVxuICAgIHJldHVybiAodGhpcy5vYmpBcnIgPSBhcnIpO1xuICB9XG5cbiAgcHVzaChvYmopIHtcbiAgICB0aGlzLm9iakFyci5wdXNoKG9iaik7XG4gIH1cblxuICByZW1vdmUoaW5kZXgpIHtcbiAgICB0aGlzLm9iakFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIFxufVxuY2xhc3MgVGFza09iamVjdEFyckNsYXNzIGV4dGVuZHMgT2JqZWN0QXJyQ2xhc3Mge1xuICBjdXN0b21Tb3J0KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IFwibW9zdFwiKSB7XG4gICAgICB0aGlzLm9iakFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmNvdW50UHJpb3JpdHkoKSAtIGEuY291bnRQcmlvcml0eSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBcImxlYXN0XCIpIHtcbiAgICAgIHRoaXMub2JqQXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEuY291bnRQcmlvcml0eSgpIC0gYi5jb3VudFByaW9yaXR5KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09IFwiZGF0ZS1hc2NlbmRpbmdcIikge1xuICAgICAgdGhpcy5vYmpBcnIuc29ydChmdW5jdGlvbiAoYSxiKSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlQXNjKHBhcnNlSVNPKGEuZGF0ZSksIHBhcnNlSVNPKGIuZGF0ZSkpXG4gICAgICB9KTtcbiAgICB9ICBlbHNlIGlmICh2YWx1ZSA9PSBcImRhdGUtZGVzY2VuZGluZ1wiKSB7XG4gICAgICB0aGlzLm9iakFyci5zb3J0KGZ1bmN0aW9uIChhLGIpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVBc2MocGFyc2VJU08oYi5kYXRlKSwgcGFyc2VJU08oYS5kYXRlKSlcbiAgICAgIH0pO1xuICAgICAgXG5cbiAgICB9XG4gIH1cbn0gXG5cbi8qIFJFTU9WRSBDT05TVFJVQ1RPUiAqL1xuLyogdXNlZCB0byByZW1vdmUgb2JqZWN0cyBmcm9tIHRoZSBkaXNwbGF5IGJ5IG1hdGNoaW5nIHRoZSBkYXRhIGluZGV4IHRvIHRoZSBpbmRleCBwcm9wZXJ0eSBpbiBlYWNoIG9iamVjdCAqL1xuLyogUkVGQUNUT1IgUkVNT1ZFIENPTlNUUlVDVE9SIElUIEVYUE9TRVMgUFVCU1VCIGFuZCBDTEFTU09CSiAgaW5zdGVhZCBvZiBoZXJlZGl0YXJ5IHVzZSBhIGNvbXBvc2l0ZSBtb2RlbC4gQ3JlYXRlIGRpZmZlcmVudCBmdW5jdGlvbnMgdGhhdCB0YWtlIHB1YlN1Yi9PYmplY3RBcnIgYXMgYW4gYXJndW1lbnRcbmFuZCBwcm90b3R5cGUgdGhlbSEqL1xuXG5mdW5jdGlvbiBSZW1vdmVDb25zdHJ1Y3RvcihwdWJTdWIsIGNsYXNzT2JqKSB7XG4gIHRoaXMucHViU3ViID0gcHViU3ViO1xuICB0aGlzLmNsYXNzT2JqID0gY2xhc3NPYmo7XG59IFxuXG5SZW1vdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGRhdGFJZCkge1xuICBsZXQgaW5kZXhPZk1hdGNoID0gdGhpcy5jbGFzc09iai5vYmpBcnIuZmluZEluZGV4KChvYmopID0+IHtcbiAgICByZXR1cm4gb2JqLmlkID09PSBkYXRhSWQgPyB0cnVlIDogZmFsc2U7XG4gIH0pO1xuXG4gIHRoaXMuY2xhc3NPYmoucmVtb3ZlKGluZGV4T2ZNYXRjaCk7XG4gIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgdGhpcy5jbGFzc09iai5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgfSk7XG59O1xuXG5cblxuUmVtb3ZlQ29uc3RydWN0b3IucHJvdG90eXBlLmNsZWFyRGlzcGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0aGlzLmNsYXNzT2JqLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBpZiAob2JqZWN0LnN0YXR1cyA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgICB9XG4gIH0pO1xufTtcblxuUmVtb3ZlQ29uc3RydWN0b3IucHJvdG90eXBlLnNlYXJjaFRhc2tzID0gZnVuY3Rpb24oc2VhcmNoVmFsdWUpIHtcbiAgdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0YXNrcy5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgbGV0IHB1Ymxpc2hlZDtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmplY3QpKSB7XG4gICAgICBpZiAoLyoga2V5ID09IFwicHJvamVjdFwiLCAqLyBrZXkgPT0gXCJpZFwiLCBrZXkgPT0gXCJzdGF0dXNcIiwga2V5PT0gXCJ0eXBlXCIgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGZvdW5kID0gdmFsdWUudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICBpZiAoZm91bmQgJiYgIXB1Ymxpc2hlZCkge1xuICAgICAgICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7XG4gICAgICAgICAgcHVibGlzaGVkID0gdHJ1ZTsgLy8gaXQgbmVlZHMgdG8gaGlkZSBhbGwgdGhlIG90aGVyIGRpc3BsYXlzIGFuZCBzd2l0Y2ggdG8gY29udGFpbmVyIHNlYXJjaCBkaXNwbGF5PyBcbiAgICAgICAgfSBcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5SZW1vdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGUuc2VhcmNoUHJvamVjdHMgPSBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiBsZXQgZGlzcGxheWVkO1xuICBwcm9qZWN0cy5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgbGV0IHB1Ymxpc2hlZDtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmplY3QpKSB7XG4gICAgICBpZiAoa2V5PT0gXCJ0eXBlXCIgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGZvdW5kID0gdmFsdWUudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICBpZiAoZm91bmQgJiYgIXB1Ymxpc2hlZCkge1xuICAgICAgICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7XG4gICAgICAgICAgcHVibGlzaGVkID0gdHJ1ZTsgIFxuICAgICAgICAgIGRpc3BsYXllZCA9IHRydWU7XG4gICAgICAgIH0gXG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4gZGlzcGxheWVkO1xufSBcblxuXG5SZW1vdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZGlzcGxheUNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgdGhpcy5jbGFzc09iai5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgaWYgKG9iamVjdC5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICBvYmplY3QucHVibGlzaENvbXBsZXRlKG9iamVjdCk7XG4gICAgfX1cbiAgKVxufVxuXG5cblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5kaXNwbGF5U29ydGVkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgdGFza3MuY3VzdG9tU29ydCh2YWx1ZSk7XG4gIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgdGhpcy5jbGFzc09iai5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgfSk7XG59O1xuXG5sZXQgcHJvamVjdHMgPSBuZXcgT2JqZWN0QXJyQ2xhc3MoKTtcblxubGV0IHB1YlN1YlByb2plY3RzID0gcHViU3ViRmFjdG9yeSgpO1xubGV0IHByb2plY3RSZW1vdmVyID0gbmV3IFJlbW92ZUNvbnN0cnVjdG9yKHB1YlN1YlByb2plY3RzLCBwcm9qZWN0cyk7XG5cbmxldCBwdWJTdWJPYmplY3RDb25zdHJ1Y3RvcnMgPSBwdWJTdWJGYWN0b3J5KCk7XG5cbi8qIFdFSVJEIE9CSiBtYWtlIHRoaXMgaW50byBwdWJTdWIgPyAqL1xuZnVuY3Rpb24gc3ViUHVibGlzaFJlcXVlc3Qob2JqKSB7XG4gIGxldCBwdWJTdWI7XG4gIGlmIChvYmoudHlwZSA9PSBcInByb2plY3RcIikge1xuICAgIHB1YlN1YiA9IHB1YlN1YlByb2plY3RzO1xuICB9IGVsc2UgaWYgKG9iai50eXBlID09IFwidGFza1wiKSB7XG4gICAgcHViU3ViID0gcHViU3ViVGFza3M7XG4gIH1cbiAgcHViU3ViLnB1Ymxpc2goXCJkaXNwbGF5XCIsIG9iai5vYmopO1xufVxuXG5mdW5jdGlvbiBzdWJEaXNwbGF5QWxsUmVxdWVzdChvYmopIHtcbiAgbGV0IHB1YlN1YjtcbiAgbGV0IG9iakFycjtcbiAgaWYgKG9iai50eXBlID09IFwicHJvamVjdFwiKSB7XG4gICAgcHViU3ViID0gcHViU3ViUHJvamVjdHM7XG4gICAgb2JqQXJyID0gcHJvamVjdHM7XG4gIH0gZWxzZSBpZiAob2JqLnR5cGUgPT0gXCJ0YXNrXCIpIHtcbiAgICBwdWJTdWIgPSBwdWJTdWJUYXNrcztcbiAgICBvYmpBcnIgPSB0YXNrcztcbiAgfVxuICBwdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICBvYmpBcnIucHVzaChvYmoub2JqKTtcbiAgY29uc29sZS5sb2cob2JqQXJyLm9iakFycik7XG4gIG9iakFyci5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgaWYgKG9iamVjdC5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7XG4gICAgfVxuICAgIFxuICB9KTtcbn1cblxucHViU3ViT2JqZWN0Q29uc3RydWN0b3JzLnN1YnNjcmliZShcInB1Ymxpc2hcIiwgc3ViUHVibGlzaFJlcXVlc3QpO1xuXG5wdWJTdWJPYmplY3RDb25zdHJ1Y3RvcnMuc3Vic2NyaWJlKFwiZGlzcGxheUFsbFwiLCBzdWJEaXNwbGF5QWxsUmVxdWVzdCk7XG5cbi8qIE9iamVjdCBDb25zdHJ1Y3RvciovXG5mdW5jdGlvbiBPYmplY3RDb25zdHJ1Y3RvcigvKiBwdWJTdWIsIG9iakFyciAqLykge1xuICAvKiAgIHRoaXMucHViU3ViID0gcHViU3ViO1xuICB0aGlzLm9iakFyciA9IG9iakFycjsgKi9cbn1cbi8qIFxuT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24oKSB7dGhpcy5vYmpBcnIub2JqSWRHZW4gKz0gMX07XG4gKi9cbk9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5wdWJsaXNoID0gZnVuY3Rpb24gKG9iaikge1xuICAvKiB0aGlzLnB1YlN1Yi5wdWJsaXNoKFwiZGlzcGxheVwiLCBvYmopOyAqL1xuICBwdWJTdWJPYmplY3RDb25zdHJ1Y3RvcnMucHVibGlzaChcInB1Ymxpc2hcIiwgeyB0eXBlOiB0aGlzLnR5cGUsIG9iaiB9KTtcbn07XG5cbk9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5kaXNwbGF5QWxsID0gZnVuY3Rpb24gKG9iaikge1xuICBwdWJTdWJPYmplY3RDb25zdHJ1Y3RvcnMucHVibGlzaChcImRpc3BsYXlBbGxcIiwgeyB0eXBlOiB0aGlzLnR5cGUsIG9iaiB9KTtcbiAgLyogIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgdGhpcy5vYmpBcnIucHVzaChvYmopO1xuICB0aGlzLm9iakFyci5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgICBjb25zb2xlLmxvZyhvYmplY3QpXG4gIH0pOyAqL1xufTtcbk9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5wdWJsaXNoQ29tcGxldGUgPSBmdW5jdGlvbihvYmopIHtcbiAgcHViU3ViVGFza3MucHVibGlzaChcImRpc3BsYXlDb21wbGV0ZVwiLCBvYmopO1xufVxuXG5cbmZ1bmN0aW9uIFByb2plY3RDb25zdHJ1Y3Rvcih0aXRsZSkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7IC8qIFxuICB0aGlzLnB1YlN1YiA9IHB1YlN1YlByb2plY3RzO1xuICB0aGlzLm9iakFyciA9IHByb2plY3RzOyAqLyAvKiBcbiAgdGhpcy5pZCA9IHRoaXMub2JqQXJyLm9iaklkR2VuICs9IDE7ICovXG4gIHRoaXMuaWQgPSBwcm9qZWN0cy5vYmpJZEdlbiArPSAxO1xuICB0aGlzLnR5cGUgPSBcInByb2plY3RcIjtcbiAgdGhpcy50YXNrSWRBcnIgPSBbXTtcbn1cblxuUHJvamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlKTtcblxuUHJvamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW1vdmVCeVByb2plY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy50YXNrSWRBcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGxldCByZW1vdmVJbmRleCA9IHRhc2tzLm9iakFyci5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09IGVsZW1lbnQpO1xuICAgIHRhc2tzLm9iakFyci5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xuICB9KVxufTtcblxuLyogUHJvamVjdCBDb25zdHJ1Y3RvciAqL1xuLyogZnVuY3Rpb24gUHJvamVjdENvbnN0cnVjdG9yKHRpdGxlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5pZCA9IHByb2plY3RzLm9iaklkR2VuICs9IDE7XG59XG5cblByb2plY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcHViU3ViUHJvamVjdHMucHVibGlzaChcInByb2plY3RcIiwgb2JqKTtcbn07XG5cblByb2plY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZGlzcGxheUFsbCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcHViU3ViUHJvamVjdHMucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICBwcm9qZWN0cy5wdXNoKG9iaik7XG4gIHByb2plY3RzLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICB9KTtcbn07ICovXG5cbi8qIFBVQlNVQiBNT0RVTEUgRk9STVMgYW5kIERJU1BMQVkqL1xubGV0IHB1YlN1YkZvcm1zID0gcHViU3ViRmFjdG9yeSgpO1xuXG4vKiBOb3RlIENvbnN0cnVjdG9yICovXG5cbmZ1bmN0aW9uIE5vdGVDb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscykge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG59XG5Ob3RlQ29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAoKSB7XG4gIHB1YlN1YkZvcm1zLnB1Ymxpc2goXCJub3RlXCIsIHsgdGl0bGU6IHRoaXMudGl0bGUsIGRldGFpbHM6IHRoaXMuZGV0YWlscyB9KTtcbn07XG5cbi8qIFRhc2sgQ29uc3RydWN0b3IgKi9cblxubGV0IHRhc2tzID0gbmV3IFRhc2tPYmplY3RBcnJDbGFzcygpO1xubGV0IHB1YlN1YlRhc2tzID0gcHViU3ViRmFjdG9yeSgpO1xubGV0IHRhc2tSZW1vdmVyID0gbmV3IFJlbW92ZUNvbnN0cnVjdG9yKHB1YlN1YlRhc2tzLCB0YXNrcyk7XG5cbmZ1bmN0aW9uIFRhc2tDb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICB0aGlzLmRhdGUgPSBkYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIHRoaXMudHlwZSA9IFwidGFza1wiO1xuICB0aGlzLnN0YXR1cyA9IFwiYWN0aXZlXCI7XG4gIHRoaXMuaWQgPSB0YXNrcy5vYmpJZEdlbiArPSAxO1xufVxuXG5UYXNrQ29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShPYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuXG5cbi8vUHJvYmFibHkgc2hvdWxkIG9ubHkgYmUgaW4gdGFzayBjb25zdHJ1Y3RvclxuVGFza0NvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW1vdmVUYXNrRnJvbVByb2plY3RJZEFyciA9IGZ1bmN0aW9uICgpIHsgXG4gIGxldCBwcm9qZWN0T2JqZWN0ID0gcHJvamVjdHMub2JqQXJyLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09IHRoaXMucHJvamVjdCk7XG4gIGxldCBpbmRleE51bSA9IHByb2plY3RPYmplY3QudGFza0lkQXJyLmZpbmRJbmRleChpZCA9PiBpZCA9PSB0aGlzLmlkICk7XG4gIHByb2plY3RPYmplY3QudGFza0lkQXJyLnNwbGljZShpbmRleE51bSwgMSk7XG59XG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVzaElkID0gZnVuY3Rpb24oKSB7XG4gIGxldCBwcm9qZWN0T2JqZWN0ID0gcHJvamVjdHMub2JqQXJyLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09IHRoaXMucHJvamVjdClcbiAgcHJvamVjdE9iamVjdC50YXNrSWRBcnIucHVzaCh0aGlzLmlkKTtcbiAgY29uc29sZS5sb2cocHJvamVjdE9iamVjdClcbn1cblxuVGFza0NvbnN0cnVjdG9yLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IG1hdGNoID0gdGFza3Mub2JqQXJyLmZpbmQoKG9iaikgPT4ge1xuICAgIHJldHVybiBvYmouaWQgPT09IHRoaXMuaWQgPyB0cnVlIDogZmFsc2U7XG4gIH0pO1xuIHJldHVybiAobWF0Y2guc3RhdHVzID09IFwiYWN0aXZlXCIpID8gKG1hdGNoLnN0YXR1cyA9IFwiY29tcGxldGVcIik6IChtYXRjaC5zdGF0dXMgPSBcImFjdGl2ZVwiKTtcbn1cblxuXG4gIC8qIFxuICBwcm9qZWN0T2JqZWN0LnRhc2tJZEFyci5wdXNoKHRoaXMuaWQpOyAqLyAvL1RIRSBJU1NVRSBJUyBIRVJFXG5cblxuVGFza0NvbnN0cnVjdG9yLnByb3RvdHlwZS5jb3VudFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuICBzd2l0Y2ggKHRoaXMucHJpb3JpdHkpIHtcbiAgICBjYXNlIFwibG93XCI6XG4gICAgICByZXR1cm4gMTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgIHJldHVybiAyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgIHJldHVybiAzO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAwO1xuICB9XG59O1xuXG4vKiBcbmZ1bmN0aW9uIFRhc2tDb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlLFxuICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzLFxuICB0aGlzLmRhdGUgPSBkYXRlLFxuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHksXG4gIHRoaXMucHJvamVjdCA9IHByb2plY3QsXG59XG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IG9iaiA9IG5ldyBUYXNrQ29uc3RydWN0b3IoXG4gICAgdGhpcy50aXRsZSxcbiAgICB0aGlzLmRldGFpbHMsXG4gICAgdGhpcy5kYXRlLFxuICAgIHRoaXMucHJpb3JpdHksXG4gICAgdGhpcy5wcm9qZWN0XG4gICk7XG4gIHB1YlN1YkZvcm1zLnB1Ymxpc2goXCJ0YXNrXCIsIG9iaik7XG59OyAqL1xuXG4vKiBTdWJzY3JpYmVycyAqL1xucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJzY3JpYmVQcm9qZWN0KTtcbi8qIFxucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJQcm9qZWN0RGlzcGxheSk7ICovXG5wdWJTdWJQcm9qZWN0cy5zdWJzY3JpYmUoXCJkaXNwbGF5XCIsIHN1YlNlbGVjdFByb2plY3RJbnB1dCk7XG5wdWJTdWJGb3Jtcy5zdWJzY3JpYmUoXCJub3RlXCIsIHN1YnNjcmliZU5vdGUpO1xucHViU3ViRm9ybXMuc3Vic2NyaWJlKFwidGFza1wiLCBzdWJzY3JpYmVUYXNrKTtcbnB1YlN1YkZvcm1zLnN1YnNjcmliZShcInRhc2tcIiwgc3ViVGFza0xpc3RJdGVtKTtcblxucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJzY3JpYmVUYXNrKTtcbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImRpc3BsYXlcIiwgc3ViVGFza0xpc3RJdGVtKTtcbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImNsZWFyXCIsIHN1YlJtdlRhc2tDb250YWluZXIpO1xucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViUm12VGFza3MpO1xucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiZGlzcGxheUNvbXBsZXRlXCIsIHN1YkNvbXBsZXRlVGFzayk7IC8vYWRkZWQgdGhpcyB0cnlpbmcgdG8gbWFrZSB0aGUgY29tcGxldGVcbi8qIFxucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiY2xlYXJcIixzdWJSbXZQcm9qZWN0RGlzcGxheSkgKi9cblxuLyogXG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJjbGVhclwiLCBzdWJSbXZQcm9qZWN0RGlzcGxheSkgLyogPz8gKi9cblxucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViUm12UHJvamVjdERpc3BsYXkpO1xucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViQ2xlYXJTZWxlY3RPcHRpb25zKTtcblxuZXhwb3J0IHtcbiAgTm90ZUNvbnN0cnVjdG9yLFxuICBQcm9qZWN0Q29uc3RydWN0b3IsXG4gIFRhc2tDb25zdHJ1Y3RvcixcbiAgcHJvamVjdFJlbW92ZXIsXG4gIHRhc2tSZW1vdmVyLFxufTtcbiIsImltcG9ydCB7IG1vZGFsIH0gZnJvbSBcIi4vbW9kYWwvbW9kYWxcIjtcbmltcG9ydCB7IHNlYXJjaE1vZGFsIH0gZnJvbSBcIi4vbW9kYWwvX19zZWFyY2gvbW9kYWxfX3NlYXJjaFwiO1xuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXkvZGlzcGxheVwiO1xuXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5tYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4vKiBkaXNwbGF5IGZvcm0gbW9kYWwgYnV0dG9uICovXG5jb25zdCBkaXNwbGF5Rm9ybU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmRpc3BsYXlGb3JtTW9kYWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmRpc3BsYXlGb3JtTW9kYWwudGV4dENvbnRlbnQgPSBcIitcIjtcbmRpc3BsYXlGb3JtTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1haW5fX2Rpc3BsYXktZm9ybS1idG5cIiwgXCJjLW1haW5fX2Rpc3BsYXktZm9ybS1idG5cIik7XG5kaXNwbGF5Rm9ybU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluX19tb2RhbC0taGlkZGVuXCIpO1xuICBzZWFyY2hNb2RhbC5jbGFzc0xpc3QuYWRkKFwibWFpbl9fc2VhcmNoLW1vZGFsLS1oaWRkZW5cIilcbn0pO1xuLypkaXNwbGF5IHNlYXJjaCBtb2RhbCBidXR0b24qL1xuY29uc3QgZGlzcGxheVNlYXJjaE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmRpc3BsYXlTZWFyY2hNb2RhbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuZGlzcGxheVNlYXJjaE1vZGFsLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcbmRpc3BsYXlTZWFyY2hNb2RhbC5jbGFzc0xpc3QuYWRkKFwibWFpbl9fZGlzcGxheS1zZWFyY2gtYnRuXCIsIFwiYy1tYWluX19kaXNwbGF5LXNlYXJjaC1idG5cIik7XG5kaXNwbGF5U2VhcmNoTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc2VhcmNoTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5fX3NlYXJjaC1tb2RhbC0taGlkZGVuXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibWFpbl9fbW9kYWwtLWhpZGRlblwiKTtcbn0pO1xuXG5cblxubWFpbkRpdi5hcHBlbmRDaGlsZChkaXNwbGF5KTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQoZGlzcGxheUZvcm1Nb2RhbCk7XG5tYWluRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlTZWFyY2hNb2RhbClcbm1haW5EaXYuYXBwZW5kQ2hpbGQobW9kYWwpO1xubWFpbkRpdi5hcHBlbmRDaGlsZChzZWFyY2hNb2RhbCk7XG5cbmV4cG9ydCB7IG1haW5EaXYgfTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUJhc2ljSW5wdXQsXG4gIGFwcGVuZExhYmVsSW5wdXQsXG4gIGNyZWF0ZUxhYmVsLFxufSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIjtcbmltcG9ydCB7IE5vdGVDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcblxuY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuLyogaW5wdXRzICovXG5jb25zdCBub3RlVGl0bGUgPSBjcmVhdGVCYXNpY0lucHV0KFxuICBcImZvcm1fX2lucHV0XCIsXG4gIFwidGV4dFwiLFxuICBcIm5vdGUtdGl0bGVcIixcbiAgXCJub3RlLXRpdGxlXCJcbik7XG5jb25zdCBub3RlVGl0bGVMYWJlbCA9IGNyZWF0ZUxhYmVsKG5vdGVUaXRsZSwgXCJUaXRsZTpcIik7XG5hcHBlbmRMYWJlbElucHV0KG5vdGVGb3JtLCBub3RlVGl0bGVMYWJlbCwgbm90ZVRpdGxlKTtcblxuY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbm5vdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3RlXCIpO1xubm90ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibm90ZVwiKTtcblxuY29uc3Qgbm90ZUxhYmVsID0gY3JlYXRlTGFiZWwobm90ZSwgXCJEZXRhaWxzXCIpO1xuYXBwZW5kTGFiZWxJbnB1dChub3RlRm9ybSwgbm90ZUxhYmVsLCBub3RlKTtcblxuLyogXCJzdWJtaXRcIiBidXR0b24gKi9cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpOyAvKiBtYXliZSBjbGVhciBpbnN0ZWFkKi9cbnN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE5vdGVcIjtcbm5vdGVGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbi8qIFBVQlNVQiAqL1xuXG5mdW5jdGlvbiBwdWJsaXNoTm90ZSgpIHtcbiAgbGV0IG9iaiA9IG5ldyBOb3RlQ29uc3RydWN0b3Iobm90ZVRpdGxlLnZhbHVlLCBub3RlLnZhbHVlKTtcbiAgb2JqLnB1Ymxpc2goKTtcbn1cblxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwdWJsaXNoTm90ZSk7XG5cbmV4cG9ydCB7IG5vdGVGb3JtIH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVCYXNpY0lucHV0LFxuICBhcHBlbmRMYWJlbElucHV0LFxuICBjcmVhdGVMYWJlbCxcbn0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCI7XG5pbXBvcnQgeyBQcm9qZWN0Q29uc3RydWN0b3IgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQgeyBjcmVhdGVBbGVydCB9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19hbGVydFwiO1xuXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4vKiBpbnB1dHMgKi9cbmNvbnN0IHByb2plY3QgPSBjcmVhdGVCYXNpY0lucHV0KFxuICBcImZvcm1fX2lucHV0XCIsXG4gIFwidGV4dFwiLFxuICBcInByb2plY3QtdGl0bGVcIixcbiAgXCJwcm9qZWN0XCJcbik7XG5jb25zdCBsYWJlbCA9IGNyZWF0ZUxhYmVsKHByb2plY3QsIFwiVGl0bGU6XCIpO1xuYXBwZW5kTGFiZWxJbnB1dChwcm9qZWN0Rm9ybSwgbGFiZWwsIHByb2plY3QpO1xuXG4vKiBcInN1Ym1pdFwiIGJ1dHRvbiAqL1xuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmVzZXRcIik7XG5zdWJtaXQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBQcm9qZWN0XCI7XG5wcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG4gIGlmICghcHJvamVjdC52YWx1ZSkge1xuICAgIGNyZWF0ZUFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgYSBuYW1lIGZvciB5b3VyIHByb2plY3QhXCIpXG4gIH0gZWxzZSB7XG4gICAgbGV0IG9iaiA9IG5ldyBQcm9qZWN0Q29uc3RydWN0b3IocHJvamVjdC52YWx1ZSk7XG4gICAgb2JqLmRpc3BsYXlBbGwob2JqKTtcbiAgfVxufVxubGV0IG9iaiA9IG5ldyBQcm9qZWN0Q29uc3RydWN0b3IoXCJnZW5lcmFsXCIpO1xub2JqLmRpc3BsYXlBbGwob2JqKTtcblxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UHJvamVjdHMpO1xuXG5leHBvcnQgeyBwcm9qZWN0Rm9ybSB9O1xuIiwiLyogVE8gRE8gRk9STSAqL1xuaW1wb3J0IHtcbiAgY3JlYXRlQmFzaWNJbnB1dCxcbiAgYXBwZW5kTGFiZWxJbnB1dCxcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZVJhZGlvSW5wdXQsXG4gIGNyZWF0ZVRleHRBcmVhLFxuICBhcHBlbmRSYWRpb0lucHV0c1xufSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIjtcbmltcG9ydCB7IFRhc2tDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcbmltcG9ydCB7Y3JlYXRlQWxlcnR9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19hbGVydFwiO1xuaW1wb3J0IHtmb3JtYXQsIHBhcnNlSVNPfSBmcm9tIFwiZGF0ZS1mbnNcIlxuLyogXG5mb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCBcInl5eXktTU0tZGRcIik7ICovXG5cblxubGV0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG50YXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcblxubGV0IHRpdGxlID0gY3JlYXRlQmFzaWNJbnB1dChcImZvcm1fX2lucHV0XCIsIFwidGV4dFwiLCBcInRpdGxlXCIsIFwidGl0bGVcIik7XG50aXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlOiBHcm9jZXJpZXNcIik7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXQtLXRleHRcIik7XG5sZXQgdGl0bGVMYWJlbCA9IGNyZWF0ZUxhYmVsKHRpdGxlLCBcIlRpdGxlXCIpO1xudGl0bGVMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbGFiZWwtLWhpZGRlblwiKTtcbmFwcGVuZExhYmVsSW5wdXQodGFza0Zvcm0sIHRpdGxlTGFiZWwsIHRpdGxlKTtcblxuXG5sZXQgdGV4dEFyZWEgPSBjcmVhdGVUZXh0QXJlYShcImZvcm1fX2lucHV0LS10ZXh0QXJlYVwiLCBcInRleHRBcmVhXCIsIFwidGV4dEFyZWFcIilcbnRleHRBcmVhLmNsYXNzTGlzdC5hZGQoIC8qIGFyZSB0aGVzZSBuZWNlc3Nhcnk/PyAqL1xuICBcImZvcm1fX2lucHV0LS10ZXh0XCIsXG4gIFwiZm9ybS1pbnB1dFwiXG4pO1xudGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIyIHBvdGF0b2VzXCIpO1xuXG5sZXQgdGV4dEFyZWFMYWJlbCA9IGNyZWF0ZUxhYmVsKHRleHRBcmVhLCBcIkRldGFpbHNcIik7XG50ZXh0QXJlYUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19sYWJlbC0taGlkZGVuXCIpO1xuYXBwZW5kTGFiZWxJbnB1dCh0YXNrRm9ybSwgdGV4dEFyZWFMYWJlbCwgdGV4dEFyZWEpO1xuXG5sZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxldCBkYXRlID0gY3JlYXRlQmFzaWNJbnB1dChcImZvcm1fX2lucHV0XCIsIFwiZGF0ZVwiLCBcImRhdGVcIiwgXCJkYXRlXCIpO1xubGV0IGRhdGVMYWJlbCA9IGNyZWF0ZUxhYmVsKGRhdGUsIFwiRHVlIGRhdGU6XCIpO1xuYXBwZW5kTGFiZWxJbnB1dChkaXYsIGRhdGVMYWJlbCwgZGF0ZSk7XG50YXNrRm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuXG4vKiBTRUxFQ1QgUFJPSkVDVCAqL1xuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5zZWxlY3RQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0LXByb2plY3RcIik7XG5zZWxlY3RQcm9qZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0XCIpO1xuXG4vKiBjbGVhcnMgdGhlIHNlbGVjdCBvcHRpb25zIGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIHByb2plY3QgZGlzcGxheSBpcyBjbGVhcmVkICovXG5mdW5jdGlvbiBzdWJDbGVhclNlbGVjdE9wdGlvbnMoKSB7XG4gIHdoaWxlIChzZWxlY3RQcm9qZWN0LmZpcnN0Q2hpbGQpIHtcbiAgICBzZWxlY3RQcm9qZWN0LnJlbW92ZUNoaWxkKHNlbGVjdFByb2plY3QubGFzdENoaWxkKTtcbiAgfVxufVxuXG4vKiB1cGRhdGVzIHRoZSBzZWxlY3Qgb3B0aW9ucyB3aGVuIG5ldyBwcm9qZWN0cyBhcmUgYWRkZWQgKi9cbmZ1bmN0aW9uIHN1YlNlbGVjdFByb2plY3RJbnB1dChvYmopIHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG9iai50aXRsZSk7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xufVxuXG5jb25zdCBzZWxlY3RMYWJlbCA9IGNyZWF0ZUxhYmVsKHNlbGVjdFByb2plY3QsIFwiUHJvamVjdFwiKTtcbmFwcGVuZExhYmVsSW5wdXQodGFza0Zvcm0sIHNlbGVjdExhYmVsLCBzZWxlY3RQcm9qZWN0KTtcblxuLypSQURJTyBCVVRUT05TKi9cbmxldCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbmxldCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xubGVnZW5kLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuXG5sZXQgcHJpb3JpdHlMb3cgPSBjcmVhdGVSYWRpb0lucHV0KFwibG93XCIsIFwiZm9ybV9faW5wdXRcIik7XG5sZXQgcHJpb3JpdHlNZWRpdW0gPSBjcmVhdGVSYWRpb0lucHV0KFwibWVkaXVtXCIsIFwiZm9ybV9faW5wdXRcIik7XG5sZXQgcHJpb3JpdHlIaWdoID0gY3JlYXRlUmFkaW9JbnB1dChcImhpZ2hcIiwgXCJmb3JtX19pbnB1dFwiKTtcblxuXG5cblxuYXBwZW5kUmFkaW9JbnB1dHMoZmllbGRzZXQsIFtwcmlvcml0eUxvdywgcHJpb3JpdHlNZWRpdW0sIHByaW9yaXR5SGlnaF0pO1xuXG50YXNrRm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbmxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5zdWJtaXQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUYXNrXCI7XG5zdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiBcbmZ1bmN0aW9uIGNoZWNrRGF0ZSgpIHtcbiAgbGV0IGRhdGVQcm9jZXNzZWQgPSBuZXcgRGF0ZShkYXRlLnZhbHVlKTtcbiAgaWYgKGRhdGUudmFsdWUpIHtcbiAgICBkYXRlUHJvY2Vzc2VkID0gZGF0ZVByb2Nlc3NlZC50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcbiAgICAvKiBkYXRlUHJvY2Vzc2VkID0gZGF0ZVByb2Nlc3NlZC5zcGxpdChcIi1cIikucmV2ZXJzZSgpLmpvaW4oXCItXCIpOyAqL1xuICAgIC8qIGRhdGVQcm9jZXNzZWQgPSBwYXJzZUlTTyhkYXRlUHJvY2Vzc2VkKSAqL1xuICB9XG4gIHJldHVybiAoIWRhdGUudmFsdWUgKSA/IFwiXCIgOiBkYXRlUHJvY2Vzc2VkO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoKSB7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBsZXQgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQ6Y2hlY2tlZFwiKTtcbiAgaWYgKCF0aXRsZS52YWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVBbGVydChcIlBsZWFzZSBjcmVhdGUgYSB0aXRsZSBmb3IgeW91ciB0YXNrIVwiKTtcbiAgfVxuICBpZiAoIXJhZGlvKSB7XG4gICByZXR1cm4gY3JlYXRlQWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgcHJpb3JpdHkgZm9yIHlvdXIgdGFzayFcIik7XG4gIH1cblxuICBcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyZXNldFwiKTtcbiAgbGV0IG9iaiA9IG5ldyBUYXNrQ29uc3RydWN0b3IoXG4gICAgdGl0bGUudmFsdWUsXG4gICAgdGV4dEFyZWEudmFsdWUsXG4gICAgY2hlY2tEYXRlKCksXG4gICAgcmFkaW8udmFsdWUsXG4gICAgc2VsZWN0UHJvamVjdC52YWx1ZVxuICApO1xuICBvYmoucHVzaElkKCk7XG4gIG9iai5kaXNwbGF5QWxsKG9iaik7XG59XG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVRhc2tzKTtcbi8qIFxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxldCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dDpjaGVja2VkXCIpO1xuICBsZXQgb2JqID0gbmV3IFRhc2tDb25zdHJ1Y3Rvcih0aXRsZS52YWx1ZSwgdGV4dEFyZWEudmFsdWUsIGRhdGUudmFsdWUsIHJhZGlvLnZhbHVlLCBzZWxlY3RQcm9qZWN0LnZhbHVlKTtcbiAgb2JqLnB1Ymxpc2goKTtcbn0pXG4gKi9cbmV4cG9ydCB7IHRhc2tGb3JtLCBzdWJTZWxlY3RQcm9qZWN0SW5wdXQsIHN1YkNsZWFyU2VsZWN0T3B0aW9ucyB9O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlQmFzaWNJbnB1dCxcbiAgYXBwZW5kTGFiZWxJbnB1dCxcbiAgY3JlYXRlTGFiZWwsXG59IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuaW1wb3J0IHt0YXNrUmVtb3ZlciwgcHJvamVjdFJlbW92ZXJ9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcblxuLyogc2VhcmNoIG1vZGFsICovXG5sZXQgc2VhcmNoTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2VhcmNoTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1haW5fX3NlYXJjaC1tb2RhbC0taGlkZGVuXCIpO1xuXG4vKiBjbG9zZSBzZWFyY2ggbW9kYWwgYnRuICovXG5sZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY2xvc2VCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmNsb3NlQnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzZWFyY2hNb2RhbC5jbGFzc0xpc3QuYWRkKFwibWFpbl9fc2VhcmNoLW1vZGFsLS1oaWRkZW5cIik7XG4gIHNlYXJjaElucHV0LnZhbHVlID0gXCJcIjtcbn0pXG5zZWFyY2hNb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbi8qIHNlYXJjaCBmb3JtICovXG5sZXQgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xubGV0IHNlYXJjaElucHV0ID0gY3JlYXRlQmFzaWNJbnB1dChcInNlYXJjaC1mb3JtX19zZWFyY2gtaW5wdXRcIiwgXCJ0ZXh0XCIsIFwic2VhcmNoXCIsIFwic2VhcmNoXCIpO1xubGV0IHNlYXJjaExhYmVsID0gY3JlYXRlTGFiZWwoc2VhcmNoSW5wdXQsIFwiU2VhcmNoXCIpO1xuYXBwZW5kTGFiZWxJbnB1dChzZWFyY2hGb3JtLCBzZWFyY2hMYWJlbCwgc2VhcmNoSW5wdXQpO1xuXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCk9PiB7LyogXG4gIHByb2plY3RSZW1vdmVyLnNlYXJjaFByb2plY3RzKHNlYXJjaElucHV0LnZhbHVlKSAqL1xuICB0YXNrUmVtb3Zlci5zZWFyY2hUYXNrcyhzZWFyY2hJbnB1dC52YWx1ZSk7XG59KVxuXG5cbnNlYXJjaE1vZGFsLmFwcGVuZENoaWxkKHNlYXJjaEZvcm0pO1xuXG5leHBvcnQge3NlYXJjaE1vZGFsLCBzZWFyY2hJbnB1dH07XG5cbiIsImxldCBzaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNpZGVEaXYuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19zaWRlXCIpO1xuXG5sZXQgdGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG50YXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG50YXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1RBU0snO1xuXG5sZXQgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5wcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5wcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJQUk9KRUNUXCI7XG5cbmxldCBub3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm5vdGVCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbm5vdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIk5PVEVcIjtcblxuc2lkZURpdi5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKVxuXG5zaWRlRGl2LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pXG5cbnNpZGVEaXYuYXBwZW5kQ2hpbGQobm90ZUJ1dHRvbilcblxuZXhwb3J0IHtzaWRlRGl2LCB0YXNrQnV0dG9uLCBub3RlQnV0dG9uLCBwcm9qZWN0QnV0dG9ufSAiLCJpbXBvcnQgKiBhcyBzaWRlIGZyb20gXCIuL19fc2lkZS9tb2RhbF9fc2lkZVwiXG5pbXBvcnQge3Rhc2tGb3JtfSBmcm9tIFwiLi9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXRhc2tcIiBcbmltcG9ydCB7cHJvamVjdEZvcm19IGZyb20gXCIuL19fZm9ybS9tb2RhbF9fZm9ybS0tcHJvamVjdFwiIFxuaW1wb3J0IHtub3RlRm9ybX0gZnJvbSBcIi4vX19mb3JtL21vZGFsX19mb3JtLS1ub3RlXCJcblxubGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxubW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIsIFwibWFpbl9fbW9kYWxcIik7XG5cbmxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuY2xvc2VCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJwb3NpdGlvbjphYnNvbHV0ZVwiKSAvKiBoYXMgdG8gYmUgbW92ZWQgdG8gc2NzcyEhISAqL1xuY2xvc2VCdG4udGV4dENvbnRlbnQgPSBcInhcIjtcbm1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibWFpbl9fbW9kYWwtLWhpZGRlblwiKTtcbn0gXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZU1vZGFsKVxuXG4vKiBzaWRlICovXG5tb2RhbC5hcHBlbmRDaGlsZChzaWRlLnNpZGVEaXYpO1xuXG4vKiBmb3JtIG9uIGluaXRpYWwgbG9hZCAqL1xubGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fZm9ybVwiKVxubW9kYWwuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbi8qIHJlbW92ZSBmb3JtIGZ1bmMgKi9cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gIHdoaWxlIChmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQucmVzZXQoKVxuICAgIGZvcm1Db250YWluZXIucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lci5maXJzdENoaWxkKVxuICB9XG59XG5cbi8qIHNpZGUgYnV0dG9uIGV2ZW50IGxpc3RlbmVycyAqL1xuc2lkZS50YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgcmVtb3ZlRm9ybSgpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbn0pXG5zaWRlLnByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xufSlcbnNpZGUubm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gIHJlbW92ZUZvcm0oKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlRm9ybSk7XG59KVxuXG5cbmV4cG9ydCB7bW9kYWx9ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7ICovXG5pbXBvcnQge2hlYWRlcn0gZnJvbSBcIi4vaGVhZGVyL2hlYWRlclwiXG5pbXBvcnQge21haW5EaXZ9IGZyb20gXCIuL21haW4vbWFpblwiIFxuXG5cbmxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9