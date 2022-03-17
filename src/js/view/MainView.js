import { DOM_STRING } from '../utils/constants.js';
import { $ } from '../utils/common.js';
import videoStorage from '../videoStorage.js';

export default class MainView {
  constructor() {
    this.registerDOM();
    this.renderStoredVideoList();
    this.showType = 'watch-later';
    this.bindOnClickWatchLaterButton();
    this.onClickWatchLaterButton();
    this.bindOnClickWatchedButton();
    this.bindOnClickSwitchButton();
  }

  registerDOM() {
    this.$modalOpenButton = $(DOM_STRING.MODAL_OPEN_BUTTON);
    this.$watchLaterButton = $(DOM_STRING.WATCH_LATER_BUTTON);
    this.$watchedButton = $(DOM_STRING.WATCHED_BUTTON);
    this.$storedVideoList = $(DOM_STRING.STORED_VIDEO_LIST);
  }

  bindModalOpenButton(callback) {
    this.$modalOpenButton.addEventListener('click', callback);
  }

  bindOnClickWatchLaterButton() {
    this.$watchLaterButton.addEventListener('click', this.onClickWatchLaterButton.bind(this));
  }

  bindOnClickWatchedButton() {
    this.$watchedButton.addEventListener('click', this.onClickWatchedButton.bind(this));
  }

  bindOnClickSwitchButton() {
    this.$storedVideoList.addEventListener('click', e => {
      if ([...e.target.classList].includes('switch-show-type')) {
        const videoId = e.target.dataset.videoid;
        videoStorage.switchType(videoId);
        e.target.parentElement.remove();
        const storedList = videoStorage.getVideoDataList();
        this.renderSwitchedVideoData(storedList[storedList.length - 1]);
      }
    });
  }

  renderStoredVideoList() {
    const storedVideoList = videoStorage.getVideoDataList();
    storedVideoList.forEach(videoData => {
      const template = `
        <li class="video-item ${videoData.type}">
          <img
            src=${videoData.url}
            alt="video-item-thumbnail" class="video-item__thumbnail"
            loading="lazy" />
          <h4 class="video-item__title">${videoData.title}</h4>
          <p class="video-item__channel-name">${videoData.channelTitle}</p>
          <p class="video-item__published-date">${videoData.publishedAt}</p>
          <button data-videoid=${videoData.videoId} class="switch-show-type button ${
        videoData.type === 'watch-later' ? '' : 'clicked'
      }">✅</button>
          <button data-videoid=${videoData.videoId} class="button">🗑️</button>
        </li>`;

      this.$storedVideoList.insertAdjacentHTML('beforeend', template);
    });
  }

  onClickWatchLaterButton() {
    this.showType = 'watch-later';
    [...this.$storedVideoList.children].forEach(el => {
      if ([...el.classList].includes('watch-later')) {
        el.classList.remove('hide');
        return;
      }
      el.classList.add('hide');
    });
  }

  onClickWatchedButton() {
    this.showType = 'watched';
    [...this.$storedVideoList.children].forEach(el => {
      if ([...el.classList].includes('watched')) {
        el.classList.remove('hide');
        return;
      }
      el.classList.add('hide');
    });
  }

  renderAddedVideoData(videoData) {
    const template = `
    <li class="video-item ${videoData.type} ${this.showType === 'watch-later' ? '' : 'hide'}">
      <img
        src=${videoData.url}
        alt="video-item-thumbnail" class="video-item__thumbnail"
        loading="lazy" />
      <h4 class="video-item__title">${videoData.title}</h4>
      <p class="video-item__channel-name">${videoData.channelTitle}</p>
      <p class="video-item__published-date">${videoData.publishedAt}</p>
      <button data-videoid=${videoData.videoId} class="button switch-show-type ${
      videoData.type === 'watch-later' ? '' : 'clicked'
    }">✅</button>
      <button data-videoid=${videoData.videoId} class="button">🗑️</button>
    </li>`;

    this.$storedVideoList.insertAdjacentHTML('beforeend', template);
  }

  renderSwitchedVideoData(videoData) {
    const template = `
    <li class="video-item ${videoData.type} hide">
      <img
        src=${videoData.url}
        alt="video-item-thumbnail" class="video-item__thumbnail"
        loading="lazy" />
      <h4 class="video-item__title">${videoData.title}</h4>
      <p class="video-item__channel-name">${videoData.channelTitle}</p>
      <p class="video-item__published-date">${videoData.publishedAt}</p>
      <button data-videoid=${videoData.videoId} class="button switch-show-type ${
      videoData.type === 'watch-later' ? '' : 'clicked'
    }">✅</button>
      <button data-videoid=${videoData.videoId} class="button">🗑️</button>
    </li>`;

    this.$storedVideoList.insertAdjacentHTML('beforeend', template);
  }
}
