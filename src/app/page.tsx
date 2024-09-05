import Image from "next/image";
import styles from "./page.module.css";
import ExampleImage from "../app/images/ExamplePhoto.png"
import MainLogo from "../app/images/soulsurferlogo.png"
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <Image src={MainLogo} alt="mainLogo" className={styles.mainLogo} />
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>Home</a>
          <Link href="/about" className={styles.navLink}>About</Link>
        </nav>
      </header>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.introduction}>
            <h3 className={styles.heading}>Our app makes it easy</h3>
            <h1 className={styles.mainHeading}>Soul Surfer Software</h1>
            <h3 className={styles.heading}>Get all your digital creation needs, marketing, social media, and digital presence with Soul Surfer Software, founded by JSN</h3>
          </div>
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="/about"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </main>
      </div>

      <div className={styles.introductionSection}>
        <h1 className={styles.introductionHeader}>Our Services </h1>
        <main className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <Image src={ExampleImage} alt="Image 1" className={styles.image} />
            <h2 className={styles.title}>Social Media Marketing</h2>
          </div>
          <div className={styles.gridItem}>
            <Image src={ExampleImage} alt="Image 2" className={styles.image} />
            <h2 className={styles.title}>Community</h2>
          </div>
          <div className={styles.gridItem}>
            <Image src={ExampleImage} alt="Image 3" className={styles.image} />
            <h2 className={styles.title}>Reaching Out</h2>
          </div>
        </main>
      </div>

      <div className={styles.introductionSection}>
        <h1 className={styles.introductionHeader}>See how we did it</h1>
        <main className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <Image src={ExampleImage} alt="Image 1" className={styles.image} />
            <h2 className={styles.title}>Events</h2>
          </div>
          <div className={styles.gridItem}>
            <Image src={ExampleImage} alt="Image 2" className={styles.image} />
            <h2 className={styles.title}>Exploration</h2>
          </div>
          <div className={styles.gridItem}>
            <Image src={ExampleImage} alt="Image 3" className={styles.image} />
            <h2 className={styles.title}>Destinations</h2>
          </div>
        </main>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <Image src={MainLogo} alt="mainLogo" className={styles.mainLogo} />
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Links</h2>
          <ul className={styles.footerList}>
            <li><a href="/" className={styles.footerLink}>Home</a></li>
            <li><a href="/about" className={styles.footerLink}>About</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Contact</h2>
          <ul className={styles.footerList}>
            <li className={styles.footerLink}>Phone Number:</li>
            <li className={styles.footerLink}>Email</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
