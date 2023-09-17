import GlobalStyle from "./GlobalStyle";
import {LightTheme, DarkTheme} from "./components/UI/Themes";
import { ThemeProvider } from "styled-components";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import AddVideo from "./pages/Add/AddVideo";
import AddCat from "./pages/Add/AddCat";
import EditCat from "./pages/Edit/EditCat";
import EditVid from "./pages/Edit/EditVid";

import Categories from "./pages/Categories";
import MEliminar from "./pages/Messages/MessageEliminar";
import Video from "./pages/Video"
import Videos from "./pages/Videos";
import Error404 from "./pages/404Error";

import Topbar from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Bottombar } from "./components/Footer";
import { DevInfo } from "./components/Footer/info";

import { useState } from "react";

function App() {
  const urlVideos="/videos"
  const urlCat="/categorias"
  const [theme, setTheme] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
      <GlobalStyle />
      <Router>
        <Topbar url={urlVideos} setTheme={setTheme} theme={theme} setSidebar={setShowSidebar} sidebar={showSidebar} />
        <Sidebar setSidebar={setShowSidebar} sidebar={showSidebar}/>
        <Routes>
          <Route path="/" element={<Home urlCat={urlCat} urlVideos={urlVideos} theme={theme}/>} />
          <Route path="/add/video" element={<AddVideo url={urlCat}/>} />
          <Route path="/add/cat" element={<AddCat/>} />
          <Route path="/categories" element={<Categories urlCat={urlCat} />} />
          <Route path="/videos" element={<Videos url={urlCat}/>} />
          <Route path="/messages/eliminar" element={<MEliminar/>}/>
          <Route path="/videos/:id" element={<Video/>} />
          <Route path="/edit/cat/:id" element={<EditCat/>} />
          <Route path="/edit/vid/:id" element={<EditVid url={urlCat}/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
        <Bottombar theme={theme}/>
        <DevInfo/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
