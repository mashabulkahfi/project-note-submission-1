import React from 'react';
import { getAllNotes, getArchivedNotes, unarchiveNote, deleteNote } from '../utils/local-data';
import NoteList from '../components/NoteList';
import NoteSearch from '../components/NoteSearch';
import { useSearchParams } from 'react-router-dom';

function ArchivePageWrapper() {
	const [ searchParams, setSearchParams ] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword){
        setSearchParams({ keyword });
    }

    return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams}/>
}

class ArchivePage extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			notes: getArchivedNotes(),
			keyword: props.defaultKeyword || '',
		}

		this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  	}

	onKeywordChangeHandler(keyword) {
		this.setState(() => {
			return {
				keyword
			}
	 	});

		this.props.keywordChange(keyword);
	}

  render() {
		const searchTerm = this.state.keyword;
		const validNotes = this.state.notes.filter((note) => {
			if (searchTerm === "") {
				return note;
			} else {
				return note.title.toLocaleLowerCase().includes(
					searchTerm.toLocaleLowerCase()
				)
			}
		});
    return (
		<section className='archives-page'>
			<h2>Catatan Arsip</h2>
			<section className="search-bar">
				<NoteSearch keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
			</section>

			<NoteList notes={validNotes}/>
		</section>
    );
  }
}

export default ArchivePageWrapper;
