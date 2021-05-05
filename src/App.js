import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyProjects from "./myProjects/MyProjects";
import RemoteJob from "./remoteJob/RemoteJob";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

const App = () => {
  return (
      <div className="App">
        <Header/>
          <Main/>
          <Skills/>
          <MyProjects/>
          <RemoteJob/>
          <Contacts/>
          <Footer/>
      </div>
  );
}

export default App;
