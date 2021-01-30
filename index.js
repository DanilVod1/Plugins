import './src/scss/style.scss';

class Component {
  constructor() {
    this.plugins = ['expandingCards', 'progressSteps'];
    this.currentPluginId = localStorage.getItem('pluginId') || 0;
  }

  render() {
    if (this.plugins[this.currentPluginId]) {
      const prevScript = document.querySelector('script');
      const prevLink = document.querySelectorAll('link');

      prevScript.src.includes('bundle')
        ? ''
        : prevScript.parentNode.removeChild(prevScript);

      prevLink.forEach((el) => {
        el.href.includes('main') ? '' : el.parentNode.removeChild(el);
      });

      const script = document.createElement('script');
      const link = document.createElement('link');

      const head = document.getElementsByTagName('head')[0];
      script.type = 'text/javascript';
      link.rel = 'stylesheet';

      script.src = `./src/components/${this.plugins[this.currentPluginId]}/${
        this.plugins[this.currentPluginId]
      }.js`;
      link.href = `./src/components/${this.plugins[this.currentPluginId]}/${
        this.plugins[this.currentPluginId]
      }.css`;
      head.appendChild(link);
      head.appendChild(script);
    }
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
      if (this.currentPluginId < this.plugins.length - 1) {
        this.currentPluginId = +this.currentPluginId + 1;
        this.toLocalStorage(+this.currentPluginId);
        super.render();
      }
    });

    this.prevBtn.addEventListener('click', () => {
      if (+this.currentPluginId > 0) {
        this.currentPluginId = this.currentPluginId - 1;
        this.toLocalStorage(this.currentPluginId);
        super.render();
      }
    });
  }
}

const navigation = new Navigation();
navigation;
