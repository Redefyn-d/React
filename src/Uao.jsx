import React , {useState} from  'react';

function Uao (){
    const [cars,setCars] = useState([]);
    const [carYear,setCarYear] = useState(new Date().getFullYear());
    const [carMake,setCarMake] = useState ("");
    const [carModel,setCarModel] = useState("");

    function handleAddCart(){
        const newCar = {year:carYear,make:carMake,model:carModel};

        setCars(c => [...c,newCar]);
        
        setCarMake("");
        setCarModel("");
        setCarYear(new Date().getFullYear());

    }

    function handleRemoveCart(){

    }

    function handleYearChange(e){
        setCarYear(e.target.value);
    }

    function handleMakeChange(e){
        setCarMake(e.target.value);
    }

    function handleModelChange(e){
        setCarModel(e.target.value);
    }



    return (<>
            <h2>List of Cars Objects</h2>
            <ul>
                {cars.map((car,index)=><li key={index}>{car.year} {car.make} {car.model}</li>)}
            </ul>

            <input type="number" onChange={handleYearChange} placeholder='Enter Year' value={carYear}/>
            <input type="text" onChange={handleMakeChange} placeholder='Enter Maker' value={carMake}/>
            <input type="text" onChange={handleModelChange} placeholder='Enter Model' value={carModel}/>

            <button onClick={handleAddCart}>Submit</button>

            </>)
}

export default Uao