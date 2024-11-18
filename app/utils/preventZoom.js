export default function preventZoom() {
  document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
    document.body.style.zoom = 0.99;
  });

  document.addEventListener("gesturechange", function (e) {
    e.preventDefault();
    document.body.style.zoom = 0.99;
  });

  document.addEventListener("gestureend", function (e) {
    e.preventDefault();
    document.body.style.zoom = 1;
  });

  document.addEventListener(
    "touchstart",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );

  document.addEventListener(
    "touchmove",
    function (e) {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    },
    { passive: false }
  );
}
