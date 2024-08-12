

function List(props){

  const itemList = props.items;
  const category = props.category;


    const listItems = itemList.map(veg => <li key = {veg.id}>  
    {veg.name} : &nbsp;
    <b>{veg.Qty}</b>
    </li> )

List.defaultProps = {
  category:"Category", 
  items : []
}

    return(
        <>
        <h3 className="list-category"> {category}</h3>
        <ol className="list-items"> {listItems}</ol>
        </>
        )

}
export default List