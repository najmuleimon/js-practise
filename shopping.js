/* 
৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 

১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে। 
*/


// add cart button click
document.getElementById('add-cart').addEventListener('click', function(){
    const productName = document.getElementById('pro-name')
    const proName = productName.value
    const productPrice = document.getElementById('pro-price')
    const proPrice = productPrice.value

    displayProduct(proName, proPrice)
    addToLocal(proName, proPrice)

    productName.value = ''
    productPrice.value = ''
})


// display product in UI
const displayProduct = (name, price) => {
    const ol = document.getElementById('products')
    const li = document.createElement('li')
    li.innerText = `Product Name: ${name}, Price: ${price}`

    ol.appendChild(li)
}


// get local storage object
const getLocal = () => {
    const cart = localStorage.getItem('cart')
    let cartObj

    if(cart){
        cartObj = JSON.parse(cart)
    }
    else{
        cartObj = {}
    }
    return cartObj
}
// add product to local storage
const addToLocal = (name, price) => {
    const cart = getLocal()

    // if (cart[name] && cart[price]) {
    //     cart[name] = cart[name] + 1;
    //     cart[price] = cart[price] + 1;
    // }
    // else {
    //     cart[name] = 1;
    //     cart[price] = 1;
    // }
    cart[name] = name,
    cart[price] = price

    const jsonString = JSON.stringify(cart)
    localStorage.setItem('cart', jsonString)
}

// display from local storage
const displayLocal = () => {
    const cart  = getLocal()

    for(const name in cart){
        displayProduct(name)
    }
}

displayLocal()

// when place order remove the cart from local storage
const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}