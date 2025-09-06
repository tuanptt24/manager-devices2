import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Search, Filter, Plus, Edit, Trash2, ArrowUpDown, ChevronLeft, ChevronRight, X } from 'lucide-react';
export function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  // Mock product data
  const products = [{
    id: 1,
    name: 'Tai nghe Bluetooth XYZ',
    sku: 'TN-BT-001',
    brand: 'XYZ Audio',
    category: 'Tai nghe',
    sellPrice: 300000,
    costPrice: 200000,
    stock: 15,
    image: 'https://placehold.co/100x100',
    description: 'Tai nghe Bluetooth không dây với chất lượng âm thanh cao và thời lượng pin lên đến 20 giờ.',
    barcode: '8938505432198',
    specs: [{
      name: 'Thời lượng pin',
      value: '20 giờ'
    }, {
      name: 'Kết nối',
      value: 'Bluetooth 5.0'
    }, {
      name: 'Chống nước',
      value: 'IPX4'
    }]
  }, {
    id: 2,
    name: 'Sạc dự phòng 10000mAh',
    sku: 'SDP-10K-002',
    brand: 'PowerMax',
    category: 'Sạc & Pin',
    sellPrice: 250000,
    costPrice: 180000,
    stock: 20,
    image: 'https://placehold.co/100x100',
    description: 'Sạc dự phòng dung lượng 10000mAh, hỗ trợ sạc nhanh và có 2 cổng USB.',
    barcode: '8938505432199',
    specs: [{
      name: 'Dung lượng',
      value: '10000mAh'
    }, {
      name: 'Cổng sạc',
      value: 'USB-C, Micro USB'
    }, {
      name: 'Cổng ra',
      value: '2 x USB-A'
    }]
  }, {
    id: 3,
    name: 'Ốp lưng iPhone 13',
    sku: 'OL-IP13-003',
    brand: 'CasePro',
    category: 'Phụ kiện điện thoại',
    sellPrice: 200000,
    costPrice: 120000,
    stock: 30,
    image: 'https://placehold.co/100x100',
    description: 'Ốp lưng bảo vệ cho iPhone 13, chất liệu silicone mềm, chống sốc tốt.',
    barcode: '8938505432200',
    specs: [{
      name: 'Chất liệu',
      value: 'Silicone'
    }, {
      name: 'Tương thích',
      value: 'iPhone 13'
    }, {
      name: 'Màu sắc',
      value: 'Đen'
    }]
  }, {
    id: 4,
    name: 'Cáp sạc Type-C',
    sku: 'CS-TC-004',
    brand: 'ConnectPro',
    category: 'Cáp sạc',
    sellPrice: 100000,
    costPrice: 60000,
    stock: 50,
    image: 'https://placehold.co/100x100',
    description: 'Cáp sạc Type-C dài 1m, hỗ trợ sạc nhanh và truyền dữ liệu tốc độ cao.',
    barcode: '8938505432201',
    specs: [{
      name: 'Chiều dài',
      value: '1m'
    }, {
      name: 'Tốc độ truyền',
      value: 'USB 3.1'
    }, {
      name: 'Công suất',
      value: 'Lên đến 60W'
    }]
  }, {
    id: 5,
    name: 'Chuột không dây M100',
    sku: 'CKD-M100-005',
    brand: 'TechGear',
    category: 'Chuột & Bàn phím',
    sellPrice: 250000,
    costPrice: 150000,
    stock: 12,
    image: 'https://placehold.co/100x100',
    description: 'Chuột không dây với thiết kế công thái học, độ phân giải 1600 DPI.',
    barcode: '8938505432202',
    specs: [{
      name: 'DPI',
      value: '1600'
    }, {
      name: 'Kết nối',
      value: 'Wireless 2.4GHz'
    }, {
      name: 'Pin',
      value: '1 x AA (kèm theo)'
    }]
  }];
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(price);
  };
  return <div className="flex h-full">
      <div className={`flex-1 ${selectedProduct ? 'pr-4' : ''}`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#0F1724]">Sản phẩm</h1>
          <Button variant="primary" icon={<Plus size={16} />}>
            Thêm sản phẩm
          </Button>
        </div>
        <Card>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[240px]">
              <div className="relative">
                <input type="text" placeholder="Tìm kiếm theo tên, mã, barcode..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div>
              <Button variant="secondary" icon={<Filter size={16} />}>
                Lọc
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      SKU
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Tên sản phẩm
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Hãng
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Loại
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Giá bán
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Giá vốn
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Tồn kho
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-[#556270] uppercase tracking-wider">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map(product => <tr key={product.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedProduct(product.id)}>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {product.sku}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-[#0F1724]">
                      {product.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {product.brand}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {product.category}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-[#0F1724]">
                      {formatPrice(product.sellPrice)}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {formatPrice(product.costPrice)}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.stock < 5 ? 'bg-red-50 text-[#E74C3C]' : product.stock < 10 ? 'bg-orange-50 text-[#FFA500]' : 'bg-green-50 text-[#00B894]'}`}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-right space-x-1">
                      <button className="p-1 text-gray-500 hover:text-[#0B6EFD]" onClick={e => {
                    e.stopPropagation();
                    // Edit logic
                  }}>
                        <Edit size={16} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-[#E74C3C]" onClick={e => {
                    e.stopPropagation();
                    // Delete logic
                  }}>
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-[#556270]">
              Hiển thị 1-5 của 5 sản phẩm
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
                <ChevronLeft size={16} />
              </button>
              <button className="px-3 py-1 rounded-lg bg-[#0B6EFD] text-white">
                1
              </button>
              <button className="px-3 py-1 rounded-lg hover:bg-gray-100">
                2
              </button>
              <button className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </Card>
      </div>
      {selectedProduct && <div className="w-1/3 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-[#0F1724]">
              Chi tiết sản phẩm
            </h2>
            <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => setSelectedProduct(null)}>
              <X size={18} />
            </button>
          </div>
          {selectedProduct && <div className="flex-1 overflow-y-auto p-6">
              {(() => {
          const product = products.find(p => p.id === selectedProduct);
          if (!product) return null;
          return <div className="space-y-6">
                    <div className="flex justify-center">
                      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F1724]">
                        {product.name}
                      </h3>
                      <p className="text-sm text-[#556270] mt-1">
                        SKU: {product.sku}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-[#556270]">Giá bán</p>
                        <p className="text-base font-bold text-[#0B6EFD]">
                          {formatPrice(product.sellPrice)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#556270]">Giá vốn</p>
                        <p className="text-base font-medium">
                          {formatPrice(product.costPrice)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#556270]">Tồn kho</p>
                        <p className="text-base font-medium">{product.stock}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#556270]">Lợi nhuận</p>
                        <p className="text-base font-medium text-[#00B894]">
                          {formatPrice(product.sellPrice - product.costPrice)}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0F1724] mb-2">
                        Mô tả
                      </p>
                      <p className="text-sm text-[#556270]">
                        {product.description}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0F1724] mb-2">
                        Barcode
                      </p>
                      <p className="text-sm text-[#556270]">
                        {product.barcode}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0F1724] mb-2">
                        Thông số kỹ thuật
                      </p>
                      <div className="space-y-2">
                        {product.specs.map((spec, index) => <div key={index} className="flex justify-between">
                            <span className="text-sm text-[#556270]">
                              {spec.name}
                            </span>
                            <span className="text-sm text-[#0F1724]">
                              {spec.value}
                            </span>
                          </div>)}
                      </div>
                    </div>
                    <div className="pt-4 flex space-x-3">
                      <Button variant="secondary" className="flex-1" icon={<Edit size={16} />}>
                        Sửa
                      </Button>
                      <Button variant="danger" className="flex-1" icon={<Trash2 size={16} />}>
                        Xóa
                      </Button>
                    </div>
                  </div>;
        })()}
            </div>}
        </div>}
    </div>;
}