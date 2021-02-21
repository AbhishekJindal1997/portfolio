import "./App.less";
import Navigation from "./Components/navigation";
import { GithubOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className='icons-list'>
      <Navigation />
      <GithubOutlined />
    </div>
  );
}

export default App;
