import React, { Component } from 'react';
import _ from 'lodash';
class Paginate extends Component {
    
    render(props) { 
      console.log(this.props.currentPage)
        const pageCount=(this.props.totalPageSize)/(this.props.pageSize);
        const pages=_.range(1,pageCount+1);
        console.log(pages)
        return ( 
            <nav >
  <ul className="pagination">
  {pages.map(page=>(
       <li key={page}  className={page === this.props.currentPage ?'page-item active':'page-item'}>
       <a className="page-link"  onClick={()=>this.props.onPageChange(page)}>
        {page}
       </a>
     </li>

  ))}
   
    
  </ul>
</nav>
         );
    }
}
 
export default Paginate;