import React, { useState, useEffect } from 'react';
import me from "./Images/me.jpg";
import me2 from "./Images/me2.jpg";
import me3 from "./Images/me3.jpg";
import me4 from "./Images/me4.jpg";
import resume from "./Images/resumedownload.jpg";
import Button from '@mui/material/Button';
import './About.css';
function About() {
    const images = [me, me2, me3, me4];
    const [currentImage, setCurrentImage] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');

    const switchImage = () => {
        setFadeClass('fade-out');
        setTimeout(() => {
            setCurrentImage(currentImage => (currentImage + 1) % images.length);
            setFadeClass('fade-in');
        }, 1000); // Corresponding to the fade-out animation duration
    };

    useEffect(() => {
        const intervalId = setInterval(switchImage, 10000); // Change image every 10 seconds

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    return (
        <>
            
            <div className='image_text_div' style={styles.div}>
                <div style={styles.img_container} className='img_container'>
                    <img className={fadeClass} style={styles.img} src={images[currentImage]} alt="Me"></img>
                </div>
                <div>
                    <div style={styles.img_container}>
                    <h1>About</h1>
                        <p style={styles.p}>Hello there.<br />

                            Lorem ipsum dolor sit amet. Quo quasi culpa ut harum explicabo est alias velit aut reiciendis libero qui ullam earum est voluptas possimus. Ut quae quas et dolor dolores sit galisum quibusdam et voluptate similique.
                            <br></br>
                            Et omnis incidunt qui explicabo eveniet cum facere possimus quo provident consequatur. Quo beatae fugiat At sunt dolor aut laudantium mollitia et adipisci praesentium rem magni laudantium.

                            Et galisum velit et eveniet corrupti 33 consequatur quasi. Qui tempora molestiae aut eius deleniti ea quae voluptate in modi repudiandae et illum omnis non nihil harum! Ut dolore voluptatem et repudiandae quasi aut omnis maiores!
                        </p>

                    </div>
                    <div style={styles.button_container}>
                       
                        <Button>
                            <img style={styles.button} src={resume} />
                        </Button>
                       
                        <span style={styles.span}>Download my resume!</span>
                    </div>
                </div>

            </div>

        </>
    );
}

const styles = {
    div: {
        display: 'flex',
        'justify-content': 'center',
        // 'background-color': "#595959"   
        gap: "50px"
    },
    img: {
        width: '350px',
        height: '600px',

    },
    img_container: {
        "background-color": "black",
        padding: "10px",
        margin: "20px",
        display: "flex",
        "flex-direction": "column",
        "align-self": "center",
        'border-radius': '5px'

    },
    button_container: {
        "background-color": "black",
        padding: "20px",
        margin: "20px",
        display: "flex",
        "flex-direction": "column",
        "align-self": "center",
        width: "200px",
        height: "200px",
        "align-self": "center"
    },
    p: {
        padding: '15px'
    },
    button: {
        width: '20%',
        'resize-mode': 'contain',
        'border-radius': '3px'
    },
    tmp: {
        margin: "20px",
        // width: '20px',
        // height: '40px',
        "align-self": "center"
    },
    span: {
        "text-align":"center"
    }

}

export default About;