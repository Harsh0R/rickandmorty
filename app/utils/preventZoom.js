export default function preventZoom() {
  // Prevent default gestures
  document.addEventListener(
    "gesturestart",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );

  document.addEventListener(
    "gesturechange",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );

  document.addEventListener(
    "gestureend",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );

  document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
    document.body.style.zoom = "0.99";
  });
  document.addEventListener("gesturechange", function (e) {
    e.preventDefault();
    document.body.style.zoom = "0.99";
  });
  document.addEventListener("gestureend", function (e) {
    e.preventDefault();
    document.body.style.zoom = "1";
  });
}
