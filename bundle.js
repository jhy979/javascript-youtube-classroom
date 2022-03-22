/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/js/event/EventHandler.js":
/*!**************************************!*\
  !*** ./src/js/event/EventHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventHandler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _videoAPI_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../videoAPI.js */ "./src/js/videoAPI.js");
/* harmony import */ var _utils_validator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/validator.js */ "./src/js/utils/validator.js");
/* harmony import */ var _videoStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../videoStorage.js */ "./src/js/videoStorage.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/constants.js */ "./src/js/utils/constants.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/common.js */ "./src/js/utils/common.js");










var EventHandler = /*#__PURE__*/function () {
  function EventHandler(mainView, modalView) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EventHandler);

    this.mainView = mainView;
    this.modalView = modalView;
    this.setBindEvents();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EventHandler, [{
    key: "setBindEvents",
    value: function setBindEvents() {
      this.mainView.$modalOpenButton.addEventListener('click', this.clickModalOpenButton.bind(this));
      this.mainView.$watchLaterButton.addEventListener('click', this.clickWatchLaterButton.bind(this));
      this.mainView.$watchedButton.addEventListener('click', this.clickWatchedButton.bind(this));
      this.mainView.$storedVideoList.addEventListener('click', this.clickSwitchButton.bind(this));
      this.mainView.$storedVideoList.addEventListener('click', this.clickDeleteButton.bind(this));
      this.modalView.bindOnClickSearchButton(this.clickSearchButton.bind(this));
      this.modalView.bindOnClickDimmer(this.clickDimmer.bind(this));
      this.modalView.bindVideoListScroll(this.videoListScroll.bind(this));
      this.modalView.bindOnClickStoreButton(this.clickStoreButton.bind(this));
    }
  }, {
    key: "clickWatchLaterButton",
    value: function clickWatchLaterButton() {
      this.mainView.renderWatchLaterVideos();
    }
  }, {
    key: "clickWatchedButton",
    value: function clickWatchedButton() {
      this.mainView.renderWatchedVideos();
    }
  }, {
    key: "clickSwitchButton",
    value: function clickSwitchButton(e) {
      if (e.target.classList.contains('switch-show-type')) {
        var videoId = e.target.dataset.videoId;
        _videoStorage_js__WEBPACK_IMPORTED_MODULE_6__["default"].swtichVideoType(videoId);
        this.mainView.switchRenderingType(e);
      }
    }
  }, {
    key: "clickDeleteButton",
    value: function clickDeleteButton(e) {
      if (e.target.classList.contains('delete-button')) {
        if (window.confirm(_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.USER_MESSAGE.WANT_DELETE)) {
          var videoId = e.target.dataset.videoId;
          _videoStorage_js__WEBPACK_IMPORTED_MODULE_6__["default"].deleteVideo(videoId);
          this.mainView.deleteSelectedVideo(e);
        }
      }
    }
  }, {
    key: "clickModalOpenButton",
    value: function clickModalOpenButton() {
      this.modalView.showModal();
    }
  }, {
    key: "clickDimmer",
    value: function clickDimmer() {
      this.modalView.hideModal();
    }
  }, {
    key: "clickStoreButton",
    value: function clickStoreButton(videoData) {
      _videoStorage_js__WEBPACK_IMPORTED_MODULE_6__["default"].storeVideo(videoData);
      this.mainView.renderAddedVideo(videoData);
      this.mainView.decideRenderEmptyImage();
    }
  }, {
    key: "clickSearchButton",
    value: function () {
      var _clickSearchButton = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(searchInput) {
        var videoListData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _utils_validator_js__WEBPACK_IMPORTED_MODULE_5__["default"].validateSearchInput(searchInput);
                this.modalView.resetVideoList();
                this.modalView.appendEmptyList();
                this.modalView.appendVideoItem();
                this.modalView.renderSkeletonUI();
                _context.next = 8;
                return _videoAPI_js__WEBPACK_IMPORTED_MODULE_4__["default"].searchVideos(searchInput);

              case 8:
                videoListData = _context.sent;
                this.modalView.renderVideoList((0,_utils_common_js__WEBPACK_IMPORTED_MODULE_8__.preprocessVideoInfo)(videoListData));
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                alert(_context.t0.message);
                this.modalView.focusSearch();

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function clickSearchButton(_x) {
        return _clickSearchButton.apply(this, arguments);
      }

      return clickSearchButton;
    }()
  }, {
    key: "videoListScroll",
    value: function () {
      var _videoListScroll = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(searchInput) {
        var videoListData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.modalView.appendEmptyList();
                this.modalView.appendVideoItem();
                this.modalView.renderSkeletonUI();
                _context2.next = 6;
                return _videoAPI_js__WEBPACK_IMPORTED_MODULE_4__["default"].searchVideos(searchInput);

              case 6:
                videoListData = _context2.sent;
                this.modalView.renderVideoList((0,_utils_common_js__WEBPACK_IMPORTED_MODULE_8__.preprocessVideoInfo)(videoListData));
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                alert(_context2.t0.message);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      function videoListScroll(_x2) {
        return _videoListScroll.apply(this, arguments);
      }

      return videoListScroll;
    }()
  }]);

  return EventHandler;
}();



/***/ }),

/***/ "./src/js/utils/common.js":
/*!********************************!*\
  !*** ./src/js/utils/common.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "preprocessVideoInfo": () => (/* binding */ preprocessVideoInfo),
