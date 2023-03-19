import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';
import { Component } from 'react';
import 'index.css';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './Transactions/Transactions';
import Counter from './Counter';
import Toggle from './Toggle';

class PremiumProfile extends Component {
  name = this.props.name;
  age = this.props.age;

  static defaultProps = {
    step: 1,
  };

  shouldReturnAlwaysTrue() {
    return true;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        Hello {this.name}, you have the age of {this.age}. Let us see our
        {JSON.stringify(this.props)}
      </div>
    );
  }
}

export const App = () => {
  return (
    <div>
      <Toggle>
        <div>Test Togglera</div>
      </Toggle>
      <Counter step={7} initialValue={3} />
      <Counter step={5} initialValue={0} />
      <PremiumProfile name="Rafal" age="28" />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
