// typing animation

const text = "AI | ML | Software Developer";
let i = 0;

function typing(){
    if(document.getElementById("typing")){
        if(i < text.length){
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing,80);
        }
    }
}

typing();


// GitHub projects

const username = "Bhargav99bro";
const container = document.querySelector(".projects-container");

if(container){

fetch(`https://api.github.com/users/${username}/repos`)
.then(res => res.json())
.then(repos => {

repos
.filter(repo => repo.description && repo.description.toLowerCase().includes("#portfolio"))
.forEach(repo => {

const card = document.createElement("div");
card.className = "project-card";

card.innerHTML=`

<div class="project-images">

<img src="assets/images/projects/sorting1.png" class="project-img">

<img src="assets/images/projects/sorting2.png" class="project-img">

</div>

<h3>${repo.name}</h3>

<p>${repo.description.replace("#portfolio","")}</p>

<a href="${repo.html_url}" target="_blank">View Project</a>

`;
container.appendChild(card);

});

});

}
const toggleBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "light"){
document.body.classList.add("light-mode");
toggleBtn.textContent="☀️";
}

toggleBtn.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
localStorage.setItem("theme","light");
toggleBtn.textContent="☀️";
}else{
localStorage.setItem("theme","dark");
toggleBtn.textContent="🌙";
}

});
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll("section").forEach(sec=>{
observer.observe(sec);
});