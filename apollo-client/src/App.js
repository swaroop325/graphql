import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_MSG = gql`
  query Sample {
    message
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_MSG);
  console.table(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return <h1>{data.message}</h1>;
}

export default App;
