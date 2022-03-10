const products = document.querySelector('.products')
const search = document.querySelector('#filter')

const listItems = []

getData()

search.addEventListener('input', (e) => filterData(e.target.value.trim()))

async function getData(){
    const res = await fetch('https://fakestoreapi.com/products')
    const results = await res.json()
    
    products.innerHTML = ''
    
    results.forEach((product) => {
        let newProduct = document.createElement('div')
        newProduct.classList.add('product')
        listItems.push(newProduct)
        newProduct.innerHTML = `
                                <img src="${product.image}" alt="">
                                <div class="info">
                                    <span class="name">${product.title.slice(0,26)}</span>
                                    <span class="price">${product.price}</span>
                                </div>
                            `
        products.appendChild(newProduct)
    })
}

function filterData(search){
    listItems.forEach((item) => {
        if (item.innerText.toLowerCase().includes(search.toLowerCase())){
            item.classList.remove('hide')
        }else {
            item.classList.add('hide')
        }
    })
}