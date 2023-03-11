export const Statistics = ({ title, stats }) => (
  <section class="statistics">
    <h2 class="title">{title}</h2>

    <ul class="stat-list">
      {stats.map(stat => (
        <li class="item">
          <span class="label">{stat.label}</span>
          <span class="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);
