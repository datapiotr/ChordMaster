import React, { useState } from 'react';
import '../styles/Fretboard.scss'

export default function Fretboard() {

    const [ENotesName, setENotesName] = useState(['E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E']);
    const [BNotesName, setBNotesName] = useState(['B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']);
    const [GNotesName, setGNotesName] = useState(['G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G']);
    const [DNotesName, setDNotesName] = useState(['D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D']);
    const [ANotesName, setANotesName] = useState(['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A']);
    const [accidentals, setAccidentals] = useState('♭');
    const [root, setRoot] = useState('E');
    const [type, setType] = useState('major');
    const [twoOctavesNotes, setTwoOctavesNotes] = useState(['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'])

    const changeOnFlats = (e) => {
        setAccidentals(e.target.value);
        setENotesName(['E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E']);
        setBNotesName(['B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']);
        setGNotesName(['G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G']);
        setDNotesName(['D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D']);
        setANotesName(['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A']);
        setENotesName(['E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E']);
        setTwoOctavesNotes(['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']);
        setRoot('E')
    }

    const changeOnSharps = (e) => {
        setAccidentals(e.target.value);
        setENotesName(['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']);
        setBNotesName(['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']);
        setGNotesName(['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G']);
        setDNotesName(['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D']);
        setANotesName(['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A']);
        setTwoOctavesNotes(['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']);
        setRoot('E')
    }

    const addSingleFretmarks = (index) => {
        if (index === 3 || index === 5 || index === 7 || index === 9) {
            return true
        }
    }

    const addDoubleFretmark = (index) => {
        if (index === 12) {
            return true
        }
    }

    const handleRootChange = (e) => {
        setRoot(e.target.value);
    };

    const rootSelect = ENotesName.filter((note, index) => {
        return ENotesName.indexOf(note) === index;
    })

    const typeOfChord = ['major', 'minor', 'diminished', 'augmented'];

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleMouseEnter = (event) => {
        event.target.classList.add('visible');
    }

    const handleMouseLeave = (event) => {
        event.target.classList.remove('visible');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        document.querySelectorAll('.note-fret').forEach((note) => {
            note.classList.remove('root');
            note.classList.remove('third');
            note.classList.remove('fifth');
        })
        const rootIndex = twoOctavesNotes.findIndex((note) => note === root);
        let third;
        let fifth;
        switch (type) {
            case 'major':
                third = twoOctavesNotes[rootIndex + 4];
                fifth = twoOctavesNotes[rootIndex + 7];
                document.querySelectorAll(`[data-note="${root}"]`).forEach((note) => {
                    note.classList.add('root');
                });
                document.querySelectorAll(`[data-note="${third}"]`).forEach((note) => {
                    note.classList.add('third');
                });
                document.querySelectorAll(`[data-note="${fifth}"]`).forEach((note) => {
                    note.classList.add('fifth');
                });
                break;
            case 'minor':
                third = twoOctavesNotes[rootIndex + 3];
                fifth = twoOctavesNotes[rootIndex + 7];
                document.querySelectorAll(`[data-note="${root}"]`).forEach((note) => {
                    note.classList.add('root');
                });
                document.querySelectorAll(`[data-note="${third}"]`).forEach((note) => {
                    note.classList.add('third');
                });
                document.querySelectorAll(`[data-note="${fifth}"]`).forEach((note) => {
                    note.classList.add('fifth');
                });
                break;
            case 'diminished':
                third = twoOctavesNotes[rootIndex + 3];
                fifth = twoOctavesNotes[rootIndex + 6];
                document.querySelectorAll(`[data-note="${root}"]`).forEach((note) => {
                    note.classList.add('root');
                });
                document.querySelectorAll(`[data-note="${third}"]`).forEach((note) => {
                    note.classList.add('third');
                });
                document.querySelectorAll(`[data-note="${fifth}"]`).forEach((note) => {
                    note.classList.add('fifth');
                });
                break;
            case 'augmented':
                third = twoOctavesNotes[rootIndex + 4];
                fifth = twoOctavesNotes[rootIndex + 8];
                document.querySelectorAll(`[data-note="${root}"]`).forEach((note) => {
                    note.classList.add('root');
                });
                document.querySelectorAll(`[data-note="${third}"]`).forEach((note) => {
                    note.classList.add('third');
                });
                document.querySelectorAll(`[data-note="${fifth}"]`).forEach((note) => {
                    note.classList.add('fifth');
                });
                break;
            default:
                //nie robi nic, ale React wymaga żeby był
                break;
        }
        document.querySelectorAll('.roottext').forEach((element) => {
            element.innerText = root
        });
        document.querySelector('.typetext').innerText = type;
        document.querySelector('.thirdtext').innerText = third;
        document.querySelector('.fifthtext').innerText = fifth;
        document.querySelector('.text').classList.add('active');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='accidental selector'>
                    <label>
                        ♭
                        <input type='radio' value='♭' checked={accidentals === '♭'} onChange={changeOnFlats}></input>
                    </label>
                    <label>
                        ♯
                       <input type='radio' value='♯' checked={accidentals === '♯'} onChange={changeOnSharps}></input>
                    </label>
                </div>
                <select value={root} onChange={handleRootChange}>
                    {rootSelect.map((note, index) => {
                        return (
                            <option value={note} key={index}>{note}</option>
                        )
                    })}
                </select>
                <select value={type} onChange={handleTypeChange}>
                    {typeOfChord.map((chordType, index) => {
                        return (
                            <option value={chordType} key={index}>{chordType}</option>
                        )
                    })}
                </select>
                <input type="submit" value="Find" />
            </form>
            <div className='fretboard'>
                <div className='string'>
                    {ENotesName.map((note, index) => {
                        return <div className={addSingleFretmarks(index) ? 'note-fret single-fretmark default' : 'note-fret default'} data-note={note} key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{addDoubleFretmark(index) ? <div className='double-fretmark'></div> : null} </div>
                    })}
                </div>
                <div className='string'>
                    {BNotesName.map((note, index) => {
                        return <div className="note-fret default" data-note={note} key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
                    })}
                </div>
                <div className='string'>
                    {GNotesName.map((note, index) => {
                        return <div className="note-fret default" data-note={note} key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
                    })}
                </div>
                <div className='string'>
                    {DNotesName.map((note, index) => {
                        return <div className="note-fret default" data-note={note} key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
                    })}
                </div>
                <div className='string'>
                    {ANotesName.map((note, index) => {
                        return <div className="note-fret default" data-note={note} key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
                    })}
                </div>
                <div className='string'>
                    {ENotesName.map((note, index) => {
                        return <div className='note-fret default' data-note={note} key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
                    })}
                </div>
            </div>
            <p className='text'>In order to play <span className='roottext'></span> <span className='typetext'></span>, your chord should include the root note, which is <span className='roottext'></span>, the third note which is <span className='thirdtext'></span> and the fifth note which is <span className='fifthtext'></span>. You can multiply these notes in your chord.</p>
        </>
    )
}