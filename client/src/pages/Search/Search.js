import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Search extends Component {
  state = {
    title: "",
    toResults: false,
    results: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {

      const title = this.state.title.trim();

      API.getNewBooks(title)
        .then(res => {

          console.log(res.data.items);

          this.setState({
            toResults: true,
            results: res.data.items
          });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    if (this.state.toResults) {
      return <Redirect to={{
        pathname: "/results",
        data: { results: this.state.results }
      }} />
    }
    return (
      <div>
        <Jumbotron>
          <h1 className="display-4">(React) Google Books Search</h1>
          <p className="lead">Search for and save books of interest.</p>
          <hr className="my-4" />
          <p className="lead">
            <Link className="btn btn-default btn-lg" to="/" role="button">New Search</Link>
            <Link className="btn btn-default btn-lg" to="/saved" role="button">Saved Books</Link>
          </p>
        </Jumbotron>
        <Container>
          <form>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              label="Book Title"
              placeholder="Search Book Title (required)"
            />
            <FormBtn         
              onClick={this.handleFormSubmit}
              className="btn btn-info"
            >
              Search
            </FormBtn>
          </form>
        </Container>
      </div>
    );
  }
}

export default Search;