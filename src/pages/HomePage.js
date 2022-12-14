import React from 'react';
import PropTypes from 'prop-types';
// import { getActiveNotes } from '../utils/local-data';
import { getActiveNotes } from '../utils/api';  
import NoteList from '../components/NoteList';
import NoteSearch from '../components/NoteSearch';
import { useSearchParams, Link } from 'react-router-dom';
import { MdAdd } from "react-icons/md";
import { LocaleConsumer } from '../contexts/LocaleContext';

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
      notes: [],
      keyword: props.defaultKeyword || '',
      initializing: true,
    }

		this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getActiveNotes();

    this.setState((prev) => {
      return {
        ...prev,
        notes: data,
        initializing: false,
      }
    })
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
    if(this.state.initializing) {
      return(<div className="loader"></div>);
    }

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
      <LocaleConsumer>
        {
          ({ locale }) => {
            return (
              <section className="homepage">
                <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>

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
            )
          }
        }
      </LocaleConsumer>
    );
  }
}

HomePage.propTypes = {
	defaultKeyword: PropTypes.string,
	keywordChange: PropTypes.func.isRequired
};

export default HomePageWrapper;