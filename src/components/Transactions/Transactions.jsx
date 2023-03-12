import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const Transactions = ({ items }) => (
  <table className={css.transactionhistory}>
    <thead>
      <tr className={css.tablehead}>
        <th className={css.tableinfo}>Type</th>
        <th className={css.tableinfo}>Amount</th>
        <th className={css.tableinfo}>Currency</th>
      </tr>
    </thead>

    <tbody className={css.tablebody}>
      {items.map(transaction => (
        <tr className={css.transactionrow} key={transaction.id}>
          <td className={css.transactioninfo}>{transaction.type}</td>
          <td className={css.transactioninfo}>{transaction.amount}</td>
          <td className={css.transactioninfo}>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
