import axios from "axios";
import toast from "react-hot-toast";
import {
  UserCreateInterceptor,
  UserIdInterceptor,
} from "../../interceptors/user.interceptor";

class UserServices {
  async getUsers() {
    try {
      const response = await axios.get("http://localhost:4000/v1/users");
      toast.success(response.data.message);
      return response.data;
    } catch (e) {
      return {
        message: "Users not found",
      };
    }
  }

  async getUser(id: string) {
    UserIdInterceptor(id);
    try {
      const response = await axios.get(`http://localhost:4000/v1/users/${id}`);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      return {
        message: "User not found",
      };
    }
  }

  async createUser(name: string, surname: string, date: string) {
    UserCreateInterceptor(name, surname, date);
    try {
      const response = await axios.post(`http://localhost:4000/v1/user`, {
        name,
        surname,
        date: date,
      });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      return {
        message: "User not create",
      };
    }
  }
}

export default UserServices;
