import { Component } from "react";
import s from "./SearchMovie.module.css";
import { ImSearch } from "react-icons/im";

export default class Searchbar extends Component {
  state = {
    searchInfo: "",
  };

  handleInputChange = (e) => {
    this.setState({ searchInfo: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchInfo.trim() === "") {
      return alert("No matches found");
    }
    this.props.onSubmit(this.state.searchInfo);
    this.setState({ searchInfo: "" });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
            <ImSearch style={{ marginRight: 8 }} />
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            onChange={this.handleInputChange}
            value={this.state.searchInfo}
          />
        </form>
      </header>
    );
  }
}
