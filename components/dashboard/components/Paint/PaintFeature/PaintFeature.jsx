import { listItems } from "@/data/features";
import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from './paint.module.css';

export default function Design() {
  return (
    <Container>
      <div className={styles.wgCreateDesign}>
        <Row>
          <Col md={6}>
            <div className={styles.image}>
              <Image
                className={styles.item1}
                src="/assets/images/home-page/c1/5.png"
                alt="image"
                width={270}
                height={270}
              />
              <Image
                className={styles.item2}
                src="/assets/images/home-page/c1/real.jpeg"
                alt="image"
                width={200}
                height={165}
              />
              <Image
                className={styles.item3}
                src="/assets/images/home-page/c1/6.png"
                alt="image"
                width={188}
                height={153}
              />
              <div className={styles.box2}>
                <Image
                  className={styles.item3}
                  src="/assets/images/home-page/c1/9.png"
                  alt="image"
                  width={188}
                  height={153}
                />
              </div>
              <div className={styles.box1}>
                <div className={styles.wrap}>
                  <p>
                    <a href="/dashboard/genifyl">Open AI Editor</a>
                  </p>
                  <p className={styles.active}>
                    <a href="/dashboard/genifyl">Customize Image</a>
                  </p>
                  <p>
                    <a href="/dashboard/gallery">Download Results</a>
                  </p>
                  <Image
                    src="/assets/images/item-background/hand.png"
                    width={60}
                    height={96}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.content}>
              <div className={styles.headingSection}>
                <h6>Online Generation</h6>
                <div className={styles.mainTitle}>
                  Create Anything With <br />
                  AI image{" "}
                  <span className={styles.animationText}>
                    Generator
                  </span>
                </div>
              </div>
              <p>
                Transform your products into custom cartoon art in seconds. Perfect for e-commerce, marketing, and merchandise
              </p>
              <ul className={styles.listItem}>
                {listItems.map((elm, i) => (
                  <li key={i}>
                    <i className="icon-tick" />
                    {elm.text}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}