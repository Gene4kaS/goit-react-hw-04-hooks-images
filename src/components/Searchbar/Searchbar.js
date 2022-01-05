import { Component } from 'react';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    searchPic: '',
  };

  handleNameChange = event => {
    this.setState({ searchPic: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchPic);

    if (this.state.searchPic.trim() === '') {
      alert('Введите наименование картинки.');
      return;
    }

    this.setState({ searchPic: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            name="searchPic"
            value={this.state.searchPic}
            onChange={this.handleNameChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
