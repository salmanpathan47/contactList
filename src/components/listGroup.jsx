import React from 'react';
const ListGroup = (props) => {
    const {items,textProprty,valueProperty,onItemSelect,selectedItem}=props;
    return(
         <ul className="list-group">
         {items.map(item=>(
             <li  
             onClick={()=>onItemSelect(item)}
             key={item[valueProperty]}className={item===selectedItem?"list-group-item active":"list-group-item"}>{item[textProprty]}</li>
         ))}
   
    
    </ul>
    )
}
 
export default ListGroup;