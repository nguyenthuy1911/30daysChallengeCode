const modal = document.querySelector('.modal')
const openModalBtn = document.querySelector('.open-modal-btn')
const iconCloseModal = document.querySelector('.modal_header i')
const btnCloseModal = document.querySelector('.modal_footer button')

function toggleModal(){
    modal.classList.toggle('hide')
}

openModalBtn.addEventListener('click', toggleModal)
iconCloseModal.addEventListener('click', toggleModal)
btnCloseModal.addEventListener('click', toggleModal)

modal.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) toggleModal()
})