import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

import me from "../public/me.png";
import imdb from "../public/imdb.png";
import lnbug from "../public/lnbug.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>James V Spadafora</title>
        <meta
          name="description"
          content="Personal site for James V. Spadafora"
        />
        {
          //<link rel="icon" href="/favicon.ico" />
        }
      </Head>

      <main className={styles.main}>
        <h2 className={styles.code}>
          Thanks for Visiting but I am still building this site as of Feb 16th
          2022 👷
          <br /> Check back again soon!
        </h2>
        <Navbar>
          <Container>
            <Navbar.Brand>
              <div className={styles.headername}>James Spadafora</div>
              <div className={styles.headertagline}>
                a software developer in Visual Effects
              </div>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href="https://www.linkedin.com/in/james-spadafora-b3433926/">
                <Image src={lnbug} alt="Linkedin Logo" width={37} height={37} />
              </Nav.Link>

              <Nav.Link href="https://www.imdb.com/name/nm5673851/">
                <Image src={imdb} alt="imdb Logo" width={37} height={37} />
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className={styles.description}>
          <Row>
            <Col>
              <p>Hi, my name is James Spadafora (or Spad for short).</p>

              <p>
                I work in the VISUAL EFFECTS 🎥 <br />
                industry specializing in PRODUCTION TRACKING software and APIs.
              </p>
              <p>
                I have also worked as a Pipeline TD and TA
                <br />
                (fixing broken stuff and reacting to &quot;oh c**p we need this
                now&quot; requests)
              </p>
              <p>I am a permanent resident of Canada in Vancouver BC 🍁</p>
            </Col>
            <Col>
              <Image src={me} alt="me" width={250} height={241} />
            </Col>
          </Row>
        </Container>
        <Container className={styles.workdescriptions}>
          <Row>
            <Col>
              <p>
                I work reguraly with
                <ul>
                  <li>Python</li>
                  <li>django</li>
                  <li>React</li>
                  <li>Shotgrid</li>
                  <li>Docker</li>
                  <li>Ansible</li>
                  <li>Git</li>
                </ul>
              </p>
            </Col>
            <Col>
              <p>
                I have experence working with visual effects software <br />
                such as but not limited to
                <ul>
                  <li>Maya</li>
                  <li>Houdini</li>
                  <li>Nuke</li>
                  <li>Katana</li>
                </ul>
              </p>
            </Col>
          </Row>
        </Container>
      </main>

      <footer className={styles.footer}>This site was built with NextJs</footer>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
