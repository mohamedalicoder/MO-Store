
// api
async function getProducts() {
   let res = await fetch("https://fakestoreapi.com/products?limit=40")
    let prod = await res.json();
    for (let i of prod) {
           let content = `
            <div class="card-pro">
                <img src="${i.image}" alt="">
                <div class="card-info section-title ">
<h1>${i.title}</h1>

                </div>
                <p class="price">price is ${i.price}$</p>
                <button class="btn btn-primary w-48 rounded-3xl text-xl h-10 my-4">Buy Now</button>
                <button class="btn btn-dark w-48 h-10 mb-5 rounded-3xl text-xl" >Add to cart</button>
            </div>
`;
        document.getElementById("product-id").innerHTML += content;
        console.log(i);
    }
}
getProducts();

