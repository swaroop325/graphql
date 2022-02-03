import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_MSG = gql`
  query Sample($empId: ID!) {
    employeeById(id: $empId) {
      firstName
      lastName
      joblevel
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_MSG, {
    variables: { empId: "S01" },
  });
  console.table(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return <h1>{JSON.stringify(data)}</h1>;
}

export default App;
