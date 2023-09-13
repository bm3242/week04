import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';

interface Person {
  id: string;
  name: string;
  relatedPersonId: string;
}

interface HomeProps {
  persons: Person[];
}

export const getStaticProps: GetStaticProps = async () => {
  const persons: Person[] = require('../public/persons.json');
  return {
    props: {
      persons,
    },
  };
};

const Home: NextPage<HomeProps> = ({ persons }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js on Replit!
        </h1>

        <p className={styles.description}>
          List of persons:
        </p>

        <ul>
          {persons.map((person) => (
            <li key={person.id}>
              <Link href={`/persons/${person.id}`}>{person.name}</Link>
            </li>
          ))}
        </ul>
      </main>
      <footer className={styles.footer}>
     <a
  href="/__repl"
  target="_blank"
  rel="noopener noreferrer"
>
  Built on
  <span className={styles.logo}>
    <Image src="/replit.svg" alt="Replit Logo" width={20} height={18} objectFit="contain" />
  </span>
  Replit
      </a>

      </footer>
    </div>
  );
};

export default Home;
