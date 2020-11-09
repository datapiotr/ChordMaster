import React from 'react';
import '../styles/Home.scss'

export default function Home() {
    return (
        <>

            <header>
                <div className="container">
                    <h1>Welcome to Chord Master</h1>
                    <img alt='pick' src={require('../icons/pick.svg')} />
                    <p>Chord Master is a web application created to help guitarists in building and learning chords. Understanding chords is essential music theory for all musicians. With Chord Master you can easily find appropriate notes on the fretboard for the chord you want to play. Chord Master also enables you to practice the knowledge of specific chord components. Try it out!</p>
                </div>
            </header>
            <div className="container">
                <div className='boxes'>
                    <div className='goTo'>
                        <img alt='guitar' src={require('../icons/guitar-solid.svg')} />
                        <h2>Chord Finder</h2>
                        <p>Find the possibilities to play different chords with interactive fretboard</p>
                        <a href='./chordFinder'>Go!</a>
                    </div>
                    <div className='goTo'>
                        <img alt='notes' src={require('../icons/music-solid.svg')} />
                        <h2>Intervals Quiz</h2>
                        <p>Practice your knowledge of specific chord components by choosing the right note</p>
                        <a href='./quiz'>Go!</a>
                    </div>
                </div>
            </div>
        </>
    );
}