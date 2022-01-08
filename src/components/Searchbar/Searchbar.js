import { Component } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    queryName: '',
  };

  handleNameChange = event => {
    this.setState({ queryName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.queryName.trim() === '') {
      toast.error('Type something to find');
      return;
    }
    this.props.onSubmit(this.state.queryName);
    this.setState({ queryName: '' });
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
            value={this.state.queryName}
            onChange={this.handleNameChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
