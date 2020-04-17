const modalOverlay = document.querySelector('.modal-overlay');
const receitas = document.querySelectorAll('.receita')

for (let receita of receitas){
    receita.addEventListener("click", function(){
        const receitaId = receita.getAttribute("id")
        const receitaNome = receita.querySelector('.nomeReceita').getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `${receitaId}.png`
        modalOverlay.querySelector('.nomeReceitaModal').nome = `${receitaId}`
    })
};

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})