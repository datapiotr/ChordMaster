import React from 'react';

export default function Home() {
    return (
        <>
            <h1>Chord Master</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <div className='goTo'>
                Click <a href='./chordFinder'>Here</a> to find the chords you want to play!
            </div>
            <div className='goTo'>
                Click <a href='./quiz'>Here</a> to learn the intervals!
            </div>
        </>
    );
}