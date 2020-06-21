function start() {
  localUuid = createUUID();
 
  // check if "&displayName=xxx" is appended to URL, otherwise alert user to populate
  var urlParams = new URLSearchParams(window.location.search);
  localDisplayName = urlParams.get('displayName') || prompt('Enter your name', '');
  document.getElementById('localVideoContainer').appendChild(makeLabel(localDisplayName));
  // specify no audio for user media
  var constraints = {
    video: {
      width: {max: 320},
      height: {max: 240},
      frameRate: {max: 30},
    },
    audio: false,
  };
