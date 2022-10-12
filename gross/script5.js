const jar = document.querySelectorAll('li.red')
for (var i = 0; i<jar.length; i++){
    if (i < jar.length){
        jar[i].className='green'
    }
}