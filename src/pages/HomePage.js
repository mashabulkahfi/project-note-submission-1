import React from 'react';
import { getAllNotes, getActiveNotes, archiveNote, deleteNote } from '../utils/local-data';
import NoteList from '../components/NoteList';
// import NoteInput from './NoteInput';
import NoteSearch from '../components/NoteSearch';
import { useSearchParams } from 'react-router-dom';
import { MdAddCircleOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

function HomePageWrapper(){
    const [ searchParams, setSearchParams ] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword){
        setSearchParams(keyword);
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

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		// this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
		this.onArchiveHandler = this.onArchiveHandler.bind(this);
		this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        console.log(this.state);
        console.log(this.state.notes);
  }

//   onDeleteHandler(id) {
//     const notes = this.state.notes.filter(note => note.id !== id);
		
//     this.setState((prevState) => {
// 			return {
// 				...prevState, notes
// 			}
// 	 	});
//   }

//   onArchiveHandler(id) {
//     const notes = this.state.notes.map(note => {
//     // if note.id == id update note.archived value based on previous value
// 			if (note.id === id){
// 				if (note.archived === true){
// 					return {...note, archived:false};
// 				} else {
// 					return {...note, archived:true};
// 				}
// 			}
//       return note
//     })
//     console.log(notes);
//     this.setState((prevState) => {
// 			return {
// 				...prevState, notes
// 			}
// 	 	});

//   }

onDeleteHandler(id) {
    deleteNote(id);
    this.setState((prevState) => {
        return {
            ...prevState, notes: getActiveNotes()
        }
    })
}

onArchiveHandler(id) {
    archiveNote(id);
    console.log(getAllNotes());
    this.setState((prevState) => {
        return {
            ...prevState, notes: getActiveNotes()
        }
    })
    // console.log(id);
    // console.log(note);
    // console.log(this.state.notes);
    
}

//   onAddNoteHandler({ title, body }) {
//     this.setState((prevState) => {
//       return {
//         notes:[
//           ...prevState.notes,
//           {
//             id: +new Date(),
//             title:title,
//             body:body,
//             createdAt: new Date(),
//             archived: false,
//           }
//         ]
//       }
//     });
//   }

	// onKeywordChangeHandler({ keyword }) {
	// 	this.setState((prevState) => {
	// 		return {
	// 			...prevState, keyword
	// 		}
	//  	});
	// }

    onKeywordChangeHandler({ keyword }) {
		this.setState(() => {
			return {
				keyword,
			}
	 	});

        this.props.keywordChange(keyword);
        console.log(keyword);
	}

  render() {
		const searchTerm = this.state.keyword;
		const validNotes = this.state.notes.filter((note) => {
			if (searchTerm === "") {
				return note;
			} else {
				return note.title.toLocaleLowerCase().includes(searchTerm)
			}
		});
        console.log(getAllNotes());
    return (
    //   <div className="note-app">
    //         <div className="note-app__header">
    //                     {/* <h1>Notes</h1> */}
    //                     {/* <div className="note-search">
    //                         <NoteSearch searchKeyword={this.onKeywordAddHandler}/>
    //                     </div> */}
    //         </div>
    //         <div className="note-app__body">
	// 				{/* <div className="note-input">
	// 					<h2>Buat Catatan</h2>
	// 					<NoteInput addNote={this.onAddNoteHandler}/>
	// 				</div> */}
	// 				<h2>Catatan Aktif</h2>
    //                 <div className = "search-bar">
    //                     <NoteSearch searchKeyword={this.onKeywordAddHandler}/>
    //                 </div>
	// 				<NoteList notes={validNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} active={true}/>
	// 				{/* <h2>Arsip</h2>
	// 				<NoteList notes={validNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} active={false}/> */}
    //                 <div className="homepage__action">
    //                     <button className="action" type="button">
    //                         <Link to="/add"><MdAddCircleOutline /></Link>
    //                     </button>
    //                 </div>
	// 		</div>
    //   </div>
    <section className="homepage">
        <h2>Catatan Aktif</h2>

        <section className = "search-bar">
            <NoteSearch keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
        </section>

        <NoteList notes={validNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} active={true}/>

        {/* <div className="homepage__action">
            <button className="action" type="button">
                <Link to="/add"><MdAddCircleOutline /></Link>
            </button>
        </div> */}
    </section>
    );
  }
}

// export default HomePage;
export default HomePageWrapper;