/* harmony export */   "throttle": () => (/* binding */ throttle),
/* harmony export */   "transformDate": () => (/* binding */ transformDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/js/utils/constants.js");


var $ = function $(selector) {
  return document.querySelector(selector);
};
var transformDate = function transformDate(dateString) {
  var _dateString$slice$spl = dateString.slice(0, 10).split('-'),
      _dateString$slice$spl2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_dateString$slice$spl, 3),
      year = _dateString$slice$spl2[0],
      month = _dateString$slice$spl2[1],
      date = _dateString$slice$spl2[2];

  return "".concat(year, "\uB144 ").concat(month, "\uC6D4 ").concat(date, "\uC77C");
};
var throttle = function throttle(callback) {
  var delayTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var throttleTimer = null;
  return function () {
    for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
      parameters[_key] = arguments[_key];
    }

    if (!throttleTimer) {
      throttleTimer = setTimeout(function () {
        throttleTimer = null;
        callback.apply(void 0, parameters);
      }, delayTime);
    }
  };
};
var preprocessVideoInfo = function preprocessVideoInfo(videos) {
  return videos.map(function (video) {
    return {
      videoId: video.videoId,
      publishedAt: transformDate(video.publishedAt),
      title: video.title,
      url: video.url,
      channelTitle: video.channelTitle,
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.VIDEO_TYPE.WATCH_LATER
    };
  });
};

/***/ }),

/***/ "./src/js/utils/constants.js":
/*!***********************************!*\
  !*** ./src/js/utils/constants.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM_STRING": () => (/* binding */ DOM_STRING),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "EVENT": () => (/* binding */ EVENT),
/* harmony export */   "STORE": () => (/* binding */ STORE),
/* harmony export */   "USER_MESSAGE": () => (/* binding */ USER_MESSAGE),
/* harmony export */   "VIDEO_LIST": () => (/* binding */ VIDEO_LIST),
/* harmony export */   "VIDEO_TYPE": () => (/* binding */ VIDEO_TYPE)
/* harmony export */ });
var DOM_STRING = {
  MODAL_CONTAINER: '.modal-container',
  DIMMER: '.dimmer',
  VIDEO_LIST: '.video-list',
  SEARCH_BUTTOM: '.search-input__search-button',
  SEARCH_INPUT: '.search-input__keyword',
  SEARCH_NO_RESULT: '.search-result.search-result--no-result',
  HIDE: 'hide',
  MODAL_OPEN_BUTTON: '#search-modal-button',
  SKELETON: 'skeleton',
  VIDEO_ITEM_SAVE_BUTTON: 'video-item__save-button',
  NO_RESULT_IMAGE: '.no-result__image',
  SEARCH_RESULT: '.search-result',
  WATCH_LATER_BUTTON: '#watch-later-button',
  WATCHED_BUTTON: '#watched-button',
  STORED_VIDEO_LIST: '.stored-video-list',
  EMPTY_LIST_IMAGE: '.empty-list-image'
};
var ERROR_MESSAGE = {
  CANNOT_LOAD: '링크를 불러오지 못했습니다.',
  SEARCH_ERROR: '검색 중 오류가 발생했습니다.',
  OVER_MAX_STORE_LENGTH: '최대 100개까지만 저장 가능합니다.',
  EMPTY_INPUT: '입력된 글자가 없습니다. 한 글자 이상의 검색어를 입력해주세요.'
};
var STORE = {
  MAX_LENGTH: 100
};
var VIDEO_LIST = {
  RENDER_SIZE: 10
};
var EVENT = {
  KEYBOARD: {
    ENTER: 13
  },
  SCROLL: {
    OFFSET: 50
  }
};
var VIDEO_TYPE = {
  WATCH_LATER: 'watch-later',
  WATCHED: 'watched'
};
var USER_MESSAGE = {
  WANT_DELETE: '정말 삭제 하시겠습니까?'
};

/***/ }),

/***/ "./src/js/utils/validator.js":
/*!***********************************!*\
  !*** ./src/js/utils/validator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/js/utils/constants.js");


function isEmptyInput(searchInput) {
  return searchInput.trim() === '';
}

var validator = {
  validateSearchInput: function validateSearchInput(searchInput) {
    if (isEmptyInput(searchInput)) {
      throw new Error(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.EMPTY_INPUT);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);

/***/ }),

/***/ "./src/js/videoAPI.js":
/*!****************************!*\
  !*** ./src/js/videoAPI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./src/js/utils/constants.js");



var videoAPI = {
  baseURL: 'https://keen-lamport-feb29e.netlify.app/youtube/v3/search',
  pageToken: '',
  part: 'snippet',
  maxResults: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.VIDEO_LIST.RENDER_SIZE,
  type: 'video',
  regionCode: 'KR',
  fetchData: function () {
    var _fetchData = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(inputValue) {
      var response, responseData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(this.baseURL, "?part=").concat(this.part, "&q=").concat(inputValue, "&pageToken=").concat(this.pageToken, "&maxResults=").concat(this.maxResults, "&type=").concat(this.type, "&regionCode=").concat(this.regionCode));

            case 3:
              response = _context.sent;

              if (response.ok) {
                _context.next = 6;
                break;
              }

              throw new Error();

            case 6:
              _context.next = 8;
              return response.json();

            case 8:
              responseData = _context.sent;
              return _context.abrupt("return", responseData);

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              throw new Error(_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.SEARCH_ERROR);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 12]]);
    }));

    function fetchData(_x) {
      return _fetchData.apply(this, arguments);
    }

    return fetchData;
  }(),
  checkResponseError: function checkResponseError(responseData) {
    if (responseData.error) {
      throw new Error(_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.CANNOT_LOAD);
    }

    return false;
  },
  parsingVideoData: function parsingVideoData(responseData) {
    var _this = this;

    this.checkResponseError(responseData);
    this.pageToken = responseData.nextPageToken;
    return responseData.items.map(function (item) {
      return _this.parseTemplate(item);
    });
  },
  searchVideos: function () {
    var _searchVideos = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(searchInput) {
      var rawData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.fetchData(searchInput);

            case 2:
              rawData = _context2.sent;
              return _context2.abrupt("return", this.parsingVideoData(rawData));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function searchVideos(_x2) {
      return _searchVideos.apply(this, arguments);
    }

    return searchVideos;
  }(),
  parseTemplate: function parseTemplate(item) {
    return {
      videoId: item.id.videoId,
      publishedAt: item.snippet.publishedAt,
      title: item.snippet.title,
      url: item.snippet.thumbnails.medium.url,
      channelTitle: item.snippet.channelTitle
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (videoAPI);

/***/ }),

