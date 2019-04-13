import React, { Component } from 'react';
import styles from './styles.css'

/**
 * @component ReactTagger
 * ReactTagger component Tag like a pro
 */
class ccTagger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ['tag 1', 'tag 2'],
      currentValue: ''
    };
  }
  /**
   * Handle Enterkeypress
   */
  _handleKeyPress = (e) => {
    let inputVal = e.target.value;
    if (e.key === 'Enter' && inputVal !== '') {
      this._addTag(inputVal);
      this.setState({currentValue: ''});
    }
    /**
     * Delete last tag if backsapce presssed.
     */
    if (e.key === 'Backspace' && inputVal === '') { 
      let lastTagIndex = this.state.tags.length - 1;
      this._deleteTag(lastTagIndex)
    }
  }
  /**
   * Handle Input change
   */
  _handleChange = (e) => {
    let inputVal = e.target.value;
    this.setState({currentValue: inputVal});
  }
  /**
   *  @function _addTag
   *  @param tagName - String
   */
  _addTag = (tagName) => {
    var joinTags = this.state.tags.concat(tagName);
    this.setState({ tags: joinTags });
  }
  /**
   *  @function _deleteTag
   *  @param tagIndex - String
   */
  _deleteTag = (index) => {
    var tags = [...this.state.tags]; // make a separate copy of the array
      tags.splice(index, 1);
      this.setState({ tags: tags });
  }

  render() {
    const { tags, currentValue } = this.state;
    return (
        <div className={styles.ccTagger}>
          {tags && 
            tags.map((tag, index) => {
              return  <span  key={index}> { tag}<i onClick={() => this._deleteTag(index)} className={styles.delete}>X</i></span>;
            })
          }
          <input value={currentValue} 
                 onChange={this._handleChange} 
                 onKeyUp={this._handleKeyPress} 
                 type="text" 
                 placeholder="Type anything..." />
        </div>
    );
  }
}

export default ccTagger;
