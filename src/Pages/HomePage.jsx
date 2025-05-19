import React from 'react';
import BannerContainer from '../Components/Banner/BannerContainer';
import SeasonalGuide from '../Components/SeasonalGuide';
import NewsLetter from '../Components/NewsLetter';


const HomePage = () => {
    return (
        <div>
            <BannerContainer></BannerContainer>
            <SeasonalGuide></SeasonalGuide>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default HomePage;