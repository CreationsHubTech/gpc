const checkbox = document.querySelector('#burger');
const menuLinks = document.querySelector('[data-js="menu-links"]');
const menuBotao = document.querySelector('[data-js="menuBotao"]');

function abrirEFecharMenu(add, remove) {
  menuLinks.classList.add(add);
  menuLinks.classList.remove(remove);
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
