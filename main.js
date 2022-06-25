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
        },{label: "Week 5 notes",
            url:"Week5/index.html"
        },{label: "Week 6 notes",
        url:"Week6/index.html"
        },{label: "Week 7 notes",
        url:"Week7/index.html"
        },{label: "Week 8 notes",
        url:"Week8/index.html"
        },{label: "Week 9 notes",
        url:"Week9/index.html"
        },{label: "Week 10 notes",
        url:"Week10/index.html"
        }
    ]
    links.forEach(element => {
    line=line+"<li><a href='"+element.url+"'>"+element.label+"</a></li><br>";
    });
    document.getElementById("list").innerHTML=line;
}
loadList();