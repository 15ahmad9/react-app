import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../data.json';
import CardComp from './card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


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


    let [ items, setItems ] = useState(data);

    function handleSubmit(event) {
        event.preventDefault()
        let searchedValue = event.target.search.value;
        let filteredItems = data.filter(function (item) { return item.title.toLowerCase().includes(searchedValue.toLowerCase()) })
        setItems(filteredItems);
    }

    return (
        <>

            <Form onSubmit={handleSubmit}>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    name="search"
                />
                <Button variant="outline-success" type='submit'>Search</Button>
            </Form>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", marginTop: "3%" }}>
                {items.map(function (item) {
                    return (
                        <CardComp image={item.image_url} title={item.title} description={item.description} category={item.category} />
                    )
                }
                )
                }
            </div>
        </>
    )

}

export default Main;