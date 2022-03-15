import VideoItemView from './VideoItemView.js';
import videoStorage from '../videoStorage.js';
import { DOM_STRING, EVENT, VIDEO_LIST } from '../utils/constants.js';
import { $ } from '../utils/common.js';
import notFoundImage from '../../assets/images/not_found.png';

export default class ModalView {
  constructor() {
    this.registerDOM();
    this.registerImage();
    this.videoItemList = [];
    this.throttle = null;
  }

  registerDOM() {
    this.$modalContainer = $(DOM_STRING.MODAL_CONTAINER);
    this.$dimmer = $(DOM_STRING.DIMMER);
    this.$videoList = $(DOM_STRING.VIDEO_LIST);
    this.$searchButton = $(DOM_STRING.SEARCH_BUTTOM);
    this.$searchInput = $(DOM_STRING.SEARCH_INPUT);
    this.$searchNoResult = $(DOM_STRING.SEARCH_NO_RESULT);
    this.$searchReslt = $(DOM_STRING.SEARCH_RESULT);
    this.$noResultImage = $(DOM_STRING.NO_RESULT_IMAGE);
  }

  registerImage() {
    this.$noResultImage.src = notFoundImage;
  }

  showResult() {
    this.$searchReslt.classList.remove(DOM_STRING.HIDE);
    this.$searchNoResult.classList.add(DOM_STRING.HIDE);
  }

  showNoResult() {
    this.$searchNoResult.classList.remove(DOM_STRING.HIDE);
    this.$searchReslt.classList.add(DOM_STRING.HIDE);
  }

  showModal() {
    this.$modalContainer.classList.remove(DOM_STRING.HIDE);
    this.showResult();
    this.$searchInput.value = '';
    this.focusSearch();
  }

  hideModal() {
    this.$modalContainer.classList.add(DOM_STRING.HIDE);
  }

  bindOnClickDimmer(callback) {
    this.$dimmer.addEventListener('click', callback);
  }

  bindOnClickSearchButton(callback) {
    this.$searchButton.addEventListener('click', () => {
      callback(this.$searchInput.value);
    });
    this.$searchInput.addEventListener('keyup', e => {
      if (e.keyCode === EVENT.KEYBOARD.ENTER) {
        callback(this.$searchInput.value);
      }
    });
  }

  bindVideoListScroll(callback) {
    this.$videoList.addEventListener('scroll', () => {
      if (!this.throttle) {
        this.throttle = setTimeout(async () => {
          this.throttle = null;
          if (
            this.$videoList.scrollHeight - this.$videoList.scrollTop <=
            this.$videoList.offsetHeight + EVENT.SCROLL.OFFSET
          ) {
            callback(this.$searchInput.value);
          }
        }, 1000);
      }
    });
  }

  bindVideoListClickStoreButton(callback) {
    this.$videoList.addEventListener('click', event => {
      try {
        if ([...event.target.classList].includes(DOM_STRING.VIDEO_ITEM_SAVE_BUTTON)) {
          videoStorage.checkOverMaxLength();
          event.target.classList.add(DOM_STRING.HIDE);
          callback(event.target.dataset.videoid);
        }
      } catch (error) {
        alert(error.message);
      }
    });
  }

  resetVideoList() {
    this.$searchNoResult.classList.add(DOM_STRING.HIDE);
    this.$videoList.classList.remove(DOM_STRING.HIDE);
    this.$videoList.textContent = '';
    this.videoItemList = [];
  }

  appendEmptyList() {
    this.$videoList.insertAdjacentHTML('beforeend', '<li></li>'.repeat(VIDEO_LIST.RENDER_SIZE));
  }

  appendVideoItem() {
    [...this.$videoList.childNodes].slice(-VIDEO_LIST.RENDER_SIZE).forEach(li => {
      this.videoItemList.push(new VideoItemView(li));
    });
  }

  renderSkeletonUI() {
    this.videoItemList
      .slice(-VIDEO_LIST.RENDER_SIZE)
      .forEach(videoItem => videoItem.getSkeletonTemplate());
  }

  renderVideoList(data) {
    this.showResult();
    if (data.length === 0) {
      this.showNoResult();
      return;
    }
    this.hideSkeletonTemplates(data);
    this.videoItemList
      .slice(-data.length)
      .forEach((videoItem, index) => videoItem.getVideoItemTemplate(data[index]));
  }

  hideSkeletonTemplates(data) {
    if (data.length < VIDEO_LIST.RENDER_SIZE) {
      this.videoItemList
        .slice(-VIDEO_LIST.RENDER_SIZE)
        .slice(0, data.length)
        .forEach(el => {
          el.$element.classList.add('hide');
        });
    }
  }

  focusSearch() {
    this.$searchInput.focus();
  }
}
