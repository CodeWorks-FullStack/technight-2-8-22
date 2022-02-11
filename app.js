let products = [{
  id: '11g2233',
  name: 'Boots of Skywalking',
  description: 'These boots were made for walking, and thats what youll do',
  imgUrl: 'img/boots.png',
  quantity: 3
}, {
  id: '112244',
  name: 'Bone Bow',
  description: 'Ranged attacks, Stay safe use a pointed stick from afar',
  imgUrl: 'img/bow.png',
  quantity: 2
}, {
  id: '112255',
  name: 'Eagles Talon',
  description: 'Fly through your enemies with this feathered edge.',
  imgUrl: 'img/dagger.png',
  quantity: 1
}, {
  id: '112266',
  name: 'Horned Helm',
  description: 'A nice horned helm be careful with the color red when wearing',
  imgUrl: 'img/helm.png',
  quantity: 4
}, {
  id: '112277',
  name: 'Rations',
  description: 'Yum Yum, You are going to need to eat on your adventure. Take this!',
  imgUrl: 'img/ration.png',
  quantity: 10
}, {
  id: '112288',
  name: 'Mysterious Ring',
  description: 'There is probably some left over magic in this ring purchase it to identify',
  imgUrl: 'img/ring.png',
  quantity: 1
}, {
  id: '112299',
  name: 'Rope',
  description: 'No adventurer is complete without a bundle of sturdy rope',
  imgUrl: 'img/rope.png',
  quantity: 4
}, {
  id: '1',
  name: 'Bag of Holding',
  description: 'Where are you going to keep all of your things without a bag such as this',
  imgUrl: 'img/bag.png',
  quantity: 0
}]

let cart = []

// string interpolation
// document.write(`
//   <h1>${boots.name}</h1>
// `)

function drawProducts() {
  let productListTemplate = ''
  for (let i = 0; i < products.length; i++) {
    // create an alias for the product
    let product = products[i]
    productListTemplate += `
    <div class="product col-md-3 p-3 ${product.quantity < 1 ? 'out-of-stock' : ''}" onclick="addProductToCart('${product.id}')">
    <div class="bg-tan border border-dark p-3 shadow rounded">
    <div class="text-center">
    <img class="img-fluid product-img" src="${product.imgUrl}" alt="bag">
    </div>
    <p class="text-center"><b>${product.name}</b></p>
    <p>${product.description}</p>
    <p>${product.quantity < 1 ? 'Out of Stock' : 'Remaining:' + product.quantity}</p>
    </div>
    </div>
    `
  }
  document.getElementById('products').innerHTML = productListTemplate
}


function addProductToCart(productId) {
  //                            vv where
  let product = products.find(p => p.id == productId)
  // if there is no product hard stop
  if (!product) { return console.log('no product by that id') }
  // only add if enough is available
  if (product.quantity < 1) { return } // return means hard stop

  cart.push(product)
  product.quantity--
  drawCartItems()
  drawProducts()

}

// for each item in the cart array []
// repeat the product-cart-card template 
// then change the html of the cart-list to the 
// product cart list template
function drawCartItems() {
  let productCartListTemplate = ''

  // do the hard 

  cart.forEach(product => {
    productCartListTemplate += `
    <div class="product-cart-card bg-tan p-2 text-dark d-flex align-items-center justify-content-between">
    <img src="${product.imgUrl}" alt="" height="60">
    <h4>${product.name}</h4>
  </div>
  `
  })

  document.getElementById('cart-items').innerHTML = productCartListTemplate
}




drawProducts()

