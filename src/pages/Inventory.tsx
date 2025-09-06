import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, Filter, ArrowUpDown, FileText, Plus, Upload, ChevronLeft, ChevronRight, Package } from 'lucide-react';
export function Inventory() {
  const [activeTab, setActiveTab] = useState('stock');
  const [searchQuery, setSearchQuery] = useState('');
  // Mock inventory data
  const inventoryItems = [{
    id: 1,
    name: 'Tai nghe Bluetooth XYZ',
    sku: 'TN-BT-001',
    category: 'Tai nghe',
    stock: 15,
    minStock: 5,
    location: 'A1-01',
    lastUpdated: '15/05/2023'
  }, {
    id: 2,
    name: 'Sạc dự phòng 10000mAh',
    sku: 'SDP-10K-002',
    category: 'Sạc & Pin',
    stock: 20,
    minStock: 10,
    location: 'A2-03',
    lastUpdated: '12/05/2023'
  }, {
    id: 3,
    name: 'Ốp lưng iPhone 13',
    sku: 'OL-IP13-003',
    category: 'Phụ kiện điện thoại',
    stock: 4,
    minStock: 10,
    location: 'B1-05',
    lastUpdated: '10/05/2023'
  }, {
    id: 4,
    name: 'Cáp sạc Type-C',
    sku: 'CS-TC-004',
    category: 'Cáp sạc',
    stock: 50,
    minStock: 20,
    location: 'A3-02',
    lastUpdated: '08/05/2023'
  }, {
    id: 5,
    name: 'Chuột không dây M100',
    sku: 'CKD-M100-005',
    category: 'Chuột & Bàn phím',
    stock: 2,
    minStock: 5,
    location: 'C2-01',
    lastUpdated: '05/05/2023'
  }];
  // Mock purchase orders
  const purchaseOrders = [{
    id: 'PO-2023-001',
    supplier: 'XYZ Electronics',
    date: '15/05/2023',
    status: 'Hoàn thành',
    items: 12,
    total: 15600000
  }, {
    id: 'PO-2023-002',
    supplier: 'PowerMax',
    date: '12/05/2023',
    status: 'Đang xử lý',
    items: 5,
    total: 8500000
  }, {
    id: 'PO-2023-003',
    supplier: 'TechGear',
    date: '10/05/2023',
    status: 'Chờ duyệt',
    items: 8,
    total: 12000000
  }];
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(price);
  };
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#0F1724]">Kho</h1>
        <div className="flex space-x-2">
          {activeTab === 'stock' && <Button variant="secondary" icon={<div size={16} />}>
              Kiểm kê
            </Button>}
          {activeTab === 'purchase' && <Button variant="primary" icon={<Plus size={16} />}>
              Tạo phiếu nhập
            </Button>}
        </div>
      </div>
      <div className="bg-white rounded-lg p-1 flex mb-6 w-fit">
        <button className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === 'stock' ? 'bg-[#0B6EFD] text-white' : 'text-[#556270] hover:bg-gray-100'}`} onClick={() => setActiveTab('stock')}>
          Tồn kho
        </button>
        <button className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === 'purchase' ? 'bg-[#0B6EFD] text-white' : 'text-[#556270] hover:bg-gray-100'}`} onClick={() => setActiveTab('purchase')}>
          Phiếu nhập
        </button>
        <button className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === 'stocktake' ? 'bg-[#0B6EFD] text-white' : 'text-[#556270] hover:bg-gray-100'}`} onClick={() => setActiveTab('stocktake')}>
          Kiểm kê
        </button>
      </div>
      {activeTab === 'stock' && <Card>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[240px]">
              <div className="relative">
                <input type="text" placeholder="Tìm kiếm theo tên, mã..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" />
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
                      Danh mục
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Tồn kho
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Ngưỡng tối thiểu
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Vị trí
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Cập nhật cuối
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inventoryItems.map(item => <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {item.sku}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-[#0F1724]">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {item.category}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.stock < item.minStock ? 'bg-red-50 text-[#E74C3C]' : item.stock < item.minStock * 1.5 ? 'bg-orange-50 text-[#FFA500]' : 'bg-green-50 text-[#00B894]'}`}>
                        {item.stock}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {item.minStock}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {item.location}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {item.lastUpdated}
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
              <button className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </Card>}
      {activeTab === 'purchase' && <Card>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[240px]">
              <div className="relative">
                <input type="text" placeholder="Tìm kiếm phiếu nhập..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" />
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
                      Mã phiếu
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Nhà cung cấp
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Ngày tạo
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Trạng thái
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Số mặt hàng
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Tổng tiền
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-[#556270] uppercase tracking-wider">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {purchaseOrders.map(order => <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#0F1724]">
                      {order.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {order.supplier}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {order.date}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.status === 'Hoàn thành' ? 'bg-green-50 text-[#00B894]' : order.status === 'Đang xử lý' ? 'bg-blue-50 text-[#0B6EFD]' : 'bg-orange-50 text-[#FFA500]'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {order.items}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-[#0F1724]">
                      {formatPrice(order.total)}
                    </td>
                    <td className="px-4 py-3 text-sm text-right">
                      <button className="p-1 text-gray-500 hover:text-[#0B6EFD]">
                        <FileText size={16} />
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-[#556270]">
              Hiển thị 1-3 của 3 phiếu nhập
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
                <ChevronLeft size={16} />
              </button>
              <button className="px-3 py-1 rounded-lg bg-[#0B6EFD] text-white">
                1
              </button>
              <button className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </Card>}
      {activeTab === 'stocktake' && <Card>
          <div className="py-8 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Package size={32} className="text-[#0B6EFD]" />
            </div>
            <h3 className="text-xl font-bold text-[#0F1724] mb-2">
              Kiểm kê kho
            </h3>
            <p className="text-[#556270] text-center max-w-md mb-6">
              Tải lên file kiểm kê hoặc quét barcode trực tiếp để so sánh với
              tồn kho hệ thống.
            </p>
            <div className="flex space-x-4">
              <Button variant="primary" icon={<Upload size={16} />}>
                Tải lên file Excel
              </Button>
              <Button variant="secondary" icon={<div size={16} />}>
                Quét barcode
              </Button>
            </div>
          </div>
        </Card>}
    </div>;
}