import { FaUniversity } from 'react-icons/fa';
import { FiBarChart2, FiCode } from 'react-icons/fi';
import styles from './style.module.scss';

const education = [
  {
    title: 'Software Engineering',
    description: 'Building digital solutions',
    icon: FiCode,
  },
  {
    title: 'Data & Analytics',
    description: 'Turning data into insights',
    icon: FiBarChart2,
  },
  {
    title: 'Banking Management',
    description: 'Understanding financial decisions',
    icon: FaUniversity,
  },
];

export const Education = () => (
  <section className={styles.education} aria-labelledby="education-title">
    <h2 id="education-title" data-target="target" className={styles.title}>
      A Hybrid Background
    </h2>

    <div className={styles.timeline}>
      {education.map(({ title, description, icon: Icon }) => (
        <article className={styles.item} key={title}>
          <div className={styles.icon} aria-hidden="true">
            <Icon />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </div>
  </section>
);
