import React, { useState } from 'react';

const DEFAULT_FILTER = "title";

function SearchFilter(props){
    const [searchText, setSearchText] = useState("");
    const [filterBy, setFilterBy] = useState(DEFAULT_FILTER);
    const onSearchTextChanged = (e) => {
        const searchText = e.target.value;
        setSearchText(searchText);
      
        if ('onChange' in props) {
          props.onChange(searchText, filterBy);
        }
      };
      
      const onFilterSelected = (e) => {
        const filterBy = e.target.value;
        setFilterBy(filterBy);
      
        if ('onChange' in props) {
          props.onChange(searchText, filterBy);
        }
      };
      
      const onResetForm = (e) => {
        e.preventDefault();
        const searchText = "";
        const filterBy = DEFAULT_FILTER;
        setSearchText(searchText);
        setFilterBy(filterBy);
      
        if ('onChange' in props) {
          props.onChange(searchText, filterBy);
        }
      };
      
    // const onSearchTextChanged =  (e) => {
    //      setSearchText(e.target.value);

    //     if ('onChange' in props) {
    //         props.onChange(searchText, filterBy);
    //     }
    // }

    // const onFilterSelected =  (e) => {
    //      setFilterBy(e.target.value);

    //     if ('onChange' in props) {
    //         props.onChange(searchText, filterBy);
    //     }
    // }

    // const onResetForm =  (e) => {
    //     e.preventDefault();
    //      setSearchText("");
    //      setFilterBy(DEFAULT_FILTER);

    //     if ('onChange' in props) {
    //         props.onChange(searchText, filterBy);
    //     }
    // }

    return (
        <div className='SearchForm'>
            <form onSubmit={onResetForm}>
                    <div className=' d-flex '>
                            <input
                                value={searchText}
                                onChange={onSearchTextChanged}
                                className='form-control'
                                type="text"
                                placeholder='Search ...' />
                            <select
                                className='form-select'
                                onChange={onFilterSelected}
                                value={filterBy}
                            >
                                <option value="title">By Title</option>
                                <option value="desc">By Description</option>
                                <option value="titleAndDesc">By Title/Desc</option>
                            </select>

                            <button className='btn btn-secondary'>Reset</button>
                    </div>
            </form>
        </div>
    )
}

export default SearchFilter;
