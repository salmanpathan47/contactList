import React, { Component } from 'react';
import {getcontacts} from './services/fakeContactService'
import './App.css';
import Like from '../src/components/like'
import Paginate from '../src/components/pagination'
import ListGroup from '../src/components/listGroup'
import { getGenres } from './services/fakeGenreService';
import {paginate} from '../src/components/utils'

class App extends Component {
  state={
    contacts:getcontacts(),
    genres:getGenres(),
    pageSize:10,
    currentPage:1
  }
  //to select contactType
  handleGenreSelect=(genre)=>{
    this.setState({selectedGenre:genre})
  }
  //to delete contact
  handleDelete=(mov)=>{
    
    this.setState({contacts:this.state.contacts.filter(m=>{
      return m._id!==mov._id;
    })})
  };
  //handle Fav
  handleLike=(mov)=>{
    const contacts=[...this.state.contacts];
    const index=contacts.indexOf(mov)
    contacts[index]={...contacts[index]};
    contacts[index].liked= !contacts[index].liked;
    this.setState({contacts});
  };
  //handle Page change
  handlePageChange=(page)=>{
    this.setState({currentPage:page})
  }
  render() {
    const {lenght:count}=this.state.contacts;
    //object destructuring
    const {contacts:Allcontacts,pageSize,currentPage,selectedGenre}=this.state;
    const filter=selectedGenre?this.state.contacts.filter(m=>m.genre._id===selectedGenre._id):this.state.contacts;
    const contacts=paginate(filter,currentPage,pageSize)
    return (
      <div className="row">
      <div className="col-2">
      <ListGroup   items={this.state.genres }
      onItemSelect={this.handleGenreSelect}
      textProprty="name"
      valueProperty="_id"
      selectedItem={this.state.selectedGenre}
      />
      </div>
      <div className="col">
      <main className="container">
     <h1>Contacts List</h1>
     <table className="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Relation</th>
      <th scope="col">PhoneNumber</th>
      <th scope="col">Email</th>
      <th scope="col">Delete</th>
      <th scope="col">Mark Favourite</th>
    </tr>
  </thead>
  <tbody>
    {contacts.map(mov=>{
      return <tr key={mov._id}>
      <td>{mov.firstname}</td>
      <td>{mov.genre.name}</td>
      <td>{mov.PhoneNumber}</td>
      <td>{mov.Email}</td>
      <td ><button className="btn btn-danger btn-sm" onClick={()=>this.handleDelete(mov)}>Delete</button></td>
      <td><Like liked={mov.liked}  onClick={()=>this.handleLike(mov)}/></td>
      </tr>
    })}
    
  </tbody>
  </table>
  <Paginate totalPageSize={count} 
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
/>
      </main>
      </div>
      </div>
     
    );
  }
}

export default App;
