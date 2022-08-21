import toast from "react-hot-toast";

const UserCreateInterceptor = (name: string, surname: string, date: string) => {
  if (name === "" || name === undefined || name === null) {
    toast.error("Please provide a name");
    return;
  }
  if (surname === "" || surname === undefined || surname === null) {
    toast.error("Missing surname");
    return;
  }
  if (date === "" || date === undefined || date === null) {
    toast.error("Missing date");
    return;
  }
};

const UserIdInterceptor = (id: string) => {
  if (id === "") {
    toast.error("Missing id");
    return;
  }
};

export { UserCreateInterceptor, UserIdInterceptor };
