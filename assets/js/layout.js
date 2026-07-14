const NAV_LINKS = [
  ["index.html", "Accueil", "index"],
  ["projet-pedagogique.html", "Projet pédagogique", "projet-pedagogique"],
  ["equipe.html", "L'équipe", "equipe"],
  ["vie-scolaire.html", "Vie scolaire", "vie-scolaire"],
  ["inscriptions.html", "Inscriptions", "inscriptions"],
  ["contact.html", "Contact", "contact"],
];

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute("current") || "";
    const links = NAV_LINKS.map(
      ([href, label, key]) =>
        `<a href="${href}"${key === current ? ' class="active"' : ""}>${label}</a>`,
    ).join("");
    this.innerHTML = `<nav class="site-nav">
  <input class="nav-toggle" id="nav-toggle" type="checkbox" aria-hidden="true">
  <label class="nav-burger" for="nav-toggle" aria-label="Ouvrir le menu">
    <span></span><span></span><span></span>
  </label>
  <div class="nav-links">${links}</div>
</nav>`;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
  <img class="footer-logo" src="assets/images/logo.png" alt="Logo Ecole Montessori La Source">
  <p class="footer-legal">
    Ecole Montessori La Source SAS<br>
    SIRET 106 415 615 00017<br>
    © 2026 Ecole Montessori La Source. Tous droits réservés.
  </p>
  <div class="social-bar">
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffffff" d="M90.459 84.863 94.107 65H72.876v-7.025c0-10.497 4.118-14.534 14.776-14.534 3.31 0 5.975.081 7.509.242V25.677c-2.907-.807-10.012-1.615-14.13-1.615-21.72 0-31.732 10.255-31.732 32.378v8.559H35.895v19.863h13.404v43.206a64.8 64.8 0 0 0 15.703 1.931c2.668 0 5.292-.181 7.875-.494V84.862h17.584Z"></path>
      </svg>
    </a>
  </div>
</footer>`;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
