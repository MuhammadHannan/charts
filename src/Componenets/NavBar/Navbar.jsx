import React, { Component } from 'react';
import './Navbar.scss';

class Navbar extends Component {
    state = {}
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                 
               
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <h3 class="heading">
                        Dashboard
                     </h3>
                </div>
            </nav>

        );
    }

    
}

export default Navbar;
