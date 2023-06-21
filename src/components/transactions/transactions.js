import css from './transactions.module.css'
export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
                <td>{ transaction.amount}</td>
                <td>{ transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
