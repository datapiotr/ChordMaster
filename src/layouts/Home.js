import React from 'react';

export default function Home() {
    return (
        <>
            <h1>Chord Master</h1>
            <p>Welcome to Chord Master! A web application created to help guitarists in building and learning chords. Understanding chords is essential music theory for all musicians. With Chord Master you can easly find appropriate notes on the fretboard for the chord you want to play. Chord Master also enables you to practice the knowledge of specific chord components. Try it out!</p>
            <div className='goTo'>
                Click <a href='./chordFinder'>Here</a> to find the chords you want to play!
            </div>
            <div className='goTo'>
                Click <a href='./quiz'>Here</a> to learn the intervals!
            </div>
        </>
    );
}