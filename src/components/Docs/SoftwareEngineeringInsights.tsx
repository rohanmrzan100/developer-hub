import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./styles.module.scss";
import TutorialCard, { TutorialCards } from "../LandingPage/TutorialCard";
// Define the cards in "***Data.ts"
import { docsCards } from "./data/softwareEngineeringInsightsData";

export default function CI() {
  const { siteConfig: { baseUrl = "/" } = {} } = useDocusaurusContext();
  return (
    <div className="container">
      <div className={styles.topSection}>
        <div className={styles.spaceBetween}>
          <div className={styles.moduleTitle}>
            <img src={`${baseUrl}img/icon_sei.svg`} />
            <h1>Software Engineering Insights</h1>
          </div>
          <div className={styles.btnContainer}>
            <Link href="/release-notes/software-engineering-insights">
              <button className={styles.btn}>
                {/* <i className="fa-regular fa-file"></i> */}
                <img src={`${baseUrl}img/icon_release_notes.svg`} />
                Release Notes
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.spaceBetween}>
          <div className={styles.content}>
            <p>
              Harness Software Engineering Insights (SEI) enables engineering leaders to make data-driven
              decisions that improve engineering productivity, efficiency, alignment, planning, and execution.
              It provides actionable insights into software delivery and workflows across teams, processes, and
              systems to improve software quality, enhance developer experience, and accelerate time to value.
              Learn how you can use data-led insights to remove bottlenecks and improve productivity.
            </p>
            <div>
            <img src={`${baseUrl}img/sei.svg`} />
            </div>
          </div>
        </div>
      </div>
      <TutorialCards data={docsCards} sectionClass={styles.subSection} />
    </div>
    // </Layout>
  );
}
