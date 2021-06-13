import './App.css';
import Nav from "./components/Nav";
import {Route, Switch} from "react-router-dom";
import UsersContainer from "./pages/Users/components/UsersContainer";
import MeetsContainer from "./pages/Meets/components/MeetsContainer";
import PartsContainer from "./pages/Parts/components/PartsContainer";


function App(props) {
    return (
            <main>
                <Nav/>
                <Switch>
                    <Route exact path="/" render={ () => <UsersContainer store={props.store}/> } />
                    <Route path="/meets" render={ () => <MeetsContainer store={props.store}/> } />
                    <Route path="/parts" render={ () => <PartsContainer store={props.store}/> } />
                </Switch>
            </main>
    );
}

export default App;
