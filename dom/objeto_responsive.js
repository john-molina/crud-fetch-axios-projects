const d = document,
  w = window;

export default function responsivemedia(id, mq, mobileContent, desktopContent) {
  let breakPoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };
  breakPoint.addEventListener("change", responsive);
  responsive(breakPoint);
}
