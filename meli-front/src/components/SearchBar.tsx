import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
    query?: string;
}

const SearchBar: React.FC<Props> = () => {
    const [searchValue, setSearchValue] = useState("")

    const navigate = useNavigate()

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (searchValue.trim() !== "") {
            navigate(`/items?search=${searchValue}`)
        }
    }

    return <header className=" search-nav">
        <form className="container form-search nav-justified" onSubmit={handleSubmit} >
            <Link to={'/'}> <img className="nav-logo" src="/img/logo.png" alt="logo" /></Link>
            <input className="search-input" type="text" placeholder="Nunca dejes de buscar" onChange={handleSearch} value={searchValue} />
            <button type="submit" className="nav-search-btn" />
        </form>
    </header>
}

export default SearchBar;