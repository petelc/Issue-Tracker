import React from 'react';
import { withRouter } from 'react-router-dom';
import SelectAsync from 'react-select/lib/Async';

import graphQLFetch from './graphQLFetch.js';
import withToasts from './withToasts.jsx';

const selectStyles = {
  control: (provided) => ({ ...provided, minWidth: 240, margin: 8 }),
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSelection = this.onChangeSelection.bind(this);
    this.loadOptions = this.loadOptions.bind(this);
  }

  onChangeSelection({ value }) {
    const { history } = this.props;
    history.push(`/edit/${value}`);
  }

  async loadOptions(term) {
    if (term.length < 3) return [];
    const query = `query issueList($search: String) {
        issueList(search: $search) {
            issues { id title }
        }
    }`;
    const { showError } = this.props;
    const data = await graphQLFetch(query, { search: term }, showError);
    return data.issueList.issues.map((issue) => ({
      label: `#${issue.id}: ${issue.title}`, value: issue.id,
    }));
  }

  render() {
    return (
      <SelectAsync
        instanceId="search-select"
        value=""
        loadOptions={this.loadOptions}
        filterOptions={() => true}
        onChange={this.onChangeSelection}
        styles={selectStyles}
        components={{ DropDownIndicator: null }}
      />
    );
  }
}

export default withRouter((withToasts(Search)));
