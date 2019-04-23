import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";

/**
 * @component ReactTagger
 * ReactTagger component Tag like a pro
 */
class CcTagger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      currentValue: ""
    };
  }
  componentDidMount() {
    this.setState({ tags: this.props.tags });
  }
  /**
   * Handle Enterkeypress
   */
  _handleKeyPress = e => {
    let inputVal = e.target.value;
    if (e.key === "Enter" && inputVal !== "") {
      this._addTag(inputVal);
      this.setState({ currentValue: "" });
    }
    /**
     * Delete last tag if backsapce presssed.
     */
    if (e.key === "Backspace" && inputVal === "") {
      let lastTagIndex = this.state.tags.length - 1;
      this._deleteTag(lastTagIndex);
    }
  };
  /**
   * Handle Input change
   */
  _handleChange = e => {
    let inputVal = e.target.value;
    this.setState({ currentValue: inputVal });
  };
  /**
   *  @function _addTag
   *  @param tagName - String
   *  @todo: bring this to another file to be able to test.
   */
  _addTag = tagName => {
    var joinTags = this.state.tags.concat(tagName);
    this.setState({ tags: joinTags });
  };
  /**
   *  @function _deleteTag
   *  @param tagIndex - String
   *  @todo: bring this to another file to be able to test.
   */
  _deleteTag = index => {
    var tags = [...this.state.tags]; // make a separate copy of the array
    tags.splice(index, 1);
    this.setState({ tags: tags });
  };

  render() {
    const { tags, currentValue } = this.state;
    const { placeholder }  = this.props;
    let placeholderVal = placeholder ? placeholder : 'Type anything';

    return (
      <div className={styles.ccTagger}>
        {tags &&
          tags.map((tag, index) => {
            return (
              <span key={index}>
                {" "}
                {tag}
                <i onClick={() => this._deleteTag(index)} className={styles.delete}>
                  X
                </i>
              </span>
            );
          })}
        <input value={currentValue} onChange={this._handleChange} onKeyUp={this._handleKeyPress} type="text" placeholder={placeholderVal} />
      </div>
    );
  }
}

CcTagger.propTypes = {
  tags: PropTypes.array
};

export default CcTagger;
