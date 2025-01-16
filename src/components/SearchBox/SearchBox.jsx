import { useId } from "react";
import s from "./SearchBox.module.css"

const SearchBox = ({inputValue, handleChange}) => {
    const searchFieldId = useId();
     
  return (
        <div className={s.box}>
            <label htmlFor={searchFieldId}>Find contacts by name</label>
          <input type="text" name="search" id={searchFieldId} value={inputValue} onChange={handleChange} />
        </div>
  )
}

export default SearchBox
