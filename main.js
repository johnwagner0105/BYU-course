function loadList(){
    const links=[
        {
            label: "Week 1 notes",
            url: "week1/index.html"
        }
    ]
    links.forEach(element => {
    document.getElementById("list").innerHTML="<li><a href='"+element.url+"'>"+element.label+"</a></li>"    
    });
    
}
loadList();