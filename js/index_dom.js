import hamburgerMenu from "../dom/menu_hamburguesa.js";
//Importacion por destructuracion
import { digitalClock, alarm } from "../dom/reloj.js";
import { shortcuts } from "../dom/teclado.js";
import { movedBall } from "../dom/teclado.js";
import countdown from "../dom/cuenta_regresiva.js";
import scrollTopButton from "../dom/boton_scroll.js";
import darkTheme from "../dom/tema_oscuro.js";
import responsivemedia from "../dom/objeto_responsive.js";
import responsiveTester from "../dom/prueba_responsive.js";
import userDeviceInfo from "../dom/deteccion_dispositivos.js";
import networkStatus from "../dom/deteccion_red.js";
import webcam from "../dom/deteccion_webcam.js";
import getGeolocation from "../dom/geolocalizacion.js";
import searchFilters from "../dom/filtro_busquedas.js";
import draw from "../dom/sorteo.js";
import slider from "../dom/carrusel.js";
import scrollSpy from "../dom/scroll_espia.js";
import smartVideo from "../dom/video_inteligente.js";
import contactFormValidations from "../dom/validaciones_formulario.js";
import speechReader from "../dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarm-clock.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "July 12,2023 00:00:00",
    "Feliz Cumpleaños John Molina"
  );
  scrollTopButton(".scroll-top-btn");
  responsivemedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://youtu.be/sD9_l3oDOag" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/sD9_l3oDOag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsivemedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/61KvJB4tTTxNsaje6" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7969.483675279298!2d-79.00940137762039!3d-2.8906039015011546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1687740180902!5m2!1ses!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webcam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  movedBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
