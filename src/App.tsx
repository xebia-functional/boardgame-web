import { Route, Switch } from 'wouter';
import Home from './pages/home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} />
                <Route><NotFound/></Route>
            </Switch>
        </main>
    );
}

export default App;
