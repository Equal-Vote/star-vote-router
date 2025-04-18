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

export default () => {
    let parts = window.location.href.split(/star.vote|localhost:3000/);
    let slug = parts.length >=2 ? parts[1].replace('/','') : ''
    if(slug.length > 0){
        window.location.href = `https://classic.star.vote/${slug}`;
        return <></>
    }
    return <Prompt/>
}
