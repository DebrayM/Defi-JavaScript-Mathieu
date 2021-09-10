function horloge() {
    let h =  document.getElementById("h");
    let z = document.getElementById("z");
    let m = document.getElementById("m");
    let d = new Date();
    h.innerText = d.getHours() < 10 ? '0'+d.getHours() : d.getHours();
    m.innerText = d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes();

    z.classList.toggle('doublePoint');
}

window.onload = function() {
    setInterval(horloge, 1000);
}
