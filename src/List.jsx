function List (){

    const fruits = ["Apple","Orange","Bannana"];

    console.log('List component rendering, fruits array:', fruits);

    const listComponents = fruits.map((fruit, index) => {
        console.log(`Mapping fruit: ${fruit} at index ${index}`);
        return <li>{fruit}</li>;
    });

    console.log('Generated listComponents length:', listComponents.length);

    return (<ol>{listComponents}</ol>);

}

 

export default List