import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IUsers } from "../../models/Users";
import UserServices from "../../services/user";
import { Button } from "../../styled-components/Button";
import { Row, RowItem } from "../../styled-components/Layout";
import { formatDateDefault } from "../../utils/format.utilities";
import CreateUserModal from "./modals/createUser.modal";
import UnitUserModal from "./modals/unitUser.modal";
import style from "./style.module.css";

const UserPage = () => {
  const [users, setUsers] = useState<Array<IUsers>>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [idFilter, setIdFilter] = useState<string>("");
  const [openUnit, setOpenUnit] = useState<boolean>(false);

  const getUsers = async () => {
    const get = await new UserServices().getUsers();
    const { users } = get;
    setUsers(users);
  };

  const handleCreate = useCallback(() => {
    setOpen(true);
  }, [open, setOpen]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className={style.title}>
        <h2>
          <Link to="/">Dashboard /</Link> Users
        </h2>
        <Button onClick={handleCreate} variant="danger">
          create user
        </Button>
      </div>
      {users.length === 0 ? <div>No Data</div> : ""}
      <Row>
        {users?.map((user) => {
          return (
            <RowItem key={user.id} width={15}>
              <p>{user.name}</p>
              <p>{formatDateDefault(user.date)}</p>
              <div className={style.center}>
                <Button
                  onClick={() => {
                    setOpenUnit(true);
                    setIdFilter(user.id);
                  }}
                  variant="primary"
                >
                  View
                </Button>
              </div>
            </RowItem>
          );
        }) || []}
      </Row>
      <CreateUserModal setUsers={setUsers} open={open} setOpen={setOpen} />
      <UnitUserModal open={openUnit} setOpen={setOpenUnit} id={idFilter} />
    </>
  );
};

export default UserPage;
