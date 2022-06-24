import React, { useState } from 'react';
import Nav from '../components/Nav';
import TopBar from '../components/TopBar';
import data from '../data.json'

const Technology = () => {

    const { technology } = data

    const [currentTechnology, setCurrentTechnology] = useState(technology[0])

    const handleTechChange = (id) => {
        if (id === technology.indexOf(currentTechnology)) {
            return;
        }
        document.body.classList += ' animate'

        setTimeout(() => {
            setCurrentTechnology(technology[id])
        }, 500)

        setTimeout(() => {
            document.body.classList.remove('animate')
        }, 1000)
    }

    return (
        <section id="technology" className='background-img-full'>
            <Nav />
            <div className="container">
                <div className="row">
                    <TopBar index={'03'} para='SPACE LAUNCH 101' />
                    <div className="technology__wrapper">                       
                        <div className="technology__indexes">
                            {
                                technology.map((_, index) => {
                                    console.log(index, technology.indexOf(currentTechnology))
                                    return <div className={`technology__index ${index === technology.indexOf(currentTechnology) && 'technology__index--current'}`} onClick={() => handleTechChange(index)}>{index + 1}</div>
                                })
                            }
                        </div>
                        <div className="technology__description">
                            <h3 className="technology__sub-title">THE TERMINOLOGY...</h3>
                            <h1 className="technology__title">{currentTechnology?.name.toUpperCase()}</h1>
                            <p className="technology__para">
                                {currentTechnology?.description}
                            </p>
                        </div>
                        <figure className="technology__img--wrapper">
                            <img src={currentTechnology?.images.portrait} alt="" className="technology__img" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Technology;
