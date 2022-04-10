import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzas, setPizzas] = useState([]);
  const [editPizza, setEditPizza] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then(setPizzas)
  }, []);

  function handlEditButtonClick(id){
    const foundPizza = pizzas.find((pizza) => pizza.id === id)
    setEditPizza(foundPizza)
  }

  function updatePizzaList(newData){
    const newPizzaList = pizzas.map((pizza) => 
      pizza.id === newData.id ? newData : pizza);
      console.log(newPizzaList)
      setEditPizza(newPizzaList);
      setPizzas(newPizzaList);
  }
  
  return (
    <>
      <Header />
      <PizzaForm {...editPizza} setEditPizza={setEditPizza} updatePizzaList={updatePizzaList}/>
    <PizzaList pizzas={pizzas} handleClick={handlEditButtonClick} />
    </>
  );
}

export default App;
 