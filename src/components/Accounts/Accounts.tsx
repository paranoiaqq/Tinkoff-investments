import React, { useState } from "react";
import styles from "./Accounts.module.scss";

function Accounts() {
  const [accounts, setAccounts] = useState([
    { id: 1, name: "Брокерский счет", balance: 123.2 },
    { id: 2, name: "ИИС", balance: 13.5 },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.header__text}>Брокерские счета</p>
      </div>
      <div className={styles.inputs}>
        <div className={styles.inputs__currencyInput}>
          <input list="currencies" />
          <datalist id="currencies">
            <option value="В рублях" />
            <option value="В долларах" />
            <option value="В евро" />
          </datalist>
        </div>
        <div className={styles.inputs__periodInput}>
          <input list="periods" />
          <datalist id="periods">
            <option value="За сегодня" />
            <option value="За все время" />
          </datalist>
        </div>
      </div>
      {accounts.map(({ name, balance }) => {
        return (
          <div className={styles.accountContainer}>
            <div className={styles.accountContainer__icon}>
              <img src="" alt="" />
            </div>
            <div className={styles.accountContainer__accountInfo}>
              <p>{name}</p>
              <p>{balance.toFixed(2).toString().replace(".", ",")}</p>
            </div>
          </div>
        );
      })}
      <div className={styles.newAccount}>
        <div className={styles.newAccount__icon}></div>
      </div>
    </div>
  );
}

export default Accounts;
