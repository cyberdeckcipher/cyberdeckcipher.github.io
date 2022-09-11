import Card           from 'react-bootstrap/Card';
import truncateString from '../Utils/truncateString';
import Pallete        from '../../Styles/Pallete.json';

const Highlight = (params) => {
    var bodyText = null;
    if(params.text){
        bodyText = truncateString(params.text, params.textSize);
    }
    return (
        <Card style={{ maxWidth: params.maxwidth, backgroundColor: Pallete.hightlight}}>
            <Card.Img variant="top" src={params.imageURL} />
            <Card.Body>
                <Card.Title style={{ color: Pallete.text }}>{params.title}</Card.Title>
                <Card.Text>
                    {bodyText}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Highlight;