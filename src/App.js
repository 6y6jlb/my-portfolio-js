import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyProjects from "./myProjects/MyProjects";
import RemoteJob from "./remoteJob/RemoteJob";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import HomeMapLink from "./common/components/map/HomeMapLink";


const App = () => {
    const test=1;
  return (
      <div className="App">
   {/*     <Header/>
          <Main/>
          <Skills/>
          <MyProjects/>
          <RemoteJob/>
          <Contacts/>
          <Footer/>*/}
          <HomeMapLink/>
      </div>
  );
}

export default App;
