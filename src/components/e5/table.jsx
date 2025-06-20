import edificis from '../edificis.json'
import Table from 'react-bootstrap/Table';
import { Container, Badge, Button, Form, Row, Col } from 'react-bootstrap';



import { useState } from 'react';


function App() {


   const [maxYear, setMaxYear] = useState(2010);


   const [minHeight, setMinHeight] = useState(800);


   const [selectedProvince, setSelectedProvince] = useState(null);


   const [minPopulation, setMinPopulation] = useState(20000);


   // Map cities to provinces (for demo purposes)
   const cityToProvince = {
       "Barcelona": "Barcelona",
       "Girona": "Girona", 
       "Lleida": "Lleida",
       "Tarragona": "Tarragona",
       // Add mappings for other cities as needed
   };


   function handleHeight(e){
       console.log(e)
       const newHeight = e.target.value
       setMinHeight(newHeight)
   }


   function handlePopulation(e) {
       const newPopulation = e.target.value;
       setMinPopulation(newPopulation);
   }


   function filterByProvince(edifici) {
       if (!selectedProvince) return true;
       return cityToProvince[edifici.city] === selectedProvince;
   }


   const ciutats = edificis
           .filter(e => e.year<=maxYear)
           .filter(e => e.height_m>=minHeight)
           .filter(e => e.population >= minPopulation || !e.population) // If population data doesn't exist, still show
           .filter(filterByProvince)
           .map((e, idx) => (
               <tr key={idx}>
                   <td><Badge bg="success">{e.city}</Badge></td>
                   <td>{e.name}</td>
                   <td>{e.height_m}</td>
                   <td><Button onClick={()=>setMaxYear(e.year)}>{e.year}</Button></td>
                   <td>{e.floors}</td>
                   <td>{e.population || "N/A"}</td>
               </tr>))


   return (
       <Container>
           <h3>Edificis</h3>
           <br />
           <Row className="mb-3">
               <Col>
                   <h5>Filter by Year</h5>
                   <Button variant="outline-success" onClick={()=>setMaxYear(2010)} className="me-2">2010</Button>
                   <Button variant="outline-danger" onClick={()=>setMaxYear(2020)} className="me-2">2020</Button>
                   <Button variant="outline-primary" onClick={()=>setMaxYear(2100)} className="me-2">Max</Button>
               </Col>
           </Row>
           
           <Row className="mb-3">
               <Col>
                   <h5>Filter by Province</h5>
                   <Button 
                       variant={selectedProvince === "Girona" ? "primary" : "outline-primary"} 
                       onClick={()=>setSelectedProvince(prev => prev === "Girona" ? null : "Girona")}
                       className="me-2"
                   >
                       Girona
                   </Button>
                   <Button 
                       variant={selectedProvince === "Barcelona" ? "primary" : "outline-primary"} 
                       onClick={()=>setSelectedProvince(prev => prev === "Barcelona" ? null : "Barcelona")}
                       className="me-2"
                   >
                       Barcelona
                   </Button>
                   <Button 
                       variant={selectedProvince === "Lleida" ? "primary" : "outline-primary"} 
                       onClick={()=>setSelectedProvince(prev => prev === "Lleida" ? null : "Lleida")}
                       className="me-2"
                   >
                       Lleida
                   </Button>
                   <Button 
                       variant={selectedProvince === "Tarragona" ? "primary" : "outline-primary"} 
                       onClick={()=>setSelectedProvince(prev => prev === "Tarragona" ? null : "Tarragona")}
                       className="me-2"
                   >
                       Tarragona
                   </Button>
               </Col>
           </Row>

           <Row className="mb-3">
               <Col>
                   <h5>Minimum Height: {minHeight}m</h5>
                   <Button variant="primary" onClick={()=>setMinHeight(500)} className="mb-2">Min 500</Button>
                   <Form.Range
                       name="altura"
                       max="1000"
                       min="400"
                       step="50"
                       value={minHeight}
                       onInput={handleHeight}
                   />
               </Col>
           </Row>

           <Row className="mb-3">
               <Col>
                   <h5>Minimum Population: {minPopulation.toLocaleString()}</h5>
                   <Form.Range
                       name="population"
                       max="150000"
                       min="20000"
                       step="10000"
                       value={minPopulation}
                       onInput={handlePopulation}
                   />
               </Col>
           </Row>

           <Table striped bordered hover>
               <thead>
                   <tr>
                       <th>City</th>
                       <th>Name</th>
                       <th>Height</th>
                       <th>Year</th>
                       <th>Floors</th>
                       <th>Population</th>
                   </tr>
               </thead>
               <tbody>
                   {ciutats}
               </tbody>
           </Table>
       </Container>
   )
}


export default App;

