import CLASSNAME from "./constants.js";
import API_KEY from "./key.js";
import { $ } from "./querySelector.js";

const TEMPLATE = ({ videoId, title, channelId, channelTitle, publishedAt }) => `
<article class="clip">
<div class="preview-container">
  <iframe
    width="100%"
    height="118"
    src="https://www.youtube.com/embed/${videoId}"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content-container pt-2 px-1">
  <h3>${title}</h3>
  <div>
    <a
      href="https://www.youtube.com/channel/${channelId}"
      target="_blank"
      class="channel-name mt-1"
    >
      ${channelTitle}
    </a>
    <div class="meta">
      <p>${new Date(publishedAt).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}</p>
    </div>
    <div class="d-flex justify-end">
      <button class="btn">⬇️ 저장</button>
    </div>
  </div>
</div>
</article>`;

const $modal = $(CLASSNAME.MODAL);
const $modalClose = $(CLASSNAME.MODAL_CLOSE);
const $videoSearchTab = $(CLASSNAME.VIDEO_SEARCH_TAB);
const $youtubeSearchForm = $(CLASSNAME.YOUTUBE_SEARCH_FORM);
const $modalVideoWrapper = $(CLASSNAME.MODAL_VIDEO_WRAPPER);
const $notFoundImg = $(CLASSNAME.NOT_FOUND_IMAGE);

const onModalShow = () => {
  $modal.classList.add(CLASSNAME.OPEN);
};

const onModalClose = () => {
  $modal.classList.remove(CLASSNAME.OPEN);
};

const handleFormSubmit = async (event) => {
  event.preventDefault();

  const {
    target: {
      elements: {
        [CLASSNAME.YOUTUBE_SEARCH_FORM_INPUT]: { value: query },
      },
    },
  } = event;

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&regionCode=kr&safeSearch=strict&q=${query}}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const { items } = await response.json();
    const clipInfos = items.map(
      ({
        id: { videoId },
        snippet: { title, channelId, channelTitle, publishedAt },
      }) => ({
        videoId,
        title,
        channelId,
        channelTitle,
        publishedAt,
      })
    );

    if (clipInfos.length === 0) {
      $notFoundImg.classList.remove(CLASSNAME.HIDDEN);
      $modalVideoWrapper.innerHTML = "";
      return;
    }

    $modalVideoWrapper.innerHTML = clipInfos
      .map((clipInfo) => TEMPLATE(clipInfo))
      .join("");
    $notFoundImg.classList.add(CLASSNAME.HIDDEN);
  } catch (error) {
    // console.error(error);
  }
};

$videoSearchTab.addEventListener("click", onModalShow);
$modalClose.addEventListener("click", onModalClose);
$youtubeSearchForm.addEventListener("submit", handleFormSubmit);
