const productData = {

  a: {
    title: "Product Set A - สีเหลือง",
    description: "ชุดสินค้าธีมสีเหลือง สดใส สะอาด และทันสมัย",
    price: "฿490",
    color: "#ffd84d",
    page: "payment-a.html",
    badge: "Product Set A"
  },

  b: {
    title: "Product Set B - สีฟ้า",
    description: "ชุดสินค้าธีมสีฟ้า เรียบหรู ดูสบายตา",
    price: "฿690",
    color: "#57b8ff",
    page: "payment-b.html",
    badge: "Product Set B"
  },

  c: {
    title: "Product Set C - สีดำ",
    description: "ชุดสินค้าธีมสีดำ พรีเมียม ดาร์กโมเดิร์น",
    price: "฿890",
    color: "#222",
    page: "payment-c.html",
    badge: "Product Set C"
  }

};

let selectedProduct = "a";

const title = document.getElementById("productTitle");
const description = document.getElementById("productDescription");
const price = document.getElementById("productPrice");
const previewBox = document.getElementById("previewBox");
const badge = document.getElementById("productBadge");
const buyButton = document.getElementById("buyButton");

const variantButtons = document.querySelectorAll(".variant-btn");

variantButtons.forEach(button => {

  button.addEventListener("click", () => {

    variantButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    selectedProduct = button.dataset.product;

    updateUI(selectedProduct);

  });

});

function updateUI(productKey){

  const product = productData[productKey];

  title.textContent = product.title;
  description.textContent = product.description;
  price.textContent = product.price;
  previewBox.style.background = product.color;
  badge.textContent = product.badge;

}

buyButton.addEventListener("click", () => {

  const product = productData[selectedProduct];

  window.location.href = product.page;

});
