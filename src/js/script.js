const checkbox = document.querySelector('#burger');
const menuLinks = document.querySelector('[data-js="menu-links"]');
const menuBotao = document.querySelector('[data-js="menuBotao"]');
const navButtons = document.querySelectorAll('[data-js="menu-links"] a[href^="#"]');

function abrirEFecharMenu(add, remove) {
  menuLinks.classList.add(add);
  menuLinks.classList.remove(remove);
}

function scrollSuave(event, button) {
  event.preventDefault();
  const buttonId = button.getAttribute('href');
  const section = document.querySelector(buttonId);
  section.scrollIntoView({ behavior: 'smooth' });
}

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    abrirEFecharMenu('abrir', 'fechar');
    menuBotao.ariaExpanded = true;
    return;
  }

  abrirEFecharMenu('fechar', 'abrir');
  menuBotao.ariaExpanded = false;
});

navButtons.forEach((button) =>
  button.addEventListener('click', (event) => scrollSuave(event, button))
);
