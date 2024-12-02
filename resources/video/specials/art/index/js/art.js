function playM3u8(video, url, art) {
    if (Hls.isSupported()) {
        if (art.hls) art.hls.destroy();
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        art.hls = hls;
        art.on('destroy', () => hls.destroy());
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
    } else {
        art.notice.show = 'Unsupported playback format: m3u8';
    }
}
var art = new Artplayer({
    container: '.artplayer-app',
    url: '../一个视频带你了解AMD苏姿丰.mp4.m3u8',
    setting: true,
    playsInline: true,
    backdrop: true,
    theme: '#FF69B4',
    autoplay: true,
    flip: true,
    pip: true,
    backdrop: true,
    playbackRate: true,
    miniProgressBar: true,
    aspectRatio: true,
    fullscreen: true,
    fullscreenWeb: true,
    autoOrientation: true,
    loop: true,
    airplay: true,    
    type: 'm3u8',
    customType: {
        m3u8: playM3u8,
    },
    icons: {
        loading: '<img src="">',
        state: '<img width="150" heigth="150" src="https://artplayer.org/assets/img/state.svg">',
        indicator: '<img width="16" heigth="16" src="https://artplayer.org/assets/img/indicator.svg">',
    },
});
art.storage.set('art', 'artplayer_settings');
art.storage.get('art');

art.on('ready', () => {
    art.hotkey.add(13, () => {
        art.fullscreenWeb = 'true';
    });
});