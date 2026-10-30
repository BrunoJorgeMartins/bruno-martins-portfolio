// Interações do portfólio: menu móvel, filtro de projetos, janelas de detalhe e scroll após o formulário.
(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // Menu móvel
  const menuButton = $(".mobile-menu-button");
  const mobileNav = $("#mobile-nav");
  if (menuButton && mobileNav) {
    const setOpen = (open) => {
      mobileNav.hidden = !open;
      menuButton.classList.toggle("is-open", open);
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    };
    menuButton.addEventListener("click", () => setOpen(mobileNav.hidden));
    mobileNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });
  }

  // Filtro de projetos por área
  const filterButtons = $$("[data-filter]");
  const projectCards = $$(".project-card[data-categories]");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((other) => {
        other.classList.toggle("is-active", other === button);
        other.setAttribute("aria-pressed", String(other === button));
      });
      projectCards.forEach((card) => {
        card.hidden = !(filter === "Todos" || card.dataset.categories.split("|").includes(filter));
      });
    });
  });

  // Janelas de detalhe dos projetos (<dialog> nativo: Esc e foco tratados pelo browser)
  $$("[data-dialog]").forEach((button) => {
    button.addEventListener("click", () => document.getElementById(button.dataset.dialog)?.showModal());
  });
  $$("dialog.project-dialog").forEach((dialog) => {
    // Um clique no próprio <dialog> (e não num filho) só acontece no fundo escurecido.
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    $$("[data-close]", dialog).forEach((button) => button.addEventListener("click", () => dialog.close()));
  });

  // Depois de um envio inválido do formulário, volta à secção de contacto.
  const scrollTo = document.body.dataset.scrollTo;
  if (scrollTo) document.getElementById(scrollTo)?.scrollIntoView({ behavior: "instant" });
})();
