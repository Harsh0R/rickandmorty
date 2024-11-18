export default function preventZoom() {
    // Prevent default gestures
    document.addEventListener("gesturestart", function(e) {
      e.preventDefault();
    }, { passive: false });
  
    document.addEventListener("gesturechange", function(e) {
      e.preventDefault();
    }, { passive: false });
  
    document.addEventListener("gestureend", function(e) {
      e.preventDefault();
    }, { passive: false });
  
    // Prevent pinch zooming
    const ham = new Hammer(window.document.body);
    ham.on("pinch", function(e) {
      e.preventDefault();
    });
  
    // Prevent zooming through double-tap
    document.addEventListener("dblclick", function(e) {
      e.preventDefault();
    }, { passive: false });
  }
  