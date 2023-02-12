document.write("");

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
    let val=document.body.classList.toggle('dark')
    localStorage.setItem('toggle', val)
    if (checked==true){
        darkmode.innerHTML='<img src="luna.png" width="175%">';
        html.innerHTML= '<img src="htmlB.png" alt="Htmnl"><div class="pie"><p>Html</p></div>'
        css.innerHTML= '<img src="cssB.png" alt="Css"><div class="pie"><p>Css</p></div>'
        java.innerHTML= '<img src="javaB.png" alt="Java"><div class="pie"><p>JavaScript</p></div>'
        python.innerHTML= '<img src="pythonB.png" alt="Python"><div class="pie"><p>Python</p></div>'
    }else{
        darkmode.innerHTML='<img src="sol.png" width="175%">';
        html.innerHTML= '<img src="htmlW.png" alt="Html"><div class="pie"><p>Html</p></div>'
        css.innerHTML= '<img src="cssW.png" alt="Css"><div class="pie"><p>Css</p></div>'
        java.innerHTML= '<img src="javaW.png" alt="Java"><div class="pie"><p>JavaScript</p></div>'
        python.innerHTML= '<img src="pythonW.png" alt="Python"><div class="pie"><p>Python</p></div>'
    }
})

let valor=localStorage.getItem('toggle')

if (valor=="true"){
    body.classList.add("dark")
}else{
    body.classList.remove("dark")
}
