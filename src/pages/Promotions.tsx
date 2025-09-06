import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, Filter, Plus, Edit, Trash2, ArrowUpDown, ChevronLeft, ChevronRight, Calendar, X, Tag, Percent, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
export function Promotions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPromotion, setSelectedPromotion] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  // Mock promotion data
  const promotions = [{
    id: 1,
    name: 'Khuyến mãi mùa hè',
    code: 'SUMMER2023',
    type: 'Giảm giá phần trăm',
    value: 15,
    minOrder: 500000,
    maxDiscount: 200000,
    startDate: '01/06/2023',
    endDate: '30/06/2023',
    status: 'Đang hoạt động',
    applicableProducts: ['Tất cả'],
    description: 'Giảm 15% cho tất cả sản phẩm, áp dụng cho đơn hàng từ 500,000₫',
    usageCount: 45,
    usageLimit: 100
  }, {
    id: 2,
    name: 'Ưu đãi phụ kiện',
    code: 'ACCS20',
    type: 'Giảm giá phần trăm',
    value: 20,
    minOrder: 300000,
    maxDiscount: 150000,
    startDate: '15/05/2023',
    endDate: '15/06/2023',
    status: 'Đang hoạt động',
    applicableProducts: ['Phụ kiện điện thoại', 'Phụ kiện máy tính'],
    description: 'Giảm 20% cho các phụ kiện điện thoại và máy tính',
    usageCount: 32,
    usageLimit: 50
  }, {
    id: 3,
    name: 'Ưu đãi sinh nhật',
    code: 'BIRTHDAY',
    type: 'Giảm giá cố định',
    value: 100000,
    minOrder: 1000000,
    maxDiscount: 100000,
    startDate: '01/01/2023',
    endDate: '31/12/2023',
    status: 'Đang hoạt động',
    applicableProducts: ['Tất cả'],
    description: 'Giảm 100,000₫ cho khách hàng trong tháng sinh nhật',
    usageCount: 18,
    usageLimit: 0
  }, {
    id: 4,
    name: 'Khuyến mãi cuối năm',
    code: 'YEAREND',
    type: 'Giảm giá phần trăm',
    value: 25,
    minOrder: 2000000,
    maxDiscount: 500000,
    startDate: '01/12/2023',
    endDate: '31/12/2023',
    status: 'Chưa bắt đầu',
    applicableProducts: ['Tất cả'],
    description: 'Giảm 25% cho tất cả sản phẩm, áp dụng cho đơn hàng từ 2,000,000₫',
    usageCount: 0,
    usageLimit: 0
  }, {
    id: 5,
    name: 'Ưu đãi tháng 5',
    code: 'MAY2023',
    type: 'Giảm giá phần trăm',
    value: 10,
    minOrder: 0,
    maxDiscount: 100000,
    startDate: '01/05/2023',
    endDate: '31/05/2023',
    status: 'Hết hạn',
    applicableProducts: ['Tất cả'],
    description: 'Giảm 10% cho tất cả sản phẩm trong tháng 5',
    usageCount: 87,
    usageLimit: 100
  }];
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(price);
  };
  return <div className="flex h-full">
      <div className={`flex-1 ${selectedPromotion ? 'pr-4' : ''}`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#0F1724]">Khuyến mãi</h1>
          <Button variant="primary" icon={<Plus size={16} />} onClick={() => setShowAddModal(true)}>
            Thêm khuyến mãi
          </Button>
        </div>
        <Card>
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
                      Tên khuyến mãi
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Mã
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
                      Giá trị
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    <div className="flex items-center">
                      Thời hạn
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
                {promotions.map(promotion => <tr key={promotion.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedPromotion(promotion.id)}>
                    <td className="px-4 py-3 text-sm font-medium text-[#0F1724]">
                      {promotion.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      <span className="font-mono">{promotion.code}</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {promotion.type}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#0F1724]">
                      {promotion.type === 'Giảm giá phần trăm' ? `${promotion.value}%` : formatPrice(promotion.value)}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {promotion.startDate} - {promotion.endDate}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${promotion.status === 'Đang hoạt động' ? 'bg-green-50 text-[#00B894]' : promotion.status === 'Chưa bắt đầu' ? 'bg-blue-50 text-[#0B6EFD]' : 'bg-gray-50 text-gray-600'}`}>
                        {promotion.status}
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
              Hiển thị 1-5 của 5 khuyến mãi
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
      {selectedPromotion && <div className="w-1/3 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-[#0F1724]">
              Chi tiết khuyến mãi
            </h2>
            <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => setSelectedPromotion(null)}>
              <X size={18} />
            </button>
          </div>
          {(() => {
        const promotion = promotions.find(p => p.id === selectedPromotion);
        if (!promotion) return null;
        return <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-[#0B6EFD]">
                      <Tag size={32} />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#0F1724]">
                      {promotion.name}
                    </h3>
                    <p className="text-sm bg-gray-100 px-3 py-1 rounded-full inline-block mt-2 font-mono">
                      {promotion.code}
                    </p>
                  </div>
                  <div className="pt-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-[#556270]">
                          Loại khuyến mãi
                        </p>
                        <p className="text-sm font-medium">{promotion.type}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#556270]">Giá trị</p>
                        <p className="text-sm font-medium">
                          {promotion.type === 'Giảm giá phần trăm' ? `${promotion.value}%` : formatPrice(promotion.value)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#556270]">
                          Đơn hàng tối thiểu
                        </p>
                        <p className="text-sm font-medium">
                          {promotion.minOrder > 0 ? formatPrice(promotion.minOrder) : 'Không giới hạn'}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#556270]">Giảm tối đa</p>
                        <p className="text-sm font-medium">
                          {promotion.maxDiscount > 0 ? formatPrice(promotion.maxDiscount) : 'Không giới hạn'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar size={18} className="text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-xs text-[#556270]">
                        Thời gian áp dụng
                      </p>
                      <p className="text-sm font-medium">
                        {promotion.startDate} - {promotion.endDate}
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm font-medium text-[#0F1724] mb-2">
                      Trạng thái
                    </p>
                    <div className="flex items-center">
                      {promotion.status === 'Đang hoạt động' ? <CheckCircle size={18} className="text-[#00B894] mr-2" /> : promotion.status === 'Chưa bắt đầu' ? <AlertCircle size={18} className="text-[#0B6EFD] mr-2" /> : <XCircle size={18} className="text-gray-500 mr-2" />}
                      <span className={`text-sm font-medium ${promotion.status === 'Đang hoạt động' ? 'text-[#00B894]' : promotion.status === 'Chưa bắt đầu' ? 'text-[#0B6EFD]' : 'text-gray-500'}`}>
                        {promotion.status}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0F1724] mb-2">
                      Áp dụng cho
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {promotion.applicableProducts.map((product, index) => <span key={index} className="px-2 py-1 bg-blue-50 text-[#0B6EFD] rounded-full text-xs">
                          {product}
                        </span>)}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0F1724] mb-2">
                      Mô tả
                    </p>
                    <p className="text-sm text-[#556270] bg-gray-50 p-3 rounded-lg">
                      {promotion.description}
                    </p>
                  </div>
                  <div className="pt-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-[#556270]">Đã sử dụng</p>
                        <p className="text-sm font-medium">
                          {promotion.usageCount}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#556270]">
                          Giới hạn sử dụng
                        </p>
                        <p className="text-sm font-medium">
                          {promotion.usageLimit > 0 ? promotion.usageLimit : 'Không giới hạn'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex space-x-3">
                    <Button variant="secondary" className="flex-1" icon={<Edit size={16} />}>
                      Sửa
                    </Button>
                    <Button variant={promotion.status === 'Đang hoạt động' ? 'danger' : 'primary'} className="flex-1" icon={promotion.status === 'Đang hoạt động' ? <XCircle size={16} /> : <CheckCircle size={16} />}>
                      {promotion.status === 'Đang hoạt động' ? 'Dừng' : 'Kích hoạt'}
                    </Button>
                  </div>
                </div>
              </div>;
      })()}
        </div>}
      {/* Add Promotion Modal */}
      {showAddModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-[#0F1724]">
                Thêm khuyến mãi mới
              </h2>
              <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => setShowAddModal(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Tên khuyến mãi
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập tên khuyến mãi" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Mã khuyến mãi
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD] font-mono" placeholder="Nhập mã khuyến mãi" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Loại khuyến mãi
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]">
                    <option value="">Chọn loại khuyến mãi</option>
                    <option value="Giảm giá phần trăm">
                      Giảm giá phần trăm (%)
                    </option>
                    <option value="Giảm giá cố định">
                      Giảm giá cố định (VNĐ)
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Giá trị
                  </label>
                  <div className="relative">
                    <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập giá trị" />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <Percent size={16} />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Đơn hàng tối thiểu
                  </label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập giá trị đơn hàng tối thiểu" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Giảm tối đa
                  </label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập giá trị giảm tối đa" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#556270] mb-1">
                      Ngày bắt đầu
                    </label>
                    <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#556270] mb-1">
                      Ngày kết thúc
                    </label>
                    <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Áp dụng cho
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]">
                    <option value="Tất cả">Tất cả sản phẩm</option>
                    <option value="Danh mục">Theo danh mục</option>
                    <option value="Sản phẩm">Sản phẩm cụ thể</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Giới hạn sử dụng
                  </label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập số lần sử dụng tối đa (0 = không giới hạn)" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Mô tả
                  </label>
                  <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập mô tả khuyến mãi" rows={3}></textarea>
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