import React, { useState, Form } from "react";


export default function SearchForm({ data, handleSearch }) {
  const [search, setSearch] = useState('')

  const handleChanges = event => {
    setSearch(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const newData = data.filter(x => (
      x.name.toLowerCase().includes(search.toLowerCase())
    ))
    handleSearch(newData)
  }
  return (
    <section className="search-form">
      <Form>
        <label>
          Search
          <form onSubmit={handleSubmit}>
            <input onChange={handleChanges} value={search} type="text" placeholder="Search Here" />
            <input type="submit" />
          </form>
        </label>
      </Form>
    </section>
  );
}
