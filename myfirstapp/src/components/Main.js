import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../data.json';
import CardComp from './card';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';


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


    let [items, setItems] = useState(data);

    async function getMealsData() {

        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results)
        setItems(data.results) //all the data that comes from the api

    }


    useEffect(function () {

        getMealsData();

    }, [])



    async function handleSubmit(event) {
        event.preventDefault()
        let searchedValue = event.target.search.value;

        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

        const response = await fetch(url);
        const data = await response.json();


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
                    required
                />
                <Button variant="outline-success" type='submit'>Search</Button>
            </Form>
            <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", marginTop: "3%" }}>
                {items.length !== 0 ? items.map(function (item) {
                    return (
                        <>
                            <CardComp image={item.images[0].baseUrl} title={item.name} price={item.price.value} />
                        </>
                    )
                }
                ) : <h3>No search results</h3>}
            </div>
        </>
    )
}

export default Main;