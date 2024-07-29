function carregar(){
    var data = new Date()
    var hora = data.getHours()
    if(hora >= 5 && hora <= 12){
        document.body.style.background = '#FDE8B3'
    }else if(hora >= 12 && hora <= 18){
        document.body.style.background = '#C03C14'
    }else{
        document.body.style.background = '#113038'
    }
}