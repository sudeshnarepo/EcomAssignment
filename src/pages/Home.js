import React from 'react';
import HomeBanner from '../components/home/home-banner/HomeBanner';
import SecondaryBanner1 from '../components/home/secondary-banner/SecondaryBanner1';
import SecondaryBanner2 from '../components/home/secondary-banner2/SecondaryBanner2';
import ProductCategory from '../components/home/product-category/ProductCategory';
import FooterUp from '../components/footer/footer-up/FooterUp';

const Home = () => {
    return (
        <>
            <main>
                <HomeBanner />
                <ProductCategory/>
                <SecondaryBanner1/>
                <SecondaryBanner2/>
                <FooterUp/>
            </main>
        </>
    )
}

export default Home