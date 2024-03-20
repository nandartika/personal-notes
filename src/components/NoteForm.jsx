import React from "react";
import PropTypes from "prop-types";

import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

function NoteFormWrapper() {
  const navigate = useNavigate();

  return <NoteForm navigate={navigate} />;
}

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const title = event.target.value;
    this.setState({
      title,
    });
  }

  onBodyChangeEventHandler(event) {
    const body = event.target.value;
    this.setState({
      body,
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    addNote(this.state);
    this.props.navigate('/notes/active')
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>

        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter : {50 - this.state.title.length}
          </p>

          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            onChange={this.onTitleChangeEventHandler}
            value={this.state.title}
          />

          <textarea
            className="note-input__body"
            placeholder="Tuliskan catatanmu disini ..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>

          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

NoteForm.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default NoteFormWrapper;
