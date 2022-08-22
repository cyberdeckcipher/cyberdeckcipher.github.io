import React     from 'react';
import Highlight from '../Components/Highlight/Highlight';

const Projects = () =>{
    return (
        <div>
            <span>Projects page.</span>
            <Highlight 
                imageURL = 'https://raw.githubusercontent.com/ulissessigma/Sigma_Soldering_Booth/main/Concept_Render.jpg'
                title = 'Sigma Soldering Booth'
                text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            />
        </div>
    )
}

export default Projects;