import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import Header from "./Component/Header"

import MoviesPage from "./Screens/Movies"

import Add_Movies from "./Screens/addMovies"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>

            <div>

                <Header></Header>

                <Switch>

                    <Route path="/" exact>
                        <span> HOME </span>
                    </Route>

                    <Route path="/movies" exact>
                        <MoviesPage />
                    </Route>

                    <Route path="/add-movies" exact>
                        <Add_Movies />
                    </Route>

                    <Route>
                        <span> 404 ! </span>
                    </Route>

                </Switch>

            </div>

        </Router>
    );
}

export default App;
