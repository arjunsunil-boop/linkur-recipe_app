import React from 'react'

const Navbar = () => {
  return (
    <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="https://cdn-icons-png.flaticon.com/512/1869/1869042.png" alt="" width="40" height="" class="d-inline-block align-text-top" /> RECIPE APP
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    <a class="nav-link" href="/view">View Recipes</a>
                    <a class="nav-link" href="/search">Search Recipes</a>
                    <a class="nav-link" href="/add">Add Recipes</a>
                    
                </div>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar