// import styled from "styled-components";
import React from "react";
import styles from "./Button.module.css";
// import "./Button.css";

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   color: white;
//   background-color: #8b005d;
//   border: 1px solid #8b005d;
//   padding: 0.5rem 1.5rem;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:active,
//   &:hover {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
