import React from 'react';
import Banner from '../Components/Banner';
import FeatureSection from '../Components/FeatureSection';
import GallerySection from '../Components/GallerySection';
import NewsletterSection from '../Components/NewsletterSection';
import HighLight from '../Components/HighLight';
import CategoryEvent from '../Components/CategoryEvent';
import StaticBlog from '../Components/StaticBlog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureSection></FeatureSection>
            <HighLight></HighLight>
            <GallerySection></GallerySection>
            <CategoryEvent></CategoryEvent>
            <NewsletterSection></NewsletterSection>
            <StaticBlog></StaticBlog>
        </div>
    );
};

export default Home;