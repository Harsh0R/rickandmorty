export default function preventZoom() {
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
