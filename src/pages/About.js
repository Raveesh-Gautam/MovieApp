import React from "react";
import styles from "./About.module.css";
import CardAbout from "./Card";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <React.Fragment>
      <CardAbout />
      <h2 className={styles.heading}>About</h2>
      <div className={styles.img_and_p}>
        <img
          className={styles.img}
          src="./band.png"
          alt="Ravish"
          width="300"
          height="300"
        />

        <p className={styles.p}>
          Welcome to <strong>The Generics</strong> — your go-to store for the
          best music albums and merchandise.
          <br />
          <br />
          We are a passionate team of music lovers committed to bringing you
          high-quality content, classic albums, and exclusive band gear — all at
          affordable prices. Whether you're a lifelong fan or just discovering
          your favorites, there's something here for everyone.
          <br />
          <br />
          Our mission is to create an experience where music and community come
          together. We value originality, authenticity, and customer
          satisfaction above all.
          <br />
          <br />
          Thank you for visiting us. Let’s keep the music alive! A computer is a
          machine that can be programmed to automatically carry out sequences of
          arithmetic or logical operations (computation). Modern digital
          electronic computers can perform generic sets of operations known as
          programs, which enable computers to perform a wide range of tasks. The
          term computer system may refer to a nominally complete computer that
          includes the hardware, operating system, software, and peripheral
          equipment needed and used for full operation; or to a group of
          computers that are linked and function together, such as a computer
          network or computer cluster. A broad range of industrial and consumer
          products use computers as control systems, including simple
          special-purpose devices like microwave ovens and remote controls, and
          factory devices like industrial robots. Computers are at the core of
          general-purpose devices such as personal computers and mobile devices
          such as smartphones. Computers power the Internet, which links
          billions of computers and users.
        </p>
      </div>
      <div className={styles.contact}>
      <NavLink className={styles.contact_btn} to="/contact" >
              Contact Us
            </NavLink>
      </div>
    </React.Fragment>
  );
};

export default About;
