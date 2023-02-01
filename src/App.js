import './App.css';
import PageBlog from './pages/PageBlog';
import PageHome from './pages/PageHome.jsx';
import { Routes, Route} from "react-router-dom";
import PageAbout from './pages/PageAbout';
import PageContact from './pages/PageContact';
import PagePost from './pages/PagePost';
import PageServices from './pages/PageServices';
import Page404 from './pages/Page404';
import PageProjects from './pages/PageProjects';


function App() {
  return (
    <div className="App" >
          <Routes>
              <Route path="/Blog" element={<PageBlog/>}/>
              <Route path="/Post/:postSlug" element={<PagePost/>}/>
              <Route path="/About" element={<PageAbout/>}/>
              <Route path="/Contact" element={<PageContact/>}/>
              <Route path="/Services" element={<PageServices/>}/>
              <Route path="/Projects" element={<PageProjects/>}/>

              {/* <Route path="/Post" element={<PagePost/>}/> */}
              <Route path="/" element={<PageHome/>} />
              <Route path="*" element={<Page404/>}/>

          </Routes>
    </div>
  );
}

export default App;