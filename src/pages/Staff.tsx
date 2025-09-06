import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, Filter, Plus, Edit, Trash2, ArrowUpDown, ChevronLeft, ChevronRight, Mail, Phone, MapPin, User, Calendar, X, ShieldCheck, Key } from 'lucide-react';
export function Staff() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStaff, setSelectedStaff] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  // Mock staff data
  const staffMembers = [{
    id: 1,
    name: 'Nguyễn Văn A',
    position: 'Quản lý',
    phone: '0901234567',
    email: 'nguyenvana@email.com',
    address: '123 Đường Lê Lợi, Quận 1, TP.HCM',
    joinDate: '01/01/2022',
    status: 'Đang làm việc',
    role: 'admin',
    birthday: '05/08/1990',
    idNumber: '079123456789',
    permissions: ['all']
  }, {
    id: 2,
    name: 'Trần Thị B',
    position: 'Nhân viên bán hàng',
    phone: '0912345678',
    email: 'tranthib@email.com',
    address: '456 Đường Nguyễn Huệ, Quận 1, TP.HCM',
    joinDate: '15/03/2022',
    status: 'Đang làm việc',
    role: 'sales',
    birthday: '12/04/1992',
    idNumber: '079234567890',
    permissions: ['sales', 'customers']
  }, {
    id: 3,
    name: 'Lê Văn C',
    position: 'Nhân viên kho',
    phone: '0923456789',
    email: 'levanc@email.com',
    address: '789 Đường Cách Mạng Tháng 8, Quận 3, TP.HCM',
    joinDate: '10/05/2022',
    status: 'Đang làm việc',
    role: 'inventory',
    birthday: '20/12/1988',
    idNumber: '079345678901',
    permissions: ['inventory', 'products']
  }, {
    id: 4,
    name: 'Phạm Thị D',
    position: 'Kế toán',
    phone: '0934567890',
    email: 'phamthid@email.com',
    address: '101 Đường Võ Văn Tần, Quận 3, TP.HCM',
    joinDate: '01/07/2022',
    status: 'Đang làm việc',
    role: 'accountant',
    birthday: '18/06/1985',
    idNumber: '079456789012',
    permissions: ['reports', 'payments']
  }, {
    id: 5,
    name: 'Hoàng Văn E',
    position: 'Nhân viên bán hàng',
    phone: '0945678901',
    email: 'hoangvane@email.com',
    address: '202 Đường Nguyễn Văn Cừ, Quận 5, TP.HCM',
    joinDate: '15/08/2022',
    status: 'Tạm nghỉ',
    role: 'sales',
    birthday: '25/10/1995',
    idNumber: '079567890123',
    permissions: ['sales', 'customers']
  }];
  return <div className="flex h-full">
      <div className={`flex-1 ${selectedStaff ? 'pr-4' : ''}`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#0F1724]">Nhân viên</h1>
          <Button variant="primary" icon={<Plus size={16} />} onClick={() => setShowAddModal(true)}>
            Thêm nhân viên
          </Button>
        </div>
        <Card>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[240px]">
              <div className="relative">
                <input type="text" placeholder="Tìm kiếm theo tên, số điện thoại..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" />
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
                      Tên nhân viên
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
                      Ngày vào làm
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Trạng thái
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-[#556270] uppercase tracking-wider">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {staffMembers.map(staff => <tr key={staff.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedStaff(staff.id)}>
                    <td className="px-4 py-3 text-sm font-medium text-[#0F1724]">
                      {staff.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {staff.position}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {staff.phone}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {staff.email}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {staff.joinDate}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${staff.status === 'Đang làm việc' ? 'bg-green-50 text-[#00B894]' : 'bg-orange-50 text-[#FFA500]'}`}>
                        {staff.status}
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
              Hiển thị 1-5 của 5 nhân viên
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
      {selectedStaff && <div className="w-1/3 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-[#0F1724]">
              Chi tiết nhân viên
            </h2>
            <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => setSelectedStaff(null)}>
              <X size={18} />
            </button>
          </div>
          {(() => {
        const staff = staffMembers.find(s => s.id === selectedStaff);
        if (!staff) return null;
        return <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-[#0B6EFD] text-2xl font-bold">
                      {staff.name.split(' ').map(n => n[0]).slice(-2).join('')}
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#0F1724]">
                      {staff.name}
                    </h3>
                    <p className="text-sm text-[#556270] mt-1">
                      {staff.position}
                    </p>
                    <p className="mt-2">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${staff.status === 'Đang làm việc' ? 'bg-green-50 text-[#00B894]' : 'bg-orange-50 text-[#FFA500]'}`}>
                        {staff.status}
                      </span>
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Số điện thoại</p>
                        <p className="text-sm font-medium">{staff.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Email</p>
                        <p className="text-sm font-medium">{staff.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Địa chỉ</p>
                        <p className="text-sm font-medium">{staff.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Ngày sinh</p>
                        <p className="text-sm font-medium">{staff.birthday}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <User size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">CMND/CCCD</p>
                        <p className="text-sm font-medium">{staff.idNumber}</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-[#556270] mb-2">
                        Ngày vào làm
                      </p>
                      <p className="text-base font-medium">{staff.joinDate}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0F1724] mb-2">
                      Vai trò và quyền hạn
                    </p>
                    <div className="flex items-center mb-3">
                      <ShieldCheck size={18} className="text-[#0B6EFD] mr-2" />
                      <p className="text-sm font-medium capitalize">
                        {staff.role === 'admin' ? 'Quản trị viên' : staff.role === 'sales' ? 'Nhân viên bán hàng' : staff.role === 'inventory' ? 'Nhân viên kho' : staff.role === 'accountant' ? 'Kế toán' : staff.role}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-[#556270] mb-2">
                        Quyền truy cập:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {staff.permissions.includes('all') ? <span className="px-2 py-1 bg-blue-50 text-[#0B6EFD] rounded-full text-xs">
                            Toàn quyền
                          </span> : <>
                            {staff.permissions.includes('sales') && <span className="px-2 py-1 bg-blue-50 text-[#0B6EFD] rounded-full text-xs">
                                Bán hàng
                              </span>}
                            {staff.permissions.includes('customers') && <span className="px-2 py-1 bg-blue-50 text-[#0B6EFD] rounded-full text-xs">
                                Khách hàng
                              </span>}
                            {staff.permissions.includes('inventory') && <span className="px-2 py-1 bg-blue-50 text-[#0B6EFD] rounded-full text-xs">
                                Kho
                              </span>}
                            {staff.permissions.includes('products') && <span className="px-2 py-1 bg-blue-50 text-[#0B6EFD] rounded-full text-xs">
                                Sản phẩm
                              </span>}
                            {staff.permissions.includes('reports') && <span className="px-2 py-1 bg-blue-50 text-[#0B6EFD] rounded-full text-xs">
                                Báo cáo
                              </span>}
                            {staff.permissions.includes('payments') && <span className="px-2 py-1 bg-blue-50 text-[#0B6EFD] rounded-full text-xs">
                                Thanh toán
                              </span>}
                          </>}
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex space-x-3">
                    <Button variant="secondary" className="flex-1" icon={<Edit size={16} />}>
                      Sửa
                    </Button>
                    <Button variant="primary" className="flex-1" icon={<Key size={16} />}>
                      Đổi mật khẩu
                    </Button>
                  </div>
                </div>
              </div>;
      })()}
        </div>}
      {/* Add Staff Modal */}
      {showAddModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-[#0F1724]">
                Thêm nhân viên mới
              </h2>
              <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => setShowAddModal(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Tên nhân viên
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập tên nhân viên" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Vị trí
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]">
                    <option value="">Chọn vị trí</option>
                    <option value="Quản lý">Quản lý</option>
                    <option value="Nhân viên bán hàng">
                      Nhân viên bán hàng
                    </option>
                    <option value="Nhân viên kho">Nhân viên kho</option>
                    <option value="Kế toán">Kế toán</option>
                  </select>
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
                    CMND/CCCD
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập số CMND/CCCD" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Ngày vào làm
                  </label>
                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Vai trò
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]">
                    <option value="">Chọn vai trò</option>
                    <option value="admin">Quản trị viên</option>
                    <option value="sales">Nhân viên bán hàng</option>
                    <option value="inventory">Nhân viên kho</option>
                    <option value="accountant">Kế toán</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Tên đăng nhập
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập tên đăng nhập" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Mật khẩu
                  </label>
                  <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập mật khẩu" />
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