const inputImg = document.querySelector('#input_img')
const preview = document.querySelector('.preview')
const error = document.querySelector('.error')

inputImg.addEventListener('change', (e) => {
    let file = e.target.files[0]

    if (!file) return
    if (!(['.jpg','.png','.jpeg'].some(char => file.name.endsWith(char)))) {
        error.innerHTML = `Incorrect image format`
        return
    } else {
        error.innerHTML = ``
    }
/*C1:*/
    let img = document.createElement('img')
    img.src = URL.createObjectURL(file)

    document.querySelector('.preview').appendChild(img)

/*C2: use base 64*/
    // let img = document.createElement('img')
    // let fileReader = new FileReader()
    // fileReader.readAsDataURL(file)

    // fileReader.onloadend = function(e){
    //     img.src = e.target.result
    // }
    // preview.appendChild(img)
})