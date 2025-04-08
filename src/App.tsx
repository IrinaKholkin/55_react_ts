import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "./components/Layout/Layout"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import Course from './pages/Course/Course'
import GlobalStyles from "./styles/GlobalStyles"

function App() {

  return (
    //BrowserRouter - глобальная обёртка для всего приложения,
    // которая позволяет использовать маршрутизацию
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes - обертка, которая собирает все маршруты приложения */}
        <Routes>
          {/* Route - компонент библиотеки, в который передаётся маршрут и тот компонент (страницу),
          который должен быть вызван, если выполнен переход по этому маршруту */}
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/course' element={<Course />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;