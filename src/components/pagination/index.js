import React, { Component } from "react";
import ReactPaginate from 'react-paginate';
import axios from 'axios';

class Pages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 10,
      currentPage: 0
    }
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.loadMoreData()
    });
  };


  loadMoreData() {
    const data = this.state.orgtableData;
    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice
    })
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
      .then(res => {
        var data = res.data;
        var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          orgtableData: res.data,
          tableData: slice
        })
      });
  }

  render() {
    return (
      <div>
        <br/>
        <h1>Pagination Example</h1>
        <br/>
        <table border="2">
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </thead>
          <tbody>
            {
              this.state.tableData.map((tdata, i) => (
                <tr>
                  <td>{tdata.id}</td>
                  <td>{tdata.name}</td>
                  <td>{tdata.email}</td>
                  <td>{tdata.body}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"...."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={5}
          pageRangeDisplayed={10}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
      </div>
    )
  }
}
export default Pages;