window.onload = function(){
    var contenedor = document.getElementById('contcarga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}

let toggle=document.getElementById('toggle');
let darkmode=document.getElementById('darkmode')
let barra=document.getElementById('barra')

toggle.addEventListener('change', (event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle('dark')
    if (checked==true){
        darkmode.innerHTML='<img src="luna.png" width="175%">';
        html.innerHTML= '<img src="htmlB.png" alt="Htmnl"><div class="pie"><p>Html</p></div>'
        css.innerHTML= '<img src="cssB.png" alt="Css"><div class="pie"><p>Css</p></div>'
        java.innerHTML= '<img src="javaB.png" alt="Java"><div class="pie"><p>JavaScript</p></div>'
        python.innerHTML= '<img src="pythonB.png" alt="Python"><div class="pie"><p>Python</p></div>'
        angular.innerHTML= '<img src="AngularB.png" alt="Angular"><div class="pie"><p>Angular</p></div>'
    }else{
        darkmode.innerHTML='<img src="sol.png" width="175%">';
        html.innerHTML= '<img src="htmlW.png" alt="Html"><div class="pie"><p>Html</p></div>'
        css.innerHTML= '<img src="cssW.png" alt="Css"><div class="pie"><p>Css</p></div>'
        java.innerHTML= '<img src="javaW.png" alt="Java"><div class="pie"><p>JavaScript</p></div>'
        python.innerHTML= '<img src="pythonW.png" alt="Python"><div class="pie"><p>Python</p></div>'
        angular.innerHTML= '<img src="AngularW.png" alt="Angular"><div class="pie"><p>Angular</p></div>'
    }
    if (document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

function guardarCambios() {
    var nuevoTexto = document.getElementById("texto-editable").innerHTML;
    
    localStorage.setItem("texto-editable", nuevoTexto); 
    
    alert("Cambios guardados correctamente");
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var textoGuardado = localStorage.getItem("texto-editable");
    
    if (textoGuardado) {
      document.getElementById("texto-editable").innerHTML = textoGuardado;
    }
  });
