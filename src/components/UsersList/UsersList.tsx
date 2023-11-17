import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { IUser } from "../../models/IUser";
import UsersService from "../../services/UserServices";
import UserItem from "../UserItem/UserItem";
import Button from "../Button/Button";

const UsersList = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  async function getUsers() {
    try {
      const response = await UsersService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Button onClick={getUsers}>Получить список пользователей</Button>
      <ul>
        {users.map((el) => (
          <li>
            <UserItem user={el} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default observer(UsersList);
