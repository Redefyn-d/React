import React , {useState} from 'react';

function Food(){
    const [foods , setFoods] = useState(["Dosa","Idli","Panner"])

    const addFood = () => {
        const newFood = document.getElementById("newfood").value;
        document.getElementById("newfood").value = "";
        
        setFoods(f => [...f,newFood]);
    }
    const removeFood = (index) => {
        setFoods(foods.filter((food,i) => i !==index ))
    }
    return (<>
            <ul>
                {foods.map((food,index)=><li key = {index} onClick={() => removeFood(index)}>{food}</li>)}
            </ul>
            <legend>Enter the new food to add</legend>
            <input type='text' id= "newfood"></input>
            <button onClick={addFood}>Add Food</button>
            </>)
}

export default Food