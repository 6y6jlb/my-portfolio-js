import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import React, {Suspense} from "react";

const Skills = React.lazy(() => import("./skills/Skills"));
const MyProjects = React.lazy(() => import("./myProjects/MyProjects"));
const RemoteJob = React.lazy(() => import("./remoteJob/RemoteJob"));
const Contacts = React.lazy(() => import("./contacts/Contacts"));
const Footer = React.lazy(() => import("./footer/Footer"));


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Skills/>
                <MyProjects/>
                <RemoteJob/>
                <Contacts/>
                <Footer/>
            </Suspense>


        </div>
    );
}

export default App;
