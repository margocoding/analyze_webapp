import React from 'react';

interface Transaction {
  id: string;
  date: string;
  merchant: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
}

interface TransactionsTableProps {
  transactions: Transaction[];
}

export default function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-zinc-200 dark:border-zinc-800">
            <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-600 dark:text-zinc-400">Дата</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-600 dark:text-zinc-400">Мерчант</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-600 dark:text-zinc-400">Категория</th>
            <th className="text-right py-3 px-4 text-sm font-semibold text-zinc-600 dark:text-zinc-400">Сумма</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-b border-zinc-100 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
              <td className="py-3 px-4 text-sm text-zinc-900 dark:text-white">{tx.date}</td>
              <td className="py-3 px-4 text-sm text-zinc-900 dark:text-white">{tx.merchant}</td>
              <td className="py-3 px-4 text-sm">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                  {tx.category}
                </span>
              </td>
              <td className={`py-3 px-4 text-sm font-medium text-right ${tx.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                {tx.type === 'income' ? '+' : '-'}{tx.amount.toLocaleString()} ₸
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
