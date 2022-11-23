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

/***/ "./src/footer/footer.js":
/*!******************************!*\
  !*** ./src/footer/footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
let footer = document.querySelector("footer")

let divInt = document.createElement("div");
divInt.classList.add("footer__div-decoration--interior");
let divExt = document.createElement("div")
divExt.classList.add("footer__div-decoration--exterior");

let divText = document.createElement("div")
divText.classList.add("footer__div--text")

let createdByText = document.createElement("p");
createdByText.textContent = "Created by Bertmoss";
createdByText.classList.add("footer__text");

divText.appendChild(createdByText);
divExt.appendChild(divInt)
footer.appendChild(divExt);
footer.appendChild(divText);

 

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
  alertDiv.classList.add("alert")
  let closeBtn = document.createElement("button");
  closeBtn.classList.add("alert__close-btn") 

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
  table.setAttribute("cellspacing", "0");
  table.setAttribute("cellpadding", "0");
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
  let keyDisplay = key.charAt(0).toUpperCase() + key.substring(1,);
  tableHeading.textContent = keyDisplay;
  let tableData = document.createElement("td");
  tableData.textContent = value;
  if (key == "priority") {
    tableData.setAttribute("style", "font-size:0px")
    let i = 0;
    let n;
    switch(value) {
      case "low":
        n = 1;
        break;
      case "medium":
        n = 2   
        break;
      case "high": 
        n = 3;
        break;
    }
    while ( i < n ) {
      let priorityDisplay = document.createElement("img");
      priorityDisplay.setAttribute("src", "url(../../../src/general/images/svg-star--red.svg");
      tableData.appendChild(priorityDisplay);
      i++
    }
    
  }
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

let noteContainer = document.createElement("div");

function subscribeNote(obj) {
  noteContainer.classList.add("note-container");
  //Note-Div
  let noteDiv = document.createElement("div");
  noteDiv.setAttribute("data-id", obj.id);
  noteDiv.classList.add("note-div")
  //Note-Div__Btn-Div
  let btnDiv = document.createElement("div");
  btnDiv.classList.add("note-div__btn-div");
  //Btn-Div__Dlt-Btn
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "x";
  dltBtn.setAttribute("type", "button");
  dltBtn.classList.add("btn-div__dlt-btn");
  dltBtn.addEventListener("click", () => {
    obj.remove();
  });
  btnDiv.appendChild(dltBtn);
  noteDiv.appendChild(btnDiv);
  

  //Btn-Div__Edit-Btn
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.setAttribute("type", "button");
  editBtn.classList.add("btn-div__edit-btn");

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

    /* Note-div__Submit-Edit-Btn */
    let submitChangeBtn = document.querySelector(".note-div__submit-edit-btn");
    if (!submitChangeBtn) {
      submitChangeBtn = document.createElement("button");
      submitChangeBtn.textContent = "Submit";
      submitChangeBtn.classList.add("note-div__submit-edit-btn", "p-note-div__submit-edit-btn");
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
  btnDiv.appendChild(editBtn);
  
  (0,_general_general_js_table__WEBPACK_IMPORTED_MODULE_0__.createTable)(obj, noteDiv)
  noteContainer.appendChild(noteDiv)
  noteDisplay.appendChild(noteContainer);
}



function subRmvNoteDisplay() {
  while (noteContainer.firstChild) {
    noteContainer.removeChild(noteContainer.lastChild);
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

let projectContainer = document.createElement("div");
projectContainer.classList.add("project-container")



function subscribeProject(obj) {
  let projectDiv = document.createElement("div");
  projectDiv.setAttribute("data-id", obj.id);
  projectDiv.classList.add("project-div", "p-project-container__project-div");
  let btnDiv = document.createElement("div");
  btnDiv.classList.add("project-div__btn-div")
  projectDiv.appendChild(btnDiv)
  let heading = document.createElement("h3");
  heading.textContent = obj.title;
  heading.classList.add("p-btn-div__heading")
  btnDiv.appendChild(heading);
  /* delete button */
  if (obj.id !== 1) {
    //exemption for the general project
    let dltBtn = document.createElement("button");
    dltBtn.textContent = "delete";
    dltBtn.setAttribute("type", "button");
    dltBtn.classList.add("btn-div__dlt-btn")
    dltBtn.addEventListener("click", () => {
      if (obj.taskIdArr.length > 0) {
        let alert = (0,_general_general_js_alert__WEBPACK_IMPORTED_MODULE_3__.createAlert)(
          "There seem to be some unfinished tasks in this project. Are you sure you would like to delete it?"
        );
        let yesBtn = document.createElement("button");
        yesBtn.textContent = "Yes";
        yesBtn.classList.add("alert__yes-btn")
        yesBtn.addEventListener("click", () => {
          obj.removeByProject();
          obj.remove();
          alert.remove();
        });
        alert.appendChild(yesBtn);
        let noBtn = document.createElement("button");
        noBtn.textContent = "No";
        noBtn.classList.add("alert__no-btn")
        noBtn.addEventListener("click", () => {
          alert.remove();
        });
        alert.appendChild(noBtn);
      } else {
       obj.remove()

        obj.removeByProject();
      }
    });
    btnDiv.appendChild(dltBtn);
  }

  let taskList = document.createElement("ul");
  taskList.classList.add(obj.title, "task-list", "p-task-div__task-list");
  projectDiv.appendChild(taskList);
  projectContainer.appendChild(projectDiv);
  /* projectDisplay.appendChild(projectDiv); */
  projectDisplay.appendChild(projectContainer)
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.displayMod.update();
  console.log(_main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.displayMod)
}

function subRmvProjectDisplay() {
  while (projectContainer.firstChild) {
    projectContainer.removeChild(projectContainer.lastChild);
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
  ); 
  completeInput.classList.add("p-project-div__done-input")
  //finished checkbox
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
let srtCpltDiv = document.createElement("div");
srtCpltDiv.classList.add("srt-cplt-div", "p-container-task__srt-cplt-div");
let sort = document.createElement("select");
sort.classList.add("srt-cplt-div__srt-btn","p-srt-cplt-div__srt-btn")
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
  taskContainer.classList.remove("task-container--srt-date")
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.displayMod.updateSorted(sort.value)
});

sort.appendChild(sortPriorityDescending);
sort.appendChild(sortPriorityAscending);
sort.appendChild(sortDateAscending);
sort.appendChild(sortDateDescending);
srtCpltDiv.appendChild(sort);
taskDisplay.appendChild(srtCpltDiv);

/* Complete Display button */
//const completeDiv = document.createElement("div");
const completeDisplayBtn = document.createElement("button");
completeDisplayBtn.classList.add("srt-cplt-div__cplt-btn", "p-srt-cplt-div__cplt-btn")
completeDisplayBtn.setAttribute("type", "button");
completeDisplayBtn.textContent = "COMPLETE"; 
completeDisplayBtn.addEventListener("click", () => {
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.displayMod.updateComplete()
});
srtCpltDiv.appendChild(completeDisplayBtn);
//taskDisplay.appendChild(completeDiv);

/* TASK CONTAINER */
const taskContainer = document.createElement("div");
taskContainer.classList.add("task-container")
taskDisplay.appendChild(taskContainer);

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
  taskDiv.classList.add("task-div")
  taskDiv.setAttribute("data-id", obj.id);
  //Btn Div 
  let btnCpltDiv = document.createElement("div");
  btnCpltDiv.classList.add("task-div__btn-div");
  let completeInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createBasicInput)(
    "btn-div__done-input",
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
  btnCpltDiv.appendChild(completeInput);
  taskDiv.appendChild(btnCpltDiv);
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
  taskDiv.classList.add("task-div")
  priorityColorSwitch(taskDiv, obj);
  let btnDiv = document.createElement("div");
  btnDiv.classList.add("task-div__btn-div")
  let sideBtnDiv = document.createElement("div");
  sideBtnDiv.classList.add("btn-div__side-div")



  /* Complete checkbox */
  let completeInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createBasicInput)(
    "btn-div__done-input",
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

  btnDiv.appendChild(completeInput);

  /*EDIT BUTTON*/

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("btn-div__edit-btn")
  editBtn.setAttribute("type", "button");


  editBtn.addEventListener("click", () => {
    editBtn.classList.add("hidden");
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
        editInput.classList.add("edit__fieldset")
        let legend = document.createElement("legend");
        legend.textContent = "Priority";
        editInput.appendChild(legend);
        let low = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createRadioInput)("low", "edit__input--radio");
        let medium = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createRadioInput)("medium", "edit__input--radio");
        let high = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createRadioInput)("high", "edit__input--radio");
        (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.appendRadioInputs)(editInput, [low, medium, high]);
      }

      td.parentNode.replaceChild(editInput, td);
    });
    /* SUBMIT CHANGES BTN */
    let submitChangeBtn = document.querySelector(".submit-edit-btn");
    if (!submitChangeBtn) {
      submitChangeBtn = document.createElement("button");
      submitChangeBtn.textContent = "Submit";
      submitChangeBtn.classList.add("task-div__submit-edit-btn", "p-task-div__submit-edit-btn");
    }

    submitChangeBtn.addEventListener("click", () => {
      editBtn.classList.remove("hidden");
      let editedInputs = document.querySelectorAll(" .table__edit-input");
      editedInputs.forEach((input) => {
        if (input.getAttribute("name") == "title") {
          input.value == "" ?  obj.title : (obj.title = input.value);
        } else if (input.getAttribute("name") == "details") {
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
        ".edit__input--radio:checked"
      );
      editedPriorityInput == null
        ? obj.priority
        : (obj.priority = editedPriorityInput.value);
      submitChangeBtn.remove();
      _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.displayMod.update();
    });
    taskDiv.appendChild(submitChangeBtn);
  });
  sideBtnDiv.appendChild(editBtn);


  /* DELETE BUTTON */
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "Delete";
  dltBtn.classList.add("btn-div__dlt-btn")
  dltBtn.setAttribute("type", "button");
  dltBtn.addEventListener("click", () => {
    obj.remove();
    obj.removeTaskFromProjectIdArr();
  });
  
  
  sideBtnDiv.appendChild(dltBtn);
  btnDiv.appendChild(sideBtnDiv);
  taskDiv.appendChild(btnDiv);
  (0,_general_general_js_table__WEBPACK_IMPORTED_MODULE_1__.createTable)(obj, taskDiv);

  //Date Ascending Display
  if (sort.value == "date-ascending") {
    taskContainer.classList.add("task-container--srt-date")
    let currentDate = new Date();
    currentDate = currentDate.toISOString().split("T")[0]; /* 
    currentDate = currentDate.split("-").reverse().join("-"); */
    let lastWeekDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), { weekStartsOn: 1 });

    if (taskDiv.getAttribute("data-date") == "") {
      //if date was not provided
      let noDateDiv = document.querySelector(".task-container__div--no-date");
      if (!noDateDiv) {
        noDateDiv = document.createElement("div");
        noDateDiv.classList.add("task-container__div--no-date", "task-container__div--srt-date");
        let noDateHeading = document.createElement("h1");
        noDateHeading.textContent = "Undated";
        noDateHeading.classList.add("div-srt-date__h1");
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
        overdueDiv.classList.add("task-container__div--overdue","task-container__div--srt-date" );
        let overdueHeading = document.createElement("h1");
        overdueHeading.classList.add("div-srt-date__h1");
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
        todayDiv.classList.add("task-container__div--today", "task-container__div--srt-date");
        let todayHeading = document.createElement("h1");
        todayHeading.classList.add("div-srt-date__h1");
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
        weekDiv.classList.add("task-container__div--week", "task-container__div--srt-date");
        let weekHeading = document.createElement("h1");
        weekHeading.classList.add("div-srt-date__h1");
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
        upcomingDiv.classList.add("task-container__div--upcoming", "task-container__div--srt-date");
        let upcomingHeading = document.createElement("h1");
        upcomingHeading.textContent = "Upcoming";
        upcomingHeading.classList.add("div-srt-date__h1");
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
nav.classList.add("display__nav", "p-display__nav")
const navList = document.createElement("ul");
navList.classList.add("nav__list", "p-nav__list")


function createListItem(text) {
  let listItem = document.createElement("li");
  listItem.classList.add("nav__list-item", "p-nav__list-item")
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
home.classList.add("nav__list-item--home");
const project = _side_display_side__WEBPACK_IMPORTED_MODULE_0__.createListItem("Projects");
const note = _side_display_side__WEBPACK_IMPORTED_MODULE_0__.createListItem("Notes");
note.classList.add("nav__list-item--note");

home.addEventListener("click", () => {
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.displayMod.update();
  _container_display_container_note__WEBPACK_IMPORTED_MODULE_3__.noteDisplay.classList.add("display__container-note--hidden");
  _container_display_container_project__WEBPACK_IMPORTED_MODULE_4__.projectDisplay.classList.add("display__container-project--hidden");
  _container_display_container_task__WEBPACK_IMPORTED_MODULE_2__.taskDisplay.classList.remove("display__container-task--hidden");
});

note.addEventListener("click", () => {
 /*  displayMod.updateNotes(); */
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
/* harmony import */ var _modal_form_modal_form_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/__form/modal__form-task */ "./src/main/modal/__form/modal__form-task.js");







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

/***/ "./src/main/modal/__form/modal__form-note.js":
/*!***************************************************!*\
  !*** ./src/main/modal/__form/modal__form-note.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noteForm": () => (/* binding */ noteForm)
/* harmony export */ });
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");
/* harmony import */ var _general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/general__js/_alert */ "./src/general/general__js/_alert.js");




const noteForm = document.createElement("form");
noteForm.classList.add("form-note")

/* inputs */
const noteTitle = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)(
  "form__input",
  "text",
  "note-title",
  "note-title"
);
noteTitle.setAttribute("required", "");
const noteTitleLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(noteTitle, "Title:");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(noteForm, noteTitleLabel, noteTitle);

const note = document.createElement("textarea");
note.setAttribute("id", "note");
note.setAttribute("name", "note");
note.setAttribute("required", "");

const noteLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(note, "Details:");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(noteForm, noteLabel, note);

