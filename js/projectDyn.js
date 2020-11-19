




const insertProjects=document.getElementById('projectsJson');
var allCards="";
var temp="";

function CreateCard(data){

    return `<div class="col-lg-4 col-sm-6 padding-15">
    <div class="project-item">
        <img src="${data.imagePath}" alt="projects">
        <div class="overlay"></div>
        <a href="#" class="view-icon ajax-popup-link"> <i class="fas fa-expand"></i></a>
        <div class="projects-content">
            <a href="#" class="category">${data.tag}</a>
            <h3><a href="#" class="tittle">${data.title}</a></h3>
        </div>
    </div>
</div>`
}




function main(){    

    for(var i=0;i<jsonData.length;i++){
        temp=CreateCard(jsonData[i]);
        allCards+=temp;
    }
    // console.log(allCards);
    insertProjects.innerHTML=allCards;
}


main()