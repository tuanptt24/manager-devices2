import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, Filter, Plus, Edit, Trash2, ArrowUpDown, ChevronLeft, ChevronRight, Mail, Phone, MapPin, User, X, FileText, ExternalLink, Truck } from 'lucide-react';
export function Suppliers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  // Mock supplier data
  const suppliers = [{
    id: 1,
    name: 'XYZ Electronics',
    contactPerson: 'Nguyễn Văn X',
    phone: '0901234567',
    email: 'contact@xyzelec.com',
    address: '123 Đường Lê Lợi, Quận 1, TP.HCM',
    taxCode: '0123456789',
    totalOrders: 25,
    lastOrder: '15/05/2023',
    paymentTerms: 'Net 30',
    category: 'Thiết bị điện tử',
    notes: 'Nhà cung cấp chính cho các sản phẩm tai nghe và loa',
    website: 'www.xyzelec.com'
  }, {
    id: 2,
    name: 'PowerMax',
    contactPerson: 'Trần Thị Y',
    phone: '0912345678',
    email: 'support@powermax.com',
    address: '456 Đường Nguyễn Huệ, Quận 1, TP.HCM',
    taxCode: '9876543210',
    totalOrders: 18,
    lastOrder: '10/05/2023',
    paymentTerms: 'Net 15',
    category: 'Pin và sạc',
    notes: 'Chuyên cung cấp các loại sạc dự phòng và pin',
    website: 'www.powermax.com'
  }, {
    id: 3,
    name: 'TechGear',
    contactPerson: 'Lê Văn Z',
    phone: '0923456789',
    email: 'info@techgear.com',
    address: '789 Đường Cách Mạng Tháng 8, Quận 3, TP.HCM',
    taxCode: '5678901234',
    totalOrders: 15,
    lastOrder: '05/05/2023',
    paymentTerms: 'COD',
    category: 'Phụ kiện máy tính',
    notes: 'Cung cấp chuột, bàn phím và các phụ kiện máy tính',
    website: 'www.techgear.com'
  }, {
    id: 4,
    name: 'MobileCase',
    contactPerson: 'Phạm Thị W',
    phone: '0934567890',
    email: 'sales@mobilecase.com',
    address: '101 Đường Võ Văn Tần, Quận 3, TP.HCM',
    taxCode: '1357924680',
    totalOrders: 12,
    lastOrder: '01/05/2023',
    paymentTerms: 'Net 7',
    category: 'Phụ kiện điện thoại',
    notes: 'Chuyên cung cấp ốp lưng và miếng dán màn hình',
    website: 'www.mobilecase.com'
  }, {
    id: 5,
    name: 'CablePro',
    contactPerson: 'Hoàng Văn V',
    phone: '0945678901',
    email: 'contact@cablepro.com',
    address: '202 Đường Nguyễn Văn Cừ, Quận 5, TP.HCM',
    taxCode: '2468013579',
    totalOrders: 8,
    lastOrder: '28/04/2023',
    paymentTerms: 'Net 30',
    category: 'Cáp và kết nối',
    notes: 'Cung cấp các loại cáp sạc và cáp kết nối',
    website: 'www.cablepro.com'
  }];
  return <div className="flex h-full">
      <div className={`flex-1 ${selectedSupplier ? 'pr-4' : ''}`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#0F1724]">Nhà cung cấp</h1>
          <Button variant="primary" icon={<Plus size={16} />} onClick={() => setShowAddModal(true)}>
            Thêm nhà cung cấp
          </Button>
        </div>
        <Card>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[240px]">
              <div className="relative">
                <input type="text" placeholder="Tìm kiếm theo tên, mã số thuế..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" />
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
                      Tên nhà cung cấp
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
                      Người liên hệ
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
                      Đơn hàng
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Đặt hàng gần nhất
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-[#556270] uppercase tracking-wider">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {suppliers.map(supplier => <tr key={supplier.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedSupplier(supplier.id)}>
                    <td className="px-4 py-3 text-sm font-medium text-[#0F1724]">
                      {supplier.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {supplier.category}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {supplier.contactPerson}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {supplier.phone}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {supplier.totalOrders}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {supplier.lastOrder}
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
              Hiển thị 1-5 của 5 nhà cung cấp
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
      {selectedSupplier && <div className="w-1/3 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-[#0F1724]">
              Chi tiết nhà cung cấp
            </h2>
            <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => setSelectedSupplier(null)}>
              <X size={18} />
            </button>
          </div>
          {(() => {
        const supplier = suppliers.find(s => s.id === selectedSupplier);
        if (!supplier) return null;
        return <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-[#0B6EFD]">
                      <Truck size={32} />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#0F1724]">
                      {supplier.name}
                    </h3>
                    <p className="text-sm text-[#556270] mt-1">
                      {supplier.category}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <User size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Người liên hệ</p>
                        <p className="text-sm font-medium">
                          {supplier.contactPerson}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Số điện thoại</p>
                        <p className="text-sm font-medium">{supplier.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Email</p>
                        <p className="text-sm font-medium">{supplier.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Địa chỉ</p>
                        <p className="text-sm font-medium">
                          {supplier.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FileText size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Mã số thuế</p>
                        <p className="text-sm font-medium">
                          {supplier.taxCode}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ExternalLink size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Website</p>
                        <p className="text-sm font-medium text-[#0B6EFD]">
                          {supplier.website}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-[#556270]">Số đơn hàng</p>
                        <p className="text-base font-medium">
                          {supplier.totalOrders}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#556270]">
                          Đặt hàng gần nhất
                        </p>
                        <p className="text-base font-medium">
                          {supplier.lastOrder}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#556270]">
                          Điều khoản thanh toán
                        </p>
                        <p className="text-base font-medium">
                          {supplier.paymentTerms}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0F1724] mb-2">
                      Ghi chú
                    </p>
                    <p className="text-sm text-[#556270] bg-gray-50 p-3 rounded-lg">
                      {supplier.notes}
                    </p>
                  </div>
                  <div className="pt-4 flex space-x-3">
                    <Button variant="secondary" className="flex-1" icon={<Edit size={16} />}>
                      Sửa
                    </Button>
                    <Button variant="primary" className="flex-1" icon={<Plus size={16} />}>
                      Tạo đơn hàng
                    </Button>
                  </div>
                </div>
              </div>;
      })()}
        </div>}
      {/* Add Supplier Modal */}
      {showAddModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-[#0F1724]">
                Thêm nhà cung cấp mới
              </h2>
              <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => setShowAddModal(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Tên nhà cung cấp
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập tên nhà cung cấp" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Danh mục
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập danh mục" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Người liên hệ
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập tên người liên hệ" />
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
                    Mã số thuế
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập mã số thuế" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Website
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập website" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Điều khoản thanh toán
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]">
                    <option value="COD">Thanh toán khi nhận hàng (COD)</option>
                    <option value="Net 7">
                      Thanh toán trong 7 ngày (Net 7)
                    </option>
                    <option value="Net 15">
                      Thanh toán trong 15 ngày (Net 15)
                    </option>
                    <option value="Net 30">
                      Thanh toán trong 30 ngày (Net 30)
                    </option>
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