import React from 'react';
import HomeBanner from '../components/home/home-banner/HomeBanner';
import SecondaryBanner1 from '../components/home/secondary-banner/SecondaryBanner1';
import SecondaryBanner2 from '../components/home/secondary-banner2/SecondaryBanner2';
import ProductCategory from '../components/home/product-category/ProductCategory';
import CheckoutContact from '../components/checkout/checkout-contactinfo/CheckoutContact';

const Home = () => {
    return (
        <>
            <main>
                <CheckoutContact/>
                <HomeBanner />
                <ProductCategory/>
                <SecondaryBanner1/>
                <SecondaryBanner2/>
            </main>
        </>
    )
}

export default Home