import { useState } from "react";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const CartDropdown = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 29.99, quantity: 1, image: '/images/product1.png' },
    { id: 2, name: "Product 2", price: 49.99, quantity: 1, image: '/images/product2.png' },
  ]);

  const [isOpen, setIsOpen] = useState(true);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const changeQuantity = (id, action) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    isOpen && (
      <div className="fixed top-0 right-0 w-[400px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
        {/* Sağ üstteki kapatma butonu */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={closeCart}
        >
          <IoClose size={24} />
        </button>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-6">Your Cart</h3>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">No items in your cart</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm"
                >
                  {/* Ürün Resmi */}
                  <div className="w-16 h-16 bg-gray-300 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={item.image} width={100} height={100} alt={item.name} />
                  </div>

                  {/* Ürün Bilgisi */}
                  <div className="flex-1 ml-4">
                    <p className="text-lg font-medium">{item.name}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        className="text-gray-600 hover:text-gray-900"
                        onClick={() => changeQuantity(item.id, "decrease")}
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus />
                      </button>
                      <span className="text-gray-700">{item.quantity}</span>
                      <button
                        className="text-gray-600 hover:text-gray-900"
                        onClick={() => changeQuantity(item.id, "increase")}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  {/* Fiyat ve Çöp İkonu */}
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-semibold mb-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeItem(item.id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* Alt Toplam ve Buton */}
          <div className="absolute bottom-4 left-0 right-0 px-6">
            <div className="text-lg font-bold text-gray-700 mb-4">
              Total: ${calculateTotal()}
            </div>
            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
              Ödeme Sayfasına Git
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CartDropdown;
