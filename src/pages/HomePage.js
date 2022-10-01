import React from 'react';
import { getAllNotes, getActiveNotes, archiveNote, deleteNote } from '../utils/local-data';
import NoteList from '../components/NoteList';
import NoteSearch from '../components/NoteSearch';
import { useSearchParams } from 'react-router-dom';
import {MdAdd} from "react-icons/md";
import { Link } from 'react-router-dom';

function HomePageWrapper(){
    const [ searchParams, setSearchParams ] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword){
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams}/>
}

class HomePage extends React.Component {
	
    constructor(props) {
        super(props);
        this.state = {
            notes: getActiveNotes(),
            keyword: props.defaultKeyword || '',
        }

		this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
		this.setState(() => {
			return {
				keyword,
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
        // console.log(getAllNotes());
    return (
    <section className="homepage">
        <h2>Catatan Aktif</h2>

        <section className = "search-bar">
            <NoteSearch keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
        </section>

        <NoteList notes={validNotes} active={true}/>

        <div className="homepage__action">
            <Link to="/add">
                <button className="action" type="button" title="tambah"><MdAdd /></button>
            </Link>
        </div>
    </section>
    );
  }
}

export default HomePageWrapper;