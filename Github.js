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
            <img class="github_img" src="https://avatars.githubusercontent.com/u/108145016?v=4" alt="">
        </div>
        <div class="profile_detls">
            <h1>${data.name}</h1>
            <p>${data.bio}</p>
            <ul>
                <li><strong>${data.followers}</strong> <strong>Followers</strong></li>
                <li><strong>${data.following}</strong> <strong>Following</strong></li>
                <li><strong>${data.public_repos}</strong> <strong>Repositories</strong></li>
            </ul>
            <div class="public_repo">
                <a>loda</a>
                <a>loda</a>
                <a>loda</a>
                <a>loda</a>
                <a>loda</a>
                <a>loda</a>
                <a>loda</a>
                <a>loda</a>
                <a>loda</a>
                <a>loda</a>
                <a>loda</a>
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