const header = document.querySelector("#header");
header.innerHTML = `
        <nav>
            <h1 ><a href="#About">Uttam Patra</a></h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <ul>
                <li><a href="#About">Home</a></li>
                <li><a href="#About">About me</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
                <li id="resume"><a href="#contact">Resume</a></li>
            </ul>
        </nav>
`;