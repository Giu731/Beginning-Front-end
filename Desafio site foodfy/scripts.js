const modalOverlay = document.querySelector(".modal-ovelay");
const receitas = document.querySelectorAll(".receita");

for(let receita of receitas){
    receita.addEventListener("click", function(){
        modalOverlay.classList.add("active")
    })
}