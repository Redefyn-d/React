
function Button (){
    const clickhandle = (e) => {
        console.log(e);
    }
    return (<button id = "testButton" onClick = {(e) => clickhandle(e)}>Button</button>);
}

export default Button