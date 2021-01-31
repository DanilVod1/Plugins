function expandingCards() {
  const app = document.querySelector('.app');
  app.innerHTML = '';
  const htmlPattern = `<div class='container'>
    ${createPanel(4)}
  </div>`;
  function createPanel(quantity) {
    const image = {
      darkSand:
        'https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      darkWaves:
        'https://images.unsplash.com/photo-1501975558162-0be7b8ca95ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=800&q=60',
      womenSand:
        'https://images.unsplash.com/photo-1528184193806-0f2095c42e45?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      dogOcean:
        'https://images.unsplash.com/photo-1515709890607-3b99361f34bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    };
    const arr = Array(quantity)
      .fill('')
      .map((el, index) => {
        const obj = Object.entries(image);

        return `<div class='panel' style='background-image: url(${obj[index][1]})'>
        <h3>${obj[index][0]}</h3></div>`;
      });
    return arr.join('');
  }
  app.insertAdjacentHTML('afterbegin', htmlPattern);

  function activePanels() {
    const panels = document.querySelectorAll('.panel');
    panels.forEach((el) =>
      el.addEventListener('click', () => {
        panels.forEach((el) => el.classList.remove('active'));
        el.classList.add('active');
      }),
    );
  }
  activePanels();
}

expandingCards();