/***/ "./src/js/videoStorage.js":
/*!********************************!*\
  !*** ./src/js/videoStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./src/js/utils/constants.js");


var videoStorage = {
  KEYS: {
    VIDEO_LIST: 'videoList'
  },
  savedVideoList: JSON.parse(localStorage.getItem('videoList')) || [],
  storeVideo: function storeVideo(videoData) {
    if (!this.hasVideo(videoData.videoId)) {
      this.savedVideoList.push(videoData);
      localStorage.setItem(this.KEYS.VIDEO_LIST, JSON.stringify(this.savedVideoList));
    }
  },
  hasVideo: function hasVideo(videoId) {
    return this.savedVideoList.some(function (videoData) {
      return videoData.videoId === videoId;
    });
  },
  checkOverMaxLength: function checkOverMaxLength() {
    if (this.savedVideoList.length >= _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.STORE.MAX_LENGTH) {
      throw new Error(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.OVER_MAX_STORE_LENGTH);
    }
  },
  deleteVideo: function deleteVideo(videoId) {
    if (this.hasVideo(videoId)) {
      this.savedVideoList.splice(this.findVideoIndex(videoId), 1);
      localStorage.setItem(this.KEYS.VIDEO_LIST, JSON.stringify(this.savedVideoList));
    }
  },
  findVideoIndex: function findVideoIndex(videoId) {
    return this.savedVideoList.findIndex(function (videoData) {
      return videoData.videoId === videoId;
    });
  },
  swtichVideoType: function swtichVideoType(videoId) {
    var selectedVideoIndex = this.findVideoIndex(videoId);
    var selectedVideo = this.savedVideoList[selectedVideoIndex];
    selectedVideo.type = selectedVideo.type === _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.VIDEO_TYPE.WATCH_LATER ? _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.VIDEO_TYPE.WATCHED : _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.VIDEO_TYPE.WATCH_LATER;
    this.deleteVideo(videoId);
    var newVideoList = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.savedVideoList), [selectedVideo]);
    this.savedVideoList = newVideoList;
    localStorage.setItem(this.KEYS.VIDEO_LIST, JSON.stringify(newVideoList));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (videoStorage);

/***/ }),

/***/ "./src/js/view/MainView.js":
/*!*********************************!*\
  !*** ./src/js/view/MainView.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/constants.js */ "./src/js/utils/constants.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/common.js */ "./src/js/utils/common.js");
/* harmony import */ var _videoStorage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../videoStorage.js */ "./src/js/videoStorage.js");
/* harmony import */ var _assets_images_empty_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/empty.png */ "./src/assets/images/empty.png");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template.js */ "./src/js/view/template.js");






function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }







var _showType = /*#__PURE__*/new WeakMap();

var MainView = /*#__PURE__*/function () {
  function MainView() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MainView);

    _classPrivateFieldInitSpec(this, _showType, {
      writable: true,
      value: _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.VIDEO_TYPE.WATCH_LATER
    });

    this.registerDOM();
    this.renderStoredVideoList();
    this.renderWatchLaterVideos();
    this.decideRenderEmptyImage();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MainView, [{
    key: "showType",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _showType);
    },
    set: function set(type) {
      if ((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _showType) === type) {
        return;
      }

      if (type !== _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.VIDEO_TYPE.WATCH_LATER && type !== _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.VIDEO_TYPE.WATCHED) {
        return;
      }

      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _showType, type);
    }
  }, {
    key: "registerDOM",
    value: function registerDOM() {
      this.$modalOpenButton = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_6__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.DOM_STRING.MODAL_OPEN_BUTTON);
      this.$watchLaterButton = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_6__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.DOM_STRING.WATCH_LATER_BUTTON);
      this.$watchedButton = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_6__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.DOM_STRING.WATCHED_BUTTON);
      this.$storedVideoList = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_6__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.DOM_STRING.STORED_VIDEO_LIST);
      this.$emptyListImage = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_6__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.DOM_STRING.EMPTY_LIST_IMAGE);
      this.$emptyListImage.src = _assets_images_empty_png__WEBPACK_IMPORTED_MODULE_8__["default"];
    }
  }, {
    key: "renderStoredVideoList",
    value: function renderStoredVideoList() {
      var template = _videoStorage_js__WEBPACK_IMPORTED_MODULE_7__["default"].savedVideoList.map(function (videoData) {
        return (0,_template_js__WEBPACK_IMPORTED_MODULE_9__.storedVideoListTemplate)(videoData);
      });
      this.$storedVideoList.insertAdjacentHTML('beforeend', template.join(''));
    }
  }, {
    key: "renderWatchLaterVideos",
    value: function renderWatchLaterVideos() {
      this.showType = _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.VIDEO_TYPE.WATCH_LATER;
      this.$watchLaterButton.classList.add('selected__button');
      this.$watchedButton.classList.remove('selected__button');

      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$storedVideoList.children).forEach(function (el) {
        if (el.classList.contains(_utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.VIDEO_TYPE.WATCH_LATER)) {
          el.classList.remove(_utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.DOM_STRING.HIDE);
          return;
        }

        el.classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.DOM_STRING.HIDE);
      });

      this.decideRenderEmptyImage();
    }
  }, {
    key: "renderWatchedVideos",
    value: function renderWatchedVideos() {
      this.showType = _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.VIDEO_TYPE.WATCHED;
      this.$watchedButton.classList.add('selected__button');
      this.$watchLaterButton.classList.remove('selected__button');

      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$storedVideoList.children).forEach(function (el) {
        if (el.classList.contains(_utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.VIDEO_TYPE.WATCHED)) {
          el.classList.remove(_utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.DOM_STRING.HIDE);
          return;
        }

        el.classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.DOM_STRING.HIDE);
      });

      this.decideRenderEmptyImage();
    }
  }, {
    key: "switchRenderingType",
    value: function switchRenderingType(e) {
      var selectedVideoDOM = e.target.parentElement;
      var storedList = _videoStorage_js__WEBPACK_IMPORTED_MODULE_7__["default"].savedVideoList;
      var switchedVideo = storedList[storedList.length - 1];
      selectedVideoDOM.remove();
      this.renderSwitchedVideo(switchedVideo);
      this.decideRenderEmptyImage();
    }
  }, {
    key: "deleteSelectedVideo",
    value: function deleteSelectedVideo(e) {
      e.target.parentElement.remove();
      this.decideRenderEmptyImage();
    }
  }, {
    key: "renderAddedVideo",
    value: function renderAddedVideo(video) {
      var template = this.showType === _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.VIDEO_TYPE.WATCHED ? (0,_template_js__WEBPACK_IMPORTED_MODULE_9__.hideVideoTemplate)(video) : (0,_template_js__WEBPACK_IMPORTED_MODULE_9__.showVideoTemplate)(video);
      this.$storedVideoList.insertAdjacentHTML('beforeend', template);
    }
  }, {
    key: "renderSwitchedVideo",
    value: function renderSwitchedVideo(video) {
      var template = (0,_template_js__WEBPACK_IMPORTED_MODULE_9__.hideVideoTemplate)(video);
      this.$storedVideoList.insertAdjacentHTML('beforeend', template);
    }
  }, {
    key: "decideRenderEmptyImage",
    value: function decideRenderEmptyImage() {
      var checkRendering = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$storedVideoList.children).every(function (el) {
        return el.classList.contains(_utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.DOM_STRING.HIDE);
      });

      this.$storedVideoList.classList.toggle(_utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.DOM_STRING.HIDE, checkRendering);
      this.$emptyListImage.classList.toggle(_utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.DOM_STRING.HIDE, !checkRendering);
    }
  }]);

  return MainView;
}();



