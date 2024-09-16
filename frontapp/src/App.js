import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./mainapp/Home";
import About from "./mainapp/About";
import Registration from "./mainapp/Registration";
import Login from "./mainapp/Login";
import Adlogin from "./mainapp/Adlogin";
import Dash from "./userapp/Dash";
import AddQuery from "./userapp/AddQuery";
import ViewPenQuery from "./userapp/ViewPenQuery";
import ViewProQuery from "./userapp/ViewProQuery";
import ViewComQuery from "./userapp/ViewComQuery";
import EditDash from "./userapp/EditDash";
import EditPenQuery from "./userapp/EditPenQuery";
import AdminDash from "./adminapp/AdminDash";
import Viewalluser from "./adminapp/Viewalluser";
import Viewallpenquery from "./adminapp/Viewallpenquery";
import Viewallproquery from "./adminapp/Viewallproquery";
import Viewallcomquery from "./adminapp/Viewallcomquery";
import Company from "./mainapp/Company";
import Products from "./mainapp/Products";
import Carrers from "./mainapp/Carrers";
import Contactus from "./mainapp/Contactus";

function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/company" element={<Company />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/carrers" element={<Carrers />} />
            <Route exact path="/contactus" element={<Contactus />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/adlogin" element={<Adlogin />} />
            <Route exact path="/Dash/:id" element={<Dash />} />
            <Route exact path="/addQuery/:id" element={<AddQuery />} />
            <Route exact path="/viewPenQuery/:id" element={<ViewPenQuery />} />
            <Route exact path="/viewProQuery/:id" element={<ViewProQuery />} />
            <Route exact path="/viewComQuery/:id" element={<ViewComQuery />} />
            <Route exact path="/editDash/:id" element={<EditDash />} />
            <Route exact path="/editPenQuery/:id" element={<EditPenQuery />} />
            <Route exact path="/admindash" element={<AdminDash />} />
            <Route exact path="/viewalluser" element={<Viewalluser />} />
            <Route
              exact
              path="/viewallpenquery"
              element={<Viewallpenquery />}
            />
            <Route
              exact
              path="/viewallproquery"
              element={<Viewallproquery />}
            />
            <Route
              exact
              path="/viewallcomquery"
              element={<Viewallcomquery />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
