import Profile from './user/user.js';
import Statistics from './statistics/statistics.js';
import FriendList from './friends/friends.js';
import TransactionHistory from './transactions/transactions.js';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title='upload file'
        stats={data}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        transactions={transactions}
      />
    </div>
  );
};
