import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmars from "./components/Bookmars/Bookmars";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <Bookmars></Bookmars>
      </div>
    </>
  );
}

export default App;
