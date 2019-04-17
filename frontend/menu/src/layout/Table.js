import React, { Component } from 'react';
import ReactTable from 'react-table';
import axios from 'axios';

export class Table extends Component {
    state = {
        menu: []
    }

    componentDidMount(){
      axios.get('http://127.0.0.1:8000/api/menu/')
                .then(res =>{
                  this.setState({
                    menu: res.data
                  });
                })
    }

  render() {
      const columns = [
          {
            Header: "Dish Name",
            accessor: "name",
        },
        {
            Header: "Price",
            accessor: "price",
            sortable: false,
            filterable: false
        }
      ]
    return (
      <ReactTable 
        columns= {columns} 
        data={ this.state.menu} 
        filterable
        defaultPageSize={10}
        style={{background:'white'}}
         >

      </ReactTable>
    )
  }
}

export default Table
