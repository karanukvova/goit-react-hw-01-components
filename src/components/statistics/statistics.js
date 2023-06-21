import propTypes from 'prop-types';
import css from './statistics.module.css'
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export default function Statistics({ title, stats }) {

  return (
    <section className={css.statisticsDiv}>
      {title && <h2 >{title}</h2>}
      <ul className={css.statisticsList}>
        {stats.map(stat => (
          <li style={{ backgroundColor: getRandomHexColor() }} className={css.statisticsItem} key={stat.id}>
            <span className={css.statisticsLabel}>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: propTypes.string,
  stats : propTypes.array.isRequired
}