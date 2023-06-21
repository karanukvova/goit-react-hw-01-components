import css from './friends.module.css'
export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span className={friend.isOnline ? css.status__true : css.status__false}></span>
          <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
          <p className={css.name}>{ friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
