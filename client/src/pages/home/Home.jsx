import React from 'react';
import { Hero } from './Hero.jsx';
import { About } from './About.jsx';
import { TopCreations } from './TopCreations.jsx';
import { WatchCaseBanner } from './WatchCaseBanner.jsx';
import { LearnServices } from './LearnServices.jsx';
import { ConfigureBanner } from './ConfigureBanner.jsx';
import { Reviews } from '../home/Reviews.jsx';
import { WhoAmI } from './WhoAmI.jsx';
import { Faq } from './Faq.jsx';

export const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <TopCreations />
            <WatchCaseBanner />
            <LearnServices />
            <ConfigureBanner />
            <Reviews />
            <WhoAmI />
            <Faq />
        </>
    )
}
