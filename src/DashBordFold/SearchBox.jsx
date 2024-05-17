import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBox = () => {
    return (
        <div className="d-flex align-items-center h-100 ">
            <div className='d-lg-flex d-md-none d-none align-items-center gap-2  theSearchBox'>
                <input 
                    type="text" 
                    className='h-100 w-100 theInput' 
                    placeholder='Search here...'
                />
                <button 
                    className='h-100 theBTn'
                >
                    <SearchOutlinedIcon className='fs-1'/>
                </button>
            </div>
            <button className="d-lg-none d-md-flex d-flex align-items-center h-100">
                <SearchOutlinedIcon 
                    className='theIconUser' 
                    style={{
                        color : '#3f1cbd'
                    }}    
                />
            </button>
        </div>
    )
}

export default SearchBox