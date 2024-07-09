import React from 'react'

function TopNav() {
    return (
        <React.Fragment>
            <div id="nav">
                <div id="logo" style="display: flex; align-items: center;">
                    <div id="navlogo" style="cursor: pointer;" onclick="location.href = '#'">Movie App</div>
                </div>
                <form id="search-bar">
                    <input type="search" name="" id="" placeholder="Search for a movie"
                        onfocus="document.getElementById('history-suggest').style.display = 'block'"
                        onblur="document.getElementById('history-suggest').style.display = 'none'" />
                        <div id="history-suggest">
                            <div id="search1"><i class="fi fi-br-search"></i>Demo 1</div>
                            <div id="search2"><i class="fi fi-br-search"></i>Demo 2</div>
                            <div id="search3"><i class="fi fi-br-search"></i>Demo 3</div>
                            <div id="search4"><i class="fi fi-br-search"></i>Demo 4</div>
                            <div id="search5"><i class="fi fi-br-search"></i>Demo 5</div>
                        </div>
                </form>
                <div id="user-icon">Sign In</div>
            </div>
        </React.Fragment>
    )
}

export default TopNav