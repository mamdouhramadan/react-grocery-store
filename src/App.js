import { useSelector } from "react-redux";

const App = () => {
  const general = useSelector(state => state.general);
  return (
    <div className="App">
      <>
        {
          general.loading ?
            <div>Loading...</div>
            : <p>Not Loading</p>
        }
      </>
    </div>
  );
}

export default App;
