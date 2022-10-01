import React from 'react';
import { MdDone } from "react-icons/md";
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    //inisialisasi state
    this.state={
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

	onTitleChangeEventHandler(event) {
    if (50 > this.state.title.length){
      this.setState((prevState) => {
        return {
          ...prevState,
          title: event.target.value,
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          title: event.target.value.slice(0, 50)
        }
      })
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
        <p className="note-input__title__char-limit">Sisa karakter : {50 - this.state.title.length}</p>
        <input className="add-new-page__input__title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required></input>
        <textarea className="add-new-page__input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>

        <div className="add-new-page__action">
          <button className="action" type="submit"><MdDone /></button>
        </div>
        
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired
};

export default NoteInput;