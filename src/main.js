// header

let header = document.querySelectorAll(".header");

for (let hd of header) {
  let head = `
        <nav class="navBar w-full flex justify-between items-center h-20 bg-white fixed z-40  pr-32">
            <div class="rigth-nav ml-20">
                <h1 class="text-3xl font-bold">Mo-Store</h1>
            </div>
            <ul class="left-nav flex w-1/2 justify-around items-center text-l">
                <li><a href="./techstor.html">Home</a></li>
                <li><a href="../fakeStore/index.html">Features</a></li>
                <li>Products</li>
                <li>About Us</li>
                <a href="./cart.html"><span class="count hide"></span><i class="fa-solid fa-cart-shopping"></i></a>

            </ul>
        
        </nav>
`;
  hd.innerHTML += head;
}
//-----------------------------------------------------------------
//-----------------------------------------------------------------
try {
  // show all product
  let pro = 1;

  for (let i = 0; i < pro; i++) {
    let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (p of x) {
      let title = {
        1: "Beats premium quality Red Headset",
        2: "Black Microphone and Headset Combo",
        3: "Professional Microphone",
        4: "Microphone with Pop Filter",
        5: "Red Wireless Gaming Headset",
        6: "iPhone 15 pro max White",
        7: "Black and Gold Wireless Headset",
        8: "Apple AirPods Pro Max Charging Case",
        9: "Airpods Pro Max White & Black",
        10: "MacBook Pro  16-inch M1 - Space Gray",
      }[Math.floor(Math.random() * 10 + 1)];
      let price = Math.floor(Math.random() * 1000 + 1);
      let product = {
        image: p,
        description: title,
        price: price,
      };
      //  content for product
      //-----------------------------------------------------------------
      //-----------------------------------------------------------------
      let content = `
            <div class="card-pro">
                <img src="./assets/prodcut${product.image}.png" class="img-fluid" loading="lazy" alt="">
                <div class="card-info section-title ">
              <h1>${product.description}</h1>

                </div>
                <p class="price">price is ${product.price}$</p>
                <button onclick="clicked(${p},this)" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="background-color: #1d997a;"  class="show-modal btn btn-primary w-48 rounded-3xl text-xl h-10 my-4">View</button>
                <button onclick="shoping(${p},this)" class="cart btn btn-dark w-48 h-10 mb-5 rounded-3xl text-xl" >Add to cart</button>
            </div>

            <!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                
                
            
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                
            </div>
        </div>
    </div>
</div>
`;
      //-----------------------------------------------------------------
      //-----------------------------------------------------------------
      // add event listener for button in card
      // function to view the product
      function clicked(p) {
        document.querySelector(
          ".modal-body"
        ).innerHTML = `<img class="img-fluid" src="./assets/prodcut${p}.png" alt="">
        
<p class="text-muted mt-3">${product.description}</p>
<p class="price">price is ${product.price}$</p>
`;
      }
      function shoping(p) {
        let loc = `
                    <td><img class="img-fluid" src="./assets/prodcut${p}.png" alt=""></td>
                    <td><p class="price"> ${product.price}$</p></td
                        >
                        <td><i class="fas fa-shopping-cart addToCartBtn" data-id="1"></i></td>
                
`;
        Swal.fire({
          title: "Sweet!",
          text: "your pruduct has been added to your cart.",
          imageUrl: `./assets/prodcut${p}.png`,
          imageWidth: 400,
          imageHeight: 300,
          imageAlt: "Custom image",
        });

        if (localStorage.length > 0) {
          localStorage.setItem("product", loc);
          document.querySelector("#productList").innerHTML +=
            localStorage.getItem("product");
        }
      }
      document.getElementById("product-id").innerHTML += content;
    }
  }
  //-----------------------------------------------------------------
  //-----------------------------------------------------------------
  // function to addtocart
  let cart = document.querySelectorAll(".cart");
  for (let c of cart) {
    c.addEventListener("click", function () {
      let numOfPro = document.querySelector(".count");
      numOfPro.classList.remove("hide");
      let count = Number(numOfPro.innerText);
      numOfPro.innerText = ++count;
    });
  }

  //adding event listener to each button in products list and calling addToCart function when clicked

  let ourValues = `

    <div class="cardo">
        <a class="card1" href="#">
            <p>This is heading</p>
            <p class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur saepe necessitatibus, earum perferendis perspiciatis eius sint laboriosam dolorem adipisci aliquam, atque ipsam inventore aut, eveniet fugiat aliquid incidunt illum?</p>
            <div class="go-corner" href="#">
                <div class="go-arrow">
                    →
                </div>
            </div>
        </a>
    </div>
`;
  let res = ourValues.repeat(4);
  document.querySelector(".values").innerHTML = res;
} catch (error) {
  console.log(error);
}
console.log("hallo cart");
