import React from 'react';
import './Tabs.css'; // Your custom styles
import './Styles.css'
const Tabs = ({ anti }) => {
    const tabs = ['bMobile',
        'Bungo Bash', 
        'CHEER 3D',
        'ChromaThoth',
        'Electromagnetic Tweezers', 
        'Lichess Anti-Cheat',]; // Add your project names here

    return (
        <div class="btn-wrap">
            {anti ? tabs.map((tab, index) => (
                <a key={index} class="btn btn-trapezoid-outline anti" href="#">
                    <span >{}</span>
                </a>
            )) : tabs.map((tab, index) => (
                <a key={index} class="btn btn-trapezoid-outline" href="#">
                    <span >{}</span>
                </a>
            ))}
        </div>
    );
};
const styles = {
    span: {
        "font-size": "small"
    }
}
export default Tabs;
