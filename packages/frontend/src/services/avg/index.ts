import axios from "axios";
import toast from "react-hot-toast";

class AvgService {
  async getAverageAge() {
    try {
      const response = await axios.get("http://34.207.146.61:4000/v1/avg");
      return response.data;
    } catch (error) {
      toast.error("Average age not found");
      return 0;
    }
  }
}

export default AvgService;
