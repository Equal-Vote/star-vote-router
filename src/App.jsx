import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'
import Prompt from './Prompt'
import SlugRedirect from './SlugRedirect'

export const targetDomains = {
    old: 'http://star.vote',
    new: 'http://dev.star.vote',
};

export const autoRedirectDelay = 3000; // we'll set this to 0 later
// to cancel the redirect and clear the cache do the following
// 1. make sure the debug console is already open and on the sources tab
// 2. then when you navigate to the webpage hit the pause button during the 2 second window
// 3. The go to application tab > local storage and clear prev_classic_prompt

export default () => <HashRouter> {/* https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/ */}
    <Routes>
        <Route path='/' element={<Prompt/>}/>
        <Route path='/:slug' element={<SlugRedirect/>}/>
    </Routes>
</HashRouter>