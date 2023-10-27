const addedProducts = [];

function addProductToTable(product) {
  addedProducts.push(product);
  updateTable();
}

function updateTable() {
  const orderTable = document.querySelector("#orderTable tbody");
  orderTable.innerHTML = "";

  addedProducts.forEach((product) => {
    orderTable.innerHTML += product.rowHTML;
  });
}

// Selecione todos os botões "Adicionar" individualmente
const addButtons = document.querySelectorAll(".add-button");

addButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const productCard = button.closest("[data-product-id]");
    const productId = productCard.getAttribute("data-product-id");
    const productImageElement = productCard.querySelector(".produto-imagem");
    const productImageSrc = productImageElement
      ? productImageElement.getAttribute("src")
      : "";
    const productName = productCard.querySelector(".produto-nome").textContent;
    const productPrice =
      productCard.querySelector(".produto-preco").textContent;

    const product = {
      rowHTML: `
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="relative mx-3 mt-3 flex h-10 overflow-hidden">
          <img class="absolute top-0 right-0 h-full w-full object-fit" src="${productImageSrc}" alt="Imagem do Produto">
        </td>
        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          ${productName}
        </td>
        <td class="px-6 py-4">
          <div class="flex items-center space-x-3">
            <button
              class="decrement-button inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button">
              <span class="sr-only">Quantity button</span>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
              </svg>
            </button>
            <div>
              <input type="number" id="quantity" value="1"
                class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                min=1 required>
            </div>
            <button
              class="increment-button inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button">
              <span class="sr-only">Quantity button</span>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          ${productPrice}
        </td>
        <td class="px-6 py-4">
          <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remover</a>
        </td>
      </tr>
    `,
      productName,
      productId,
      productQuantity: 1,
      productPrice,
    };

    addProductToTable(product);
  });
});
