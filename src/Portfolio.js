import React from 'react';
import Folder from './Folder.js'
const Portfolio = () => {
  return (
    <div>
      <h1 style={styles.header}> My Portfolio</h1>
      <Folder/>
    </div>
  );
};
const styles = {
  header: {
    "margin": "auto"
  }
}
export default Portfolio;
