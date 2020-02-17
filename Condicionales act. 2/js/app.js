const button = document.getElementById('btncomparar');

button.addEventListener('click', verificarCalificacion);


function verificarCalificacion(){

    const Calificaciones = Number(document.getElementById('calificacionFinal').value);

 const PrintAlert = document.getElementById ('mostrarCalificacion');

    if (Calificaciones > 8) {
        PrintAlert.innerText = 'Aprobado';
    } else{
        PrintAlert.innerText = 'Reprobado' 
        
        const AudioDonramon = document.getElementById('donramon');

        AudioDonramon.play();
    }
}