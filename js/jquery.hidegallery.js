$(document).ready(function () {
    $("#starwars").click(function () {
        $("#cars").fadeOut();
        $("#planes").fadeOut();
        $("#tanks").fadeOut();
        $("#ships").fadeOut();
        $("#tanks").fadeOut();        
        $("#swrs").fadeIn("slow");
    })
    $("#crs").click(function () {
        $("#swrs").fadeOut();
        $("#planes").fadeOut();
        $("#tanks").fadeOut();
        $("#ships").fadeOut();
        $("#tanks").fadeOut();
        $("#cars").fadeIn("slow");
    })
    $("#shps").click(function () {
        $("#swrs").fadeOut();
        $("#planes").fadeOut();
        $("#tanks").fadeOut();
        $("#cars").fadeOut();
        $("#tanks").fadeOut();
        $("#ships").fadeIn("slow");
    })
    $("#plns").click(function () {
        $("#swrs").fadeOut();
        $("#cars").fadeOut();
        $("#tanks").fadeOut();
        $("#ships").fadeOut();
        $("#tanks").fadeOut();
        $("#planes").fadeIn("slow");
    })
    $("#tank").click(function () {
        $("#swrs").fadeOut();
        $("#cars").fadeOut();
        $("#tanks").fadeOut();
        $("#ships").fadeOut();
        $("#planes").fadeOut()
        $("#tanks").fadeIn("slow");
        
    })
})