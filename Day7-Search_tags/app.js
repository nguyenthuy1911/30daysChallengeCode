const content = document.querySelector('.content')
const input = document.querySelector('.content input')
const btnRemoveAll = document.querySelector('.remove_all')

let tags = ['HUST', 'SoICT']

 function render(){
     content.innerHTML = ''
      tags.forEach((tag, index) => {
        content.innerHTML += `<li>
                        ${tag}
                        <i class="fa-solid fa-xmark" onclick="removeTag(${index})"></i>
                            </li>`
        
     })
     content.appendChild(input)
     input.focus()
 }

 function removeTag(index){
    tags.splice(index, 1)
    render()
 }

 render()

 input.addEventListener('keyup', function (e){
     let tag = input.value.trim()
     if ((e.key == 'Enter') && (tag != '') && (!tags.includes(tag))){
        tags.push(tag)
        input.value =''
        render()
     }
     if ( (e.key == 'Enter') && ((tag == '') || (tags.includes(tag)))){
        input.value =''
     }
 })

 btnRemoveAll.addEventListener('click', function(){
     tags = []
     render()
 })
