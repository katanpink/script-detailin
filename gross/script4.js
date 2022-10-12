const rich = document.getElementsByTagName('li')
console.log('rich.length')
for (var i = 0; i<rich.length; i++){
    if (i === 3){
        rich[i].className='green'
    }
}