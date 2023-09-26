import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../data.json';
import CardComp from './card';

function Main() {
//     return (
// <>
// {data.map(
//         <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={data[0].image_url} />
//             <Card.Body>
//                 <Card.Title>{data[0].title}</Card.Title>
//                 <Card.Text>
//                     {data[0].description}
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//         </Card>
// )
// }
//         </>
//     );

return(
    <>
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:"20px",marginTop:"3%"}}>
    {data.map(function(item){
        return(
            <CardComp image={item.image_url} title={item.title} description={item.description}/>
        )
    }
)
    }
    </div>
    </>
)

}

export default Main;