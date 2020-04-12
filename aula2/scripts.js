const modalOverlay = document.querySelector('.modal-overlay')
const courses = document.querySelectorAll('.course')
const modal = modalOverlay.querySelector(".modal")

for(let course of courses){
    course.addEventListener("click", function(){
        const courseId = course.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src=`https://rocketseat.com.br/${courseId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src=""
    if(modal.classList.contains("maximized")){
        modal.classList.remove("maximized")
    }
})


document.querySelector(".maximize-modal").addEventListener("click", function(){
    if(!modal.classList.contains("maximized")){
        modal.classList.add("maximized")
    }else{
        modal.classList.remove("maximized")
    }
    
})
