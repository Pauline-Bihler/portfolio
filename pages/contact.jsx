import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              Please contact me if you have any questions. Looking forward to
              your email or call!
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: pauline.erika5@gmail.com</li>
              <li className="contact-item">Phone: +43 680 2326 407</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
