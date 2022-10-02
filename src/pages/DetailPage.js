import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
// import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { getNote, deleteNote, archiveNote, unarchiveNote} from '../utils/api';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function onNavigate() {
		navigate('/');
  }

  return <DetailPage id={id} onNavigate={onNavigate}/>;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: null
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id);

    this.setState(() => {
      return {
        note: data
      }
    })
  }

  async onDeleteHandler(id) {
    await deleteNote(id);
    this.props.onNavigate();
  }

  async onArchiveHandler(id) {
    await archiveNote(id);
    this.props.onNavigate();
  }

  async onUnarchiveHandler(id) {
    await unarchiveNote(id);
    this.props.onNavigate();
  }

  render() {
    if (this.state.note === null) {
      return null;
    } else {
      if (this.state.note.archived === false){
        return (
          <section>
            <NoteDetail note={this.state.note} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}  />
          </section>
        );
      }
    }

    return (
      <section>
        <NoteDetail note={this.state.note} onDelete={this.onDeleteHandler} onArchive={this.onUnarchiveHandler}  />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default DetailPageWrapper;
