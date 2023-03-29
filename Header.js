import React from 'react';

export default function Header() {
    return (

        <div class="navbar navbar-dark bg-dark justify-content-center">
            <a class="navbar-brand" href="#">
                <img src="logo192.png" width="30" height="30" alt="" style={{float:'right'}}/>
            </a>
            <button class="btn btn-success me-3" type="submit">Home</button>
            <form class="form-inline">
                <input class="form-control" type="search" placeholder="Search" />
            </form>
            <button class="btn btn-success ms-3" type="submit">Cart</button>
        </div>

    )
}