import "./App.css";
import Employees from "./Employees";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 offset-1">
            <div className="jumbotron jumbotron-bg">
              <Employees />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
