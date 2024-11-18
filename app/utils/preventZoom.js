export default function preventZoom() {
  document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
    document.body.style.zoom = 0.59;
  });

  document.addEventListener("gesturechange", function (e) {
    e.preventDefault();
    document.body.style.zoom = 0.59;
  });

  document.addEventListener("gestureend", function (e) {
    e.preventDefault();
    document.body.style.zoom = 0.59;
  });
}
