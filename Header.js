const header = document.querySelector("#header");
header.innerHTML = `
        <nav>
            <h1 ><a href="#About">Uttam Patra</a></h1>
            <span id="open"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg></span> 
            <ul class"sidemenu">
                <li class="close"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></li>
                <li><a href="#About">Home</a></li>
                <li><a href="#About">About me</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
                <li id="resume"><a href="#contact">Resume</a></li>
            </ul>
        </nav>
`;

const sidemenu = document.querySelector("ul");
const open = document.querySelector("#open");
const close = document.querySelector(".close");

open.addEventListener("click", () =>{
    sidemenu.style.right = 0;
});
close.addEventListener("click", () =>{
    sidemenu.style.right = "-200px";
});
sidemenu.addEventListener("click", () =>{
    sidemenu.style.right = "-200px";
});