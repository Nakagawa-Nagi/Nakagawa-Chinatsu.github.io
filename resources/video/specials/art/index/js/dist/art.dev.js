"use strict";

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function playM3u8(video, url, art) {
  if (Hls.isSupported()) {
    if (art.hls) art.hls.destroy();
    var hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
    art.hls = hls;
    art.on('destroy', function () {
      return hls.destroy();
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url;
  } else {
    art.notice.show = 'Unsupported playback format: m3u8';
  }
}

var art = new Artplayer((_ref = {
  container: '.artplayer-app',
  url: '../Grand Escape 钢琴.m3u8',
  setting: true,
  playsInline: true,
  backdrop: true,
  theme: '#FF69B4',
  autoplay: true,
  flip: true,
  pip: true
}, _defineProperty(_ref, "backdrop", true), _defineProperty(_ref, "playbackRate", true), _defineProperty(_ref, "miniProgressBar", true), _defineProperty(_ref, "aspectRatio", true), _defineProperty(_ref, "fullscreen", true), _defineProperty(_ref, "fullscreenWeb", true), _defineProperty(_ref, "autoOrientation", true), _defineProperty(_ref, "loop", true), _defineProperty(_ref, "airplay", true), _defineProperty(_ref, "type", 'm3u8'), _defineProperty(_ref, "customType", {
  m3u8: playM3u8
}), _defineProperty(_ref, "icons", {
  loading: '<img src="">',
  state: '<img width="150" heigth="150" src="https://artplayer.org/assets/img/state.svg">',
  indicator: '<img width="16" heigth="16" src="https://artplayer.org/assets/img/indicator.svg">'
}), _ref));
art.storage.set('art', 'artplayer_settings');
art.storage.get('art');
art.on('ready', function () {
  art.hotkey.add(13, function () {
    art.fullscreenWeb = 'true';
  });
});