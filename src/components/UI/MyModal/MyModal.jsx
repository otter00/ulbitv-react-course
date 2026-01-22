import React from "react";
import styles from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [styles.myModal];
  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    // при нажатии на темную область модальное окно исчезает
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={styles.myModalContent}
        // stopPropagation нужен, чтобы модальное окно не исчезало
        // при клике на область самого окна
        // только лишь по клику на кнопку и темную область
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
