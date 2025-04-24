import { Route, Switch } from 'wouter';
import Home from './pages/home/Home';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout';
import Search from './pages/search/Search';
import Plays from './pages/plays/Plays';
import Players from './pages/players/Players';
import Games from './pages/games/Games';
import Game from './pages/games/id/Game';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/games" component={Games} />
                <Route path="/games/:id" component={Game} />
                <Route path="/players" component={Players} />
                <Route path="/plays" component={Plays} />
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
