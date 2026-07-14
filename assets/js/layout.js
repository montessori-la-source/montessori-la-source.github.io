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
  <p class="footer-address">
    Ecole Montessori La Source SAS<br>
    SIRET 106 415 615 00017<br>
  </p>
  <div class="social-bar">
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <svg data-bbox="0.174 0 129.653 129.999" viewBox="0 0 130 130" height="130" width="130" xmlns="http://www.w3.org/2000/svg" data-type="color">
        <g>
          <path fill="#ffffff" d="M90.459 84.863 94.107 65H72.876v-7.025c0-10.497 4.118-14.534 14.776-14.534 3.31 0 5.975.081 7.509.242V25.677c-2.907-.807-10.012-1.615-14.13-1.615-21.72 0-31.732 10.255-31.732 32.378v8.559H35.895v19.863h13.404v43.206a64.8 64.8 0 0 0 15.703 1.931c2.668 0 5.292-.181 7.875-.494V84.862h17.584Z" data-color="1"></path>
          <path fill="#007afa" d="M77.283 128.819c.349-.067.7-.129 1.047-.201a64 64 0 0 0 2.523-.584c.14-.035.283-.066.423-.102 27.925-7.24 48.551-32.67 48.551-62.932 0-35.898-29.024-65-64.827-65S.174 29.102.174 65c0 29.125 19.106 53.774 45.435 62.039l.195.062q1.388.43 2.803.798l.261.071c.142.036.287.064.43.099V84.863H35.894V65h13.404v-8.559c0-22.124 10.012-32.378 31.732-32.378 4.118 0 11.223.807 14.13 1.615v18.006c-1.534-.161-4.199-.242-7.509-.242-10.658 0-14.776 4.037-14.776 14.534v7.025h21.231l-3.648 19.863H72.874v44.643q.539-.065 1.075-.137c.46-.063.921-.126 1.378-.199a63 63 0 0 0 1.955-.35Z" data-color="2"></path>
        </g>
      </svg>
    </a>
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <svg data-bbox="0 0 130 130" viewBox="0 0 130 130" height="130" width="130" xmlns="http://www.w3.org/2000/svg" data-type="color">
        <g>
          <path fill="#ffffff" d="M47.215 47.2v42.944H33.853V47.2z" data-color="1"></path>
          <path fill="#ffffff" d="M40.538 25.855c-4.288 0-7.744 3.465-7.744 7.739s3.456 7.741 7.744 7.741 7.736-3.469 7.736-7.741-3.449-7.739-7.736-7.739" data-color="1"></path>
          <path fill="#ffffff" d="M81.193 46.135c-6.494 0-10.848 3.56-12.628 6.936h-.184v-5.87H55.588v42.944h13.331V68.906c0-5.603 1.154-11.031 8.004-11.031s6.936 6.408 6.936 11.387v20.883h13.346V66.594c0-11.566-2.499-20.459-16.013-20.459Z" data-color="1"></path>
          <path fill="#007dbb" d="M65 130c2.422 0 4.809-.143 7.162-.401H57.838c2.353.258 4.74.401 7.162.401" data-color="2"></path>
          <path fill="#007dbb" d="M130 65c0-1.866-.097-3.708-.251-5.534v11.068c.154-1.826.251-3.668.251-5.534" data-color="2"></path>
          <path fill="#007dbb" d="M129.749 70.534V59.466C126.938 26.16 99.033 0 65 0 29.102 0 0 29.102 0 65c0 33.477 25.311 61.032 57.838 64.599h14.324c30.714-3.368 54.976-28.129 57.587-59.065M47.215 90.145H33.853V47.201h13.362zm-6.677-48.81c-4.288 0-7.744-3.467-7.744-7.741s3.456-7.739 7.744-7.739 7.736 3.467 7.736 7.739-3.467 7.741-7.736 7.741m56.668 48.81H83.86V69.262c0-4.979-.086-11.387-6.936-11.387s-8.004 5.428-8.004 11.031v21.239H55.589V47.201h12.793v5.87h.184c1.78-3.376 6.134-6.936 12.628-6.936 13.514 0 16.013 8.893 16.013 20.459v23.551Z" data-color="2"></path>
        </g>
      </svg>
    </a>
  </div>
  <p class="footer-legal">
    © 2026 Ecole Montessori La Source. Tous droits réservés.
  </p>
</footer>`;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
