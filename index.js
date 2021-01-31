import './src/scss/style.scss';

class Component {
  constructor() {
    this.plugins = ['expandingCards', 'progressSteps'];
    this.currentPluginId = localStorage.getItem('pluginId') || 0;
  }

  render() {
    this.deleteImport();
    const head = document.getElementsByTagName('head')[0];

    head.appendChild(this.createScript());
    head.appendChild(this.createLink());
    createContents(this.plugins, this.currentPluginId);
  }
  deleteImport() {
    const prevScript = document.querySelector('script');
    const prevLink = document.querySelectorAll('link');

    prevScript.src.includes('bundle')
      ? ''
      : prevScript.parentNode.removeChild(prevScript);

    prevLink.forEach((el) => {
      el.href.includes('main') ? '' : el.parentNode.removeChild(el);
    });
  }
  createScript() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `./src/components/${this.plugins[this.currentPluginId]}/${
      this.plugins[this.currentPluginId]
    }.js`;
    return script;
  }
  createLink() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `./src/components/${this.plugins[this.currentPluginId]}/${
      this.plugins[this.currentPluginId]
    }.css`;
    return link;
  }
  toLocalStorage(id) {
    localStorage.getItem('pluginId')
      ? (localStorage.pluginId = id)
      : localStorage.setItem('pluginId', id);
  }
}
const component = new Component();
component.render();

class Navigation extends Component {
  constructor() {
    super();
    this.nextBtn = document.querySelector('.next');
    this.prevBtn = document.querySelector('.prev');

    this.nextBtn.addEventListener('click', () => {
      this.choosePlugin('nextPlugin');
    });

    this.prevBtn.addEventListener('click', () => {
      this.choosePlugin('prevPlugin');
    });
  }
  choosePlugin(step) {
    const border = step === 'nextPlugin' ? this.plugins.length - 1 : 0;
    const increment = step === 'nextPlugin' ? 1 : -1;
    if (this.currentPluginId > border || this.currentPluginId < border) {
      this.currentPluginId = +this.currentPluginId + increment;
      this.toLocalStorage(+this.currentPluginId);
      super.render();
    }
  }
}

function createContents(plugins, id) {
  const contents = document.querySelector('.contents');
  contents.innerHTML = '';
  const htmlPattern = `<ul class='contentList'>
    ${createList()}
    <ul>`;
  contents.insertAdjacentHTML('afterbegin', htmlPattern);

  function createList() {
    const list = plugins.map(
      (el, index) =>
        `<li class='pluginName' style='font-weight:${
          index == id ? 'bold' : 'light'
        }; text-decoration: ${index == id ? 'underline' : 'none'}'>${el}</li>`,
    );
    return list.join('');
  }
}
const navigation = new Navigation();
navigation;
