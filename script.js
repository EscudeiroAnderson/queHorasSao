
function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")  
    var data = new Date() 
    var hora = data.getHours() 
   
    msg.innerHTML = `Agora são ${hora} horas.`
    
     if(hora >=0 && hora<12){
        //Bom dia!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#edbe72'
    }else if(hora >= 12 && hora <= 18){
        //Boa tarde
        img.src='imagens/tarde.png'
        document.body.style.background = '#b4621d'
    }else{
        //Boa noite
        img.src='imagens/noite.png'
        document.body.style.background = '#77787c'
    }
}
