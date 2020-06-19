import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import employees from "./employees.json";
import Container from "./components/Container";

class App extends React.Component {
  //Setting this.state.employee to the employee json array
  state = {
    employees: [],
    userInput: "",
    results: []
  };

  searchName = value => {
    this.findName(this.state.employees, 0, value);
  };

  componentDidMount() {
    // API.getBaseBreedsList()
    this.setState({ employees: employees });
    this.setState({ results: employees });
    // .catch(err => console.log(err));
  }

  findName(names, index, letter) {
    var filteredNames = [];
    names.forEach(name => {
      var checkName = name.name; 
      var lowerName = checkName.toLowerCase();
      if (lowerName.startsWith(letter.toLowerCase(), 0)) {
        filteredNames.push(name);
        console.log(name);
      }
    });

    this.setState({ results: filteredNames });
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const name = event.target.name;
    const value = event.target.value;
    // Updating the input's state
    this.setState({
      [name]: value
    });
    this.searchName(value);
  };

  // Map over this.state.employees and render a Employee component for each Employee object
  render() {
    return (
      <Wrapper>
        <Header>Employee Header</Header>
        <Container>
          <form className="search">
            <div className="form-group">
              <input
                value={this.state.userInput}
                name="userInput"
                type="text"
                className="form-control"
                placeholder="Search"
                id="employee"
                onChange={this.handleInputChange}
              />
            </div>
          </form>
          <SearchResults employees={this.state.results} />
        </Container>
      </Wrapper>
    );
  }
}

export default App;
