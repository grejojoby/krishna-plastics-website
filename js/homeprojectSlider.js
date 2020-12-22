const insertProjectsHome=document.getElementById('projects-carousel');
var allCardsHome="";
var tempHome="";

function CreateCardHome(data){

    return `<div class="project-item">
    <img src="${data.imagePath}" alt="${data.title}">
    <div class="overlay"></div>
    <div class="projects-content">
        <a href="#" class="category">${data.tag}</a>
        <h3><a href="#" class="tittle">${data.title}</a></h3>
    </div>
</div>`
}

function mainHome(){    

    for(var i=0;i<jsonData.length;i++){
        tempHome=CreateCardHome(jsonData[i]);
        allCardsHome+=tempHome;
    }
    // console.log(allCardsHome);
    insertProjectsHome.innerHTML=allCardsHome;
}

mainHome()