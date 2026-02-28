import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Payments from "../components/Payments";
import HandleMoney from "../components/HandleMoney";
import Ecosystem from "../components/Ecosystem";
import AppCTA from "../components/AppCTA";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Payments />
            <HandleMoney />
            <Ecosystem />
            <AppCTA />
            <Footer />
        </>
    );
};

export default Home;
