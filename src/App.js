import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyProjects from "./myProjects/MyProjects";
import RemoteJob from "./skills/remoteJob/RemoteJob";
import Contacts from "./contacts/Contacts";

const App = () => {
  return (
      <div className="App">
        <Header/>
          <Main/>
          <Skills/>
          <MyProjects/>
          <RemoteJob/>
          <Contacts/>
      </div>
  );
}

export default App;
