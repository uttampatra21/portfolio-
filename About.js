const about = document.querySelector("#About");
about.innerHTML =`
<div class="about-text">
            <h2 id="homiie">Hello There! I'm</h2>
        
            <h1>Uttam Patra</h1>
            <h2><span class="white">I am into</span>  <span class="element"></span></h2>
            <p>Passionate Front End Developer with core knowledge in modern technology skills.</p>
            <p>Well observed, detail oriented developer with problem solving skills and soft skills. Interested in outdoor activities and Travaling</p>
            <div class="getInTouch"><a href="https://www.linkedin.com/in/uttampatra01/">Get in touch</a></div>
        </div>
        <div class="about-img">
            <div class="background">
                <div class="img"></div>
            </div>
        </div>
`;

var typed = new Typed('.element', {
    strings: ["Full-stack development.", "Tech communities."],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true,
  });