/***/ }),

/***/ "./src/js/view/ModalView.js":
/*!**********************************!*\
  !*** ./src/js/view/ModalView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _VideoItemView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VideoItemView.js */ "./src/js/view/VideoItemView.js");
/* harmony import */ var _videoStorage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../videoStorage.js */ "./src/js/videoStorage.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/constants.js */ "./src/js/utils/constants.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/common.js */ "./src/js/utils/common.js");
/* harmony import */ var _assets_images_not_found_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/not_found.png */ "./src/assets/images/not_found.png");










var ModalView = /*#__PURE__*/function () {
  function ModalView() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ModalView);

    this.registerDOM();
    this.registerImage();
    this.videoItemList = [];
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ModalView, [{
    key: "registerDOM",
    value: function registerDOM() {
      this.$modalContainer = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_7__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.MODAL_CONTAINER);
      this.$dimmer = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_7__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.DIMMER);
      this.$videoList = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_7__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.VIDEO_LIST);
      this.$searchButton = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_7__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.SEARCH_BUTTOM);
      this.$searchInput = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_7__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.SEARCH_INPUT);
      this.$searchNoResult = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_7__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.SEARCH_NO_RESULT);
      this.$searchReslt = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_7__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.SEARCH_RESULT);
      this.$noResultImage = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_7__.$)(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.NO_RESULT_IMAGE);
    }
  }, {
    key: "registerImage",
    value: function registerImage() {
      this.$noResultImage.src = _assets_images_not_found_png__WEBPACK_IMPORTED_MODULE_8__["default"];
    }
  }, {
    key: "showResult",
    value: function showResult() {
      this.$searchReslt.classList.remove(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.HIDE);
      this.$searchNoResult.classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.HIDE);
    }
  }, {
    key: "showNoResult",
    value: function showNoResult() {
      this.$searchNoResult.classList.remove(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.HIDE);
      this.$searchReslt.classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.HIDE);
    }
  }, {
    key: "showModal",
    value: function showModal() {
      this.$modalContainer.classList.remove(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.HIDE);
      this.showResult();
      this.$searchInput.value = '';
      this.focusSearch();
    }
  }, {
    key: "hideModal",
    value: function hideModal() {
      this.$modalContainer.classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.HIDE);
    }
  }, {
    key: "bindOnClickDimmer",
    value: function bindOnClickDimmer(callback) {
      this.$dimmer.addEventListener('click', callback);
    }
  }, {
    key: "bindOnClickSearchButton",
    value: function bindOnClickSearchButton(callback) {
      var _this = this;

      this.$searchButton.addEventListener('click', function () {
        callback(_this.$searchInput.value);
      });
      this.$searchInput.addEventListener('keyup', function (e) {
        if (e.keyCode === _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.EVENT.KEYBOARD.ENTER) {
          callback(_this.$searchInput.value);
        }
      });
    }
  }, {
    key: "bindVideoListScroll",
    value: function bindVideoListScroll(callback) {
      this.$videoList.addEventListener('scroll', (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_7__.throttle)(this.scrollToBottom.bind(this, callback)));
    }
  }, {
    key: "bindOnClickStoreButton",
    value: function bindOnClickStoreButton(callback) {
      var _this2 = this;

      this.$videoList.addEventListener('click', function (event) {
        try {
          if (event.target.classList.contains(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.VIDEO_ITEM_SAVE_BUTTON)) {
            _videoStorage_js__WEBPACK_IMPORTED_MODULE_5__["default"].checkOverMaxLength();
            var clickedVideo = event.target.parentElement;
            event.target.classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.HIDE);
            callback(_this2.parseVideoInfo(clickedVideo));
          }
        } catch (error) {
          alert(error.message);
        }
      });
    }
  }, {
    key: "scrollToBottom",
    value: function scrollToBottom(callback) {
      var isScrollBottom = this.$videoList.scrollHeight - this.$videoList.scrollTop <= this.$videoList.offsetHeight + _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.EVENT.SCROLL.OFFSET;

      if (isScrollBottom) {
        callback(this.$searchInput.value);
      }
    }
  }, {
    key: "resetVideoList",
    value: function resetVideoList() {
      this.$searchNoResult.classList.add(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.HIDE);
      this.$videoList.classList.remove(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.DOM_STRING.HIDE);
      this.$videoList.textContent = '';
      this.videoItemList = [];
    }
  }, {
    key: "appendEmptyList",
    value: function appendEmptyList() {
      this.$videoList.insertAdjacentHTML('beforeend', '<li></li>'.repeat(_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.VIDEO_LIST.RENDER_SIZE));
    }
  }, {
    key: "appendVideoItem",
    value: function appendVideoItem() {
      var _this3 = this;

      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.$videoList.childNodes).slice(-_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.VIDEO_LIST.RENDER_SIZE).forEach(function (li) {
        _this3.videoItemList.push(new _VideoItemView_js__WEBPACK_IMPORTED_MODULE_4__["default"](li));
      });
    }
  }, {
    key: "renderSkeletonUI",
    value: function renderSkeletonUI() {
      this.videoItemList.slice(-_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.VIDEO_LIST.RENDER_SIZE).forEach(function (videoItem) {
        return videoItem.renderSkeletonList();
      });
    }
  }, {
    key: "renderVideoList",
    value: function renderVideoList(videoList) {
      this.showResult();

      if (videoList.length === 0) {
        this.showNoResult();
        return;
      }

      this.hideSkeletonTemplates(videoList);
      this.videoItemList.slice(-videoList.length).forEach(function (videoItem, index) {
        return videoItem.renderSearchVideoList(videoList[index]);
      });
    }
  }, {
    key: "hideSkeletonTemplates",
    value: function hideSkeletonTemplates(videoList) {
      if (videoList.length < _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.VIDEO_LIST.RENDER_SIZE) {
        this.videoItemList.slice(-_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.VIDEO_LIST.RENDER_SIZE).slice(0, videoList.length).forEach(function (el) {
          el.$element.classList.add('hide');
        });
      }
    }
  }, {
    key: "focusSearch",
    value: function focusSearch() {
      this.$searchInput.focus();
    }
  }, {
    key: "parseVideoInfo",
    value: function parseVideoInfo(videoInfo) {
      var _videoInfo$children = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(videoInfo.children, 5),
          thumbnailImg = _videoInfo$children[0],
          title = _videoInfo$children[1],
          channelTitle = _videoInfo$children[2],
          publishedAt = _videoInfo$children[3],
          videoId = _videoInfo$children[4];

      return {
        videoId: videoId.dataset.videoId,
        publishedAt: publishedAt.textContent,
        title: title.textContent,
        url: thumbnailImg.src,
        channelTitle: channelTitle.textContent,
        type: _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__.VIDEO_TYPE.WATCH_LATER
      };
    }
  }]);

  return ModalView;
}();



