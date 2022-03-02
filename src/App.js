import MyData from "./components/MyData";

let myObj = {
  Name: "Subodh",
  Age: 20,
};

function App() {
  return (
    <div className="App">
      <h2>My Data</h2>
      <MyData data={myObj} />
    </div>
  );
}

export default App;
