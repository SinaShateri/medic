const zoom = mediumZoom(".zoom", {
  margin: 20,
  background: "rgba(0, 0, 0, 0.8)",
  scrollOffset: 0,
});
function hide() {
  document.querySelector("header").style.display = "none";
}
function show() {
  document.querySelector("header").style.display = "block";
}
zoom.on("open", hide);
zoom.on("close", show);
