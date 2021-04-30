import React, {PureComponent} from 'react';
import './style.scss';

class SearchForm extends PureComponent {
  inputRef = React.createRef();

  handleSearch = () => {
    this.props.onSearch(this.inputRef.current.value);
    this.inputRef.current.value = '';
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };
  render() {
    return (
      <div className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search.."
          ref={this.inputRef}
          onKeyPress={this.handleKeyPress}
        />
        <button
          className="btn-search"
          onClick={this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchForm;
