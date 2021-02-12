(function tab() {
  const dataJSON = {
    cat: [
      'https://images.unsplash.com/photo-1520315342629-6ea920342047?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
    ],
    dog: [
      'https://images.unsplash.com/photo-1596957901846-a0722f546502?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1082&q=80',
      'https://images.unsplash.com/photo-1586687338871-8f45320518dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1101&q=80',
    ],
    birds: [],
  };
  const app = document.querySelector('.app');
  const htmlPattern = `
  <div class='container'>
    <div class='header'>
      <h3>PETS</h3>
    </div>
    <div class='tabs'>
    ${createTabs()}
    </div>
    <div class='content'>
    </div>
  </div>
  `;

  function createTabs() {
    return Object.keys(dataJSON)
      .map((el) => {
        return `<div class='box'><div class='tab' data-tab='${el}'>
        ${el.toUpperCase()}
      </div></div>`;
      })
      .join('');
  }
  function createContent(key) {
    return dataJSON[key].map((el) => `<img src='${el}'>`).join('');
  }
  app.insertAdjacentHTML('afterbegin', htmlPattern);

  const content = document.querySelector('.content');
  const tabs = document.querySelector('.tabs');
  tabs.addEventListener('click', (event) => {
    document
      .querySelectorAll('.tab')
      .forEach((el) => el.classList.remove('active'));
    content.innerHTML = '';
    const tab = event.target.dataset.tab;
    event.target.classList.add('active');
    content.innerHTML = createContent(tab);
  });
})();
