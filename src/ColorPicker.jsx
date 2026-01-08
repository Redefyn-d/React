import React , {useState} from 'react'
function ColorPicker(){
    const [color,setColor] = useState("#FFFFFF");

    const updateColor = (e) => {
        setColor(e.target.value);
    }

    return (<div className='color-picker'>
            <div className='color-display' style={{backgroundColor:color}}>
                <p>Color Selected : {color}</p>
            </div>
            <label>Pick a Color: </label>
            <input type="color" value={color} onChange={updateColor}/>
        </div>)
}

export default ColorPicker 