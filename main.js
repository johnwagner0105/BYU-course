function loadList(){
    let line="";
    const links=[
        {
            label: "Week 1 notes",
            url: "week1/index.html"
        },
        {
            label: "Week 2 notes",
            url: "Week2/index.html"
        },{
            label: "Week 3 notes",
            url:"Week3/index.html"
        },{
            label: "Week 4 notes",
            url:"Week4/index.html"
        }
    ]
    links.forEach(element => {
    line=line+"<li><a href='"+element.url+"'>"+element.label+"</a></li><br>";
    });
    document.getElementById("list").innerHTML=line;
}
loadList();