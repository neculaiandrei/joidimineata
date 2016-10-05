import React from 'react';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange() {
        this.props.onChange(this.refs.text.value);
    }

    handleFocus() {
        this.setState({active: true});
    }

    handleBlur() {
        this.setState({active: false});
    }

    render() {
        var searchInputClass = "search-input";

        if (this.state.active) {
            searchInputClass += " search-input--active";
        }

        return (
            <div className={searchInputClass}>
                <input
                    ref="text" 
                    type="text" 
                    value={this.props.text} 
                    placeholder='Cauta'
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}>
                </input>
                <i className="fa fa-search"></i>
            </div>
        );
    }
}

export default SearchInput;