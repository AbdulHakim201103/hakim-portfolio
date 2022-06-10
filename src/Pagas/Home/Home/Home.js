import React from 'react';
import Banner from '../Banner/Banner';
import Message from '../Message/Message';
import HomeProject from '../HomeProject/HomeProject';
import MySkills from '../MySkills/MySkills';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MySkills></MySkills>
            <HomeProject></HomeProject>
            <Message></Message>
            <Footer></Footer>
        </div>
    );
};

export default Home;