/* "submit" button */
const submit = document.createElement("button");
submit.setAttribute("type", "button");
submit.classList.add("form-note__btn")
submit.textContent = "Create Note";
noteForm.appendChild(submit);



/* PUBSUB */

function publishNote() {
  if (noteTitle.value == "" || note.value == "") {
    return (0,_general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__.createAlert)("Please fill out both the title and details fields!")
  } 
  let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.NoteConstructor(noteTitle.value, note.value);
  noteForm.reset();
  obj.displayAll();
}

submit.addEventListener("click", publishNote);




/***/ }),

/***/ "./src/main/modal/__form/modal__form-project.js":
/*!******************************************************!*\
  !*** ./src/main/modal/__form/modal__form-project.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectForm": () => (/* binding */ projectForm)
/* harmony export */ });
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");
/* harmony import */ var _general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/general__js/_alert */ "./src/general/general__js/_alert.js");




const projectForm = document.createElement("form");
projectForm.classList.add("form-project")

/* inputs */
const project = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)(
  "form__input",
  "text",
  "project-title",
  "project"
);
const label = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(project, "Title:");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(projectForm, label, project);

//creates the General project
let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.ProjectConstructor("General");
obj.displayAll();


/* "submit" button */
const submit = document.createElement("button");
submit.setAttribute("type", "button");
submit.textContent = "Create Project";
submit.classList.add("form-project__btn")
projectForm.appendChild(submit);


function displayProjects() {
  if (!project.value) {
   return (0,_general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__.createAlert)("Please provide a name for your project!")
  } 
  let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.ProjectConstructor(project.value);
  projectForm.reset();
  obj.displayAll();
}
submit.addEventListener("click", displayProjects);




/***/ }),

/***/ "./src/main/modal/__form/modal__form-task.js":
/*!***************************************************!*\
  !*** ./src/main/modal/__form/modal__form-task.js ***!
  \***************************************************/
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








let taskForm = document.createElement("form");
taskForm.classList.add("form-task");

let title = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)("form__input", "text", "title", "title");
title.setAttribute("placeholder", "Title");
title.classList.add("form__input--text");
let titleLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(title, "Title");
titleLabel.classList.add("form__label--hidden");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(taskForm, titleLabel, title);


let textArea = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createTextArea)("form__input", "textArea", "textArea")

textArea.setAttribute("placeholder", "Details");

let textAreaLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(textArea, "Details");
textAreaLabel.classList.add("form__label--hidden");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(taskForm, textAreaLabel, textArea);

let div = document.createElement("div");
div.classList.add("form__div");
let date = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)("form__input", "date", "date", "date");
let dateLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(date, "Due Date:");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(div, dateLabel, date);
taskForm.appendChild(div);

/* SELECT PROJECT */
const selectProject = document.createElement("select");
selectProject.setAttribute("id", "select-project");
selectProject.setAttribute("name", "project");
selectProject.classList.add("form__input")

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

const selectLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(selectProject, "Project:");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(div, selectLabel, selectProject);


/*RADIO BUTTONS*/
let fieldset = document.createElement("fieldset");
fieldset.classList.add("form__fieldset")
let legend = document.createElement("legend");
legend.textContent = "Priority";
fieldset.appendChild(legend);


let priorityLow = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createRadioInput)("low", "fieldset__input-radio");
let priorityMedium = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createRadioInput)("medium", "fieldset__input-radio");
let priorityHigh = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createRadioInput)("high", "fieldset__input-radio");


(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendRadioInputs)(fieldset, [priorityLow, priorityMedium, priorityHigh]);
taskForm.appendChild(fieldset);


let submit = document.createElement("button");

submit.textContent = "Create Task";
submit.setAttribute("type", "button");
submit.classList.add("form-task__btn")
taskForm.appendChild(submit);

 
function checkDate() {
  let dateProcessed = new Date(date.value);
  if (date.value) {
    dateProcessed = dateProcessed.toISOString().split("T")[0];   
  }
  return (!date.value ) ? "" : dateProcessed;
}

function displayTasks() {
  let radio = document.querySelector("input:checked");
  if (!title.value) {
    return (0,_general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__.createAlert)("Please create a title for your task!");
  }
  if (!radio) {
   return (0,_general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__.createAlert)("Please select a priority for your task!");
  }

  
  let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.TaskConstructor(
    title.value,
    textArea.value,
    checkDate(),
    radio.value,
    selectProject.value
  );
  obj.pushId();
  obj.displayAll();
  taskForm.reset();
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
/* harmony import */ var _form_modal_form_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./__form/modal__form-task */ "./src/main/modal/__form/modal__form-task.js");
/* harmony import */ var _form_modal_form_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./__form/modal__form-project */ "./src/main/modal/__form/modal__form-project.js");
/* harmony import */ var _form_modal_form_note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./__form/modal__form-note */ "./src/main/modal/__form/modal__form-note.js");





let modal = document.createElement("div");
modal.classList.add("modal", "p-main__modal");

let closeBtn = document.createElement("button");
closeBtn.setAttribute("type", "button");
closeBtn.classList.add("modal__close-btn")
closeBtn.textContent = "Close window";
modal.appendChild(closeBtn);

function hideModal() {
  removeForm();
  formContainer.appendChild(_form_modal_form_task__WEBPACK_IMPORTED_MODULE_1__.taskForm);
  modal.classList.add("main__modal--hidden");
}
closeBtn.addEventListener("click", hideModal);

/* side */
modal.appendChild(_side_modal_side__WEBPACK_IMPORTED_MODULE_0__.sideDiv);

/* form on initial load */
let formContainer = document.createElement("div");
formContainer.appendChild(_form_modal_form_task__WEBPACK_IMPORTED_MODULE_1__.taskForm);
formContainer.classList.add("modal__form");
modal.appendChild(formContainer);

/* remove form func */
function removeForm() {
  while (formContainer.firstChild) {
    formContainer.firstChild.reset();
    formContainer.removeChild(formContainer.firstChild);
  }
}

/* side button event listeners */
_side_modal_side__WEBPACK_IMPORTED_MODULE_0__.taskButton.addEventListener("click", () => {
  removeForm();
  formContainer.appendChild(_form_modal_form_task__WEBPACK_IMPORTED_MODULE_1__.taskForm);
});
_side_modal_side__WEBPACK_IMPORTED_MODULE_0__.projectButton.addEventListener("click", () => {
  removeForm();
  formContainer.appendChild(_form_modal_form_project__WEBPACK_IMPORTED_MODULE_2__.projectForm);
});
_side_modal_side__WEBPACK_IMPORTED_MODULE_0__.noteButton.addEventListener("click", () => {
  removeForm();
  formContainer.appendChild(_form_modal_form_note__WEBPACK_IMPORTED_MODULE_3__.noteForm);
});
/* hide modal when clicked outside of the modal */
document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".p-main__modal") &&
    !event.target.closest(".alert") &&
    !event.target.matches(".main__display-form-btn") &&
    modal.classList.contains("main__modal--hidden") == false
  ) {
    modal.setAttribute(
      "style",
      "animation-name : swirl-out-bck; animation-duration: 0.6s"
    );
    setTimeout(hideModal, 600);
  }
});




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
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer */ "./src/footer/footer.js");
/* import "./style.scss"; */

 



let body = document.querySelector("body");

body.appendChild(_header_header__WEBPACK_IMPORTED_MODULE_0__.header);

body.appendChild(_main_main__WEBPACK_IMPORTED_MODULE_1__.mainDiv);

