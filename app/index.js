document.addEventListener("DOMContentLoaded", function(event) {
    var svg = document.getElementById("map");
    var bbox = svg.getBBox();
    svg.setAttribute("width", bbox.width + "px");
    svg.setAttribute("height", bbox.height + "px");
    svg.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
});