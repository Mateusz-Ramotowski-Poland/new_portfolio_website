window.onload = function () {
  try {
    TagCanvas.Start("myCanvas", "tags", {
      initial: [0.33, 0.68],
      textColour: "#1873f0",
      outlineColour: "#ffffff",
      depth: 0.9,
      minSpeed: 1,
      maxSpeed: 0.006,
      textHeight: 25,
      wheelZoom: false,
    });
  } catch (e) {
    document.getElementById("myCanvasContainer").style.display = "none";
  }
};
