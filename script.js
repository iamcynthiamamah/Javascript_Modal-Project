//variables
const openBtn = document.querySelector('#open-btn')
const modalContainer = document.querySelector('#modal-container')
const closeBtn = document.querySelector('#close-btn')

//adds eventLister()
    //using arrow function
openBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block'
})

    //using function declaration
closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none'
})

    //using function declaration.
            //by using winow, this function will be carried out when click on any part ofthe window
window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none'
    }
    })
    //this function will be performed whenever you click on any part of the container
