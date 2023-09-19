//aca se manejara el js del lado del front
const socketClient = io();

//elementos
const productList = document.getElementById("productList");
const createProductForm = document.getElementById("createProductForm");

//envio de info del form al socket
createProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

//recibimos los productos con el socket del cliente:
socketClient.on("productArray", (dataProducts) => {
  console.log(dataProducts);
  let productsElms = "";
  dataProducts.forEach((product) => {
    productsElms += `
<li>
<p>Nombre: ${product.title}</p>
</li>
`;
  });
  console.log(productsElms);
  productList.innerHTML = productsElms;
});
