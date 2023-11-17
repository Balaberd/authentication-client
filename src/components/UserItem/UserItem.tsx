import { FC } from "react";
import styles from "./UserItem.module.css";
import cn from "classnames";
import { IUser } from "../../models/IUser";

interface Props {
  user: IUser;
}

const UserItem: FC<Props> = ({ user }) => {
  return (
    <div className={styles.UserItem}>
      <div className={styles.email}>{user.email}</div>
      <div
        className={cn(styles.activateInfo, {
          [styles.activateInfo_notActivated]: !user.isActivated,
        })}
      >
        {user.isActivated ? "e-mail подтвержден" : "e-mail не подтвержден"}
      </div>
    </div>
  );
};

export default UserItem;
