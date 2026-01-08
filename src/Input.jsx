import React , {useState} from 'react'
function Input(){
    const [name,setName] = useState("Guest");
    const txtupdate = (e) => {
        setName(e.target.value);
    }
    return (<><input value={name} onChange={txtupdate}></input>
              <p>Name:{name}</p>
            </>)
}

export default Input