/***/ }),

/***/ "./src/js/view/VideoItemView.js":
/*!**************************************!*\
  !*** ./src/js/view/VideoItemView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoItemView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template.js */ "./src/js/view/template.js");




var VideoItemView = /*#__PURE__*/function () {
  function VideoItemView($element) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VideoItemView);

    this.$element = $element;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VideoItemView, [{
    key: "renderSearchVideoList",
    value: function renderSearchVideoList(parseData) {
      var template = (0,_template_js__WEBPACK_IMPORTED_MODULE_2__.videoListTemplate)(parseData);
      this.$element.textContent = '';
      this.$element.insertAdjacentHTML('afterbegin', template);
    }
  }, {
    key: "renderSkeletonList",
    value: function renderSkeletonList() {
      var template = (0,_template_js__WEBPACK_IMPORTED_MODULE_2__.skeletonTemplate)();
      this.$element.textContent = '';
      this.$element.insertAdjacentHTML('afterbegin', template);
    }
  }]);

  return VideoItemView;
}();



/***/ }),

/***/ "./src/js/view/template.js":
/*!*********************************!*\
  !*** ./src/js/view/template.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideVideoTemplate": () => (/* binding */ hideVideoTemplate),
/* harmony export */   "showVideoTemplate": () => (/* binding */ showVideoTemplate),
/* harmony export */   "skeletonTemplate": () => (/* binding */ skeletonTemplate),
/* harmony export */   "storedVideoListTemplate": () => (/* binding */ storedVideoListTemplate),
/* harmony export */   "videoListTemplate": () => (/* binding */ videoListTemplate)
/* harmony export */ });
/* harmony import */ var _videoStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../videoStorage.js */ "./src/js/videoStorage.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.js */ "./src/js/utils/constants.js");


