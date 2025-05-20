import React from 'react';
import BannerContainer from '../Components/Banner/BannerContainer';
import SeasonalGuide from '../Components/SeasonalGuide';
import NewsLetter from '../Components/NewsLetter';
import NewPlantsContainer from '../Components/New Plants Section/NewPlantsContainer';


const HomePage = () => {
    return (
        <div className=''>
            <BannerContainer></BannerContainer>
            <NewPlantsContainer></NewPlantsContainer>
            <SeasonalGuide></SeasonalGuide>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default HomePage;