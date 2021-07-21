import {searchbar} from './Search.module.scss'

const Search = (props) => {
    return (
        <div className={searchbar}><input type="text" value={props.query} placeholder={props.placeholder} /></div>
    )
}

export default Search