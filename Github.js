const repo = document.querySelector("#repos");
const Api = "https://api.github.com/users/";
const public_repo = document.querySelector(".public_repo");

const getApi = async(username) =>{
    const response = await fetch(Api + username);
    const data = await response.json();
    console.log(data);
repo.innerHTML = `
    <h1 class="title" id="">Github</h1>
    <div class="github_Profile">
        <div class="profile_logo">
            <img class="github_img" src="${data.avatar_img}">
            <img class="github_img" src="uttam.png" alt="uttam">
        </div>
        <div class="profile_detls">
            <h1>Public Reposetories</h1>
            <div class="public_repo">
                <a>loda</a>
                <a>loda</a>
                <a>loda</a>
                <a>loda</a>
                <a>loda</a>
                <a>loda</a>
            </div>
        </div>
    </div>
`;
// repositories(username);
}
getApi("uttampatra21");

// const repositories = async(username) =>{
//     const response = await fetch(Api + username + "/repos");
//     const data = await response.json();
//     data.forEach((items)=>{
//         const elem = document.createElement("a");
//         elem.classList.add("");
//         elem.href = items.html_url;
//         elem.target = items._blank;
//         elem.innerText = items.name;
//         public_repo.appendChild(elem);
//     })

// }