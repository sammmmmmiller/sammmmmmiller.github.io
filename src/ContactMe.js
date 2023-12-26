import React from 'react';
import Tabs from './Tabs'; // Make sure to create this component
import './Folder.css'; // Your custom styles
import githubIcon from './Images/github.png';
import linkedinIcon from './Images/linkedin.png';
import emailIcon from './Images/email.png';
import itchIoIcon from './Images/itchio.png';
import chessIcon from './Images/chesscom.png';
import letterboxd from './Images/letterboxd.svg';
import './ContactMe.css';

const ContactMe = () => {
    const medias1 = [
        { name: 'LinkedIn', icon: linkedinIcon, text: 'Connect with me on LinkedIn!' },
        { name: 'GitHub', icon: githubIcon, text: 'Check out some of my projects!' },
        { name: 'Email', icon: emailIcon, text: 'Email me for the quickest response at: sammiller0013@gmail.com' },
    ]
    const medias2 = [
        { name: 'Itch.io', icon: itchIoIcon, text: 'Check out some of my games!' },
        { name: 'Chess.com', icon: chessIcon, text: 'Challenge me on Chess.com!' },
        { name: 'Letterboxd', icon: letterboxd, text: 'Follow me for correct movie opinions!' }
    ];
    const { mediaStyle, mediaDiv } = styles;
    return (
        <header>
            <h1>Contact Me!</h1>
            <div className='mediadiv' style={mediaDiv}>
                <div>
                    {medias1.map((media, index) => (
                        <MediaObject key={index} media={media.name} mediaIcon={media.icon} mediaText={media.text} mediaStyle={mediaStyle} />
                    ))}
                </div>
                <div>
                    {medias2.map((media, index) => (
                        <MediaObject key={index} media={media.name} mediaIcon={media.icon} mediaText={media.text} mediaStyle={mediaStyle} />
                    ))}
                </div>
            </div>
        </header>
    );
};

const MediaObject = ({ media, mediaIcon, mediaText, mediaStyle }) => {
    return (
        <div style={styles.columnDiv}>
            <a>
                <img style={mediaStyle} src={mediaIcon} alt={media} />
                
            </a>
            <a>
                {media}
                
            </a>
        </div>
    );
};

const styles = {
    mediaStyle: {
        "flex": 1,
        width: "50px",
        height: "50px"
    },
    mediaDiv: {
        "display": "flex",
        // "justify-content":"center",
        // "flex-direction": "column"
    },
    columnDiv: {
        display: 'flex',
        'flex-direction': 'column',
        // flex: 1,
        "margin": "20px"
    }
}

export default ContactMe;
