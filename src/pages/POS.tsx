import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Search, Plus, Minus, Trash2, Save, ShoppingCart, Printer, CreditCard, Wallet, DollarSign } from 'lucide-react';
export function POS() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>>([{
    id: 1,
    name: 'Tai nghe Bluetooth XYZ',
    price: 300000,
    quantity: 1
  }, {
    id: 2,
    name: 'Sạc dự phòng 10000mAh',
    price: 250000,
    quantity: 1
  }]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card' | 'wallet'>('cash');
  const [amountReceived, setAmountReceived] = useState('');
  // Mock products for suggestion
  const suggestedProducts = [{
    id: 3,
    name: 'Ốp lưng iPhone 13',
    price: 200000,
    image: 'https://placehold.co/80x80'
  }, {
    id: 4,
    name: 'Cáp sạc Type-C',
    price: 100000,
    image: 'https://placehold.co/80x80'
  }, {
    id: 5,
    name: 'Chuột không dây M100',
    price: 250000,
    image: 'https://placehold.co/80x80'
  }, {
    id: 6,
    name: 'Bàn phím cơ K100',
    price: 800000,
    image: 'https://placehold.co/80x80'
  }, {
    id: 7,
    name: 'Webcam HD 1080p',
    price: 450000,
    image: 'https://placehold.co/80x80'
  }, {
    id: 8,
    name: 'Tai nghe có dây Bass',
    price: 150000,
    image: 'https://placehold.co/80x80'
  }];
  const addToCart = (product: {
    id: number;
    name: string;
    price: number;
  }) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === product.id ? {
        ...item,
        quantity: item.quantity + 1
      } : item));
    } else {
      setCart([...cart, {
        ...product,
        quantity: 1
      }]);
    }
  };
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => item.id === id ? {
        ...item,
        quantity: quantity
      } : item));
    }
  };
  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% VAT
  const total = subtotal + tax;
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(price);
  };
  const handlePayment = () => {
    // Process payment logic would go here
    setShowPaymentModal(false);
    // Show success message and reset cart
    setTimeout(() => {
      setCart([]);
    }, 1000);
  };
  return <div className="flex h-full">
      {/* Left column - Products */}
      <div className="w-7/12 pr-6 overflow-y-auto">
        <div className="mb-4 relative">
          <input type="text" placeholder="Tìm sản phẩm theo tên, mã, barcode..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" />
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <div size={20} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {suggestedProducts.map(product => <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer" onClick={() => addToCart(product)}>
              <img src={product.image} alt={product.name} className="w-full h-24 object-cover" />
              <div className="p-3">
                <h3 className="text-sm font-medium text-[#0F1724] line-clamp-2">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-[#0B6EFD]">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>)}
        </div>
      </div>
      {/* Right column - Cart */}
      <div className="w-5/12 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-[#0F1724]">Giỏ hàng</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <ShoppingCart size={48} strokeWidth={1} />
              <p className="mt-2">Chưa có sản phẩm trong giỏ hàng</p>
            </div> : <div className="space-y-4">
              {cart.map(item => <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-[#0F1724]">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#0B6EFD] font-medium">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus size={16} />
                    </button>
                    <input type="text" value={item.quantity} onChange={e => {
                const val = parseInt(e.target.value);
                if (!isNaN(val)) {
                  updateQuantity(item.id, val);
                }
              }} className="w-10 mx-1 text-center border border-gray-200 rounded-md" />
                    <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus size={16} />
                    </button>
                    <button className="ml-2 p-1 text-gray-400 hover:text-[#E74C3C]" onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>)}
            </div>}
        </div>
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-sm text-[#556270]">Tạm tính</span>
              <span className="text-sm font-medium">
                {formatPrice(subtotal)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[#556270]">VAT (10%)</span>
              <span className="text-sm font-medium">{formatPrice(tax)}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="text-base font-medium">Tổng cộng</span>
              <span className="text-lg font-bold text-[#0B6EFD]">
                {formatPrice(total)}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <Button variant="secondary" size="md" icon={<Save size={16} />} className="col-span-1">
              Lưu
            </Button>
            <Button variant="secondary" size="md" icon={<Printer size={16} />} className="col-span-1">
              In
            </Button>
            <Button variant="primary" size="md" className="col-span-1" onClick={() => setShowPaymentModal(true)} disabled={cart.length === 0}>
              Thanh toán
            </Button>
          </div>
          <div className="text-xs text-center text-[#556270]">
            <span className="font-medium">F1:</span> Tìm kiếm &nbsp;
            <span className="font-medium">F2:</span> Thanh toán &nbsp;
            <span className="font-medium">F3:</span> Lưu tạm
          </div>
        </div>
      </div>
      {/* Payment Modal */}
      {showPaymentModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-[#0F1724]">Thanh toán</h2>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#0F1724] mb-2">
                  {formatPrice(total)}
                </h3>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <button className={`p-3 border rounded-lg flex flex-col items-center ${paymentMethod === 'cash' ? 'border-[#0B6EFD] bg-blue-50' : 'border-gray-200'}`} onClick={() => setPaymentMethod('cash')}>
                    <DollarSign size={24} className={paymentMethod === 'cash' ? 'text-[#0B6EFD]' : 'text-gray-500'} />
                    <span className="text-sm mt-1">Tiền mặt</span>
                  </button>
                  <button className={`p-3 border rounded-lg flex flex-col items-center ${paymentMethod === 'card' ? 'border-[#0B6EFD] bg-blue-50' : 'border-gray-200'}`} onClick={() => setPaymentMethod('card')}>
                    <CreditCard size={24} className={paymentMethod === 'card' ? 'text-[#0B6EFD]' : 'text-gray-500'} />
                    <span className="text-sm mt-1">Thẻ</span>
                  </button>
                  <button className={`p-3 border rounded-lg flex flex-col items-center ${paymentMethod === 'wallet' ? 'border-[#0B6EFD] bg-blue-50' : 'border-gray-200'}`} onClick={() => setPaymentMethod('wallet')}>
                    <Wallet size={24} className={paymentMethod === 'wallet' ? 'text-[#0B6EFD]' : 'text-gray-500'} />
                    <span className="text-sm mt-1">Ví điện tử</span>
                  </button>
                </div>
                {paymentMethod === 'cash' && <div className="mb-4">
                    <label className="block text-sm font-medium text-[#556270] mb-1">
                      Tiền khách đưa
                    </label>
                    <input type="text" value={amountReceived} onChange={e => setAmountReceived(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập số tiền" />
                    {amountReceived && !isNaN(parseFloat(amountReceived.replace(/,/g, ''))) && <div className="mt-2 flex justify-between">
                          <span className="text-sm text-[#556270]">
                            Tiền thối lại
                          </span>
                          <span className="text-sm font-medium text-[#00B894]">
                            {formatPrice(parseFloat(amountReceived.replace(/,/g, '')) - total)}
                          </span>
                        </div>}
                  </div>}
              </div>
              <div className="flex space-x-3">
                <Button variant="secondary" className="flex-1" onClick={() => setShowPaymentModal(false)}>
                  Hủy
                </Button>
                <Button variant="primary" className="flex-1" onClick={handlePayment}>
                  Xác nhận
                </Button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}