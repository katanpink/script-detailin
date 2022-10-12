const jimmin = document.getElementsByTagName('li')

for (i = 0; i<=jimmin.length; i++){
    if (i == 0){
        jimmin[i].className = 'green'
        jimmin[jimmin.length - 1].className = 'green'
    }
}