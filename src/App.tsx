import { useState } from 'react';
import { Route, Switch } from 'wouter';
import Home from './pages/home/Home';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout';
import Search from './pages/search/Search';
import ChatButton from './components/commons/ChatButton';
import ChatWindow from './components/commons/ChatWindow';
import PlayersPage from './pages/players/playersTable';
import PlayersTable from './pages/players/playersTable';
import PlaysTable from './pages/plays/PlaysTable';
import GamesTable from './pages/games/GamesTable';

function App() {
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <Layout>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/search" component={() => <Search />} />
                <Route path="/players" component={PlayersPage} />
                <Route path="/players/search" component={PlayersTable} />
                <Route path="/plays" component={PlaysTable} />
                <Route path="/games" component={() => <GamesTable />} />
                <Route>
                    <NotFound />
                </Route>
            </Switch>
            {chatOpen && <ChatWindow onClose={() => setChatOpen(false)} />}
            <ChatButton onClick={() => setChatOpen(true)} />
        </Layout>
    );
}

export default App;
