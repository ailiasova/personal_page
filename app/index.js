document.addEventListener("DOMContentLoaded", function(event) {
    var select = document.getElementById("select-wrapper");
    var selectOptions = document.getElementById("select-options");
    var svg = document.getElementById("map");
    
    select.addEventListener("click",function (e) {
        selectOptions.style.visibility === 'hidden' ? selectOptions.style.visibility = 'visible' : selectOptions.style.visibility = 'hidden'
    });
    
    var bbox = svg.getBBox();
    svg.setAttribute("width", bbox.width + "px");
    svg.setAttribute("height", bbox.height + "px");
    svg.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
});