var videoListTemplate = function videoListTemplate(parseData) {
  return "\n  <li class=\"video-item\">\n    <img\n      src=".concat(parseData.url, "\n      alt=\"video-item-thumbnail\" class=\"video-item__thumbnail\"\n      loading=\"lazy\" />\n    <h4 class=\"video-item__title\">").concat(parseData.title, "</h4>\n    <p class=\"video-item__channel-name\">").concat(parseData.channelTitle, "</p>\n    <p class=\"video-item__published-date\">").concat(parseData.publishedAt, "</p>\n    <button data-video-id=").concat(parseData.videoId, " class=\"video-item__save-button button ").concat(_videoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasVideo(parseData.videoId) ? "".concat(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.DOM_STRING.HIDE) : '', "\">\u2B07 \uC800\uC7A5</button>\n  </li>\n  ");
};
var skeletonTemplate = function skeletonTemplate() {
  return "\n  <li class=\"video-item\">\n    <div class=\"video-item__thumbnail skeleton\"></div>\n    <div class=\"video-item__title skeleton\"></div>\n    <div class=\"video-item__channel-name skeleton\"></div>\n    <div class=\"video-item__published-date skeleton\"></div>\n    <div class=\"video-item__save-button skeleton\"></div>\n  </li>\n  ";
};
var storedVideoListTemplate = function storedVideoListTemplate(video) {
  return "\n  <li class=\"video-item ".concat(video.type, "\">\n    <img\n      src=").concat(video.url, "\n      alt=\"video-item-thumbnail\" class=\"video-item__thumbnail\"\n      loading=\"lazy\" />\n    <h4 class=\"video-item__title\">").concat(video.title, "</h4>\n    <p class=\"video-item__channel-name\">").concat(video.channelTitle, "</p>\n    <p class=\"video-item__published-date\">").concat(video.publishedAt, "</p>\n    <button data-video-id=").concat(video.videoId, " class=\"switch-show-type button ").concat(video.type === _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.VIDEO_TYPE.WATCH_LATER ? '' : 'clicked', "\">\u2705</button>\n    <button data-video-id=").concat(video.videoId, " class=\"delete-button button\">\uD83D\uDDD1\uFE0F</button>\n  </li>");
};
var showVideoTemplate = function showVideoTemplate(video) {
  return "\n  <li class=\"video-item ".concat(video.type, "\">\n    <img\n      src=").concat(video.url, "\n      alt=\"video-item-thumbnail\" class=\"video-item__thumbnail\"\n      loading=\"lazy\" />\n    <h4 class=\"video-item__title\">").concat(video.title, "</h4>\n    <p class=\"video-item__channel-name\">").concat(video.channelTitle, "</p>\n    <p class=\"video-item__published-date\">").concat(video.publishedAt, "</p>\n    <button data-video-id=").concat(video.videoId, " class=\"switch-show-type button ").concat(video.type === _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.VIDEO_TYPE.WATCH_LATER ? '' : 'clicked', "\">\u2705</button>\n    <button data-video-id=").concat(video.videoId, " class=\"delete-button button\">\uD83D\uDDD1\uFE0F</button>\n  </li>");
};
var hideVideoTemplate = function hideVideoTemplate(video) {
  return "\n  <li class=\"video-item ".concat(video.type, " hide\">\n    <img\n      src=").concat(video.url, "\n      alt=\"video-item-thumbnail\" class=\"video-item__thumbnail\"\n      loading=\"lazy\" />\n    <h4 class=\"video-item__title\">").concat(video.title, "</h4>\n    <p class=\"video-item__channel-name\">").concat(video.channelTitle, "</p>\n    <p class=\"video-item__published-date\">").concat(video.publishedAt, "</p>\n    <button data-video-id=").concat(video.videoId, " class=\"button switch-show-type ").concat(video.type === _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.VIDEO_TYPE.WATCH_LATER ? '' : 'clicked', "\">\u2705</button>\n    <button data-video-id=").concat(video.videoId, " class=\"delete-button button\">\uD83D\uDDD1\uFE0F</button>\n  </li>");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  padding: 10vh 0vw;\r\n  font-size: 16px;\r\n}\r\n\r\n#app {\r\n  margin: 0 auto;\r\n}\r\n\r\n.classroom-container__title {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: min(34px, 5vw);\r\n  line-height: 36px;\r\n  margin-bottom: 64px;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.button {\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  border: none;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  letter-spacing: 1.25px;\r\n}\r\n\r\n.nav__button {\r\n  width: 80px;\r\n  height: 36px;\r\n  background: var(--modalButton-color);\r\n}\r\n\r\n.nav__button:hover {\r\n  background: var(--modalButtonHover-color);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;AACtC;;AAEA;EACE,yCAAyC;AAC3C","sourcesContent":["body {\r\n  padding: 10vh 0vw;\r\n  font-size: 16px;\r\n}\r\n\r\n#app {\r\n  margin: 0 auto;\r\n}\r\n\r\n.classroom-container__title {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: min(34px, 5vw);\r\n  line-height: 36px;\r\n  margin-bottom: 64px;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.button {\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  border: none;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  letter-spacing: 1.25px;\r\n}\r\n\r\n.nav__button {\r\n  width: 80px;\r\n  height: 36px;\r\n  background: var(--modalButton-color);\r\n}\r\n\r\n.nav__button:hover {\r\n  background: var(--modalButtonHover-color);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/color.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/color.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --modalButton-color: #f5f5f5;\r\n  --modalButtonHover-color: #ebebeb;\r\n  --dimmer-color: rgba(0, 0, 0, 0.5);\r\n  --modalBorder-color: rgba(0, 0, 0, 0.12);\r\n  --inputBoxBorder-color: #b4b4b4;\r\n  --inputPlaceHolder-color: #8b8b8b;\r\n  --white-color: #ffffff;\r\n  --primary-color: #00bcd4;\r\n  --saveButton-color: #f9f9f9;\r\n  --saveButtonHover-color: #efefef;\r\n  --skeletonDefault-color: #e0e0e0;\r\n  --skeletonMoving-color: #ededed;\r\n  --selectedButton-color: rgba(0, 188, 212, 0.12);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/color.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,iCAAiC;EACjC,kCAAkC;EAClC,wCAAwC;EACxC,+BAA+B;EAC/B,iCAAiC;EACjC,sBAAsB;EACtB,wBAAwB;EACxB,2BAA2B;EAC3B,gCAAgC;EAChC,gCAAgC;EAChC,+BAA+B;EAC/B,+CAA+C;AACjD","sourcesContent":[":root {\r\n  --modalButton-color: #f5f5f5;\r\n  --modalButtonHover-color: #ebebeb;\r\n  --dimmer-color: rgba(0, 0, 0, 0.5);\r\n  --modalBorder-color: rgba(0, 0, 0, 0.12);\r\n  --inputBoxBorder-color: #b4b4b4;\r\n  --inputPlaceHolder-color: #8b8b8b;\r\n  --white-color: #ffffff;\r\n  --primary-color: #00bcd4;\r\n  --saveButton-color: #f9f9f9;\r\n  --saveButtonHover-color: #efefef;\r\n  --skeletonDefault-color: #e0e0e0;\r\n  --skeletonMoving-color: #ededed;\r\n  --selectedButton-color: rgba(0, 188, 212, 0.12);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAGA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,mCAAmC;AACrC;;AAEA;;;;EAIE,aAAa;AACf","sourcesContent":["@import './app.css';\r\n@import './modal.css';\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/mainView.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/mainView.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#watch-later-button,\r\n#watched-button {\r\n  min-width: 100px;\r\n  min-height: 36px;\r\n}\r\n\r\n.selected__button,\r\n.selected__button:hover,\r\n.clicked {\r\n  background-color: var(--selectedButton-color);\r\n}\r\n\r\n.stored-video-list,\r\n.video-list {\r\n  width: 100%;\r\n  margin-top: 5vh;\r\n  display: grid;\r\n  gap: 32px 20px;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.video-list {\r\n  margin-top: 0px;\r\n}\r\n\r\n.search-video-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nmain {\r\n  max-width: 80vw;\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n  .stored-video-list,\r\n  .video-list {\r\n    grid-template-columns: 240px 240px 240px 240px;\r\n  }\r\n}\r\n\r\n@media (min-width: 960px) and (max-width: 1280px) {\r\n  .stored-video-list,\r\n  .video-list {\r\n    grid-template-columns: 240px 240px 240px;\r\n  }\r\n}\r\n\r\n@media (min-width: 600px) and (max-width: 960px) {\r\n  .stored-video-list,\r\n  .video-list {\r\n    grid-template-columns: 240px 240px;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .stored-video-list,\r\n  .video-list {\r\n    grid-template-columns: 240px;\r\n  }\r\n}\r\n\r\n.switch-show-type {\r\n  position: absolute;\r\n  right: 15%;\r\n  bottom: 5%;\r\n  padding: 5px;\r\n}\r\n\r\n.delete-button {\r\n  position: absolute;\r\n  right: 0%;\r\n  bottom: 5%;\r\n  padding: 5px;\r\n}\r\n\r\n.stored-video-container {\r\n  flex-direction: column;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.empty-list-image {\r\n  margin-top: 10vh;\r\n  width: 30vw;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/mainView.css"],"names":[],"mappings":"AAAA;;EAEE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;;;EAGE,6CAA6C;AAC/C;;AAEA;;EAEE,WAAW;EACX,eAAe;EACf,aAAa;EACb,cAAc;EACd,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;;IAEE,8CAA8C;EAChD;AACF;;AAEA;EACE;;IAEE,wCAAwC;EAC1C;AACF;;AAEA;EACE;;IAEE,kCAAkC;EACpC;AACF;;AAEA;EACE;;IAEE,4BAA4B;EAC9B;AACF;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,WAAW;AACb","sourcesContent":["#watch-later-button,\r\n#watched-button {\r\n  min-width: 100px;\r\n  min-height: 36px;\r\n}\r\n\r\n.selected__button,\r\n.selected__button:hover,\r\n.clicked {\r\n  background-color: var(--selectedButton-color);\r\n}\r\n\r\n.stored-video-list,\r\n.video-list {\r\n  width: 100%;\r\n  margin-top: 5vh;\r\n  display: grid;\r\n  gap: 32px 20px;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.video-list {\r\n  margin-top: 0px;\r\n}\r\n\r\n.search-video-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nmain {\r\n  max-width: 80vw;\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n  .stored-video-list,\r\n  .video-list {\r\n    grid-template-columns: 240px 240px 240px 240px;\r\n  }\r\n}\r\n\r\n@media (min-width: 960px) and (max-width: 1280px) {\r\n  .stored-video-list,\r\n  .video-list {\r\n    grid-template-columns: 240px 240px 240px;\r\n  }\r\n}\r\n\r\n@media (min-width: 600px) and (max-width: 960px) {\r\n  .stored-video-list,\r\n  .video-list {\r\n    grid-template-columns: 240px 240px;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .stored-video-list,\r\n  .video-list {\r\n    grid-template-columns: 240px;\r\n  }\r\n}\r\n\r\n.switch-show-type {\r\n  position: absolute;\r\n  right: 15%;\r\n  bottom: 5%;\r\n  padding: 5px;\r\n}\r\n\r\n.delete-button {\r\n  position: absolute;\r\n  right: 0%;\r\n  bottom: 5%;\r\n  padding: 5px;\r\n}\r\n\r\n.stored-video-container {\r\n  flex-direction: column;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.empty-list-image {\r\n  margin-top: 10vh;\r\n  width: 30vw;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.modal-container.hide {\r\n  display: none;\r\n}\r\n\r\n.dimmer {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--dimmer-color);\r\n}\r\n\r\n.search-modal {\r\n  position: relative;\r\n  width: 80vw;\r\n  height: 98vh;\r\n  background: var(--white-color);\r\n  border: 1px solid var(--modalBorder-color);\r\n  border-radius: 4px;\r\n  padding: 50px 30px 32px 30px;\r\n}\r\n\r\n.search-modal__title {\r\n  font-weight: bold;\r\n  font-size: max(2.5vw, 24px);\r\n  line-height: 36px;\r\n  text-align: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input__keyword {\r\n  width: 30vw;\r\n  height: 36px;\r\n  margin-right: 20px;\r\n  padding: 4px 8px;\r\n  border: 1px solid var(--inputBoxBorder-color);\r\n  border-radius: 4px;\r\n}\r\n\r\n.search-input__keyword::placeholder {\r\n  color: var(--inputPlaceHolder-color);\r\n  font-size: 16px;\r\n}\r\n\r\n.search-input__search-button {\r\n  width: 72px;\r\n  height: 36px;\r\n  background: var(--primary-color);\r\n  color: var(--white-color);\r\n}\r\n\r\n.search-result.search-result--no-result {\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.no-result {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.no-result__image {\r\n  margin-top: 10%;\r\n  width: 190px;\r\n  height: 140px;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.no-result__description {\r\n  font-size: 16px;\r\n  line-height: 150%;\r\n  text-align: center;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.video-list {\r\n  max-height: 65vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 32px 20px;\r\n  overflow-y: scroll;\r\n  margin-bottom: 10vh;\r\n}\r\n\r\n.video-item {\r\n  position: relative;\r\n  width: 240px;\r\n  height: 255px;\r\n}\r\n\r\n.video-item__thumbnail {\r\n  width: 100%;\r\n  height: 135px;\r\n}\r\n\r\n.video-item__title {\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  height: 24px;\r\n  letter-spacing: 0.5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  margin: 4px 0;\r\n}\r\n\r\n.video-item__channel-name {\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  height: 24px;\r\n  letter-spacing: 0.5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.video-item__published-date {\r\n  font-size: 12px;\r\n  line-height: 24px;\r\n  height: 24px;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.video-item__save-button {\r\n  position: absolute;\r\n  right: 0;\r\n  width: 80px;\r\n  height: 36px;\r\n  background: var(--saveButton-color);\r\n  margin-top: 4px;\r\n}\r\n\r\n.video-item__save-button:hover {\r\n  background: var(--saveButtonHover-color);\r\n}\r\n\r\n/* Skeleton UI */\r\n.skeleton {\r\n  background-image: linear-gradient(\r\n    90deg,\r\n    var(--skeletonDefault-color) 0px,\r\n    var(--skeletonMoving-color) 30px,\r\n    var(--skeletonDefault-color) 60px\r\n  );\r\n  animation: refresh 2s infinite ease-out;\r\n}\r\n\r\n@keyframes refresh {\r\n  0% {\r\n    background-position: calc(-100px);\r\n  }\r\n  40%,\r\n  100% {\r\n    background-position: 320px;\r\n  }\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,0CAA0C;EAC1C,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,2BAA2B;EAC3B,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,6CAA6C;EAC7C,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gCAAgC;EAChC,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,mCAAmC;EACnC,eAAe;AACjB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA,gBAAgB;AAChB;EACE;;;;;GAKC;EACD,uCAAuC;AACzC;;AAEA;EACE;IACE,iCAAiC;EACnC;EACA;;IAEE,0BAA0B;EAC5B;AACF;;AAEA;EACE,aAAa;AACf","sourcesContent":[".modal-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.modal-container.hide {\r\n  display: none;\r\n}\r\n\r\n.dimmer {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--dimmer-color);\r\n}\r\n\r\n.search-modal {\r\n  position: relative;\r\n  width: 80vw;\r\n  height: 98vh;\r\n  background: var(--white-color);\r\n  border: 1px solid var(--modalBorder-color);\r\n  border-radius: 4px;\r\n  padding: 50px 30px 32px 30px;\r\n}\r\n\r\n.search-modal__title {\r\n  font-weight: bold;\r\n  font-size: max(2.5vw, 24px);\r\n  line-height: 36px;\r\n  text-align: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input__keyword {\r\n  width: 30vw;\r\n  height: 36px;\r\n  margin-right: 20px;\r\n  padding: 4px 8px;\r\n  border: 1px solid var(--inputBoxBorder-color);\r\n  border-radius: 4px;\r\n}\r\n\r\n.search-input__keyword::placeholder {\r\n  color: var(--inputPlaceHolder-color);\r\n  font-size: 16px;\r\n}\r\n\r\n.search-input__search-button {\r\n  width: 72px;\r\n  height: 36px;\r\n  background: var(--primary-color);\r\n  color: var(--white-color);\r\n}\r\n\r\n.search-result.search-result--no-result {\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.no-result {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.no-result__image {\r\n  margin-top: 10%;\r\n  width: 190px;\r\n  height: 140px;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.no-result__description {\r\n  font-size: 16px;\r\n  line-height: 150%;\r\n  text-align: center;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.video-list {\r\n  max-height: 65vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 32px 20px;\r\n  overflow-y: scroll;\r\n  margin-bottom: 10vh;\r\n}\r\n\r\n.video-item {\r\n  position: relative;\r\n  width: 240px;\r\n  height: 255px;\r\n}\r\n\r\n.video-item__thumbnail {\r\n  width: 100%;\r\n  height: 135px;\r\n}\r\n\r\n.video-item__title {\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  height: 24px;\r\n  letter-spacing: 0.5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  margin: 4px 0;\r\n}\r\n\r\n.video-item__channel-name {\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  height: 24px;\r\n  letter-spacing: 0.5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.video-item__published-date {\r\n  font-size: 12px;\r\n  line-height: 24px;\r\n  height: 24px;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.video-item__save-button {\r\n  position: absolute;\r\n  right: 0;\r\n  width: 80px;\r\n  height: 36px;\r\n  background: var(--saveButton-color);\r\n  margin-top: 4px;\r\n}\r\n\r\n.video-item__save-button:hover {\r\n  background: var(--saveButtonHover-color);\r\n}\r\n\r\n/* Skeleton UI */\r\n.skeleton {\r\n  background-image: linear-gradient(\r\n    90deg,\r\n    var(--skeletonDefault-color) 0px,\r\n    var(--skeletonMoving-color) 30px,\r\n    var(--skeletonDefault-color) 60px\r\n  );\r\n  animation: refresh 2s infinite ease-out;\r\n}\r\n\r\n@keyframes refresh {\r\n  0% {\r\n    background-position: calc(-100px);\r\n  }\r\n  40%,\r\n  100% {\r\n    background-position: 320px;\r\n  }\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/images/empty.png":
