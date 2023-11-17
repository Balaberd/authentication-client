import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Button.module.css";

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: string | ReactElement;
  classNames?: string;
  isLink?: boolean;
  path?: string;
}

const Button: FC<Props> = ({
  onClick,
  classNames,
  children,
  isLink,
  path = "",
}) => {
  return isLink ? (
    <NavLink to={path} className={cn(styles.Button, classNames)}>
      {children}
    </NavLink>
  ) : (
    <button onClick={onClick} className={cn(styles.Button, classNames)}>
      {children}
    </button>
  );
};

export default Button;
