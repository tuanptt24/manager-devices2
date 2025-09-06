import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, Filter, Plus, Edit, Trash2, ArrowUpDown, ChevronLeft, ChevronRight, Calendar, X, FileText, CreditCard, DollarSign, Wallet, CheckCircle, XCircle, AlertCircle, Download } from 'lucide-react';
export function Payments() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [activeTab, setActiveTab] = useState('transactions');
  // Mock payment data
  const transactions = [{
    id: 1,
    invoiceId: 'INV-2023-001',
    date: '15/05/2023',
    customer: 'Nguyễn Văn A',
    amount: 1250000,
    method: 'Tiền mặt',
    status: 'Thành công',
    reference: '',
    note: 'Thanh toán đơn hàng INV-2023-001'
  }, {
    id: 2,
    invoiceId: 'INV-2023-002',
    date: '14/05/2023',
    customer: 'Trần Thị B',
    amount: 2300000,
    method: 'Chuyển khoản',
    status: 'Thành công',
    reference: 'TRAN123456',
    note: 'Thanh toán đơn hàng INV-2023-002'
  }, {
    id: 3,
    invoiceId: 'INV-2023-003',
    date: '13/05/2023',
    customer: 'Lê Văn C',
    amount: 1800000,
    method: 'Thẻ tín dụng',
    status: 'Thành công',
    reference: 'CARD789012',
    note: 'Thanh toán đơn hàng INV-2023-003'
  }, {
    id: 4,
    invoiceId: 'INV-2023-004',
    date: '12/05/2023',
    customer: 'Phạm Thị D',
    amount: 950000,
    method: 'Ví điện tử',
    status: 'Thành công',
    reference: 'WALLET345678',
    note: 'Thanh toán đơn hàng INV-2023-004'
  }, {
    id: 5,
    invoiceId: 'INV-2023-005',
    date: '11/05/2023',
    customer: 'Hoàng Văn E',
    amount: 3500000,
    method: 'Chuyển khoản',
    status: 'Đang xử lý',
    reference: 'TRAN567890',
    note: 'Thanh toán đơn hàng INV-2023-005'
  }];
  // Mock payment methods
  const paymentMethods = [{
    id: 1,
    name: 'Tiền mặt',
    type: 'cash',
    isDefault: true,
    enabled: true,
    description: 'Thanh toán bằng tiền mặt tại cửa hàng'
  }, {
    id: 2,
    name: 'Chuyển khoản ngân hàng',
    type: 'bank_transfer',
    isDefault: false,
    enabled: true,
    accountName: 'CÔNG TY TNHH ABC',
    accountNumber: '1234567890',
    bankName: 'Vietcombank',
    branch: 'TP.HCM',
    description: 'Chuyển khoản đến tài khoản ngân hàng của cửa hàng'
  }, {
    id: 3,
    name: 'Thẻ tín dụng/ghi nợ',
    type: 'card',
    isDefault: false,
    enabled: true,
    supportedCards: ['Visa', 'Mastercard', 'JCB'],
    description: 'Thanh toán bằng thẻ tín dụng hoặc thẻ ghi nợ'
  }, {
    id: 4,
    name: 'Ví MoMo',
    type: 'e_wallet',
    isDefault: false,
    enabled: true,
    accountName: 'ElectroPOS',
    accountNumber: '0901234567',
    description: 'Thanh toán qua ví điện tử MoMo'
  }, {
    id: 5,
    name: 'ZaloPay',
    type: 'e_wallet',
    isDefault: false,
    enabled: false,
    accountName: 'ElectroPOS',
    accountNumber: '0901234567',
    description: 'Thanh toán qua ví điện tử ZaloPay'
  }];
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(price);
  };
  return <div className="flex h-full">
      <div className={`flex-1 ${selectedPayment ? 'pr-4' : ''}`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#0F1724]">Thanh toán</h1>
          <div className="flex space-x-2">
            {activeTab === 'methods' && <Button variant="primary" icon={<Plus size={16} />} onClick={() => setShowAddModal(true)}>
                Thêm phương thức
              </Button>}
            {activeTab === 'transactions' && <Button variant="secondary" icon={<Download size={16} />}>
                Xuất báo cáo
              </Button>}
          </div>
        </div>
        <div className="bg-white rounded-lg p-1 flex mb-6 w-fit">
          <button className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === 'transactions' ? 'bg-[#0B6EFD] text-white' : 'text-[#556270] hover:bg-gray-100'}`} onClick={() => setActiveTab('transactions')}>
            Giao dịch
          </button>
          <button className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === 'methods' ? 'bg-[#0B6EFD] text-white' : 'text-[#556270] hover:bg-gray-100'}`} onClick={() => setActiveTab('methods')}>
            Phương thức thanh toán
          </button>
        </div>
        {activeTab === 'transactions' && <Card>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex-1 min-w-[240px]">
                <div className="relative">
                  <input type="text" placeholder="Tìm kiếm theo mã hóa đơn, khách hàng..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" />
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
                        Mã hóa đơn
                        <ArrowUpDown size={14} className="ml-1" />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                      <div className="flex items-center">
                        Ngày
                        <ArrowUpDown size={14} className="ml-1" />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                      <div className="flex items-center">
                        Khách hàng
                        <ArrowUpDown size={14} className="ml-1" />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                      <div className="flex items-center">
                        Số tiền
                        <ArrowUpDown size={14} className="ml-1" />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                      <div className="flex items-center">
                        Phương thức
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
                  {transactions.map(transaction => <tr key={transaction.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedPayment(transaction.id)}>
                      <td className="px-4 py-3 text-sm font-medium text-[#0F1724]">
                        {transaction.invoiceId}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#556270]">
                        {transaction.date}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#556270]">
                        {transaction.customer}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-[#0F1724]">
                        {formatPrice(transaction.amount)}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#556270]">
                        {transaction.method}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${transaction.status === 'Thành công' ? 'bg-green-50 text-[#00B894]' : transaction.status === 'Đang xử lý' ? 'bg-blue-50 text-[#0B6EFD]' : 'bg-red-50 text-[#E74C3C]'}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-right space-x-1">
                        <button className="p-1 text-gray-500 hover:text-[#0B6EFD]" onClick={e => {
                    e.stopPropagation();
                    // View receipt logic
                  }}>
                          <FileText size={16} />
                        </button>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-[#556270]">
                Hiển thị 1-5 của 5 giao dịch
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
          </Card>}
        {activeTab === 'methods' && <Card>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                      <div className="flex items-center">
                        Phương thức thanh toán
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
                        Mặc định
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
                  {paymentMethods.map(method => <tr key={method.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedPayment(method.id)}>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex items-center">
                          <div className="p-2 rounded-lg mr-3 text-[#0B6EFD] bg-blue-50">
                            {method.type === 'cash' ? <DollarSign size={18} /> : method.type === 'bank_transfer' ? <FileText size={18} /> : method.type === 'card' ? <CreditCard size={18} /> : <Wallet size={18} />}
                          </div>
                          <span className="font-medium text-[#0F1724]">
                            {method.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#556270] capitalize">
                        {method.type === 'cash' ? 'Tiền mặt' : method.type === 'bank_transfer' ? 'Chuyển khoản' : method.type === 'card' ? 'Thẻ' : 'Ví điện tử'}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#556270]">
                        {method.isDefault ? <span className="text-[#0B6EFD] font-medium">
                            Mặc định
                          </span> : '-'}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${method.enabled ? 'bg-green-50 text-[#00B894]' : 'bg-gray-50 text-gray-600'}`}>
                          {method.enabled ? 'Đang hoạt động' : 'Tạm dừng'}
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
          </Card>}
      </div>
      {selectedPayment && activeTab === 'transactions' && <div className="w-1/3 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-[#0F1724]">
              Chi tiết giao dịch
            </h2>
            <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => setSelectedPayment(null)}>
              <X size={18} />
            </button>
          </div>
          {(() => {
        const transaction = transactions.find(t => t.id === selectedPayment);
        if (!transaction) return null;
        return <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-[#0B6EFD]">
                      {transaction.method === 'Tiền mặt' ? <DollarSign size={32} /> : transaction.method === 'Chuyển khoản' ? <FileText size={32} /> : transaction.method === 'Thẻ tín dụng' ? <CreditCard size={32} /> : <Wallet size={32} />}
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#0F1724]">
                      {formatPrice(transaction.amount)}
                    </h3>
                    <p className="text-sm text-[#556270] mt-1">
                      {transaction.method}
                    </p>
                    <p className="mt-2">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${transaction.status === 'Thành công' ? 'bg-green-50 text-[#00B894]' : transaction.status === 'Đang xử lý' ? 'bg-blue-50 text-[#0B6EFD]' : 'bg-red-50 text-[#E74C3C]'}`}>
                        {transaction.status}
                      </span>
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FileText size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Mã hóa đơn</p>
                        <p className="text-sm font-medium">
                          {transaction.invoiceId}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Ngày</p>
                        <p className="text-sm font-medium">
                          {transaction.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <User size={18} className="text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-xs text-[#556270]">Khách hàng</p>
                        <p className="text-sm font-medium">
                          {transaction.customer}
                        </p>
                      </div>
                    </div>
                    {transaction.reference && <div className="flex items-start">
                        <FileText size={18} className="text-gray-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-xs text-[#556270]">
                            Mã tham chiếu
                          </p>
                          <p className="text-sm font-medium">
                            {transaction.reference}
                          </p>
                        </div>
                      </div>}
                  </div>
                  {transaction.note && <div>
                      <p className="text-sm font-medium text-[#0F1724] mb-2">
                        Ghi chú
                      </p>
                      <p className="text-sm text-[#556270] bg-gray-50 p-3 rounded-lg">
                        {transaction.note}
                      </p>
                    </div>}
                  <div className="pt-4 flex space-x-3">
                    <Button variant="secondary" className="flex-1" icon={<FileText size={16} />}>
                      Xem hóa đơn
                    </Button>
                    <Button variant="primary" className="flex-1" icon={<Printer size={16} />}>
                      In biên lai
                    </Button>
                  </div>
                </div>
              </div>;
      })()}
        </div>}
      {selectedPayment && activeTab === 'methods' && <div className="w-1/3 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-[#0F1724]">
              Chi tiết phương thức thanh toán
            </h2>
            <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => setSelectedPayment(null)}>
              <X size={18} />
            </button>
          </div>
          {(() => {
        const method = paymentMethods.find(m => m.id === selectedPayment);
        if (!method) return null;
        return <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-[#0B6EFD]">
                      {method.type === 'cash' ? <DollarSign size={32} /> : method.type === 'bank_transfer' ? <FileText size={32} /> : method.type === 'card' ? <CreditCard size={32} /> : <Wallet size={32} />}
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#0F1724]">
                      {method.name}
                    </h3>
                    <p className="text-sm text-[#556270] mt-1 capitalize">
                      {method.type === 'cash' ? 'Tiền mặt' : method.type === 'bank_transfer' ? 'Chuyển khoản' : method.type === 'card' ? 'Thẻ' : 'Ví điện tử'}
                    </p>
                    <div className="flex justify-center space-x-2 mt-2">
                      {method.isDefault && <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-[#0B6EFD]">
                          Mặc định
                        </span>}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${method.enabled ? 'bg-green-50 text-[#00B894]' : 'bg-gray-50 text-gray-600'}`}>
                        {method.enabled ? 'Đang hoạt động' : 'Tạm dừng'}
                      </span>
                    </div>
                  </div>
                  {method.type === 'bank_transfer' && <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-[#0F1724] mb-3">
                        Thông tin tài khoản
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-[#556270]">
                            Tên tài khoản
                          </span>
                          <span className="text-sm font-medium">
                            {method.accountName}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#556270]">
                            Số tài khoản
                          </span>
                          <span className="text-sm font-medium">
                            {method.accountNumber}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#556270]">
                            Ngân hàng
                          </span>
                          <span className="text-sm font-medium">
                            {method.bankName}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#556270]">
                            Chi nhánh
                          </span>
                          <span className="text-sm font-medium">
                            {method.branch}
                          </span>
                        </div>
                      </div>
                    </div>}
                  {method.type === 'card' && <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-[#0F1724] mb-3">
                        Thẻ được hỗ trợ
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {method.supportedCards?.map((card, index) => <span key={index} className="px-2 py-1 bg-white border border-gray-200 rounded-md text-sm">
                            {card}
                          </span>)}
                      </div>
                    </div>}
                  {method.type === 'e_wallet' && <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-[#0F1724] mb-3">
                        Thông tin tài khoản
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-[#556270]">
                            Tên tài khoản
                          </span>
                          <span className="text-sm font-medium">
                            {method.accountName}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#556270]">
                            Số điện thoại
                          </span>
                          <span className="text-sm font-medium">
                            {method.accountNumber}
                          </span>
                        </div>
                      </div>
                    </div>}
                  <div>
                    <p className="text-sm font-medium text-[#0F1724] mb-2">
                      Mô tả
                    </p>
                    <p className="text-sm text-[#556270] bg-gray-50 p-3 rounded-lg">
                      {method.description}
                    </p>
                  </div>
                  <div className="pt-4 flex space-x-3">
                    <Button variant="secondary" className="flex-1" icon={<Edit size={16} />}>
                      Chỉnh sửa
                    </Button>
                    <Button variant={method.enabled ? 'danger' : 'primary'} className="flex-1" icon={method.enabled ? <XCircle size={16} /> : <CheckCircle size={16} />}>
                      {method.enabled ? 'Tạm dừng' : 'Kích hoạt'}
                    </Button>
                  </div>
                </div>
              </div>;
      })()}
        </div>}
      {/* Add Payment Method Modal */}
      {showAddModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-[#0F1724]">
                Thêm phương thức thanh toán
              </h2>
              <button className="p-1 rounded-full hover:bg-gray-100" onClick={() => setShowAddModal(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Tên phương thức
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập tên phương thức thanh toán" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Loại
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]">
                    <option value="">Chọn loại</option>
                    <option value="cash">Tiền mặt</option>
                    <option value="bank_transfer">
                      Chuyển khoản ngân hàng
                    </option>
                    <option value="card">Thẻ tín dụng/ghi nợ</option>
                    <option value="e_wallet">Ví điện tử</option>
                  </select>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-medium text-[#0F1724] mb-3">
                    Thông tin tài khoản
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#556270] mb-1">
                        Tên tài khoản
                      </label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập tên tài khoản" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#556270] mb-1">
                        Số tài khoản / Số điện thoại
                      </label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập số tài khoản hoặc số điện thoại" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#556270] mb-1">
                        Ngân hàng
                      </label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập tên ngân hàng" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#556270] mb-1">
                        Chi nhánh
                      </label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập chi nhánh" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#556270] mb-1">
                    Mô tả
                  </label>
                  <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập mô tả" rows={3}></textarea>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="default-method" className="h-4 w-4 text-[#0B6EFD] focus:ring-[#0B6EFD] border-gray-300 rounded" />
                  <label htmlFor="default-method" className="ml-2 block text-sm text-[#556270]">
                    Đặt làm phương thức mặc định
                  </label>
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