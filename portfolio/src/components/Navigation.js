import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { IoReorderFourSharp } from 'react-icons/io5';
import '../styles/Navigation.css'


function Navigation() {
    const [expandButton, setExpandButton] = useState(false);
    const [aboutMe, setAboutMe] = useState(true);
    const [portfolio, setPortfolio] = useState(false);
    const [contact, setContact] = useState(false);
    const [resume, setResume] = useState(false);


    // const location = useLocation();

    // useEffect(() => {
    //     setExpandButton(false);

        
    // }, [location]); 
    

    const selectFunc = (e) => {
        const { currentTarget } = e;
        const section = currentTarget.name;


        switch (section) {
            case 'aboutme':
                setAboutMe((selected) => !selected);
                setPortfolio(false);
                setContact(false);
                setResume(false);
                break;
            case 'portfolio':
                setPortfolio((selected) => !selected);
                setAboutMe(false);
                setContact(false);
                setResume(false);
                break;
            case 'contact':
                setContact((selected) => !selected);
                setAboutMe(false);
                setPortfolio(false);
                setResume(false);   
                break;
            case 'resume':
                setResume((selected) => !selected);
                setAboutMe(false);
                setPortfolio(false);
                setContact(false);
                break;
            default:
                break;
        }
    };

    return (
        <div className='navbar'>
            <div className='toggleButton' id={expandButton ? 'open' : 'close'}>
                <button onClick={() => {setExpandButton((expand) => !expand)}}>
                <IoReorderFourSharp/>
                </button>
            </div>
            <div className='links'>
                <Link to='/about-me' onClick={selectFunc} name='aboutme' id={aboutMe ? 'selected' : 'noselected'}>About Me</Link>
                <Link to='/portfolio' onClick={selectFunc} name='portfolio' id={portfolio ? 'selected' : 'noselected'}>Portfolio</Link>
                <Link to='/contact' onClick={selectFunc} name='contact' id={contact ? 'selected' : 'noselected'}>Contact</Link>
                <Link to='/resume' onClick={selectFunc} name='resume' id={resume ? 'selected' : 'noselected'}>Resume</Link>
            </div>
        </div>
    )
}

export default Navigation;