const btnSearch = document.querySelector('.search_box_btn')

btnSearch.addEventListener('click', function(){
    this.parentElement.classList.toggle('search_box_open')
    this.previousElementSibling.focus()
})