import React from 'react';
import Nav from '../components/Nav';

const Home = () => {
    return (
        <section id="home" className='background-img-full'>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="landing__wrapper">
                        <div className="landing__description">
                            <p className="landing__small--title">So, you want to travel to</p>
                            <h1 className="landing__title">SPACE</h1>
                            <p className="landing__para">
                                Let’s face it; if you want to go to space, you might as well genuinely go to 
                                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                                because we’ll give you a truly out of this world experience!
                            </p>
                        </div>  
                        <button className="landing__btn">
                            EXPLORE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
