import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from './pages/Dashboard';
import FrontDesk from "./pages/FrontDesk";
import Reservation from "./pages/Reservation";
import Guest from "./pages/Guest";
import Rooms from "./pages/Rooms";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import AddRoomForm from "./roomsDetail/AddRoomForm";
import EditRoomForm from "./roomsDetail/EditRoomForm";

function App() {
  return (
    <>
      {/* <h1>Mani Bhushan</h1> */}
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/frontdesk" element={<FrontDesk />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/guest" element={<Guest />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/create" element= {<AddRoomForm/>}/>
            <Route path="/edit" element= {<EditRoomForm/>}/>

          </Routes>
        </Sidebar>
        {/* <Routes>
          <Route path="/create" element= {<AddRoomForm/>}/>
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
