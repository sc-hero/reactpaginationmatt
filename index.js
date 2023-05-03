"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("../index.css");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Pagination = function Pagination(_ref) {
  var courses = _ref.courses,
    _ref$currentPage = _ref.currentPage,
    currentPage = _ref$currentPage === void 0 ? 1 : _ref$currentPage,
    setCurrentPage = _ref.setCurrentPage,
    coursesPerPage = _ref.coursesPerPage,
    containerStyle = _ref.containerStyle,
    paginationStyle = _ref.paginationStyle,
    paginationItemStyle = _ref.paginationItemStyle,
    styleObj = _ref.styleObj;
  var pageNumbers = [];
  for (var i = 1; i <= Math.ceil(courses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }
  var paginate = function paginate(pageNumber) {
    return setCurrentPage(pageNumber);
  };
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    arrOfCurrButtons = _useState2[0],
    setArrOfCurrButtons = _useState2[1];
  (0, _react.useEffect)(function () {
    var tempNumberOfPages = [].concat(pageNumbers);
    var dotsInitial = "...";
    var dotsLeft = "... ";
    var dotsRight = " ...";
    if (pageNumbers.length < 6) {
      tempNumberOfPages = pageNumbers;
    } else if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, pageNumbers.length];
    } else if (currentPage === 4) {
      var sliced = pageNumbers.slice(0, 5);
      tempNumberOfPages = [].concat(_toConsumableArray(sliced), [dotsInitial, pageNumbers.length]);
    } else if (currentPage > 4 && currentPage < pageNumbers.length - 2) {
      // from 5 to 8 -> (10 - 2)
      var sliced1 = pageNumbers.slice(currentPage - 2, currentPage); // sliced1 (5-2, 5) -> [4,5]
      var sliced2 = pageNumbers.slice(currentPage, currentPage + 1); // sliced1 (5, 5+1) -> [6]
      tempNumberOfPages = [1, dotsLeft].concat(_toConsumableArray(sliced1), _toConsumableArray(sliced2), [dotsRight, pageNumbers.length]); // [1, '...', 4, 5, 6, '...', 10]
    } else if (currentPage > pageNumbers.length - 3) {
      // > 7
      var _sliced = pageNumbers.slice(pageNumbers.length - 4); // slice(10-4)
      tempNumberOfPages = [1, dotsLeft].concat(_toConsumableArray(_sliced));
    } else if (currentPage === dotsInitial) {
      // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
      // arrOfCurrButtons[3] = 4 + 1 = 5
      // or
      // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
      // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
      setCurrentPage(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentPage === dotsRight) {
      setCurrentPage(arrOfCurrButtons[3] + 2);
    } else if (currentPage === dotsLeft) {
      setCurrentPage(arrOfCurrButtons[3] - 2);
    }
    setArrOfCurrButtons(tempNumberOfPages);
    setCurrentPage(currentPage);
  }, [currentPage, pageNumbers]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: styleObj,
    className: "parent flex justify-center mb-20 ".concat(containerStyle)
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "pagination flex ".concat(paginationStyle)
  }, currentPage > 1 && /*#__PURE__*/_react["default"].createElement("li", {
    className: "page-item px-4 text-white ".concat(paginationItemStyle)
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "page-button py-1",
    onClick: function onClick() {
      return setCurrentPage(function (prev) {
        return prev - 1;
      });
    }
  }, "Prev")), arrOfCurrButtons.map(function (number) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: number,
      className: "page-item px-4 text-white"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return paginate(number);
      },
      className: [currentPage === number && "bg-custom-color1 rounded px-3 py-1", "px-5 py-1"]
    }, number));
  }), arrOfCurrButtons.length != 1 && /*#__PURE__*/_react["default"].createElement("li", {
    className: "page-item px-4 text-white"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "py-1",
    onClick: function onClick() {
      return setCurrentPage(function (prev) {
        return prev === pageNumbers.length ? prev : prev + 1;
      });
    }
  }, "Next"))));
};
var _default = Pagination;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Pagination", {
  enumerable: true,
  get: function get() {
    return _pagination["default"];
  }
});
var _pagination = _interopRequireDefault(require("./components/pagination"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
