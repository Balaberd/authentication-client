import React, { ChangeEvent, FC } from "react";
import cn from "classnames";
import styles from "./Input.module.css";

interface Props {
  type: string;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  classNames?: string;
  prefix?: React.ReactElement;
}

const Input: FC<Props> = ({
  type,
  value,
  onChange,
  classNames,
  prefix,
  placeholder,
}) => {
  return (
    <label className={cn(styles.customInput, classNames)}>
      {prefix}
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </label>
  );
};

export default Input;
