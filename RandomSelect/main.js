var picture =[
    "RandomSelect/img/bubbletea.jpg","RandomSelect/img/greentea.jpeg","RandomSelect/img/duoduo.jpg",
    "RandomSelect/img/milktea.jpg"
]

$(document).ready(function(){
    $("input").click(function()
    {
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        //$("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",picture[randomChildNumber]);
        $("img").attr("width",500);
        $("img").attr("height",500);
        
    });
});