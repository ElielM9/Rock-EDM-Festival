document.addEventListener(`DOMContentLoaded`, () => {
  iniciarApp();
});

function iniciarApp() {
  createGallery();
  navFija();
  scrollNav();
}

function navFija() {
  const header = document.querySelector(`.header`);
  const festival = document.querySelector(`.festival`);
  const body = document.querySelector(`body`);

  window.addEventListener(`scroll`, function () {
    if (festival.getBoundingClientRect().bottom < 0) {
      header.classList.add(`fijo`);
      body.classList.add(`bodyScroll`);
    } else {
      header.classList.remove(`fijo`);
      body.classList.remove(`bodyScroll`);
    }
  });
}

function scrollNav() {
  const links = document.querySelectorAll(`.nav a`);

  links.forEach((link) => {
    link.addEventListener(`click`, function (e) {
      e.preventDefault();
      const sectionScroll = e.target.attributes.href.value;
      const section = document.querySelector(sectionScroll);
      section.scrollIntoView({ behavior: `smooth` });
    });
  });
}

function createGallery() {
  const gallery = document.querySelector(`.gallery__img`);

  for (let i = 1; i <= 12; i++) {
    const img = document.createElement(`picture`);
    img.innerHTML = `
        <source srcset="assets/img/thumb/${i}" type="avif" />
        <source srcset="assets/img/thumb/${i}" type="webp" />
        <img
          loading="lazy"
          width="200"
          height="300"
          src="assets/img/thumb/${i}.jpg"
          alt="imagen-galeria"
        />`;

    img.onclick = function () {
      showImg(i);
    };

    gallery.appendChild(img);
  }
}

function showImg(id) {
  const img = document.createElement(`picture`);
  img.innerHTML = `
        <source srcset="assets/img/grande/${id}" type="avif" />
        <source srcset="assets/img/grande/${id}" type="webp" />
        <img
          loading="lazy"
          width="200"
          height="300"
          src="assets/img/grande/${id}.jpg"
          alt="imagen-galeria"
        />`;
  //Crea el overlay
  const overlay = document.createElement(`div`);
  overlay.appendChild(img);
  overlay.classList.add(`overlay`);
  overlay.onclick = function () {
    const body = document.querySelector(`body`);
    body.classList.remove(`fijar`);
    overlay.remove();
  };

  //Cerrar modal
  const closeModal = document.createElement(`p`);
  closeModal.textContent = `X`;
  closeModal.classList.add(`btnClose`);
  closeModal.onclick = function () {
    overlay.remove();
    const body = document.querySelector(`body`);
    body.classList.remove(`fijar`);
  };
  overlay.appendChild(closeModal);

  //Añade al HTML
  const body = document.querySelector(`body`);
  body.appendChild(overlay);
  body.classList.add(`fijar`);
}
