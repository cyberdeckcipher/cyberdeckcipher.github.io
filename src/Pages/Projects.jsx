import React     from 'react';
import styles    from '../Styles/Pages.module.css';
import Highlight from '../Components/Highlight/Highlight';
import Container from 'react-bootstrap/Container';
import Row       from 'react-bootstrap/Row';
import Col       from 'react-bootstrap/Col';

const Projects = () =>{
    return (
        <div>
            <div className={styles.RowOfObjects}>
                <span>Projects page.</span>
            </div>
            <Container>
                <Row md={3} xs={1} lg={6}>
                    <Col>
                        <Highlight 
                            imageURL = 'https://github.com/ulissessigma/Sigma_Soldering_Booth/blob/main/Concept/Concept_Render.jpg?raw=true'
                            title    = 'Sigma Soldering Booth'
                            text     = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        />
                    </Col>
                </Row>
                <Row  md={3} xs={6} lg={3}>
                    <Col>
                        <Highlight 
                            imageURL = 'https://github.com/ulissessigma/Sigma_Soldering_Booth/blob/main/Concept/Concept_Render.jpg?raw=true'
                            title    = 'Sigma Soldering Booth'
                            text     = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        />
                    </Col>
                    <Col>
                        <Highlight 
                            imageURL = 'https://github.com/ulissessigma/Sigma_Soldering_Booth/blob/main/Concept/Concept_Render.jpg?raw=true'
                            title    = 'Sigma Soldering Booth'
                            text     = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        />
                    </Col>
                    <Col>
                        <Highlight 
                            imageURL = 'https://github.com/ulissessigma/Sigma_Soldering_Booth/blob/main/Concept/Concept_Render.jpg?raw=true'
                            title    = 'Sigma Soldering Booth'
                            text     = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects;