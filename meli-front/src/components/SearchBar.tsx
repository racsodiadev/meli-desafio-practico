import React from "react";

interface Props {
    query?: string;
}

const SearchBar: React.FC<Props> = () => {
    return <header className=" search-nav">
        <form className="container form-search nav-justified" action="" >
            <img className="nav-logo" src="/img/logo.png" alt="logo" />
            <input className="search-input" type="text" name="" id="" />
            <button type="submit" className="nav-search-btn"/>
        </form>
    </header>
}

export default SearchBar;