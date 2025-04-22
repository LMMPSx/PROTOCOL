import { Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Workout } from './pages/Workout';
import { LogBook } from './pages/Logbook';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/workout" element={<Workout />}/>
            <Route path="/logbook" element={<LogBook />}/>
        </Routes>
    )

}