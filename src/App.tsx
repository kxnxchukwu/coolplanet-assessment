import { BrowserRouter, Routes as Switch, Route, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import PlayerTable from './components/Table';
import UserProfile from "./components/User/user";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Switch>   
    <Route path="/users" element={<PlayerTable />} />
    <Route path="/user/:id" element={<UserProfile />} />  
    <Route
    path="*"
    element={<Navigate to="/users" replace />}
    />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
