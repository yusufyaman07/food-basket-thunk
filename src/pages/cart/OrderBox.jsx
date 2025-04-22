const OrderBox = ({ cart }) => {
  const totalAmount = cart.reduce((total, item) => total + item.amount, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.amount * item.price,
    0
  );

  return (
    <div className="p-5 rounded-md border h-fit">
      <h2 className="font-semibold text-xl">Order Summary</h2>

      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Total Items:</span>
        <span className="text-lg font-bold text-red-500">{totalAmount}</span>
      </p>

      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Total Price:</span>
        <span className="text-lg font-bold text-red-500">
          ${totalPrice.toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default OrderBox;
