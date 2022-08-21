import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAvg } from "../../models/Avg";
import AvgService from "../../services/avg";
import UserServices from "../../services/user";
import { Button } from "../../styled-components/Button";
import { Row, RowItem } from "../../styled-components/Layout";

export default function Dashboard() {
  const [avg, setAvg] = useState<IAvg>({} as IAvg);
  const [total, setTotal] = useState<number>(0);
  const navigate = useNavigate();

  const getAvg = async () => {
    const response = await new AvgService().getAverageAge();
    setAvg(response.data);
  };
  const getUsers = async () => {
    const response = await new UserServices().getUsers();
    const { users } = response;
    setTotal(users.length);
  };

  useEffect(() => {
    getAvg();
    getUsers();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <Row>
        <RowItem width={20}>
          <p>Total Users:</p>
          <p>{total || 0}</p>
          <Button
            onClick={() => {
              navigate("/users");
            }}
          >
            View Users
          </Button>
        </RowItem>
        <RowItem width={20}>
          <p>Average of Ages:</p>
          {avg.avgAge ? <p>{avg.avgAge}</p> : <p>Calculate...</p>}
        </RowItem>
      </Row>
    </div>
  );
}
