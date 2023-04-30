import { Component } from 'react';
import {
  SearchHeader,
  SearchForm,
  SearchButton,
  SearchLabel,
  SearchFormInput,
  
} from './Searchbar.styled.js';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    searchData: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchData);
  };

  handleChange = evt => {
    const { value } = evt.target;
    this.setState({ searchData: value });
  };

  render() {
    const { handleChange, handleSubmit } = this;

    return (
      <SearchHeader>
        <SearchForm onSubmit={handleSubmit}>
          <SearchButton type="submit">
            <AiOutlineSearch style={{ width: 30, height: 30 }} />
            <SearchLabel>Search</SearchLabel>
          </SearchButton>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}