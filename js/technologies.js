window.onload = function () {
  try {
    TagCanvas.Start("myCanvas", "tags", {
      initial: [0.33, 0.68],
      textColour: "#1873f0",
      outlineColour: "#ffffff",
      reverse: true,
      depth: 0.8,
      minSpeed: 0.2,
      maxSpeed: 0.003,
      /*  reverse: true, */
      textHeight: 25,
      wheelZoom: false,
    });
  } catch (e) {
    // something went wrong, hide the canvas container
    document.getElementById("myCanvasContainer").style.display = "none";
  }
};
