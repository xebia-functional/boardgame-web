import { Route, Switch } from 'wouter';
import Home from './pages/home/Home';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" component={Home} />
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