body.appendChild(_footer_footer__WEBPACK_IMPORTED_MODULE_2__.footer);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsY0FBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQSxlQUFlLG9EQUFVLENBQUMsb0RBQVEsVUFBVSxvREFBUTtBQUNwRCxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0EsZUFBZSxvREFBVSxDQUFDLG9EQUFRLFVBQVUsb0RBQVE7QUFDcEQsT0FBTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QUNIO0FBQ0c7OztBQUd0Qzs7QUFFQSxpQkFBaUIsa0RBQU07O0FBRXZCLGlCQUFpQiwrQ0FBTzs7QUFFeEIsaUJBQWlCLGtEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQWZ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQmVmb3JlL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvZ2VuZXJhbC9nZW5lcmFsX19qcy9fYWxlcnQuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvZ2VuZXJhbC9nZW5lcmFsX19qcy9fdGFibGUuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvZ2VuZXJhbC9nZW5lcmFsX19qcy9wdWItc3ViLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tbm90ZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L19fc2lkZS9kaXNwbGF5X19zaWRlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbWFpbi1wdWItc3ViLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL19fZm9ybS9tb2RhbF9fZm9ybS1ub3RlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9fX2Zvcm0vbW9kYWxfX2Zvcm0tdGFzay5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL19fc2VhcmNoL21vZGFsX19zZWFyY2guanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9fX3NpZGUvbW9kYWxfX3NpZGUuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGVuZE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTYXQgU2VwIDA2IDIwMTQgMjM6NTk6NTkuOTk5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBlbmQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gU3VuIFNlcCAwNyAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gLTcgOiAwKSArIDYgLSAoZGF5IC0gd2Vla1N0YXJ0c09uKTtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0FmdGVyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGFmdGVyIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGFmdGVyIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0FmdGVyKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBZnRlcihkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGJlZm9yZSB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYmVmb3JlIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0JlZm9yZShkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIDwgZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwibGV0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIilcblxubGV0IGRpdkludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaXZJbnQuY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9fZGl2LWRlY29yYXRpb24tLWludGVyaW9yXCIpO1xubGV0IGRpdkV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmRpdkV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX19kaXYtZGVjb3JhdGlvbi0tZXh0ZXJpb3JcIik7XG5cbmxldCBkaXZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuZGl2VGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX19kaXYtLXRleHRcIilcblxubGV0IGNyZWF0ZWRCeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNyZWF0ZWRCeVRleHQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZWQgYnkgQmVydG1vc3NcIjtcbmNyZWF0ZWRCeVRleHQuY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9fdGV4dFwiKTtcblxuZGl2VGV4dC5hcHBlbmRDaGlsZChjcmVhdGVkQnlUZXh0KTtcbmRpdkV4dC5hcHBlbmRDaGlsZChkaXZJbnQpXG5mb290ZXIuYXBwZW5kQ2hpbGQoZGl2RXh0KTtcbmZvb3Rlci5hcHBlbmRDaGlsZChkaXZUZXh0KTtcblxuZXhwb3J0IHtmb290ZXJ9ICIsImZ1bmN0aW9uIGNyZWF0ZUFsZXJ0KHRleHQpIHtcbiAgbGV0IGFsZXJ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBhbGVydERpdi5jbGFzc0xpc3QuYWRkKFwiYWxlcnRcIilcbiAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcImFsZXJ0X19jbG9zZS1idG5cIikgXG5cbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhbGVydERpdi5yZW1vdmUoKTtcbiAgfSlcbiAgYWxlcnREaXYuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICBsZXQgYWxlcnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFsZXJ0VGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGFsZXJ0RGl2LmFwcGVuZENoaWxkKGFsZXJ0VGV4dClcbiAgXG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoYWxlcnREaXYpO1xuICByZXR1cm4gYWxlcnREaXY7XG59XG5leHBvcnQge2NyZWF0ZUFsZXJ0fSIsImZ1bmN0aW9uIGNyZWF0ZUJhc2ljSW5wdXQoY2xhc3NOYW1lLCB0eXBlLCBpbnB1dE5hbWUsIGlkKSB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGlucHV0TmFtZSk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0QXJlYShjbGFzc05hbWUsIGlucHV0TmFtZSwgaWQpIHtcbiAgbGV0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgaW5wdXROYW1lKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICByZXR1cm4gdGV4dEFyZWE7XG59IFxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChpbnB1dCwgdGV4dCkge1xuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19sYWJlbFwiKVxuICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk7XG4gIHJldHVybiBsYWJlbDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kTGFiZWxJbnB1dChmb3JtLCBsYWJlbCwgaW5wdXQpIHtcbiAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSYWRpb0lucHV0KHByaW9yaXR5TGV2ZWwsIGNsYXNzTmFtZSkge1xuICBsZXQgcmFkaW8gPSBjcmVhdGVCYXNpY0lucHV0KFxuICAgIGNsYXNzTmFtZSxcbiAgICBcInJhZGlvXCIsXG4gICAgXCJwcmlvcml0eVwiLFxuICAgIGBwcmlvcml0eS0ke3ByaW9yaXR5TGV2ZWx9YFxuICApO1xuICByYWRpby5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcmlvcml0eUxldmVsKTtcbiAgcmV0dXJuIHJhZGlvO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRSYWRpb0lucHV0cyhwYXJlbnQsIGFycmF5KSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgbGV0IGxhYmVsID0gY3JlYXRlTGFiZWwoZWxlbWVudCwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlQmFzaWNJbnB1dCwgY3JlYXRlTGFiZWwsIGFwcGVuZExhYmVsSW5wdXQsIGNyZWF0ZVJhZGlvSW5wdXQsIGFwcGVuZFJhZGlvSW5wdXRzLCBjcmVhdGVUZXh0QXJlYX0iLCJmdW5jdGlvbiBjcmVhdGVUYWJsZShvYmosIHBhcmVudCkge1xuICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gIHRhYmxlLnNldEF0dHJpYnV0ZShcImNlbGxzcGFjaW5nXCIsIFwiMFwiKTtcbiAgdGFibGUuc2V0QXR0cmlidXRlKFwiY2VsbHBhZGRpbmdcIiwgXCIwXCIpO1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmopKSB7XG4gICAgbGV0IHJvdztcbiAgICBpZiAoa2V5ID09IFwidHlwZVwiIHx8IGtleSA9PT0gXCJpZFwiIHx8IGtleSA9PSBcInByb2plY3RcIiB8fCBrZXkgPT0gXCJzdGF0dXNcIikge1xuICAgICAgY29udGludWU7XG4gICAgfSBlbHNlIGlmIChrZXkgPT0gXCJkYXRlXCIpIHtcbiAgICAgIGxldCBkYXRlID0gdmFsdWUuc3BsaXQoXCItXCIpLnJldmVyc2UoKS5qb2luKFwiLVwiKTtcbiAgICAgIHJvdyA9IGNyZWF0ZVJvdyhrZXksIGRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3cgPSBjcmVhdGVSb3coa2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbiAgcmV0dXJuIHBhcmVudC5hcHBlbmRDaGlsZCh0YWJsZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdyhrZXksIHZhbHVlKSB7XG4gIGxldCB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgbGV0IHRhYmxlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgbGV0IGtleURpc3BsYXkgPSBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEsKTtcbiAgdGFibGVIZWFkaW5nLnRleHRDb250ZW50ID0ga2V5RGlzcGxheTtcbiAgbGV0IHRhYmxlRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgdGFibGVEYXRhLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIGlmIChrZXkgPT0gXCJwcmlvcml0eVwiKSB7XG4gICAgdGFibGVEYXRhLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZm9udC1zaXplOjBweFwiKVxuICAgIGxldCBpID0gMDtcbiAgICBsZXQgbjtcbiAgICBzd2l0Y2godmFsdWUpIHtcbiAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgbiA9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICBuID0gMiAgIFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJoaWdoXCI6IFxuICAgICAgICBuID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHdoaWxlICggaSA8IG4gKSB7XG4gICAgICBsZXQgcHJpb3JpdHlEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIHByaW9yaXR5RGlzcGxheS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJ1cmwoLi4vLi4vLi4vc3JjL2dlbmVyYWwvaW1hZ2VzL3N2Zy1zdGFyLS1yZWQuc3ZnXCIpO1xuICAgICAgdGFibGVEYXRhLmFwcGVuZENoaWxkKHByaW9yaXR5RGlzcGxheSk7XG4gICAgICBpKytcbiAgICB9XG4gICAgXG4gIH1cbiAgYXNzaWduQ2xhc3Moa2V5LCB0YWJsZURhdGEpO1xuICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0YWJsZUhlYWRpbmcpO1xuICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0YWJsZURhdGEpO1xuICByZXR1cm4gdGFibGVSb3c7XG59XG5mdW5jdGlvbiBhc3NpZ25DbGFzcyhrZXksIGVsZW1lbnQpIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlIFwidGl0bGVcIjpcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhYmxlX190ZC0tdGl0bGVcIiwgXCJ0YWJsZV9fdGRcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZGV0YWlsc1wiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3RkLS1kZXRhaWxzXCIsIFwidGFibGVfX3RkXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRhdGVcIjpcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhYmxlX190ZC0tZGF0ZVwiLCBcInRhYmxlX190ZFwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwcmlvcml0eVwiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3RkLS1wcmlvcml0eVwiLCBcInRhYmxlX190ZFwiKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRhYmxlLCB9OyIsIlxuXG5mdW5jdGlvbiBwdWJTdWJGYWN0b3J5KCkge1xuICBjb25zdCBzdWJzY3JpYmVycyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICBjb25zdCBpbmRleCA9IHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ubGVuZ3RoIC0gMTtcblxuICAgIHJldHVybiB7XG4gICAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgc3Vic2NyaWJlLFxuICAgIHB1Ymxpc2gsXG4gICAgXG4gIH07XG59XG5cbmV4cG9ydCB7cHViU3ViRmFjdG9yeSB9O1xuIiwiXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfX3RpdGxlXCIpO1xudGl0bGUudGV4dENvbnRlbnQgPSBcIkp1c3QgRG8gSXRcIjtcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcblxuaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIiwgXCJib2R5X19oZWFkZXJcIik7XG5cbmhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbmV4cG9ydCB7IGhlYWRlciB9IDsiLCJpbXBvcnQge2NyZWF0ZVRhYmxlfSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9fdGFibGVcIlxuaW1wb3J0IHtjcmVhdGVCYXNpY0lucHV0LCBjcmVhdGVUZXh0QXJlYX0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCJcbmltcG9ydCB7ZGlzcGxheU1vZH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiXG5cblxubGV0IG5vdGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm5vdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIsXCJkaXNwbGF5X19jb250YWluZXItbm90ZVwiKTtcblxubGV0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5mdW5jdGlvbiBzdWJzY3JpYmVOb3RlKG9iaikge1xuICBub3RlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJub3RlLWNvbnRhaW5lclwiKTtcbiAgLy9Ob3RlLURpdlxuICBsZXQgbm90ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5vdGVEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBvYmouaWQpO1xuICBub3RlRGl2LmNsYXNzTGlzdC5hZGQoXCJub3RlLWRpdlwiKVxuICAvL05vdGUtRGl2X19CdG4tRGl2XG4gIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidG5EaXYuY2xhc3NMaXN0LmFkZChcIm5vdGUtZGl2X19idG4tZGl2XCIpO1xuICAvL0J0bi1EaXZfX0RsdC1CdG5cbiAgbGV0IGRsdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRsdEJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICBkbHRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgZGx0QnRuLmNsYXNzTGlzdC5hZGQoXCJidG4tZGl2X19kbHQtYnRuXCIpO1xuICBkbHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvYmoucmVtb3ZlKCk7XG4gIH0pO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoZGx0QnRuKTtcbiAgbm90ZURpdi5hcHBlbmRDaGlsZChidG5EaXYpO1xuICBcblxuICAvL0J0bi1EaXZfX0VkaXQtQnRuXG4gIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICBlZGl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImJ0bi1kaXZfX2VkaXQtYnRuXCIpO1xuXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgdGFibGVEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGAuZGlzcGxheV9fY29udGFpbmVyLW5vdGUgW2RhdGEtaWQ9XCIke29iai5pZH1cIl0gLnRhYmxlX190ZGBcbiAgICApO1xuICAgIHRhYmxlRGF0YS5mb3JFYWNoKGZ1bmN0aW9uICh0ZCkge1xuICAgICAgbGV0IGVkaXRJbnB1dDtcbiAgICAgIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZV9fdGQtLXRpdGxlXCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gICAgICAgICAgXCJ0YWJsZV9fZWRpdC1pbnB1dFwiLFxuICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgIFwidGl0bGVcIixcbiAgICAgICAgICBcImVkaXQtdGl0bGVcIlxuICAgICAgICApO1xuICAgICAgICBlZGl0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgb2JqLnRpdGxlKTtcbiAgICAgIH0gZWxzZSBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS1kZXRhaWxzXCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGNyZWF0ZVRleHRBcmVhKFxuICAgICAgICAgIFwidGFibGVfX2VkaXQtaW5wdXRcIixcbiAgICAgICAgICBcImRldGFpbHNcIixcbiAgICAgICAgICBcImVkaXQtZGV0YWlsc1wiXG4gICAgICAgICk7XG4gICAgICAgIGVkaXRJbnB1dC50ZXh0Q29udGVudCA9IG9iai5kZXRhaWxzO1xuICAgICAgfSBcbiAgICAgIHRkLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVkaXRJbnB1dCwgdGQpO1xuICAgIH0pO1xuXG4gICAgLyogTm90ZS1kaXZfX1N1Ym1pdC1FZGl0LUJ0biAqL1xuICAgIGxldCBzdWJtaXRDaGFuZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGUtZGl2X19zdWJtaXQtZWRpdC1idG5cIik7XG4gICAgaWYgKCFzdWJtaXRDaGFuZ2VCdG4pIHtcbiAgICAgIHN1Ym1pdENoYW5nZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzdWJtaXRDaGFuZ2VCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgc3VibWl0Q2hhbmdlQnRuLmNsYXNzTGlzdC5hZGQoXCJub3RlLWRpdl9fc3VibWl0LWVkaXQtYnRuXCIsIFwicC1ub3RlLWRpdl9fc3VibWl0LWVkaXQtYnRuXCIpO1xuICAgIH1cblxuICAgIHN1Ym1pdENoYW5nZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGV0IGVkaXRlZElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIgLnRhYmxlX19lZGl0LWlucHV0XCIpO1xuICAgICAgZWRpdGVkSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG9iailcbiAgICAgICAgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT0gXCJ0aXRsZVwiKSB7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPT0gXCJcIiA/ICBvYmoudGl0bGUgOiAob2JqLnRpdGxlID0gaW5wdXQudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT0gXCJkZXRhaWxzXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSlcbiAgICAgICAgICBvYmouZGV0YWlscyA9IGlucHV0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHN1Ym1pdENoYW5nZUJ0bi5yZW1vdmUoKTtcbiAgICAgIGRpc3BsYXlNb2QudXBkYXRlTm90ZXMoKTtcbiAgICB9KTtcbiAgICBub3RlRGl2LmFwcGVuZENoaWxkKHN1Ym1pdENoYW5nZUJ0bik7XG4gIH0pO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIFxuICBjcmVhdGVUYWJsZShvYmosIG5vdGVEaXYpXG4gIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZURpdilcbiAgbm90ZURpc3BsYXkuYXBwZW5kQ2hpbGQobm90ZUNvbnRhaW5lcik7XG59XG5cblxuXG5mdW5jdGlvbiBzdWJSbXZOb3RlRGlzcGxheSgpIHtcbiAgd2hpbGUgKG5vdGVDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIG5vdGVDb250YWluZXIucmVtb3ZlQ2hpbGQobm90ZUNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICB9XG59XG5cblxuXG5cbmV4cG9ydCB7c3Vic2NyaWJlTm90ZSwgc3ViUm12Tm90ZURpc3BsYXksIG5vdGVEaXNwbGF5fSIsImltcG9ydCB7IGRpc3BsYXlNb2QgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQgeyBjcmVhdGVCYXNpY0lucHV0IH0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCI7XG5pbXBvcnQgeyBjcmVhdGVUYWJsZSB9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL190YWJsZVwiO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBjcmVhdGVBbGVydCB9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19hbGVydFwiO1xuXG5jb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFxuICBcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIixcbiAgXCJkaXNwbGF5X19jb250YWluZXItcHJvamVjdFwiXG4pO1xuXG5sZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKVxuXG5cblxuZnVuY3Rpb24gc3Vic2NyaWJlUHJvamVjdChvYmopIHtcbiAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgb2JqLmlkKTtcbiAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kaXZcIiwgXCJwLXByb2plY3QtY29udGFpbmVyX19wcm9qZWN0LWRpdlwiKTtcbiAgbGV0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kaXZfX2J0bi1kaXZcIilcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChidG5EaXYpXG4gIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJwLWJ0bi1kaXZfX2hlYWRpbmdcIilcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAvKiBkZWxldGUgYnV0dG9uICovXG4gIGlmIChvYmouaWQgIT09IDEpIHtcbiAgICAvL2V4ZW1wdGlvbiBmb3IgdGhlIGdlbmVyYWwgcHJvamVjdFxuICAgIGxldCBkbHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRsdEJ0bi50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XG4gICAgZGx0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgZGx0QnRuLmNsYXNzTGlzdC5hZGQoXCJidG4tZGl2X19kbHQtYnRuXCIpXG4gICAgZGx0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAob2JqLnRhc2tJZEFyci5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBhbGVydCA9IGNyZWF0ZUFsZXJ0KFxuICAgICAgICAgIFwiVGhlcmUgc2VlbSB0byBiZSBzb21lIHVuZmluaXNoZWQgdGFza3MgaW4gdGhpcyBwcm9qZWN0LiBBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gZGVsZXRlIGl0P1wiXG4gICAgICAgICk7XG4gICAgICAgIGxldCB5ZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB5ZXNCdG4udGV4dENvbnRlbnQgPSBcIlllc1wiO1xuICAgICAgICB5ZXNCdG4uY2xhc3NMaXN0LmFkZChcImFsZXJ0X195ZXMtYnRuXCIpXG4gICAgICAgIHllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIG9iai5yZW1vdmVCeVByb2plY3QoKTtcbiAgICAgICAgICBvYmoucmVtb3ZlKCk7XG4gICAgICAgICAgYWxlcnQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBhbGVydC5hcHBlbmRDaGlsZCh5ZXNCdG4pO1xuICAgICAgICBsZXQgbm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBub0J0bi50ZXh0Q29udGVudCA9IFwiTm9cIjtcbiAgICAgICAgbm9CdG4uY2xhc3NMaXN0LmFkZChcImFsZXJ0X19uby1idG5cIilcbiAgICAgICAgbm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBhbGVydC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFsZXJ0LmFwcGVuZENoaWxkKG5vQnRuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgb2JqLnJlbW92ZSgpXG5cbiAgICAgICAgb2JqLnJlbW92ZUJ5UHJvamVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChkbHRCdG4pO1xuICB9XG5cbiAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKG9iai50aXRsZSwgXCJ0YXNrLWxpc3RcIiwgXCJwLXRhc2stZGl2X190YXNrLWxpc3RcIik7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAvKiBwcm9qZWN0RGlzcGxheS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTsgKi9cbiAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcilcbiAgZGlzcGxheU1vZC51cGRhdGUoKTtcbiAgY29uc29sZS5sb2coZGlzcGxheU1vZClcbn1cblxuZnVuY3Rpb24gc3ViUm12UHJvamVjdERpc3BsYXkoKSB7XG4gIHdoaWxlIChwcm9qZWN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIubGFzdENoaWxkKTtcbiAgfVxufVxuXG4vKiBSZW1vdmVzIFRhc2tzIEl0ZW1zIHdoZW4gKi9cbmZ1bmN0aW9uIHN1YlJtdlRhc2tzKCkge1xuICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stbGlzdFwiKTtcbiAgdGFza0xpc3QuZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICB3aGlsZSAobGlzdEl0ZW0uZmlyc3RDaGlsZCkge1xuICAgICAgbGlzdEl0ZW0ucmVtb3ZlQ2hpbGQobGlzdEl0ZW0ubGFzdENoaWxkKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdWJUYXNrTGlzdEl0ZW0ob2JqKSB7XG4gIGNvbnNvbGUubG9nKG9iaik7XG4gIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBvYmoucHJvamVjdCk7XG5cbiAgaWYgKHRhc2tMaXN0KSB7XG4gICAgdGFza0xpc3Quc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBvYmouaWQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBjb21wbGV0ZUlucHV0ID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgICBcInByb2plY3QtZGl2X19kb25lLWlucHV0XCIsXG4gICAgXCJjaGVja2JveFwiLFxuICAgIFwiY29tcGxldGUtaW5wdXRcIixcbiAgICBcImNvbXBsZXRlLWlucHV0XCJcbiAgKTsgXG4gIGNvbXBsZXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcInAtcHJvamVjdC1kaXZfX2RvbmUtaW5wdXRcIilcbiAgLy9maW5pc2hlZCBjaGVja2JveFxuICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpc3RJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtbGktaWRcIiwgb2JqLmlkKTtcbiAgY29tcGxldGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9iai5jb21wbGV0ZSgpO1xuICAgIG9iai5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiID8gb2JqLnJlbW92ZVRhc2tGcm9tUHJvamVjdElkQXJyKCkgOiBvYmoucHVzaElkKCk7XG4gICAgbGV0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgbGlbZGF0YS1saS1pZCA9IFwiJHtvYmouaWR9XCJdIHRoLGxpW2RhdGEtbGktaWQgPSBcIiR7b2JqLmlkfVwiXSB0ZGBcbiAgICApO1xuICAgIHRhc2tUYWJsZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZVwiKTtcbiAgICB9KTtcbiAgfSk7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNvbXBsZXRlSW5wdXQpO1xuICBjcmVhdGVUYWJsZShvYmosIGxpc3RJdGVtKTtcblxuICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBoaWRkZW5Sb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGBsaVtkYXRhLWxpLWlkID0gXCIke29iai5pZH1cIl0gdHI6bm90KDpmaXJzdC1jaGlsZClgXG4gICAgKTtcbiAgICBoaWRkZW5Sb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgbGV0IGhpZGRlblJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stbGlzdCB0cjpub3QoOmZpcnN0LWNoaWxkKVwiKTtcbiAgaGlkZGVuUm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICByb3cuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7XG4gIHN1YnNjcmliZVByb2plY3QsXG4gIHByb2plY3REaXNwbGF5LFxuICBzdWJUYXNrTGlzdEl0ZW0sXG4gIHN1YlJtdlByb2plY3REaXNwbGF5LFxuICBzdWJSbXZUYXNrcyxcbiAgLyogZ2VuZXJhdGVQcm9qZWN0RGlzcGxheSAqL1xufTtcbiIsImltcG9ydCB7IGRpc3BsYXlNb2QgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQgeyBjcmVhdGVUYWJsZSB9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL190YWJsZVwiO1xuXG5pbXBvcnQge1xuICBjcmVhdGVSYWRpb0lucHV0LFxuICBhcHBlbmRSYWRpb0lucHV0cyxcbiAgY3JlYXRlQmFzaWNJbnB1dCxcbiAgY3JlYXRlVGV4dEFyZWEsXG59IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuaW1wb3J0IHsgZW5kT2ZXZWVrLCBpc0FmdGVyLCBpc0JlZm9yZSwgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcbiAgXCJkaXNwbGF5X19jb250YWluZXItdGFza1wiXG4pO1xuXG5cbi8qIFNPUlQgQlVUVE9OICovXG5sZXQgc3J0Q3BsdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zcnRDcGx0RGl2LmNsYXNzTGlzdC5hZGQoXCJzcnQtY3BsdC1kaXZcIiwgXCJwLWNvbnRhaW5lci10YXNrX19zcnQtY3BsdC1kaXZcIik7XG5sZXQgc29ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5zb3J0LmNsYXNzTGlzdC5hZGQoXCJzcnQtY3BsdC1kaXZfX3NydC1idG5cIixcInAtc3J0LWNwbHQtZGl2X19zcnQtYnRuXCIpXG5sZXQgc29ydFBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbnNvcnRQbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbnNvcnRQbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbnNvcnRQbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIiBcIik7XG5zb3J0UGxhY2Vob2xkZXIudGV4dENvbnRlbnQgPSBcIlNvcnRcIjtcbnNvcnQuYXBwZW5kQ2hpbGQoc29ydFBsYWNlaG9sZGVyKTtcblxubGV0IHNvcnRQcmlvcml0eURlc2NlbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG5zb3J0UHJpb3JpdHlEZXNjZW5kaW5nLnRleHRDb250ZW50ID0gXCJNb3N0IEltcG9ydGFudFwiO1xuc29ydFByaW9yaXR5RGVzY2VuZGluZy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm1vc3RcIik7XG5cbmxldCBzb3J0UHJpb3JpdHlBc2NlbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG5zb3J0UHJpb3JpdHlBc2NlbmRpbmcudGV4dENvbnRlbnQgPSBcIkxlYXN0IEltcG9ydGFudFwiO1xuc29ydFByaW9yaXR5QXNjZW5kaW5nLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibGVhc3RcIik7XG5cbmxldCBzb3J0RGF0ZUFzY2VuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5zb3J0RGF0ZUFzY2VuZGluZy50ZXh0Q29udGVudCA9IFwiRGF0ZSAoQXNjZW5kaW5nKVwiO1xuc29ydERhdGVBc2NlbmRpbmcuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJkYXRlLWFzY2VuZGluZ1wiKTtcblxubGV0IHNvcnREYXRlRGVzY2VuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5zb3J0RGF0ZURlc2NlbmRpbmcudGV4dENvbnRlbnQgPSBcIkRhdGUgKERlc2NlbmRpbmcpXCI7XG5zb3J0RGF0ZURlc2NlbmRpbmcuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJkYXRlLWRlc2NlbmRpbmdcIik7XG5cbnNvcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1jb250YWluZXItLXNydC1kYXRlXCIpXG4gIGRpc3BsYXlNb2QudXBkYXRlU29ydGVkKHNvcnQudmFsdWUpXG59KTtcblxuc29ydC5hcHBlbmRDaGlsZChzb3J0UHJpb3JpdHlEZXNjZW5kaW5nKTtcbnNvcnQuYXBwZW5kQ2hpbGQoc29ydFByaW9yaXR5QXNjZW5kaW5nKTtcbnNvcnQuYXBwZW5kQ2hpbGQoc29ydERhdGVBc2NlbmRpbmcpO1xuc29ydC5hcHBlbmRDaGlsZChzb3J0RGF0ZURlc2NlbmRpbmcpO1xuc3J0Q3BsdERpdi5hcHBlbmRDaGlsZChzb3J0KTtcbnRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKHNydENwbHREaXYpO1xuXG4vKiBDb21wbGV0ZSBEaXNwbGF5IGJ1dHRvbiAqL1xuLy9jb25zdCBjb21wbGV0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBjb21wbGV0ZURpc3BsYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29tcGxldGVEaXNwbGF5QnRuLmNsYXNzTGlzdC5hZGQoXCJzcnQtY3BsdC1kaXZfX2NwbHQtYnRuXCIsIFwicC1zcnQtY3BsdC1kaXZfX2NwbHQtYnRuXCIpXG5jb21wbGV0ZURpc3BsYXlCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmNvbXBsZXRlRGlzcGxheUJ0bi50ZXh0Q29udGVudCA9IFwiQ09NUExFVEVcIjsgXG5jb21wbGV0ZURpc3BsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGlzcGxheU1vZC51cGRhdGVDb21wbGV0ZSgpXG59KTtcbnNydENwbHREaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVEaXNwbGF5QnRuKTtcbi8vdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoY29tcGxldGVEaXYpO1xuXG4vKiBUQVNLIENPTlRBSU5FUiAqL1xuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKVxudGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIHByaW9yaXR5Q29sb3JTd2l0Y2goZWxlbWVudCwgb2JqKSB7XG4gIHN3aXRjaCAob2JqLnByaW9yaXR5KSB7XG4gICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWhpZ2hcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1tZWRpdW1cIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibG93XCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1sb3dcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIHN1YkNvbXBsZXRlVGFzayhvYmopIHtcbiAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRpdlwiKVxuICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgb2JqLmlkKTtcbiAgLy9CdG4gRGl2IFxuICBsZXQgYnRuQ3BsdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ0bkNwbHREaXYuY2xhc3NMaXN0LmFkZChcInRhc2stZGl2X19idG4tZGl2XCIpO1xuICBsZXQgY29tcGxldGVJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gICAgXCJidG4tZGl2X19kb25lLWlucHV0XCIsXG4gICAgXCJjaGVja2JveFwiLFxuICAgIFwiY29tcGxldGUtaW5wdXRcIixcbiAgICBcImNvbXBsZXRlLWlucHV0XCJcbiAgKTtcbiAgY29tcGxldGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuICBjb21wbGV0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb2JqLmNvbXBsZXRlKCk7XG4gICAgbGV0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgZGl2W2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGgsIGRpdltkYXRhLWlkPVwiJHtvYmouaWR9XCJdIHRkYFxuICAgICk7XG4gICAgdGFza1RhYmxlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuICAgIH0pO1xuICB9KTtcbiAgYnRuQ3BsdERpdi5hcHBlbmRDaGlsZChjb21wbGV0ZUlucHV0KTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChidG5DcGx0RGl2KTtcbiAgY3JlYXRlVGFibGUob2JqLCB0YXNrRGl2KTtcblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICBsZXQgYWxsUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0aCwgdGRcIik7XG4gIGFsbFJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmliZVRhc2sob2JqKSB7XG4gIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG9iai5pZCk7XG5cbiAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRhdGVcIiwgb2JqLmRhdGUpO1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRpdlwiKVxuICBwcmlvcml0eUNvbG9yU3dpdGNoKHRhc2tEaXYsIG9iaik7XG4gIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidG5EaXYuY2xhc3NMaXN0LmFkZChcInRhc2stZGl2X19idG4tZGl2XCIpXG4gIGxldCBzaWRlQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZUJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiYnRuLWRpdl9fc2lkZS1kaXZcIilcblxuXG5cbiAgLyogQ29tcGxldGUgY2hlY2tib3ggKi9cbiAgbGV0IGNvbXBsZXRlSW5wdXQgPSBjcmVhdGVCYXNpY0lucHV0KFxuICAgIFwiYnRuLWRpdl9fZG9uZS1pbnB1dFwiLFxuICAgIFwiY2hlY2tib3hcIixcbiAgICBcImNvbXBsZXRlLWlucHV0XCIsXG4gICAgXCJjb21wbGV0ZS1pbnB1dFwiXG4gICk7XG4gIFxuICBjb21wbGV0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb2JqLmNvbXBsZXRlKCk7XG4gICAgb2JqLnN0YXR1cyA9PSBcImNvbXBsZXRlXCIgPyBvYmoucmVtb3ZlVGFza0Zyb21Qcm9qZWN0SWRBcnIoKSA6IG9iai5wdXNoSWQoKTtcbiAgICBsZXQgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGBkaXZbZGF0YS1pZD1cIiR7b2JqLmlkfVwiXSB0aCwgZGl2W2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGRgXG4gICAgKTtcblxuICAgIHRhc2tUYWJsZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZVwiKTtcbiAgICB9KTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xuXG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChjb21wbGV0ZUlucHV0KTtcblxuICAvKkVESVQgQlVUVE9OKi9cblxuICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLWRpdl9fZWRpdC1idG5cIilcbiAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXG5cbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBsZXQgdGFibGVEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGAuZGlzcGxheV9fY29udGFpbmVyLXRhc2sgW2RhdGEtaWQ9XCIke29iai5pZH1cIl0gLnRhYmxlX190ZGBcbiAgICApO1xuICAgIC8vbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGFibGVgKSAvL0RvIEkgcmVhbGx5IG5lZWQgdGhpcz9cbiAgICB0YWJsZURhdGEuZm9yRWFjaChmdW5jdGlvbiAodGQpIHtcbiAgICAgIGxldCBlZGl0SW5wdXQ7XG5cbiAgICAgIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZV9fdGQtLXRpdGxlXCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gICAgICAgICAgXCJ0YWJsZV9fZWRpdC1pbnB1dFwiLFxuICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgIFwidGl0bGVcIixcbiAgICAgICAgICBcImVkaXQtdGl0bGVcIlxuICAgICAgICApO1xuICAgICAgICBlZGl0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgb2JqLnRpdGxlKTtcbiAgICAgIH0gZWxzZSBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS1kZXRhaWxzXCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGNyZWF0ZVRleHRBcmVhKFxuICAgICAgICAgIFwidGFibGVfX2VkaXQtaW5wdXRcIixcbiAgICAgICAgICBcImRldGFpbHNcIixcbiAgICAgICAgICBcImVkaXQtZGV0YWlsc1wiXG4gICAgICAgICk7XG4gICAgICAgIGVkaXRJbnB1dC50ZXh0Q29udGVudCA9IG9iai5kZXRhaWxzO1xuICAgICAgfSBlbHNlIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZV9fdGQtLWRhdGVcIikpIHtcbiAgICAgICAgZWRpdElucHV0ID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgICAgICAgICBcInRhYmxlX19lZGl0LWlucHV0XCIsXG4gICAgICAgICAgXCJkYXRlXCIsXG4gICAgICAgICAgXCJkYXRlXCIsXG4gICAgICAgICAgXCJlZGl0LWRhdGVcIlxuICAgICAgICApO1xuICAgICAgICBlZGl0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgb2JqLmRhdGUpO1xuICAgICAgfSBlbHNlIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZV9fdGQtLXByaW9yaXR5XCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgICAgICAgZWRpdElucHV0LmNsYXNzTGlzdC5hZGQoXCJlZGl0X19maWVsZHNldFwiKVxuICAgICAgICBsZXQgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbiAgICAgICAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICAgICAgICBlZGl0SW5wdXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcbiAgICAgICAgbGV0IGxvdyA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJsb3dcIiwgXCJlZGl0X19pbnB1dC0tcmFkaW9cIik7XG4gICAgICAgIGxldCBtZWRpdW0gPSBjcmVhdGVSYWRpb0lucHV0KFwibWVkaXVtXCIsIFwiZWRpdF9faW5wdXQtLXJhZGlvXCIpO1xuICAgICAgICBsZXQgaGlnaCA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJoaWdoXCIsIFwiZWRpdF9faW5wdXQtLXJhZGlvXCIpO1xuICAgICAgICBhcHBlbmRSYWRpb0lucHV0cyhlZGl0SW5wdXQsIFtsb3csIG1lZGl1bSwgaGlnaF0pO1xuICAgICAgfVxuXG4gICAgICB0ZC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlZGl0SW5wdXQsIHRkKTtcbiAgICB9KTtcbiAgICAvKiBTVUJNSVQgQ0hBTkdFUyBCVE4gKi9cbiAgICBsZXQgc3VibWl0Q2hhbmdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtZWRpdC1idG5cIik7XG4gICAgaWYgKCFzdWJtaXRDaGFuZ2VCdG4pIHtcbiAgICAgIHN1Ym1pdENoYW5nZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzdWJtaXRDaGFuZ2VCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgc3VibWl0Q2hhbmdlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRpdl9fc3VibWl0LWVkaXQtYnRuXCIsIFwicC10YXNrLWRpdl9fc3VibWl0LWVkaXQtYnRuXCIpO1xuICAgIH1cblxuICAgIHN1Ym1pdENoYW5nZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgbGV0IGVkaXRlZElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIgLnRhYmxlX19lZGl0LWlucHV0XCIpO1xuICAgICAgZWRpdGVkSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpID09IFwidGl0bGVcIikge1xuICAgICAgICAgIGlucHV0LnZhbHVlID09IFwiXCIgPyAgb2JqLnRpdGxlIDogKG9iai50aXRsZSA9IGlucHV0LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpID09IFwiZGV0YWlsc1wiKSB7XG4gICAgICAgICAgb2JqLmRldGFpbHMgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpID09IFwiZGF0ZVwiKSB7XG4gICAgICAgICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZVByb2Nlc3NlZCA9IG5ldyBEYXRlKGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGRhdGVQcm9jZXNzZWQgPSBkYXRlUHJvY2Vzc2VkLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICAgICAgICAgICAgb2JqLmRhdGUgPSBkYXRlUHJvY2Vzc2VkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsZXQgZWRpdGVkUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmVkaXRfX2lucHV0LS1yYWRpbzpjaGVja2VkXCJcbiAgICAgICk7XG4gICAgICBlZGl0ZWRQcmlvcml0eUlucHV0ID09IG51bGxcbiAgICAgICAgPyBvYmoucHJpb3JpdHlcbiAgICAgICAgOiAob2JqLnByaW9yaXR5ID0gZWRpdGVkUHJpb3JpdHlJbnB1dC52YWx1ZSk7XG4gICAgICBzdWJtaXRDaGFuZ2VCdG4ucmVtb3ZlKCk7XG4gICAgICBkaXNwbGF5TW9kLnVwZGF0ZSgpO1xuICAgIH0pO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoc3VibWl0Q2hhbmdlQnRuKTtcbiAgfSk7XG4gIHNpZGVCdG5EaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cblxuICAvKiBERUxFVEUgQlVUVE9OICovXG4gIGxldCBkbHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkbHRCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICBkbHRCdG4uY2xhc3NMaXN0LmFkZChcImJ0bi1kaXZfX2RsdC1idG5cIilcbiAgZGx0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGRsdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9iai5yZW1vdmUoKTtcbiAgICBvYmoucmVtb3ZlVGFza0Zyb21Qcm9qZWN0SWRBcnIoKTtcbiAgfSk7XG4gIFxuICBcbiAgc2lkZUJ0bkRpdi5hcHBlbmRDaGlsZChkbHRCdG4pO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoc2lkZUJ0bkRpdik7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcbiAgY3JlYXRlVGFibGUob2JqLCB0YXNrRGl2KTtcblxuICAvL0RhdGUgQXNjZW5kaW5nIERpc3BsYXlcbiAgaWYgKHNvcnQudmFsdWUgPT0gXCJkYXRlLWFzY2VuZGluZ1wiKSB7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXItLXNydC1kYXRlXCIpXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdOyAvKiBcbiAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlLnNwbGl0KFwiLVwiKS5yZXZlcnNlKCkuam9pbihcIi1cIik7ICovXG4gICAgbGV0IGxhc3RXZWVrRGF5ID0gZW5kT2ZXZWVrKG5ldyBEYXRlKCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xuXG4gICAgaWYgKHRhc2tEaXYuZ2V0QXR0cmlidXRlKFwiZGF0YS1kYXRlXCIpID09IFwiXCIpIHtcbiAgICAgIC8vaWYgZGF0ZSB3YXMgbm90IHByb3ZpZGVkXG4gICAgICBsZXQgbm9EYXRlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lcl9fZGl2LS1uby1kYXRlXCIpO1xuICAgICAgaWYgKCFub0RhdGVEaXYpIHtcbiAgICAgICAgbm9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbm9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lcl9fZGl2LS1uby1kYXRlXCIsIFwidGFzay1jb250YWluZXJfX2Rpdi0tc3J0LWRhdGVcIik7XG4gICAgICAgIGxldCBub0RhdGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBub0RhdGVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJVbmRhdGVkXCI7XG4gICAgICAgIG5vRGF0ZUhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImRpdi1zcnQtZGF0ZV9faDFcIik7XG4gICAgICAgIG5vRGF0ZURpdi5hcHBlbmRDaGlsZChub0RhdGVIZWFkaW5nKTtcbiAgICAgIH1cbiAgICAgIG5vRGF0ZURpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vRGF0ZURpdik7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGlzQmVmb3JlKFxuICAgICAgICBwYXJzZUlTTyh0YXNrRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtZGF0ZVwiKSksXG4gICAgICAgIHBhcnNlSVNPKGN1cnJlbnREYXRlKVxuICAgICAgKVxuICAgICkge1xuICAgICAgbGV0IG92ZXJkdWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyX19kaXYtLW92ZXJkdWVcIik7XG4gICAgICBpZiAoIW92ZXJkdWVEaXYpIHtcbiAgICAgICAgb3ZlcmR1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG92ZXJkdWVEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyX19kaXYtLW92ZXJkdWVcIixcInRhc2stY29udGFpbmVyX19kaXYtLXNydC1kYXRlXCIgKTtcbiAgICAgICAgbGV0IG92ZXJkdWVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBvdmVyZHVlSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiZGl2LXNydC1kYXRlX19oMVwiKTtcbiAgICAgICAgb3ZlcmR1ZUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk92ZXJkdWVcIjtcbiAgICAgICAgb3ZlcmR1ZURpdi5hcHBlbmRDaGlsZChvdmVyZHVlSGVhZGluZyk7XG4gICAgICB9XG4gICAgICBvdmVyZHVlRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgcmV0dXJuIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQob3ZlcmR1ZURpdik7XG4gICAgfSBlbHNlIGlmICh0YXNrRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtZGF0ZVwiKSA9PSBjdXJyZW50RGF0ZSkge1xuICAgICAgLy9pZiBkYXRlIGlzIHRvZGF5XG4gICAgICBsZXQgdG9kYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyX19kaXYtLXRvZGF5XCIpO1xuICAgICAgaWYgKCF0b2RheURpdikge1xuICAgICAgICB0b2RheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZGF5RGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lcl9fZGl2LS10b2RheVwiLCBcInRhc2stY29udGFpbmVyX19kaXYtLXNydC1kYXRlXCIpO1xuICAgICAgICBsZXQgdG9kYXlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB0b2RheUhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImRpdi1zcnQtZGF0ZV9faDFcIik7XG4gICAgICAgIHRvZGF5SGVhZGluZy50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICAgICAgdG9kYXlEaXYuYXBwZW5kQ2hpbGQodG9kYXlIZWFkaW5nKTtcbiAgICAgIH1cbiAgICAgIHRvZGF5RGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgcmV0dXJuIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlEaXYpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBpc0JlZm9yZShwYXJzZUlTTyh0YXNrRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtZGF0ZVwiKSksIGxhc3RXZWVrRGF5KVxuICAgICkge1xuICAgICAgbGV0IHdlZWtEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyX19kaXYtLXdlZWtcIik7XG4gICAgICBpZiAoIXdlZWtEaXYpIHtcbiAgICAgICAgd2Vla0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHdlZWtEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyX19kaXYtLXdlZWtcIiwgXCJ0YXNrLWNvbnRhaW5lcl9fZGl2LS1zcnQtZGF0ZVwiKTtcbiAgICAgICAgbGV0IHdlZWtIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB3ZWVrSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiZGl2LXNydC1kYXRlX19oMVwiKTtcbiAgICAgICAgd2Vla0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRoaXMgV2Vla1wiO1xuICAgICAgICB3ZWVrRGl2LmFwcGVuZENoaWxkKHdlZWtIZWFkaW5nKTtcbiAgICAgIH1cbiAgICAgIHdlZWtEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICByZXR1cm4gdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrRGl2KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgaXNBZnRlcihwYXJzZUlTTyh0YXNrRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtZGF0ZVwiKSksIGxhc3RXZWVrRGF5KVxuICAgICkge1xuICAgICAgbGV0IHVwY29taW5nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIudGFzay1jb250YWluZXJfX2Rpdi0tdXBjb21pbmdcIlxuICAgICAgKTtcbiAgICAgIGlmICghdXBjb21pbmdEaXYpIHtcbiAgICAgICAgdXBjb21pbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB1cGNvbWluZ0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJfX2Rpdi0tdXBjb21pbmdcIiwgXCJ0YXNrLWNvbnRhaW5lcl9fZGl2LS1zcnQtZGF0ZVwiKTtcbiAgICAgICAgbGV0IHVwY29taW5nSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgdXBjb21pbmdIZWFkaW5nLnRleHRDb250ZW50ID0gXCJVcGNvbWluZ1wiO1xuICAgICAgICB1cGNvbWluZ0hlYWRpbmcuY2xhc3NMaXN0LmFkZChcImRpdi1zcnQtZGF0ZV9faDFcIik7XG4gICAgICAgIHVwY29taW5nRGl2LmFwcGVuZENoaWxkKHVwY29taW5nSGVhZGluZyk7XG4gICAgICB9XG4gICAgICB1cGNvbWluZ0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHVwY29taW5nRGl2KTtcbiAgICB9XG4gIH1cblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xufVxuXG5mdW5jdGlvbiBzdWJSbXZUYXNrQ29udGFpbmVyKCkge1xuICB3aGlsZSAodGFza0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgc3Vic2NyaWJlVGFzaywgdGFza0Rpc3BsYXksIHN1YlJtdlRhc2tDb250YWluZXIsIHN1YkNvbXBsZXRlVGFzayB9O1xuIiwiXG5jb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xubmF2LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19uYXZcIiwgXCJwLWRpc3BsYXlfX25hdlwiKVxuY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbm5hdkxpc3QuY2xhc3NMaXN0LmFkZChcIm5hdl9fbGlzdFwiLCBcInAtbmF2X19saXN0XCIpXG5cblxuZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW0odGV4dCkge1xuICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJuYXZfX2xpc3QtaXRlbVwiLCBcInAtbmF2X19saXN0LWl0ZW1cIilcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKHNwYW4pO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKVxuICBcbiAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG5uYXYuYXBwZW5kQ2hpbGQobmF2TGlzdClcblxuXG5cblxuXG5cbmV4cG9ydCB7bmF2LCBjcmVhdGVMaXN0SXRlbX1cbiIsImltcG9ydCAqIGFzIHNpZGUgZnJvbSBcIi4vX19zaWRlL2Rpc3BsYXlfX3NpZGVcIjtcbmltcG9ydCB7IGRpc3BsYXlNb2QgfSBmcm9tIFwiLi4vbWFpbi1wdWItc3ViXCI7XG4vKiBEaXNwbGF5IENvbnRhaW5lcnMgKi9cbmltcG9ydCB7IHRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS10YXNrXCI7XG5pbXBvcnQgeyBub3RlRGlzcGxheSB9IGZyb20gXCIuL19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tbm90ZVwiO1xuaW1wb3J0IHsgcHJvamVjdERpc3BsYXkgfSBmcm9tIFwiLi9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3RcIjtcbmltcG9ydCB7IHNlYXJjaElucHV0IH0gZnJvbSBcIi4uL21vZGFsL19fc2VhcmNoL21vZGFsX19zZWFyY2hcIjtcblxuY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2lkZU5hdi5hcHBlbmRDaGlsZChzaWRlLm5hdik7XG5cbmxldCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lclwiKTtcbmxldCBkaXNwbGF5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaXNwbGF5Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGVudFwiKTtcblxuZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpc3BsYXkpO1xuZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQobm90ZURpc3BsYXkpO1xuZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpO1xuXG4vKiBTSE9VTEQgUkVGT1JNQVQgVEhJUyAqL1xuXG5jb25zdCBob21lID0gc2lkZS5jcmVhdGVMaXN0SXRlbShcIkhvbWVcIik7XG5ob21lLmNsYXNzTGlzdC5hZGQoXCJuYXZfX2xpc3QtaXRlbS0taG9tZVwiKTtcbmNvbnN0IHByb2plY3QgPSBzaWRlLmNyZWF0ZUxpc3RJdGVtKFwiUHJvamVjdHNcIik7XG5jb25zdCBub3RlID0gc2lkZS5jcmVhdGVMaXN0SXRlbShcIk5vdGVzXCIpO1xubm90ZS5jbGFzc0xpc3QuYWRkKFwibmF2X19saXN0LWl0ZW0tLW5vdGVcIik7XG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGlzcGxheU1vZC51cGRhdGUoKTtcbiAgbm90ZURpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1ub3RlLS1oaWRkZW5cIik7XG4gIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItcHJvamVjdC0taGlkZGVuXCIpO1xuICB0YXNrRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheV9fY29udGFpbmVyLXRhc2stLWhpZGRlblwiKTtcbn0pO1xuXG5ub3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gLyogIGRpc3BsYXlNb2QudXBkYXRlTm90ZXMoKTsgKi9cbiAgbm90ZURpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci1ub3RlLS1oaWRkZW5cIik7XG4gIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItcHJvamVjdC0taGlkZGVuXCIpO1xuICB0YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXRhc2stLWhpZGRlblwiKTtcbn0pO1xuXG5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRpc3BsYXlNb2QudXBkYXRlKCk7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG4gIGxldCBoaWRkZW5Sb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWxpc3QgdHI6bm90KDpmaXJzdC1jaGlsZClcIik7XG4gIGhpZGRlblJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0pO1xufSk7XG5cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG59KTtcblxuZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGVudCk7XG5kaXNwbGF5LmFwcGVuZENoaWxkKHNpZGVOYXYpO1xuZGlzcGxheS5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGFpbmVyKTtcblxuZXhwb3J0IHsgZGlzcGxheSB9O1xuIiwiaW1wb3J0IHsgY29tcGFyZUFzYywgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHB1YlN1YkZhY3RvcnkgfSBmcm9tIFwiLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9wdWItc3ViXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVOb3RlLCBzdWJSbXZOb3RlRGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1ub3RlXCI7XG5pbXBvcnQge1xuICBzdWJzY3JpYmVQcm9qZWN0LFxuICBzdWJUYXNrTGlzdEl0ZW0sXG4gIHN1YlJtdlByb2plY3REaXNwbGF5LFxuICBzdWJSbXZUYXNrcyxcbn0gZnJvbSBcIi4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3RcIjtcbmltcG9ydCB7XG4gIHN1YnNjcmliZVRhc2ssXG4gIHN1YlJtdlRhc2tDb250YWluZXIsXG4gIHN1YkNvbXBsZXRlVGFzayxcbn0gZnJvbSBcIi4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXRhc2tcIjtcbmltcG9ydCB7XG4gIHN1YlNlbGVjdFByb2plY3RJbnB1dCxcbiAgc3ViQ2xlYXJTZWxlY3RPcHRpb25zLFxufSBmcm9tIFwiLi9tb2RhbC9fX2Zvcm0vbW9kYWxfX2Zvcm0tdGFza1wiO1xuXG4vL1BVQlNVQiBPQkpcblxubGV0IHB1YlN1Yk5vdGVzID0gcHViU3ViRmFjdG9yeSgpO1xubGV0IHB1YlN1YlByb2plY3RzID0gcHViU3ViRmFjdG9yeSgpO1xubGV0IHB1YlN1YlRhc2tzID0gcHViU3ViRmFjdG9yeSgpO1xuXG5cbi8qIE9CSkVDVCBDTEFTUyAqL1xuLyogaG9sZHMgYW4gYXJyYXkgb2YgYWxsIHRoZSBvYmplY3RzLiBUaGUgb2JqSWRHZW4gaXMgdXNlZCB0byBhc3NpZ24gdW5pcXVlIGlkcyB0byBlYWNoIG9iaiAqL1xuY2xhc3MgT2JqZWN0QXJyQ2xhc3Mge1xuICBvYmpBcnIgPSBbXTtcbiAgb2JqSWRHZW4gPSAwO1xuXG4gIGdldCBvYmpBcnIoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqQXJyO1xuICB9XG5cbiAgc2V0IG9iakFycihhcnIpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwiTm90IGFuIGFycmF5XCIpO1xuICAgIH1cbiAgICByZXR1cm4gKHRoaXMub2JqQXJyID0gYXJyKTtcbiAgfVxuXG4gIHB1c2gob2JqKSB7XG4gICAgdGhpcy5vYmpBcnIucHVzaChvYmopO1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4KSB7XG4gICAgdGhpcy5vYmpBcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICBcbn1cblxuY2xhc3MgVGFza09iamVjdEFyckNsYXNzIGV4dGVuZHMgT2JqZWN0QXJyQ2xhc3Mge1xuICBjdXN0b21Tb3J0KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IFwibW9zdFwiKSB7XG4gICAgICB0aGlzLm9iakFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmNvdW50UHJpb3JpdHkoKSAtIGEuY291bnRQcmlvcml0eSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBcImxlYXN0XCIpIHtcbiAgICAgIHRoaXMub2JqQXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEuY291bnRQcmlvcml0eSgpIC0gYi5jb3VudFByaW9yaXR5KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09IFwiZGF0ZS1hc2NlbmRpbmdcIikge1xuICAgICAgdGhpcy5vYmpBcnIuc29ydChmdW5jdGlvbiAoYSxiKSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlQXNjKHBhcnNlSVNPKGEuZGF0ZSksIHBhcnNlSVNPKGIuZGF0ZSkpXG4gICAgICB9KTtcbiAgICB9ICBlbHNlIGlmICh2YWx1ZSA9PSBcImRhdGUtZGVzY2VuZGluZ1wiKSB7XG4gICAgICB0aGlzLm9iakFyci5zb3J0KGZ1bmN0aW9uIChhLGIpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVBc2MocGFyc2VJU08oYi5kYXRlKSwgcGFyc2VJU08oYS5kYXRlKSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSBcblxuXG5sZXQgcHJvamVjdHMgPSBuZXcgT2JqZWN0QXJyQ2xhc3MoKTtcbmxldCB0YXNrcyA9IG5ldyBUYXNrT2JqZWN0QXJyQ2xhc3MoKTtcbmxldCBub3RlcyA9IG5ldyBPYmplY3RBcnJDbGFzcygpO1xuXG5cbi8qIERJU1BMQVkgTU9ESUZJRVIgKi9cbi8vbmVlZCB0byBhZGQgbm90ZSB1cGRhdGUgbWFkZSBvdXQgb2YgY2xlYXIgYW5kIGRpc3BsYXlOb3Rlc1xuXG5cblxubGV0IGRpc3BsYXlNb2QgPSAoKCkgPT4geyBcbiAgZnVuY3Rpb24gX2NsZWFyKCkge1xuICAgIHB1YlN1YlRhc2tzLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgfVxuIGZ1bmN0aW9uIF9kaXNwbGF5VGFza3MoKSB7XG4gICAgdGFza3Mub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgaWYgKG9iamVjdC5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3QucHVibGlzaCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIF9jbGVhcigpO1xuICAgIF9kaXNwbGF5VGFza3MoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBfY2xlYXJOb3RlcygpIHtcbiAgICBwdWJTdWJOb3Rlcy5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBfZGlzcGxheU5vdGVzKCkge1xuICAgIG5vdGVzLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIG9iamVjdC5wdWJsaXNoKCk7XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU5vdGVzKCkge1xuICAgIF9jbGVhck5vdGVzKCk7XG4gICAgX2Rpc3BsYXlOb3RlcygpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NsZWFyUHJvamVjdHMoKSB7XG4gICAgcHViU3ViUHJvamVjdHMucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIF9kaXNwbGF5UHJvamVjdHMoKSB7XG4gICAgcHJvamVjdHMub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIG9iamVjdC5wdWJsaXNoKCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdHMoKSB7XG4gICAgX2NsZWFyUHJvamVjdHMoKTtcbiAgICBfZGlzcGxheVByb2plY3RzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfZGlzcGxheVNlYXJjaGVkVGFza3Moc2VhcmNoVmFsdWUpIHtcbiAgICB0YXNrcy5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBsZXQgcHVibGlzaGVkO1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xuICAgICAgICBpZiAoIGtleSA9PSBcImlkXCIsIGtleSA9PSBcInN0YXR1c1wiLCBrZXk9PSBcInR5cGVcIiApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgZm91bmQgPSB2YWx1ZS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgaWYgKGZvdW5kICYmICFwdWJsaXNoZWQpIHtcbiAgICAgICAgICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7XG4gICAgICAgICAgICBwdWJsaXNoZWQgPSB0cnVlO1xuICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVNlYXJjaChzZWFyY2hWYWx1ZSkge1xuICAgIF9jbGVhcigpO1xuICAgIF9kaXNwbGF5U2VhcmNoZWRUYXNrcyhzZWFyY2hWYWx1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kaXNwbGF5Q29tcGxldGVUYXNrcygpIHtcbiAgICB0YXNrcy5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBpZiAob2JqZWN0LnN0YXR1cyA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgb2JqZWN0LnB1Ymxpc2hDb21wbGV0ZSgpO1xuICAgICAgfX0pXG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlQ29tcGxldGUoKSB7XG4gICAgX2NsZWFyKClcbiAgICBfZGlzcGxheUNvbXBsZXRlVGFza3MoKVxuICB9XG5cbiAgZnVuY3Rpb24gX3NvcnRUYXNrcyh2YWx1ZSkge1xuICAgIHRhc2tzLmN1c3RvbVNvcnQodmFsdWUpO1xuICB9XG4gZnVuY3Rpb24gdXBkYXRlU29ydGVkICh2YWx1ZSkge1xuICBfc29ydFRhc2tzKHZhbHVlKTtcbiAgX2NsZWFyKClcbiAgX2Rpc3BsYXlUYXNrcygpO1xufTtcblxuIHJldHVybiB7XG4gIHVwZGF0ZSxcbiAgdXBkYXRlUHJvamVjdHMsXG4gIHVwZGF0ZVNlYXJjaCxcbiAgdXBkYXRlQ29tcGxldGUsXG4gIHVwZGF0ZVNvcnRlZCxcbiAgdXBkYXRlTm90ZXNcbiB9XG59KSgpIFxuXG5cbi8qIE9iamVjdCBDb25zdHJ1Y3RvciAoUHJvdG90eXBlIGZvciBwcm9qZWN0IGFuZCB0YXNrIGNvbnN0cnVjdG9ycyovXG5mdW5jdGlvbiBPYmplY3RDb25zdHJ1Y3RvcigpIHtcbn1cblxuT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAoKSB7XG4gIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgY2FzZSBcInByb2plY3RcIjpcbiAgICAgIHB1YlN1YlByb2plY3RzLnB1Ymxpc2goXCJkaXNwbGF5XCIsIHRoaXMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInRhc2tcIjpcbiAgICAgIHB1YlN1YlRhc2tzLnB1Ymxpc2goXCJkaXNwbGF5XCIsIHRoaXMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm5vdGVcIjpcbiAgICAgIHB1YlN1Yk5vdGVzLnB1Ymxpc2goXCJkaXNwbGF5XCIsIHRoaXMpXG4gIH1cbn07XG5cbk9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5kaXNwbGF5QWxsID0gZnVuY3Rpb24gKCkge1xuICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgIGNhc2UgXCJwcm9qZWN0XCI6XG4gICAgICBwdWJTdWJQcm9qZWN0cy5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gICAgICBwcm9qZWN0cy5wdXNoKHRoaXMpOyBcbiAgICAgIHByb2plY3RzLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+e1xuICAgICAgICBvYmplY3QucHVibGlzaCgpO1xuICAgICAgfSlcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0YXNrXCI6XG4gICAgICBwdWJTdWJUYXNrcy5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gICAgICB0YXNrcy5wdXNoKHRoaXMpO1xuICAgIFxuICAgICAgdGFza3Mub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgICBpZiAob2JqZWN0LnN0YXR1cyA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmplY3QucHVibGlzaCgpO1xuICAgICAgICB9IFxuICAgICAgfSlcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJub3RlXCI6XG4gICAgICBwdWJTdWJOb3Rlcy5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gICAgICBub3Rlcy5wdXNoKHRoaXMpO1xuICAgICAgbm90ZXMub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgICBvYmplY3QucHVibGlzaCgpXG4gICAgICB9KVxuICB9XG59O1xuXG5PYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gIGxldCBpbmRleE9mTWF0Y2g7XG4gIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgY2FzZSBcInByb2plY3RcIjpcbiAgICAgIGluZGV4T2ZNYXRjaCA9IHByb2plY3RzLm9iakFyci5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLmlkID09PSB0aGlzLmlkID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBwcm9qZWN0cy5yZW1vdmUoaW5kZXhPZk1hdGNoKTtcbiAgICAgIGRpc3BsYXlNb2QudXBkYXRlUHJvamVjdHMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0YXNrXCI6XG4gICAgICBpbmRleE9mTWF0Y2ggPSB0YXNrcy5vYmpBcnIuZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5pZCA9PT0gdGhpcy5pZCA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGFza3MucmVtb3ZlKGluZGV4T2ZNYXRjaCk7XG4gICAgICBkaXNwbGF5TW9kLnVwZGF0ZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm5vdGVcIjpcbiAgICAgIGluZGV4T2ZNYXRjaCA9IG5vdGVzLm9iakFyci5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLmlkID09PSB0aGlzLmlkID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBub3Rlcy5yZW1vdmUoaW5kZXhPZk1hdGNoKTtcbiAgICAgIGRpc3BsYXlNb2QudXBkYXRlTm90ZXMoKTtcbiAgfVxufTtcblxuLy9Qcm9qZWN0IENvbnN0cnVjdG9yXG5mdW5jdGlvbiBQcm9qZWN0Q29uc3RydWN0b3IodGl0bGUpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlOyBcbiAgdGhpcy5pZCA9IHByb2plY3RzLm9iaklkR2VuICs9IDE7XG4gIHRoaXMudHlwZSA9IFwicHJvamVjdFwiO1xuICB0aGlzLnRhc2tJZEFyciA9IFtdO1xufVxuXG5Qcm9qZWN0Q29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShPYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuXG5Qcm9qZWN0Q29uc3RydWN0b3IucHJvdG90eXBlLnJlbW92ZUJ5UHJvamVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnRhc2tJZEFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgbGV0IHJlbW92ZUluZGV4ID0gdGFza3Mub2JqQXJyLmZpbmRJbmRleCh0YXNrID0+IHRhc2suaWQgPT0gZWxlbWVudCk7XG4gICAgdGFza3Mub2JqQXJyLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XG4gIH0pXG59O1xuXG5cbi8qIFRhc2sgQ29uc3RydWN0b3IgKi9cblxuZnVuY3Rpb24gVGFza0NvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgdGhpcy50eXBlID0gXCJ0YXNrXCI7XG4gIHRoaXMuc3RhdHVzID0gXCJhY3RpdmVcIjtcbiAgdGhpcy5pZCA9IHRhc2tzLm9iaklkR2VuICs9IDE7XG59XG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVtb3ZlVGFza0Zyb21Qcm9qZWN0SWRBcnIgPSBmdW5jdGlvbiAoKSB7IFxuICBsZXQgcHJvamVjdE9iamVjdCA9IHByb2plY3RzLm9iakFyci5maW5kKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PSB0aGlzLnByb2plY3QpO1xuICBsZXQgaW5kZXhOdW0gPSBwcm9qZWN0T2JqZWN0LnRhc2tJZEFyci5maW5kSW5kZXgoaWQgPT4gaWQgPT0gdGhpcy5pZCApO1xuICBwcm9qZWN0T2JqZWN0LnRhc2tJZEFyci5zcGxpY2UoaW5kZXhOdW0sIDEpO1xufVxuXG5UYXNrQ29uc3RydWN0b3IucHJvdG90eXBlLnB1c2hJZCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgcHJvamVjdE9iamVjdCA9IHByb2plY3RzLm9iakFyci5maW5kKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PSB0aGlzLnByb2plY3QpXG4gIHByb2plY3RPYmplY3QudGFza0lkQXJyLnB1c2godGhpcy5pZCk7XG59XG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAodGhpcy5zdGF0dXMgPT0gXCJhY3RpdmVcIikgPyAodGhpcy5zdGF0dXMgPSBcImNvbXBsZXRlXCIpOiAodGhpcy5zdGF0dXMgPSBcImFjdGl2ZVwiKTtcbn1cblxuVGFza0NvbnN0cnVjdG9yLnByb3RvdHlwZS5jb3VudFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuICBzd2l0Y2ggKHRoaXMucHJpb3JpdHkpIHtcbiAgICBjYXNlIFwibG93XCI6XG4gICAgICByZXR1cm4gMTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgIHJldHVybiAyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgIHJldHVybiAzO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAwO1xuICB9XG59O1xuXG5UYXNrQ29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2hDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICBwdWJTdWJUYXNrcy5wdWJsaXNoKFwiZGlzcGxheUNvbXBsZXRlXCIsIHRoaXMpO1xufVxuXG5cblxuLyogTm90ZSBDb25zdHJ1Y3RvciAqL1xuXG5mdW5jdGlvbiBOb3RlQ29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICB0aGlzLnR5cGUgPSBcIm5vdGVcIjtcbiAgdGhpcy5pZCA9IG5vdGVzLm9iaklkR2VuICs9IDE7XG59XG5cbk5vdGVDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG5cbi8qIE5vdGVDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgcHViU3ViTm90ZXMucHVibGlzaChcIm5vdGVcIiwgeyB0aXRsZTogdGhpcy50aXRsZSwgZGV0YWlsczogdGhpcy5kZXRhaWxzIH0pO1xuICBjb25zb2xlLmxvZyhub3QpXG59OyAqL1xuXG5cbmNvbnNvbGUubG9nKHB1YlN1YlRhc2tzKTtcbi8qIFN1YnNjcmliZXJzICovXG5wdWJTdWJQcm9qZWN0cy5zdWJzY3JpYmUoXCJkaXNwbGF5XCIsIHN1YnNjcmliZVByb2plY3QpO1xuXG5wdWJTdWJQcm9qZWN0cy5zdWJzY3JpYmUoXCJkaXNwbGF5XCIsIHN1YlNlbGVjdFByb2plY3RJbnB1dCk7XG5wdWJTdWJOb3Rlcy5zdWJzY3JpYmUoXCJkaXNwbGF5XCIsIHN1YnNjcmliZU5vdGUpO1xucHViU3ViTm90ZXMuc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViUm12Tm90ZURpc3BsYXkpO1xuXG5cbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImRpc3BsYXlcIiwgc3Vic2NyaWJlVGFzayk7XG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJkaXNwbGF5XCIsIHN1YlRhc2tMaXN0SXRlbSk7XG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJjbGVhclwiLCBzdWJSbXZUYXNrQ29udGFpbmVyKTtcbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImNsZWFyXCIsIHN1YlJtdlRhc2tzKTtcbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImRpc3BsYXlDb21wbGV0ZVwiLCBzdWJDb21wbGV0ZVRhc2spOyBcblxuXG5wdWJTdWJQcm9qZWN0cy5zdWJzY3JpYmUoXCJjbGVhclwiLCBzdWJSbXZQcm9qZWN0RGlzcGxheSk7XG5wdWJTdWJQcm9qZWN0cy5zdWJzY3JpYmUoXCJjbGVhclwiLCBzdWJDbGVhclNlbGVjdE9wdGlvbnMpO1xuXG5leHBvcnQge1xuICBOb3RlQ29uc3RydWN0b3IsXG4gIFByb2plY3RDb25zdHJ1Y3RvcixcbiAgVGFza0NvbnN0cnVjdG9yLFxuICBkaXNwbGF5TW9kLFxufTtcbiIsImltcG9ydCB7IG1vZGFsIH0gZnJvbSBcIi4vbW9kYWwvbW9kYWxcIjtcbmltcG9ydCB7IHNlYXJjaE1vZGFsLCBzZWFyY2hJbnB1dCB9IGZyb20gXCIuL21vZGFsL19fc2VhcmNoL21vZGFsX19zZWFyY2hcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5L2Rpc3BsYXlcIjtcblxuY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xubWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuLyogZGlzcGxheSBmb3JtIG1vZGFsIGJ1dHRvbiAqL1xuY29uc3QgZGlzcGxheUZvcm1Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5kaXNwbGF5Rm9ybU1vZGFsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5kaXNwbGF5Rm9ybU1vZGFsLnRleHRDb250ZW50ID0gXCIrXCI7XG5kaXNwbGF5Rm9ybU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtYWluX19kaXNwbGF5LWZvcm0tYnRuXCIsIFwiYy1tYWluX19kaXNwbGF5LWZvcm0tYnRuXCIpO1xuZGlzcGxheUZvcm1Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibWFpbl9fbW9kYWwtLWhpZGRlblwiKTtcbiAgbW9kYWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJhbmltYXRpb24tbmFtZSA6IHN3aXJsLWluLWZ3ZDsgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzXCIpO1xuICBcblxufSk7XG4vKmRpc3BsYXkgc2VhcmNoIG1vZGFsIGJ1dHRvbiovXG5jb25zdCBkaXNwbGF5U2VhcmNoTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuZGlzcGxheVNlYXJjaE1vZGFsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5kaXNwbGF5U2VhcmNoTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1haW5fX2Rpc3BsYXktc2VhcmNoLWJ0blwiLCBcImMtbWFpbl9fZGlzcGxheS1zZWFyY2gtYnRuXCIpO1xuXG5cbmRpc3BsYXlTZWFyY2hNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gIHNlYXJjaE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluX19zZWFyY2gtbW9kYWwtLWhpZGRlblwiKTtcbiAgc2VhcmNoTW9kYWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJhbmltYXRpb24tbmFtZSA6IHN3aW5nLWluLWxlZnQ7IGFuaW1hdGlvbi1kdXJhdGlvbjogMC41c1wiKTtcbiBcbiAgc2VhcmNoSW5wdXQuZm9jdXMoKTtcbiBcbn0pO1xuXG5cblxubWFpbkRpdi5hcHBlbmRDaGlsZChkaXNwbGF5KTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQoZGlzcGxheUZvcm1Nb2RhbCk7XG5tYWluRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlTZWFyY2hNb2RhbClcbm1haW5EaXYuYXBwZW5kQ2hpbGQobW9kYWwpO1xubWFpbkRpdi5hcHBlbmRDaGlsZChzZWFyY2hNb2RhbCk7XG5cbmV4cG9ydCB7IG1haW5EaXYgfTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUJhc2ljSW5wdXQsXG4gIGFwcGVuZExhYmVsSW5wdXQsXG4gIGNyZWF0ZUxhYmVsLFxufSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIjtcbmltcG9ydCB7IE5vdGVDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcbmltcG9ydCB7IGNyZWF0ZUFsZXJ0IH0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2FsZXJ0XCI7XG5cbmNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5ub3RlRm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1ub3RlXCIpXG5cbi8qIGlucHV0cyAqL1xuY29uc3Qgbm90ZVRpdGxlID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgXCJmb3JtX19pbnB1dFwiLFxuICBcInRleHRcIixcbiAgXCJub3RlLXRpdGxlXCIsXG4gIFwibm90ZS10aXRsZVwiXG4pO1xubm90ZVRpdGxlLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuY29uc3Qgbm90ZVRpdGxlTGFiZWwgPSBjcmVhdGVMYWJlbChub3RlVGl0bGUsIFwiVGl0bGU6XCIpO1xuYXBwZW5kTGFiZWxJbnB1dChub3RlRm9ybSwgbm90ZVRpdGxlTGFiZWwsIG5vdGVUaXRsZSk7XG5cbmNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5ub3RlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZVwiKTtcbm5vdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5vdGVcIik7XG5ub3RlLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuXG5jb25zdCBub3RlTGFiZWwgPSBjcmVhdGVMYWJlbChub3RlLCBcIkRldGFpbHM6XCIpO1xuYXBwZW5kTGFiZWxJbnB1dChub3RlRm9ybSwgbm90ZUxhYmVsLCBub3RlKTtcblxuLyogXCJzdWJtaXRcIiBidXR0b24gKi9cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbnN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1ub3RlX19idG5cIilcbnN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE5vdGVcIjtcbm5vdGVGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cblxuXG4vKiBQVUJTVUIgKi9cblxuZnVuY3Rpb24gcHVibGlzaE5vdGUoKSB7XG4gIGlmIChub3RlVGl0bGUudmFsdWUgPT0gXCJcIiB8fCBub3RlLnZhbHVlID09IFwiXCIpIHtcbiAgICByZXR1cm4gY3JlYXRlQWxlcnQoXCJQbGVhc2UgZmlsbCBvdXQgYm90aCB0aGUgdGl0bGUgYW5kIGRldGFpbHMgZmllbGRzIVwiKVxuICB9IFxuICBsZXQgb2JqID0gbmV3IE5vdGVDb25zdHJ1Y3Rvcihub3RlVGl0bGUudmFsdWUsIG5vdGUudmFsdWUpO1xuICBub3RlRm9ybS5yZXNldCgpO1xuICBvYmouZGlzcGxheUFsbCgpO1xufVxuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHB1Ymxpc2hOb3RlKTtcblxuZXhwb3J0IHsgbm90ZUZvcm0gfTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUJhc2ljSW5wdXQsXG4gIGFwcGVuZExhYmVsSW5wdXQsXG4gIGNyZWF0ZUxhYmVsLFxufSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIjtcbmltcG9ydCB7IFByb2plY3RDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcbmltcG9ydCB7IGNyZWF0ZUFsZXJ0IH0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2FsZXJ0XCI7XG5cbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5wcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1wcm9qZWN0XCIpXG5cbi8qIGlucHV0cyAqL1xuY29uc3QgcHJvamVjdCA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gIFwiZm9ybV9faW5wdXRcIixcbiAgXCJ0ZXh0XCIsXG4gIFwicHJvamVjdC10aXRsZVwiLFxuICBcInByb2plY3RcIlxuKTtcbmNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwocHJvamVjdCwgXCJUaXRsZTpcIik7XG5hcHBlbmRMYWJlbElucHV0KHByb2plY3RGb3JtLCBsYWJlbCwgcHJvamVjdCk7XG5cbi8vY3JlYXRlcyB0aGUgR2VuZXJhbCBwcm9qZWN0XG5sZXQgb2JqID0gbmV3IFByb2plY3RDb25zdHJ1Y3RvcihcIkdlbmVyYWxcIik7XG5vYmouZGlzcGxheUFsbCgpO1xuXG5cbi8qIFwic3VibWl0XCIgYnV0dG9uICovXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5zdWJtaXQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBQcm9qZWN0XCI7XG5zdWJtaXQuY2xhc3NMaXN0LmFkZChcImZvcm0tcHJvamVjdF9fYnRuXCIpXG5wcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgaWYgKCFwcm9qZWN0LnZhbHVlKSB7XG4gICByZXR1cm4gY3JlYXRlQWxlcnQoXCJQbGVhc2UgcHJvdmlkZSBhIG5hbWUgZm9yIHlvdXIgcHJvamVjdCFcIilcbiAgfSBcbiAgbGV0IG9iaiA9IG5ldyBQcm9qZWN0Q29uc3RydWN0b3IocHJvamVjdC52YWx1ZSk7XG4gIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gIG9iai5kaXNwbGF5QWxsKCk7XG59XG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlQcm9qZWN0cyk7XG5cbmV4cG9ydCB7IHByb2plY3RGb3JtIH07XG4iLCIvKiBUTyBETyBGT1JNICovXG5pbXBvcnQge1xuICBjcmVhdGVCYXNpY0lucHV0LFxuICBhcHBlbmRMYWJlbElucHV0LFxuICBjcmVhdGVMYWJlbCxcbiAgY3JlYXRlUmFkaW9JbnB1dCxcbiAgY3JlYXRlVGV4dEFyZWEsXG4gIGFwcGVuZFJhZGlvSW5wdXRzXG59IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuaW1wb3J0IHsgVGFza0NvbnN0cnVjdG9yIH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuaW1wb3J0IHtjcmVhdGVBbGVydH0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2FsZXJ0XCI7XG5cblxuXG5cblxubGV0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG50YXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS10YXNrXCIpO1xuXG5sZXQgdGl0bGUgPSBjcmVhdGVCYXNpY0lucHV0KFwiZm9ybV9faW5wdXRcIiwgXCJ0ZXh0XCIsIFwidGl0bGVcIiwgXCJ0aXRsZVwiKTtcbnRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGVcIik7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXQtLXRleHRcIik7XG5sZXQgdGl0bGVMYWJlbCA9IGNyZWF0ZUxhYmVsKHRpdGxlLCBcIlRpdGxlXCIpO1xudGl0bGVMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbGFiZWwtLWhpZGRlblwiKTtcbmFwcGVuZExhYmVsSW5wdXQodGFza0Zvcm0sIHRpdGxlTGFiZWwsIHRpdGxlKTtcblxuXG5sZXQgdGV4dEFyZWEgPSBjcmVhdGVUZXh0QXJlYShcImZvcm1fX2lucHV0XCIsIFwidGV4dEFyZWFcIiwgXCJ0ZXh0QXJlYVwiKVxuXG50ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRldGFpbHNcIik7XG5cbmxldCB0ZXh0QXJlYUxhYmVsID0gY3JlYXRlTGFiZWwodGV4dEFyZWEsIFwiRGV0YWlsc1wiKTtcbnRleHRBcmVhTGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcm1fX2xhYmVsLS1oaWRkZW5cIik7XG5hcHBlbmRMYWJlbElucHV0KHRhc2tGb3JtLCB0ZXh0QXJlYUxhYmVsLCB0ZXh0QXJlYSk7XG5cbmxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19kaXZcIik7XG5sZXQgZGF0ZSA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJmb3JtX19pbnB1dFwiLCBcImRhdGVcIiwgXCJkYXRlXCIsIFwiZGF0ZVwiKTtcbmxldCBkYXRlTGFiZWwgPSBjcmVhdGVMYWJlbChkYXRlLCBcIkR1ZSBEYXRlOlwiKTtcbmFwcGVuZExhYmVsSW5wdXQoZGl2LCBkYXRlTGFiZWwsIGRhdGUpO1xudGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcblxuLyogU0VMRUNUIFBST0pFQ1QgKi9cbmNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuc2VsZWN0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdC1wcm9qZWN0XCIpO1xuc2VsZWN0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdFwiKTtcbnNlbGVjdFByb2plY3QuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0XCIpXG5cbi8qIGNsZWFycyB0aGUgc2VsZWN0IG9wdGlvbnMgYXQgdGhlIHNhbWUgdGltZSBhcyB0aGUgcHJvamVjdCBkaXNwbGF5IGlzIGNsZWFyZWQgKi9cbmZ1bmN0aW9uIHN1YkNsZWFyU2VsZWN0T3B0aW9ucygpIHtcbiAgd2hpbGUgKHNlbGVjdFByb2plY3QuZmlyc3RDaGlsZCkge1xuICAgIHNlbGVjdFByb2plY3QucmVtb3ZlQ2hpbGQoc2VsZWN0UHJvamVjdC5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbi8qIHVwZGF0ZXMgdGhlIHNlbGVjdCBvcHRpb25zIHdoZW4gbmV3IHByb2plY3RzIGFyZSBhZGRlZCAqL1xuZnVuY3Rpb24gc3ViU2VsZWN0UHJvamVjdElucHV0KG9iaikge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgb2JqLnRpdGxlKTtcbiAgb3B0aW9uLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBzZWxlY3RQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG59XG5cbmNvbnN0IHNlbGVjdExhYmVsID0gY3JlYXRlTGFiZWwoc2VsZWN0UHJvamVjdCwgXCJQcm9qZWN0OlwiKTtcbmFwcGVuZExhYmVsSW5wdXQoZGl2LCBzZWxlY3RMYWJlbCwgc2VsZWN0UHJvamVjdCk7XG5cblxuLypSQURJTyBCVVRUT05TKi9cbmxldCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbmZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19maWVsZHNldFwiKVxubGV0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG5sZWdlbmQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG5maWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG5cbmxldCBwcmlvcml0eUxvdyA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJsb3dcIiwgXCJmaWVsZHNldF9faW5wdXQtcmFkaW9cIik7XG5sZXQgcHJpb3JpdHlNZWRpdW0gPSBjcmVhdGVSYWRpb0lucHV0KFwibWVkaXVtXCIsIFwiZmllbGRzZXRfX2lucHV0LXJhZGlvXCIpO1xubGV0IHByaW9yaXR5SGlnaCA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJoaWdoXCIsIFwiZmllbGRzZXRfX2lucHV0LXJhZGlvXCIpO1xuXG5cbmFwcGVuZFJhZGlvSW5wdXRzKGZpZWxkc2V0LCBbcHJpb3JpdHlMb3csIHByaW9yaXR5TWVkaXVtLCBwcmlvcml0eUhpZ2hdKTtcbnRhc2tGb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcblxuXG5sZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuc3VibWl0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgVGFza1wiO1xuc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5zdWJtaXQuY2xhc3NMaXN0LmFkZChcImZvcm0tdGFza19fYnRuXCIpXG50YXNrRm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gXG5mdW5jdGlvbiBjaGVja0RhdGUoKSB7XG4gIGxldCBkYXRlUHJvY2Vzc2VkID0gbmV3IERhdGUoZGF0ZS52YWx1ZSk7XG4gIGlmIChkYXRlLnZhbHVlKSB7XG4gICAgZGF0ZVByb2Nlc3NlZCA9IGRhdGVQcm9jZXNzZWQudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07ICAgXG4gIH1cbiAgcmV0dXJuICghZGF0ZS52YWx1ZSApID8gXCJcIiA6IGRhdGVQcm9jZXNzZWQ7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgbGV0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0OmNoZWNrZWRcIik7XG4gIGlmICghdGl0bGUudmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlQWxlcnQoXCJQbGVhc2UgY3JlYXRlIGEgdGl0bGUgZm9yIHlvdXIgdGFzayFcIik7XG4gIH1cbiAgaWYgKCFyYWRpbykge1xuICAgcmV0dXJuIGNyZWF0ZUFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhIHByaW9yaXR5IGZvciB5b3VyIHRhc2shXCIpO1xuICB9XG5cbiAgXG4gIGxldCBvYmogPSBuZXcgVGFza0NvbnN0cnVjdG9yKFxuICAgIHRpdGxlLnZhbHVlLFxuICAgIHRleHRBcmVhLnZhbHVlLFxuICAgIGNoZWNrRGF0ZSgpLFxuICAgIHJhZGlvLnZhbHVlLFxuICAgIHNlbGVjdFByb2plY3QudmFsdWVcbiAgKTtcbiAgb2JqLnB1c2hJZCgpO1xuICBvYmouZGlzcGxheUFsbCgpO1xuICB0YXNrRm9ybS5yZXNldCgpO1xufVxuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlUYXNrcyk7XG5cbmV4cG9ydCB7IHRhc2tGb3JtLCBzdWJTZWxlY3RQcm9qZWN0SW5wdXQsIHN1YkNsZWFyU2VsZWN0T3B0aW9ucyB9O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlQmFzaWNJbnB1dCxcbiAgYXBwZW5kTGFiZWxJbnB1dCxcbiAgY3JlYXRlTGFiZWwsXG59IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuaW1wb3J0IHsgZGlzcGxheU1vZCB9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcblxuLyogc2VhcmNoIG1vZGFsICovXG5sZXQgc2VhcmNoTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2VhcmNoTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1haW5fX3NlYXJjaC1tb2RhbC0taGlkZGVuXCIsIFwicC1tYWluX19zZWFyY2gtbW9kYWxcIiwgXCJtYWluX19zZWFyY2gtbW9kYWxcIik7XG5cblxuLyogc2VhcmNoIGZvcm0gKi9cbmxldCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5sZXQgc2VhcmNoSW5wdXQgPSBjcmVhdGVCYXNpY0lucHV0KFwic2VhcmNoLW1vZGFsX19pbnB1dFwiLCBcInRleHRcIiwgXCJzZWFyY2hcIiwgXCJzZWFyY2hcIik7XG5zZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlNlYXJjaFwiKVxuc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpXG5cbmxldCBzZWFyY2hMYWJlbCA9IGNyZWF0ZUxhYmVsKHNlYXJjaElucHV0LCBcIlNlYXJjaFwiKTtcbnNlYXJjaExhYmVsLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtbW9kYWxfX2xhYmVsXCIpXG5hcHBlbmRMYWJlbElucHV0KHNlYXJjaEZvcm0sIHNlYXJjaExhYmVsLCBzZWFyY2hJbnB1dCk7XG5cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKT0+IHtcbiAgZGlzcGxheU1vZC51cGRhdGVTZWFyY2goc2VhcmNoSW5wdXQudmFsdWUpO1xufSlcblxuZnVuY3Rpb24gaGlkZSgpIHtcbiAgc2VhcmNoTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1haW5fX3NlYXJjaC1tb2RhbC0taGlkZGVuXCIpXG59XG5cbi8qIHNlYXJjaCBtb2RhbCBoaWRlcyB3aGVuIGNsaWNrIG91dHNpZGUgb2YgaXQgKi9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdChcIi5tYWluX19zZWFyY2gtbW9kYWxcIikmJiAhZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIubWFpbl9fZGlzcGxheS1zZWFyY2gtYnRuXCIpICAmJiAoc2VhcmNoTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWFpbl9fc2VhcmNoLW1vZGFsLS1oaWRkZW5cIik9PSBmYWxzZSkpIHtcbiAgICBzZWFyY2hNb2RhbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImFuaW1hdGlvbi1uYW1lIDogc3dpbmctb3V0LWxlZnQ7IGFuaW1hdGlvbi1kdXJhdGlvbjogMC41c1wiKTtcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgc2V0VGltZW91dChoaWRlLCA1MDApIFxuICB9IFxufSkgXG5cbnNlYXJjaE1vZGFsLmFwcGVuZENoaWxkKHNlYXJjaEZvcm0pO1xuXG5leHBvcnQge3NlYXJjaE1vZGFsLCBzZWFyY2hJbnB1dH07XG5cbiIsImxldCBzaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNpZGVEaXYuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19zaWRlXCIsIFwicC1tb2RhbF9fc2lkZVwiKTtcblxubGV0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xudGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xudGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdUQVNLJztcbnRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcIm1vZGFsX19zaWRlLWJ0blwiKVxuXG5sZXQgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5wcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5wcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJQUk9KRUNUXCI7XG5cbnByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcIm1vZGFsX19zaWRlLWJ0blwiKVxuXG5sZXQgbm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5ub3RlQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5ub3RlQnV0dG9uLnRleHRDb250ZW50ID0gXCJOT1RFXCI7XG5ub3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fc2lkZS1idG5cIilcblxuXG5zaWRlRGl2LmFwcGVuZENoaWxkKHRhc2tCdXR0b24pXG5cbnNpZGVEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbilcblxuc2lkZURpdi5hcHBlbmRDaGlsZChub3RlQnV0dG9uKVxuXG5leHBvcnQge3NpZGVEaXYsIHRhc2tCdXR0b24sIG5vdGVCdXR0b24sIHByb2plY3RCdXR0b259ICIsImltcG9ydCAqIGFzIHNpZGUgZnJvbSBcIi4vX19zaWRlL21vZGFsX19zaWRlXCI7XG5pbXBvcnQgeyB0YXNrRm9ybSB9IGZyb20gXCIuL19fZm9ybS9tb2RhbF9fZm9ybS10YXNrXCI7XG5pbXBvcnQgeyBwcm9qZWN0Rm9ybSB9IGZyb20gXCIuL19fZm9ybS9tb2RhbF9fZm9ybS1wcm9qZWN0XCI7XG5pbXBvcnQgeyBub3RlRm9ybSB9IGZyb20gXCIuL19fZm9ybS9tb2RhbF9fZm9ybS1ub3RlXCI7XG5cbmxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIiwgXCJwLW1haW5fX21vZGFsXCIpO1xuXG5sZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY2xvc2VCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fY2xvc2UtYnRuXCIpXG5jbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwiQ2xvc2Ugd2luZG93XCI7XG5tb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbmZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcbiAgcmVtb3ZlRm9ybSgpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1haW5fX21vZGFsLS1oaWRkZW5cIik7XG59XG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZU1vZGFsKTtcblxuLyogc2lkZSAqL1xubW9kYWwuYXBwZW5kQ2hpbGQoc2lkZS5zaWRlRGl2KTtcblxuLyogZm9ybSBvbiBpbml0aWFsIGxvYWQgKi9cbmxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX2Zvcm1cIik7XG5tb2RhbC5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuLyogcmVtb3ZlIGZvcm0gZnVuYyAqL1xuZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcbiAgd2hpbGUgKGZvcm1Db250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGZvcm1Db250YWluZXIuZmlyc3RDaGlsZC5yZXNldCgpO1xuICAgIGZvcm1Db250YWluZXIucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxufVxuXG4vKiBzaWRlIGJ1dHRvbiBldmVudCBsaXN0ZW5lcnMgKi9cbnNpZGUudGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xufSk7XG5zaWRlLnByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcmVtb3ZlRm9ybSgpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbn0pO1xuc2lkZS5ub3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHJlbW92ZUZvcm0oKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlRm9ybSk7XG59KTtcbi8qIGhpZGUgbW9kYWwgd2hlbiBjbGlja2VkIG91dHNpZGUgb2YgdGhlIG1vZGFsICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChcbiAgICAhZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucC1tYWluX19tb2RhbFwiKSAmJlxuICAgICFldmVudC50YXJnZXQuY2xvc2VzdChcIi5hbGVydFwiKSAmJlxuICAgICFldmVudC50YXJnZXQubWF0Y2hlcyhcIi5tYWluX19kaXNwbGF5LWZvcm0tYnRuXCIpICYmXG4gICAgbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWFpbl9fbW9kYWwtLWhpZGRlblwiKSA9PSBmYWxzZVxuICApIHtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoXG4gICAgICBcInN0eWxlXCIsXG4gICAgICBcImFuaW1hdGlvbi1uYW1lIDogc3dpcmwtb3V0LWJjazsgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzXCJcbiAgICApO1xuICAgIHNldFRpbWVvdXQoaGlkZU1vZGFsLCA2MDApO1xuICB9XG59KTtcblxuZXhwb3J0IHsgbW9kYWwgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7ICovXG5pbXBvcnQge2hlYWRlcn0gZnJvbSBcIi4vaGVhZGVyL2hlYWRlclwiXG5pbXBvcnQge21haW5EaXZ9IGZyb20gXCIuL21haW4vbWFpblwiIFxuaW1wb3J0IHtmb290ZXJ9IGZyb20gXCIuL2Zvb3Rlci9mb290ZXJcIlxuXG5cbmxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==