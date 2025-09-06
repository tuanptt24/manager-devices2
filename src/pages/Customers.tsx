import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, Filter, Plus, Edit, Trash2, ArrowUpDown, ChevronLeft, ChevronRight, Mail, Phone, MapPin, User, Calendar, X, Tag, Heart } from 'lucide-react';
export function Customers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  // Mock customer data
  const customers = [{
    id: 1,
    name: 'Nguyễn Văn A',
    phone: '0901234567',
    email: 'nguyenvana@email.com',
    address: '123 Đường Lê Lợi, Quận 1, TP.HCM',
    totalSpent: 5200000,
    lastPurchase: '15/05/2023',
    type: 'VIP',
    birthday: '05/08/1990',
    notes: 'Khách hàng thân thiết, thích sản phẩm Apple',
    orders: 12
  }, {
    id: 2,
    name: 'Trần Thị B',
    phone: '0912345678',
    email: 'tranthib@email.com',
    address: '456 Đường Nguyễn Huệ, Quận 1, TP.HCM',
    totalSpent: 3800000,
    lastPurchase: '10/05/2023',
    type: 'Thường',
    birthday: '12/04/1988',
    notes: 'Thường mua phụ kiện điện thoại',
    orders: 8
  }, {
    id: 3,
    name: 'Lê Văn C',
    phone: '0923456789',
    email: 'levanc@email.com',
    address: '789 Đường Cách Mạng Tháng 8, Quận 3, TP.HCM',
    totalSpent: 7500000,
    lastPurchase: '05/05/2023',
    type: 'VIP',
    birthday: '20/12/1985',
    notes: 'Thích các sản phẩm cao cấp',
    orders: 15
  }, {
    id: 4,
    name: 'Phạm Thị D',
    phone: '0934567890',
    email: 'phamthid@email.com',
    address: '101 Đường Võ Văn Tần, Quận 3, TP.HCM',
    totalSpent: 2100000,
    lastPurchase: '01/05/2023',
    type: 'Thường',
    birthday: '18/06/1992',
    notes: 'Mới trở thành khách hàng',
    orders: 3
  }, {
    id: 5,
    name: 'Hoàng Văn E',
    phone: '0945678901',
    email: 'hoangvane@email.com',
    address: '202 Đường Nguyễn Văn Cừ, Quận 5, TP.HCM',
    totalSpent: 4300000,
    lastPurchase: '28/04/2023',
    type: 'Thường',
    birthday: '25/10/1987',
    notes: 'Thường mua laptop và phụ kiện',
    orders: 7
  }];
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(price);
  };
  return <div className="flex h-full">
      <div className={`flex-1 ${selectedCustomer ? 'pr-4' : ''}`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#0F1724]">Khách hàng</h1>
          <Button variant="primary" icon={<Plus size={16} />} onClick={() => setShowAddModal(true)}>
            Thêm khách hàng
          </Button>
        </div>
        <Card>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[240px]">
              <div className="relative">
                <input type="text" placeholder="Tìm kiếm theo tên, số điện thoại, email..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" />
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
                      Tên khách hàng
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Số điện thoại
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Email
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
                      Tổng chi tiêu
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Mua gần nhất
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-[#556270] uppercase tracking-wider">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customers.map(customer => <tr key={customer.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedCustomer(customer.id)}>
                    <td className="px-4 py-3 text-sm font-medium text-[#0F1724]">
                      {customer.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {customer.phone}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {customer.email}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${customer.type === 'VIP' ? 'bg-purple-50 text-purple-600' : 'bg-gray-50 text-gray-600'}`}>
                        {customer.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-[#0F1724]">
                      {formatPrice(customer.totalSpent)}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {customer.lastPurchase}
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
              Hiển thị 1-5 của 5 khách hàng
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
      {selectedCustomer && <div className="w-1/3 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-[#0F1724]">
              Chi tiết khách hàng
            </h2>
            <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => setSelectedCustomer(null)}>
              <X size={18} />
            </button>
          </div>
          {(() => {
        const customer = customers.find(c => c.id === selectedCustomer);
        if (!customer) return null;
        return <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-[#0B6EFD] text-2xl font-bold">
                      {customer.name.split(' ').map(n => n[0]).slice(-2).join('')}
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#0F1724]">
                      {customer.name}
                    </h3>
                    <p className="text-sm text-[#556270] mt-1">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${customer.type === 'VIP' ? 'bg-purple-50 text-purple-600' : 'bg-gray-50 text-gray-600'}`}>
                        {customer.type}
                      </span>
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Số điện thoại</p>
                        <p className="text-sm font-medium">{customer.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Email</p>
                        <p className="text-sm font-medium">{customer.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Địa chỉ</p>
                        <p className="text-sm font-medium">
                          {customer.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Ngày sinh</p>
                        <p className="text-sm font-medium">
                          {customer.birthday}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-[#556270]">Tổng chi tiêu</p>
                        <p className="text-base font-bold text-[#0B6EFD]">
                          {formatPrice(customer.totalSpent)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#556270]">Số đơn hàng</p>
                        <p className="text-base font-medium">
                          {customer.orders}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#556270]">Mua gần nhất</p>
                        <p className="text-base font-medium">
                          {customer.lastPurchase}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0F1724] mb-2">
                      Ghi chú
                    </p>
                    <p className="text-sm text-[#556270] bg-gray-50 p-3 rounded-lg">
                      {customer.notes}
                    </p>
                  </div>
                  <div className="pt-4 flex space-x-3">
                    <Button variant="secondary" className="flex-1" icon={<Edit size={16} />}>
                      Sửa
                    </Button>
                    <Button variant="primary" className="flex-1" icon={<ShoppingCart size={16} />}>
                      Tạo đơn
                    </Button>
                  </div>
                </div>
              </div>;
      })()}
        </div>}
      {/* Add Customer Modal */}
      {showAddModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-[#0F1724]">
                Thêm khách hàng mới
              </h2>
              <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => setShowAddModal(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Tên khách hàng
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập tên khách hàng" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Số điện thoại
                  </label>
                  <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập số điện thoại" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Email
                  </label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Địa chỉ
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập địa chỉ" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Ngày sinh
                  </label>
                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Loại khách hàng
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]">
                    <option value="Thường">Thường</option>
                    <option value="VIP">VIP</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Ghi chú
                  </label>
                  <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập ghi chú" rows={3}></textarea>
                </div>
                <div className="pt-4 flex space-x-3">
                  <Button variant="secondary" className="flex-1" onClick={() => setShowAddModal(false)}>
                    Hủy
                  </Button>
                  <Button type="submit" variant="primary" className="flex-1">
                    Lưu
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>}
    </div>;
}