import React          from 'react';
import Pallete   from '../Styles/Pallete.json';
import Highlight from '../Components/Highlight/Highlight';
import Container from 'react-bootstrap/Container';
import Row       from 'react-bootstrap/Row';
import Col       from 'react-bootstrap/Col';
import useWindowDimensions from '../Components/Utils/useWindowDimensions';

const getColStyle = () => {
    return {
        backgroundColor: 'red !important',
        padding: '0px'
    }
};


const pageContent = (width, height, params) => {
    return(
        <Container>
            <Row>
                <Col xs={12} md={8} lg={8} >
                    {/**hightlight principal */}
                    <Highlight
                        maxwidth = {width}
                        imageURL = 'https://github.com/ulissessigma/Sigma_Soldering_Booth/blob/main/Concept/Concept_Render.jpg?raw=true'
                        title    = 'Sigma Soldering Booth'
                        text     = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                     />
                </Col>
                <Col xs={6} md={4} lg={4}>
                    {/**hightlights secundarios */}    
                    
                    <Row>
                        <Col>
                            <Highlight
                                maxwidth = {600}
                                imageURL = 'https://github.com/ulissessigma/Sigma_Soldering_Booth/blob/main/Concept/Concept_Render.jpg?raw=true'
                                title    = 'Sigma Soldering Booth'
                            />
                        </Col>
                        <Col>
                            <Highlight
                                maxwidth = {600}
                                imageURL = 'https://github.com/ulissessigma/Sigma_Soldering_Booth/blob/main/Concept/Concept_Render.jpg?raw=true'
                                title    = 'Sigma Soldering Booth'
                            />
                        </Col>
                        <Row>
                            <Col xs={12} md={12} ld={12} style={{ color: Pallete.text }}>
                                lista de projetos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Col>
                        </Row>
                    </Row>
                    
                </Col>
            </Row>
        </Container>
    )
}

const pageLayout = (width, height, params) =>{
    if(height > width){
        return(
            <>
                {pageContent(width, height, params)}
            </>
        );
    }else{
        return(
            <>
                {pageContent(width, height, params)}
            </>
        );
    }
}

const Projects = (params) =>{
    const{ width, height} = useWindowDimensions();
    //const ismobile        = width < height;
    return (
        <>
            {pageLayout(width, height, params)}
        </>
    )
}

export default Projects;