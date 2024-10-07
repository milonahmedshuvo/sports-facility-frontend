// PaymentHistory.tsx
import React from 'react';

interface Payment {
  id: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Failed';
}

const payments: Payment[] = [
  { id: 'TXN001', date: '2024-10-01', amount: 120.5, status: 'Paid' },
  { id: 'TXN002', date: '2024-09-28', amount: 75.0, status: 'Pending' },
  { id: 'TXN003', date: '2024-09-25', amount: 150.0, status: 'Failed' },
  { id: 'TXN004', date: '2024-09-20', amount: 200.0, status: 'Paid' },
  { id: 'TXN005', date: '2024-09-15', amount: 100.0, status: 'Paid' },
];

const PaymentHistory: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full shadow-md rounded-lg">
          <thead className="">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="">
                <td className="px-6 py-4 whitespace-nowrap">{payment.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">${payment.amount.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      payment.status === 'Paid'
                        ? 'bg-green-100 text-green-800'
                        : payment.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