/*!*************************************!*\
  !*** ./src/assets/images/empty.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "4631295db7489572c897cefbbc079bdb.png");

/***/ }),

/***/ "./src/assets/images/not_found.png":
/*!*****************************************!*\
  !*** ./src/assets/images/not_found.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "6a8b7db4b5b4659f9362f35b5267b2b3.png");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/color.css":
/*!***************************!*\
  !*** ./src/css/color.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./color.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/color.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/mainView.css":
/*!******************************!*\
  !*** ./src/css/mainView.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mainView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./mainView.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/mainView.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mainView_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mainView_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mainView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mainView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorGet)
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorSet)
/* harmony export */ });
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classExtractFieldDescriptor)
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldGet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldSet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorSet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "set");
  (0,_classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor, value);
  return value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_color_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/color.css */ "./src/css/color.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/app.css */ "./src/css/app.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/modal.css */ "./src/css/modal.css");
/* harmony import */ var _css_mainView_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/mainView.css */ "./src/css/mainView.css");
/* harmony import */ var _event_EventHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/EventHandler.js */ "./src/js/event/EventHandler.js");
/* harmony import */ var _view_MainView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/MainView */ "./src/js/view/MainView.js");
/* harmony import */ var _view_ModalView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/ModalView */ "./src/js/view/ModalView.js");








var mainView = new _view_MainView__WEBPACK_IMPORTED_MODULE_6__["default"]();
var modalView = new _view_ModalView__WEBPACK_IMPORTED_MODULE_7__["default"]();
new _event_EventHandler_js__WEBPACK_IMPORTED_MODULE_5__["default"](mainView, modalView);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map