import { memo, useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { IUsers } from "../../../models/Users";
import UserServices from "../../../services/user";
import { formatDateDefault } from "../../../utils/format.utilities";
import { styleModal } from "../../../utils/modal.utilities";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const UnitUser = ({ id, open, setOpen }: Props) => {
  const [user, setUser] = useState<IUsers>({} as IUsers);
  const getUnitUser = async () => {
    const response = await new UserServices().getUser(id);
    const { user } = response;
    if (user) {
      setUser(user);
    }
  };

  useEffect(() => {
    if (!id || id === "") return;
    getUnitUser();
  }, [id]);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      styles={{
        modal: styleModal,
      }}
    >
      <h3>Details</h3>
      <div>
        Name & surname: {user.name} {user.surname}
      </div>
      <div>Date of birthdate: {formatDateDefault(user.date)}</div>
    </Modal>
  );
};

const UnitUserModal = memo(UnitUser);

export default UnitUserModal;
