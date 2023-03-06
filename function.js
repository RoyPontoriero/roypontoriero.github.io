document.addEventListener('click', function() {
console.log("Se está llenando el forumulario");
document.getElementById('enviar').style.color = "blue";
document.getElementById('enviar').innerHTML = "¡Estas un paso de cambiar su carrera!"
});

function geoloc() {
    d=document.getElementById("demo");
    if (navigator.geolocation){
       d.innerHTML="<p>Usted se encuentra en Latinoamerica, Acordemos una cita.</p>";
       }
    else {
       d.innerHTML="<p>Lo sentimos, podemos arreglar una videollamada.</p>";
       }
    }