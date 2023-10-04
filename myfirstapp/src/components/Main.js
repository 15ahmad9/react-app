import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../data.json';
import CardComp from './card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';


function Main() {

  let arr = JSON.parse(localStorage.getItem("collections"));
  const [items, setItems] = useState([]);
  const [activeModalIndex, setActive] = useState(null);
  const [activeModal2Index, setActive2] = useState(null);
  const initialCategory = arr && arr[0] ? arr[0].collectionName : "";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);


  async function getMealsData() {

    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data)
    setItems(data.meals);
  }

  useEffect(() => {
    getMealsData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    let search = event.target.search.value;
    console.log(search);

    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);

    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data)
    setItems(data.meals);
  }

  function handleChange(event) {
    console.log(event.target);
    let category = event.target.value;
    setSelectedCategory(category);
  }


  return (
    <>
      <Form inline onSubmit={handleSubmit} style={{ marginTop: "5%", marginLeft: "25%", marginBottom: "5%" }}>
        <div className="input-group">
          <Form.Control type="text" placeholder="Search" className="mr-sm-2" name="search" style={{ width: "600px", marginRight: "20px" }} />
          <div className="input-group-append">
            <Button type="submit" variant="outline-success"> Search </Button>
          </div>
        </div>
      </Form>

      <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between"}}>
        {items.map((search, index) => (
          <div >
            <Card style={{ width: '280px' }} key={index}>
              <Card.Img variant="top" src={search.strMealThumb} />
              <Card.Body>
                <Card.Title>{search.strMeal}</Card.Title>
                <Button variant="primary" onClick={() =>
                  setActive(index)} style={{ display: "flex" }}>
                  Show Description
                </Button>
                <Button variant="primary" onClick={() =>
                  setActive2(index)}>Add to List</Button>
              </Card.Body>
            </Card>

            <Modal
              show={activeModalIndex === index}
              onHide={() => setActive(null)}
              aria-labelledby={`contained-modal-title-vcenter-${index}`}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id={`contained-modal-title-vcenter-${index}`}>
                  {search.strMeal}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Centered Modal</h4>
                <p>{search.strInstructions}</p>
              </Modal.Body>0
              <Modal.Footer>
                <Button onClick={() =>
                  setActive(null)}>Close</Button>
              </Modal.Footer>
            </Modal>

            <Modal
              show={activeModal2Index === index}
              onHide={() =>
                setActive2(null)}
              aria-labelledby={`contained-modal-title-vcenter-${index}`}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id={`contained-modal-title-vcenter-${index}`}>
                  Categories
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Select
                  aria-label="Default select example"
                  name="area"
                  onChange={(event) =>
                    handleChange(event)}
                >
                  {arr ? (
                    arr.map((category, i) => (
                      <option key={i} value={category.collectionName}>
                        {category.collectionName}
                      </option>
                    ))
                  ) : (
                    <p>There are no categories.</p>
                  )}
                </Form.Select>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() =>
                  setActive2(null)}>Close
                  </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )
        )}
      </ul>

    </>
  );
}

export default Main;
