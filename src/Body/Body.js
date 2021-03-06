import React, {useState} from 'react';
import { pages } from '../Navigation'
import Blog from '../Blog/Blog';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Recent from '../Recent/Recent';

export default function Body({ currentPage }){

    if (currentPage === pages.blog)
        return <Blog />;
    else if (currentPage === pages.portfolio)
        return <Portfolio />;
    else if (currentPage === pages.contact)
        return <Contact />;
    else if (currentPage === pages.recent)
        return <Recent />
}

