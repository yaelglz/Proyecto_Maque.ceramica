// window.addEventListener('DOMContentLoaded', function () {
//     var addToCartButton = document.querySelector('.add-to-cart-button');
//     addToCartButton.addEventListener('click', function () {
//         // obtener información del producto
//         var productName = addToCartButton.dataset.name;
//         var productImg = addToCartButton.dataset.img;
//         var productPrice = addToCartButton.dataset.price;
//         var productQuantity = 1; // por defecto, agregamos 1 producto

//         // crear nueva fila en la tabla con la información del producto
//         var newRow = '<tr class="product-content">';
//         newRow += '<td>';
//         newRow += '<div class="cart-info">';
//         newRow += '<img src="' + productImg + '" alt="" style="max-block-size: 100px;">';
//         newRow += '<div>';
//         newRow += '<p>' + productName + '</p>';
//         newRow += '<small>Precio: $' + productPrice + '</small>';
//         newRow += '<br>';
//         newRow += '<a href="">Remover</a>';
//         newRow += '</div>';
//         newRow += '</div>';
//         newRow += '</td>';
//         newRow += '<td><input type="number" value="' + productQuantity + '"></td>';
//         newRow += '<td>$' + productPrice + '</td>';
//         newRow += '</tr>';

//         // agregar la nueva fila a la tabla
//         var table = document.querySelector('#cartTable');
//         table.innerHTML += newRow;

//         // agregar un console.log para verificar que se está ejecutando el evento
//         console.log('Producto agregado al carrito');
//     });
// });