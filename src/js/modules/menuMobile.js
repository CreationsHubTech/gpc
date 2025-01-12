const menuMobile = {
  checkbox: document.querySelector('#burger'),
  menuLinks: document.querySelector('[data-js="menu-links"]'),
  menuBotao: document.querySelector('[data-js="menuBotao"]'),

  abrirOuFecharMenu({ add, remove, ariaStatus }) {
    this.menuLinks.classList.add(add);
    this.menuLinks.classList.remove(remove);
    this.menuBotao.ariaExpanded = ariaStatus;
  },

  init() {
    this.checkbox.addEventListener('change', () => {
      this.checkbox.checked
        ? this.abrirOuFecharMenu({ add: 'abrir', remove: 'fechar', ariaStatus: true })
        : this.abrirOuFecharMenu({ add: 'fechar', remove: 'abrir', ariaStatus: false });
    });
  },
};

export default menuMobile;
