import React from 'react';

const Carrito = ({ itemsCarrito }) => {
  return (
    <div className="cart">
      <h2>Carrito de compras</h2>
      {itemsCarrito.length === 0 ? (
        <p>No hay elementos en el carrito.</p>
      ) : (
        <ul>
          {itemsCarrito.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      {/* Falta boton para finalizar compra */}
    </div>
  );
};

export default Carrito;