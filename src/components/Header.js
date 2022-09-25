import React from 'react'
import PropTypes from 'prop-types'
//Props are javascript object which we are passing from our parent component to child component
//App.js mai Parent component hai
export default function Header(props) {
  // export default function Header({title}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    {/* <a className="navbar-brand" href="#">{title}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
     { props.searchBar ? <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> : "" }
    </div>
  </div>
</nav>
    </div>
  )
}

//Agar Parent component mai prop ki value assign ni hogi toh yaha jo default mai likhi hogi wo humko show hogi
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

//(Strict-Type-Checking)sko use krne se prop agar string type k hai aur humne integer value dedi toh ye figure out easily ho jayega console se warning k through
Header.propTypes = {
  title: PropTypes.string, //object mai semicolon ni lagega
  searchBar: PropTypes.bool.isRequired //isRequired means iski value pass krna mandatory hai
}