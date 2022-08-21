import React, { FormEvent, memo, useCallback, useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { IUsers } from "../../../models/Users";
import UserServices from "../../../services/user";
import { Button } from "../../../styled-components/Button";
import { Input, Label } from "../../../styled-components/Input";
import { styleModal } from "../../../utils/modal.utilities";
import style from "../style.module.css";

interface Props {
  setUsers: React.Dispatch<React.SetStateAction<Array<IUsers>>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateUser = ({ setUsers, setOpen, open }: Props) => {
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    date: "",
  });

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { name, surname, date } = inputs;
      const create = await new UserServices().createUser(name, surname, date);
      const { message, user } = create;
      if (message === "Success") {
        setUsers((users) => [...users, user]);
        setInputs((inputs) => {
          return {
            ...inputs,
            name: "",
            surname: "",
            date: "",
          };
        });
        setOpen(false);
      }
    },
    [inputs]
  );

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      styles={{
        modal: styleModal,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Label>Name:</Label>
        <Input
          type="text"
          placeholder="Name"
          value={inputs.name}
          onChange={(e) => {
            setInputs({
              ...inputs,
              name: e.target.value,
            });
          }}
        />
        <Label>Surname:</Label>
        <Input
          type="text"
          value={inputs.surname}
          placeholder="Surname"
          onChange={(e) => {
            setInputs({
              ...inputs,
              surname: e.target.value,
            });
          }}
        />
        <Label>Date:</Label>
        <Input
          type="date"
          value={inputs.date}
          onChange={(e) => {
            setInputs({
              ...inputs,
              date: e.target.value,
            });
          }}
        />
        <div className={style.bottom}>
          <Button type="submit" variant="primary">
            create
          </Button>
        </div>
      </form>
    </Modal>
  );
};

const CreateUserModal = memo(CreateUser);

export default CreateUserModal;
