import Card                from 'react-bootstrap/Card';
import Pallete             from '../../Styles/Pallete.json';
import useWindowDimensions from '../Utils/useWindowDimensions';
import truncateString      from '../Utils/truncateString';

const Highlight = (params) => {
    const { height, width } = useWindowDimensions();
    const bodyText          = truncateString(params.text, 100);
    return (
        <Card style={{ maxWidth: width/2.5, backgroundColor: Pallete.hightlight}}>
            <Card.Img variant="top" src={params.imageURL} />
            <Card.Body>
                <Card.Title style={{ color: Pallete.text }}>{params.title}</Card.Title>
                <Card.Text>
                    width: {width}
                    <br/>
                    height: {height}
                    <br/>
                    {bodyText}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Highlight;