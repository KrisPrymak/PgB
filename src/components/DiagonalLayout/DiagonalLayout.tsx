import React, { FC, useEffect, useState } from "react";
import { DiagonalLayoutProps } from "./types";
import styles from "./DiagonalLayout.module.scss";

export const DiagonalLayout: FC<DiagonalLayoutProps> = () => {
  const [deg, setDeg] = useState("0");
  const [deg2, setDeg2] = useState("0");

  useEffect(() => {
    document.documentElement.style.setProperty('--angle', `${deg}deg`);
  }, [deg])
  useEffect(() => {
    document.documentElement.style.setProperty('--angle2', `${deg2}deg`);
  }, [deg2])
  return (
    <div>
      <div className={styles.angleControl}>
        <input
          type="range"
          id="angle-control"
          min="-60"
          max="60"
          step="1"
          value={deg}
          onChange={(e) => setDeg(e.target.value)}
        />
        <span id="angle-result" className={styles.result}>
          {deg} deg
        </span>
      </div>
      <div className={styles.angleControl}>
        <input
          type="range"
          id="angle-control2"
          min="-60"
          max="60"
          step="1"
          value={deg2}
          onChange={(e) => setDeg2(e.target.value)}
        />
        <span id="angle-result" className={styles.result}>
          {deg2} deg
        </span>
      </div>
      <div className={styles.diagonalBox}>
        <div className={styles.content}>
          <h1>Tips for Pure CSS Diagonal Layouts</h1>
          <p className={styles.intro}>
            Below you will find a few tips for creating diagonal layouts. If
            this is all too fast for you, check out this{" "}
            <a
              href="https://9elements.com/blog/pure-css-diagonal-layouts/"
              target="_blank"
            >
              step-by-step tutorial
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
