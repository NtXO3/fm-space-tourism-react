import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import TopBar from '../components/TopBar';
import data from '../data.json'

const Destinations = () => {
    const { destinations } = data

    const [currentDestination, setCurrentDestination] = useState(destinations[0])
    const [indexCurrent, setIndexCurrent] = useState(0)

    const handleDestinationChange = (name) => {
        const newState = destinations.find(item => item.name === name)
        console.log(newState)
        
        document.body.classList += ' animate'
        setTimeout(() => {
            setCurrentDestination(newState)
        }, 500)
        setTimeout(() => {
            document.body.classList.remove('animate')
        }, 1000)
    }
    useEffect(() => {
        setIndexCurrent(destinations.indexOf(currentDestination))
    }, currentDestination)

    return (
        <section id="destinations" className='background-img-full'>
            <Nav/>
            <div className="container">
                <div className="row">
                    <TopBar index={'01'} para='PICK YOUR DESTINATION' />
                    <div className="destination__info--wrapper">
                        <figure className="destination__img--wrapper">
                            <img src={currentDestination?.images.webp} alt="" className='destination__img' />
                        </figure>
                        <div className="destination__description">
                            <div className="destinations__picker">
                                {
                                    destinations.map((item, idx) => { 
                                    console.log(indexCurrent)                                       
                                    return (
                                        <>
                                            <button onClick={() => item.name !== currentDestination?.name && handleDestinationChange(item.name)} className={`destination__picker--btn ${item.name === currentDestination?.name ? 'destination__picker--current' : ''}`}>{item.name.toUpperCase()}</button>                                           
                                       </>
                                        )
                                    })
                                }
                            </div>
                            <h1 className="destination__title">{currentDestination?.name.toUpperCase()}</h1>
                            <p className="destination__para">
                                {currentDestination?.description}
                            </p>
                            <div className="destination__divider"></div>
                            <div className="destination__info">
                                <div className="destination__info--box">
                                    <p>AVG. DISTANCE</p>
                                    <h3>{currentDestination?.distance.toUpperCase()}</h3>
                                </div>
                                <div className="destination__info--box">
                                    <p>EST. TRAVEL TIME</p>
                                    <h3>{currentDestination?.travel.toUpperCase()}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Destinations;
