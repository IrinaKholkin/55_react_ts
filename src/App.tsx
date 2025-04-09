import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "./components/Layout/Layout"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import Course from './pages/Course/Course'
import CourseLesson from './pages/CourseLesson/CourseLesson'
import Users from './pages/Users/Users'
import GlobalStyles from "./styles/GlobalStyles"
import Designer from './pages/Users/components/Designer/Designer'
import Manager from './pages/Users/components/Manager/Manager'
import PageNotFound from './pages/PageNotFound/PageNotFound'

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
          <Route path='/courseLesson' element={<CourseLesson/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/users/designer' element={<Designer/>}></Route>
          <Route path='/users/manager' element={<Manager/>}></Route>
          {/* path='*' - специальный маршрут, который вызовет переданный компонент в
          том случае, если в маршрутах выше не будет найдено того маршрута,
          к которому обращается пользователь */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;