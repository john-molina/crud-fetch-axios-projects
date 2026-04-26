/*console.log(window);
      console.log(document);*/

//API speechSynthesis
/*let texto = "Hola soy tu amigo John Molina";
      const hablar = (texto) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);*/

/*console.log("********Elementos del documento*********");
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
document.write("<h2>Hola mundo desde el DOM</h2>");*/

/*console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((element) => {
  console.log(element);
});
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));*/

/*console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.facebook.com/");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Obejto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Visita mi Facebook y comparte";
console.log($linkDOM.dataset.description);*/

//Estilos y Variables CSS
/*const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAling = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log(getComputedStyle($linkDOM));*/

//Variables CSS - Custom Properties CSS
/*const $html = document.documentElement;
const $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);*/

//DOM: Clases CSS
/*const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.classList);
$card.classList.remove("rotate-45");
$card.classList.toggle("rotate-45");
$card.classList.toggle("rotate-45");
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");*/

//DOM: Texto y HTML
/*const $whatIsDOM = document.getElementById("que-es");
let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM-Document Object Model </i></b>) es un API para documentos HTML  y XML.
</p>
<p>
Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS.
</p>
<p>
<mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores</mark> 
</p>
`;

//$whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;*/

//DOM Traversing: Recorriendo el DOM
/*const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.childNodes);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.parentNode);
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));*/

//DOM: Creando Elementos y Fragmentos
/*const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute(
  "src",
  "https://img.freepik.com/vector-gratis/tecnologia-red-futurista-azul_53876-100679.jpg?q=10&h=200"
);
$img.setAttribute("alt", "Animal");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://img.freepik.com/vector-gratis tecnologia-red-futurista-azul_53876-100679.jpg?q=10&h=200" alt="Arch"/>
<figcaption>Arch</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primaver", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
  $ul2 = document.createElement("ul");

document.write("Continentes del mundo");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);*/

//DOM: Templates HTML
/*const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnologia",
      img: "https://img.freepik.com/vector-gratis/tecnologia-red-futurista-azul_53876-100679.jpg?q=10&h=200",
    },
    {
      title: "Animales",
      img: "https://img.freepik.com/vector-gratis/tecnologia-red-futurista-azul_53876-100679.jpg?q=10&h=200",
    },
    {
      title: "Arquitectura",
      img: "https://img.freepik.com/vector-gratis/tecnologia-red-futurista-azul_53876-100679.jpg?q=10&h=200",
    },
    {
      title: "Gente",
      img: "https://img.freepik.com/vector-gratis/tecnologia-red-futurista-azul_53876-100679.jpg?q=10&h=200",
    },
    {
      title: "Naturaleza",
      img: "https://img.freepik.com/vector-gratis/tecnologia-red-futurista-azul_53876-100679.jpg?q=10&h=200",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);*/

//DOM: Modificando Elementos (Old Style)
/*const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="https://img.freepik.com/vector-gratis/tecnologia-red-futurista-azul_53876-100679.jpg?q=10&h=200">
<figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

$cards.replaceChild($newCard, $cards.children[2]);
$cards.insertBefore($newCard, $cards.firstElementChild);
$cards.removeChild($cards.lastElementChild);
document.body.appendChild($cloneCards);*/

//DOM: Modificando Elementos (Cool Style)
/*
.insertAdjacent...
  .insertAdjacentElement(position,el)
  .insertAdjacentHTML(position,html)
  .insertAdjacentText(position,text)

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

/*const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `
<img src="https://img.freepik.com/vector-gratis/tecnologia-red-futurista-azul_53876-100679.jpg?q=10&h=200">
<figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
//$cards.insertAdjacentElement("afterbegin", $newCard);

$cards.prepend($newCard);
$cards.before($newCard);
$cards.append($newCard);
$cards.after($newCard);*/

//Dom: Manejadores de eventos
/*function holaMundo() {
  alert("Hola Mundo");
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
}

const $eventoSemantico = document.getElementById("evento-semantico");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo manejador de eventos semantico");
  console.log(e);
};

const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo Manejador de eventos multiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});*/

//DOM: Evento con Parametros y Remover Eventos
/*$eventoMultiple.addEventListener("click", (e) => {
  saludar();
  saludar("John");
  console.log(e);
});

const $eventoRemover = document.getElementById("evento-remover");

const removerDbClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDbClick);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDbClick);*/

//DOM: Flujo de Eventos (Burbuja y Captura)
/*const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );
}
console.log($divsEventos);

$divsEventos.forEach((div) => {
  //Fase de Burbuja
  div.addEventListener("click", flujoEventos);
  //Fase de Captura
  div.addEventListener("click", flujoEventos, true);
  div.addEventListener("click", flujoEventos, {
    capture: true,
    once: true,
  });
});*/

//DOM: stopPropagation y preventDefault
/*const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );
  e.stopPropagation();
}

$divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos);
});

$linkEventos.addEventListener("click", (e) => {
  alert("Hola soy John Molina");
  e.preventDefault();
  e.stopPropagation();
});*/

//DOM: Delegacion de Eventos
/*function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this}, el click lo origino ${e.target.className}`
  );
}

document.addEventListener("click", (e) => {
  console.log("Click en", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy John Molina");
    e.preventDefault();
  }
});*/

//BOM: Propiedades y Eventos
/*window.addEventListener("resize", (e) => {
  console.clear();
  console.log("#########Evento Resize#########");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("#########Evento Scroll#########");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  //console.clear();
  console.log("#########Evento Load#########");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
  //console.clear();
  console.log("#########Evento DOMContentLoaded#########");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});*/

//BOM: Metodos
/*const $btnAbrir = document.getElementById("abrir-ventana");
const $btnCerrar = document.getElementById("cerrar-ventana");
const $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://www.facebook.com/");
});
$btnCerrar.addEventListener("click", (e) => {
  //window.close();
  ventana.close();
});
$btnImprimir.addEventListener("click", (e) => {
  window.print();
});*/

//BOM: Objetos, URL, Historial yNavegador
/*console.log("###########Objeto URL (location)###########");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();*/

/*console.log("###########Objeto Historial (history)###########");
console.log(history);
console.log(history.back(1));
console.log(history.forward(2));
console.log(history.go(3));*/

/*console.log("###########Objeto Navegador (navigator)###########");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);*/
