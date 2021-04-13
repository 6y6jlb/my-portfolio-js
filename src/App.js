import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyProjects from "./myProjects/MyProjects";
import RemoteJob from "./skills/remoteJob/RemoteJob";

const App = () => {
  return (
      <div className="App">
        <Header/>
          <Main/>
          <Skills/>
          <MyProjects/>
          <RemoteJob/>
      </div>
  );
}

export default App;
