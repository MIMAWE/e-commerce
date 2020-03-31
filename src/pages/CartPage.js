import React from 'react';
import CardSection from '../components/CartPage';
import Hero from '../components/Hero';
import cartBcg from '../images/storeBcg.jpeg';
import CartSection from '../components/CartPage';

export default function CartPage() {
    return (
        <>
            <Hero img={cartBcg}/>
                {/* imported CartPage and Cart.js (default in the package.json) is called automatic */}
            <CardSection/>
        </>
    )
}
