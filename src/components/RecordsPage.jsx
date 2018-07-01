import React from 'react';
import '../styles/records.scss';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

export default class RecordsPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
      currentPatient: null
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
  }

  onChange (event, { newValue }) {
    this.setState({ value: newValue });
  }

  async onSuggestionsFetchRequested ({ value }) {
    try {
      const response = await axios.get('/api/patients', {
        params: { name: value }
      });
      const names = response.data.patients;
      const suggestions = names.map(name => {
        return {
          name: name.firstName + ' ' + name.lastName,
          record: name.record
        };
      });

      this.setState({ suggestions });
    } catch (err) {
      console.log(err);
      this.setState({ suggestions: [] });
    }
  }

  onSuggestionsClearRequested () {
    this.setState({ suggestions: [] });
  }

  getSuggestionValue (suggestion) {
    return suggestion.name;
  }

  renderSuggestion (suggestion) {
    return (
      <div className='suggestion-option'>
        {suggestion.name}
      </div>
    );
  }

  onSuggestionSelected (event, { suggestion }) {
    this.setState({ currentPatient: suggestion });
  }

  render () {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'John Doe',
      value,
      onChange: this.onChange
    };

    return (
      <div className='records-page-container'>
        <h1 className='records-header'>Patient Records</h1>
        <p className='search-instruction'>Search for a patient by name (e.g. John Doe):</p>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={this.onSuggestionSelected}
        />

        { this.state.currentPatient &&
          <div className='record-container'>
            <p className='record-header'>{this.state.currentPatient.name}'s record:</p>
            <p className='record'>{this.state.currentPatient.record}</p>
          </div>
        }
      </div>
    );
  }
}
