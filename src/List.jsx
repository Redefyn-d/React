function List (props){
    const Items = props.Items;

    const listItems = Items.map(Item => <li key = {Item.id}>{Item.name}: &nbsp; <b>{Item.cal}</b></li>)
    return (<><h3>{props.Category}</h3>
              <ol>{listItems}</ol></>);

}

List.defaultProps = {
    Category : "Category",
    Items : [],
}
export default List