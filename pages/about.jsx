import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              I'm from the Philippines and I worked as a production designer before moving to Tokyo, Japan. I studied Japanese and I'm big fan of the culture and language. I enjoy traveling and photography. I currently live in Graz, Austria, where I work as a teacher. At the same time I'm interested in being a developer or a UX Designer that's why I'm taking the UpLeveled Bootcamp this year. Nice to meet you all!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
