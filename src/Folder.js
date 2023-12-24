import React from 'react';
import Tabs from './Tabs'; // Make sure to create this component
import './Folder.css'; // Your custom styles

const Folder = () => {
    return (
        <header>
            <div className="folder">
                <Tabs anti={false} />
                <Tabs anti={true} />
                <div class='portfolio-text'>
                    <span>
                        Portfolio
                    </span>
                </div>
                {/* Content will be displayed here based on the selected tab */}
            </div>

        </header>

    );
};

export default Folder;
