import React, { Component } from "react";
import InputField from "../common/InputField";
import * as actions from "../../actions/videoActions";
import { connect } from "react-redux";

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const params = this.state.searchTerm;
    this.props.getVideos(params);
  };
  render() {
    return (
      <div className="search-bar-wrapper">
        <form onSubmit={this.onSubmit}>
          <InputField
            type="text"
            name="searchTerm"
            placeholder="What do you want to watch?"
            value={this.state.searchTerm}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(SearchBar);
