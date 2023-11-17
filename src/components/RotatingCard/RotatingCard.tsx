import { FC, ReactElement, useState } from "react";
import cn from "classnames";
import styles from "./RotatingCard.module.css";

interface Props {
  fronCard: ReactElement;
  backCard: ReactElement;
  frontTitle: string;
  backTitle: string;
}

const RotatingCard: FC<Props> = ({
  fronCard,
  backCard,
  frontTitle,
  backTitle,
}) => {
  const [visibleSide, setVisibleSide] = useState<"front" | "back">("front");

  return (
    <div className={styles.RotatingCard}>
      <div className={styles.controlBlock}>
        <button
          className={cn(styles.controlButton, {
            [styles.controlButton_active]: visibleSide === "front",
          })}
          onClick={() => setVisibleSide("front")}
        >
          {frontTitle}
        </button>
        <button
          className={cn(styles.controlButton, {
            [styles.controlButton_active]: visibleSide === "back",
          })}
          onClick={() => setVisibleSide("back")}
        >
          {backTitle}
        </button>
      </div>
      <div className={styles.cardsWrapper}>
        <div
          className={cn(styles.card, {
            [styles.card_visible]: visibleSide === "front",
          })}
        >
          <div className={styles.cardUpperLayer}>{fronCard}</div>
        </div>

        <div
          className={cn(styles.card, styles.card_back, {
            [styles.card_visible]: visibleSide === "back",
          })}
        >
          <div className={styles.cardUpperLayer}>{backCard}</div>
        </div>
      </div>
    </div>
  );
};

export default RotatingCard;
