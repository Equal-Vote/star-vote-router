import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Prompt from './Prompt'
import SlugRedirect from './SlugRedirect'

export default () => {
    return <Router>
        <Routes>
            <Route path='/' element={<Prompt/>}/>
            <Route path='/:slug' element={<SlugRedirect/>}/>
        </Routes>
    </Router>
}