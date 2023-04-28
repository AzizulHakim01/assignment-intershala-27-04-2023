import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'

const Header = () => {
    const [showSearch, setShowSearch] = useState(false)
    const [femaleCounter, setFemaleCounter] = useState(0)
    const [maleCounter, setMaleCounter] = useState(0)
    return (
        <>
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="/"><img src="/logo.png" alt=""/></Link>
                        </div>
                        <div className="col-md-5">
                            <div className='search'>
                                <input type="text" className={showSearch? "show":"hidden"}/>
                                <AiOutlineSearch onClick={()=>setShowSearch(!showSearch)}/>
                            </div>
                        </div>
                        <div className="col-md-3 counter">
                            <p>{femaleCounter}</p>
                            <p>{maleCounter}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
