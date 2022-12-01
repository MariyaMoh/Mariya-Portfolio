import styles from './ProjectsSection.module.css';
import Link from 'next/link';
import { Heading2, Heading3 } from './StyleGuide/Text';
export default function ProjectsSection() {
  return (
    <div className={styles.ProjectsContainer}>
      <div className={styles.ProjectHeading}>
        <Heading2>PROJECTS</Heading2>
      </div>
      <div className={styles.projectsMainCard}>
        <div className={styles.projectCard}>
          <p className={styles.projectTitle}>
            <b>Magic Game </b>
          </p>
          <img className={styles.vazaImg} src="/game.png" data-aos="zoom-in" />
          <p className={styles.projectsDescription} data-aos="zoom-in-up">
            This game has been developed using <b>React</b>. The user can flip
            two cards, if they match, they will stay flipped; if not, they will
            turn back over.
            <Link href="https://github.com/MariyaMoh/video-game-react">
              <img
                className={styles.githubLink}
                src="/GitHub-Mark-32px.png"
                alt="github"
              />
            </Link>
          </p>
        </div>
        <div className={styles.projectCard}>
          <p className={styles.projectTitle}>
            <b>Vaza</b>
          </p>
          <img className={styles.vazaImg} src="/vaza.png" data-aos="zoom-in" />

          <p className={styles.projectsDescription} data-aos="zoom-in-up">
            {' '}
            Vaza is a calarful website for ordering handmade vases , has been
            developed using <b>Vue js</b>.
            <Link href="https://github.com/MariyaMoh/vue-Assignment4">
              <img
                className={styles.githubLink}
                src="/GitHub-Mark-32px.png"
                alt="github"
              />
            </Link>
          </p>
        </div>

        <div className={styles.projectCard}>
          <p className={styles.projectTitle}>
            <b>T-DevOps</b>
          </p>
          <img
            className={styles.vazaImg}
            src="/t-devgame.png"
            data-aos="zoom-in"
          />

          <p className={styles.projectsDescription} data-aos="zoom-in-up">
            {' '}
            This app has been developed using <b>React , Node JS Express </b> is
            linked to MongoDB. It's a game app. The user can respond to a series
            of questions. 
            <Link href="https://github.com/MariyaMoh/Rihal-Project">
              <img
                className={styles.githubLink}
                src="/GitHub-Mark-32px.png"
                alt="github"
              />
            </Link>
          </p>
        </div>
        <div className={styles.projectCard}>
          <p className={styles.projectTitle}>
            <b>Nota</b>
          </p>
          <img
            className={styles.vazaImg}
            src="/noteapp.png"
            data-aos="zoom-in"
          />

          <p className={styles.projectsDescription} data-aos="zoom-in-up">
            {' '}
            Nota has been developed using <b>React js</b> and{' '}
            <b>node js express</b> linked to<b> MongoDB</b>. The user can Notes
            can be added and deleted, and they can be made public or private.
            <Link href="https://github.com/MariyaMoh/alshaaibi-mariya-hs/tree/project1">
              <img
                className={styles.githubLink}
                src="/GitHub-Mark-32px.png"
                alt="github"
              />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
