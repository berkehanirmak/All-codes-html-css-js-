document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      name: "Product 1",
      price: "$10",
      image: "product1.jpg",
    },
    {
      name: "Product 2",
      price: "$15",
      image: "product2.jpg",
    },
    {
      name: "Product 3",
      price: "$20",
      image: "product3.jpg",
    },
  ];

  const productContainer = document.getElementById("product-container");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement("p");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = "Price: " + product.price;

    productDiv.appendChild(image);
    productDiv.appendChild(name);
    productDiv.appendChild(price);

    productContainer.appendChild(productDiv);
  });
});
