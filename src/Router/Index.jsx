import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home/Index.jsx';
import Blog from '../Pages/Blog/Index.jsx';

function Router() {
  return (

    <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        
    </Routes>
  )
}

export default Router;