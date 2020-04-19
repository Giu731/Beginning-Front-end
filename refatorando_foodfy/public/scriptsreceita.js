const receitas = document.querySelectorAll('.receita')

        
for (let i=0; i < 11; i++){
    receitas[i].addEventListener("click", function(){
        if(i>=6){
            const index = i - 6
            window.location.href = `/receitas/${index}`
        }else{
            window.location.href = `/receitas/${i}`
        }

    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})