import { BrowserRouter as Router, Routes, Route, HashRouter} from 'react-router-dom'
import { useParams } from "react-router";

import Prompt from './Prompt'

export const targetDomains = {
    old: 'https://classic.star.vote',
    new: 'https://bettervoting.com',
};

export const autoRedirectDelay = 0; // we'll set this to 0 later
// to reset the autoredirect clear the browsing data for star.vote
// https://superuser.com/questions/1787991/clear-browsing-history-from-specific-site-on-chrome

export default () => {
    let parts = window.location.href.split(/star.vote|localhost:3000/);
    if(parts.length >= 2){
        window.location.href = `https://classic.star.vote/${parts[1].replace('/','')}`;
        return <></>
    }
    return <Prompt/>
}