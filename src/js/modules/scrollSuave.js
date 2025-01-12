const scrollSuave = {
  navButtons: document.querySelectorAll('[data-js="menu-links"] a[href^="#"]'),

  scrollSuave(event, button) {
    event.preventDefault();
    const buttonId = button.getAttribute('href');
    const section = document.querySelector(buttonId);
    section.scrollIntoView({ behavior: 'smooth' });
  },

  init() {
    this.navButtons.forEach((button) =>
      button.addEventListener('click', (event) => this.scrollSuave(event, button))
    );
  },
};

export default scrollSuave;
