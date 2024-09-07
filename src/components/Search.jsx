import { ImSearch } from "react-icons/im"
import { createQueryObject } from "../helpers/Helper"
import styles from "./Search.module.css"

function Search({search,setSearch,setQuery}) {
  const searchHandler=()=>{
    setQuery(query=> createQueryObject(query,{search}))
  }
  return (
    <div className={styles.search}>
      <input type="text" value={search} placeholder='Search...' onChange={(e)=> setSearch(e.target.value.toLocaleLowerCase().trim())}/>
        <button onClick={searchHandler}>
            <ImSearch/>
        </button>
    </div>
  )
}

export default Search