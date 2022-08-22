import Card    from 'react-bootstrap/Card';
import Pallete from '../../Styles/Pallete.json';

const Highlight = (params) => {
    return (
        <Card style={{ width: '18rem' , backgroundColor: Pallete.background }}>
            <Card.Img variant="top" src={params.imageURL} />
            <Card.Body>
                <Card.Title style={{ color: Pallete.hightlight }}>{params.title}</Card.Title>
                <Card.Text>
                    {params.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Highlight;