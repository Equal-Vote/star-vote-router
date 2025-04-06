import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'
import Prompt from './Prompt'
import SlugRedirect from './SlugRedirect'

export const targetDomains = {
    old: 'https://classic.star.vote',
    new: 'https://bettervoting.com',
};

export const autoRedirectDelay = 0; // we'll set this to 0 later
// to reset the autoredirect clear the browsing data for star.vote
// https://superuser.com/questions/1787991/clear-browsing-history-from-specific-site-on-chrome

export default () => <HashRouter> {/* https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/ */}
    <Routes>
        <Route path='/' element={<Prompt/>}/>
        {/* this slug currently isn't used since github pages doesn't support it, instead 404.html is hacked to account for this */ }
        <Route path='/:slug' element={<SlugRedirect/>}/>
    </Routes>
</HashRouter>