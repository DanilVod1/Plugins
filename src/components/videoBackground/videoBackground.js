(function videoBackground() {
  const app = document.querySelector('.app');
  const htmlPattern = `
  <div class="full-screen-video-container">
    <video poster="https://i.imgur.com/CSlRcW4.jpg" autoplay loop muted>
      <source src="https://github.com/WebDevSimplified/css-challenges/blob/master/Responsive%20Video%20Background/background_video.mp4?raw=true" type="video/mp4" />
    </video>
    <div class="full-screen-video-content">
      Paradise Awaits!
    </div>
  </div>
  `;

  app.insertAdjacentHTML('afterbegin', htmlPattern);
})();
