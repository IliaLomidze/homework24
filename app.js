const dropDown = document.getElementById('dropdown')
const dropbox = document.querySelector('.dropbox')

dropDown.addEventListener('click', () =>{
    if(dropbox.style.display === 'block'){
        dropbox.style.display = 'none'
    } else{
        dropbox.style.display = 'block'
    }
})
