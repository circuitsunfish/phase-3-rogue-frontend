import React from "react";

function NavBar(){
    return (
        <div>
            <span id="NavBar">
                <p class="NavBar_links">New Game</p>
                <p class="NavBar_links">Load Game</p>
                <p class="NavBar_links">Save Game</p>
                <p class="NavBar_links">Options</p>
            </span>
        </div>
    );
}

export default NavBar