(function transparentLoginFrom() {
  const app = document.querySelector('.app');

  const htmlPattern = `
  <div class='container'>
    <div class="form">
      <h3>Welcome</h3>
      <p> Email
      <input type='text'></input>
      </p>
      <p> Password
      <input type='text'></input>
      </p>
      <input class='signInBtn'type='submit' value='Sign In'></input>
    </div>
  </div>
  `;

  app.insertAdjacentHTML('afterbegin', htmlPattern);
})();
