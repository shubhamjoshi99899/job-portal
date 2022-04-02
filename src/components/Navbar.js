import React from 'react'
import { NavLink } from 'react-router-dom';
import img from './1.jpg'
import './stylesheets/nav.css';
const Navbar = () => {
  return (
    <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <img src={img} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
    <NavLink to='/' class="navbar-brand" href="#">FeetWings</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Our Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Insights</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Smart Yarn</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
