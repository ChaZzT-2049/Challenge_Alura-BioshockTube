import GlobalStyle from "./GlobalStyle";
import {LightTheme, DarkTheme} from "./components/UI/Themes";
import { ThemeProvider } from "styled-components";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import AddVideo from "./pages/Add/AddVideo";
import AddCat from "./pages/Add/AddCat";
import Categories from "./pages/Categories";
import Video from "./pages/Video"
import Topbar from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Bottombar } from "./components/Footer";
import { DevInfo } from "./components/Footer/info";
import Error404 from "./pages/404Error";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
      <GlobalStyle />
      <Router>
        <Topbar setTheme={setTheme} theme={theme} setSidebar={setShowSidebar} sidebar={showSidebar} />
        <Sidebar setSidebar={setShowSidebar} sidebar={showSidebar}/>
        <Routes>
          <Route path="/" element={<Home theme={theme}/>} />
          <Route path="/add/video" element={<AddVideo/>} />
          <Route path="/add/cat" element={<AddCat/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/videos/video" element={<Video/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
        <Bottombar theme={theme}/>
        <DevInfo/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
