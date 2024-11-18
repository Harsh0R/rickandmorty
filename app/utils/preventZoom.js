import Hammer from "hammerjs";

export default function preventZoom() {
  document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
    document.body.style.zoom = 0.99;
    document.body.style.transform = scale("0.99");
  });

  document.addEventListener("gesturechange", function (e) {
    e.preventDefault();
    document.body.style.zoom = 0.99;
    document.body.style.transform = scale("0.99");
  });

  document.addEventListener("gestureend", function (e) {
    e.preventDefault();
    document.body.style.zoom = 0.99;
    document.body.style.transform = scale("0.99");
  });
  const ham = new Hammer(document.body);
  ham.on("pinch", function (e) {
    alert("pinch");
    e.preventDefault();
  });
}
