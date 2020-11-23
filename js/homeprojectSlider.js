




const insertProjectsHome=document.getElementById('projects-carousel');
var allCardsHome="";
var tempHome="";

function CreateCardHome(data){

    return `                <div class="project-item">
    <img src="${data.imagePath}" alt="projects">
    <div class="overlay"></div>
    <a href="#" class="view-icon img-popup" data-gall="project"> <i
            class="fas fa-expand"></i></a>
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