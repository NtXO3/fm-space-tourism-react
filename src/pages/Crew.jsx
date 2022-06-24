import React, { useState } from 'react';
import Nav from '../components/Nav';
import TopBar from '../components/TopBar';
import data from '../data.json'

const Crew = () => {
    const { crew } = data

    const [currentCrew, setCurrentCrew] = useState(crew[0])

    const handleCrewChange = (id) => {
        if (id === crew.indexOf(currentCrew)) {
            return;
        }
        document.body.classList += ' animate'

        setTimeout(() => {
            setCurrentCrew(crew[id])
        }, 500)

        setTimeout(() => {
            document.body.classList.remove('animate')
        }, 1000)
    }

    return (
        <section id="crew" className='background-img-full'>
            <Nav />
            <div className="container">
                <div className="row">
                    <TopBar index={'02'} para='MEET YOUR CREW' />                 
                    <div className="crew__slideshow--frame">
                        <div className="crew__slideshow--description">
                            <h3 className="crew__slideshow--sub-title">{currentCrew?.role.toUpperCase()}</h3>
                            <h1 className="crew__slideshow--title">{currentCrew?.name.toUpperCase()}</h1>
                            <p className="crew__slideshow--para">{currentCrew?.bio}</p>
                            <div className="crew__selector--wrapper">
                                {
                                    crew.map((_, index) => (
                                        <div className={`crew__selector ${index === crew.indexOf(currentCrew) && 'selector__current'}`} onClick={() => handleCrewChange(index)}></div>
                                    ))
                                }
                            </div>
                        </div>
                        <figure className="crew__img--wrapper">
                            <img src={currentCrew?.images.webp} alt="" className="crew__img" />
                        </figure>
                    </div>                    
                </div>
            </div>
        </section>
    );
}

export default Crew;
