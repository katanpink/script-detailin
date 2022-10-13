const gamb = document.getElementsByTagName('li')

for (i = 0; i<gamb.length; i++){
    if (gamb[i].id == 'big'){
        gamb[i-1].className = 'blue'
        gamb[i+1].className = 'green'
    }
}