$(document).ready(function(){
$("#portfolio").on("click", function(event){
$("#portfoliodiv").fadeIn(500);
});

$("#space").on("click", function(event){
    $("#spacediv").fadeIn(500);
});

$("#biz").on("click", function(event){
    $("#bizdiv").fadeIn(500);
});

$("#poster1").on("click", function(event){
    $("#poster1div").fadeIn(500);
});

$("#poster2").on("click", function(event){
    $("#poster2div").fadeIn(500);
});

$("#poster3").on("click", function(event){
    $("#poster3div").fadeIn(500);
});

$("#poster4").on("click", function(event){
    $("#poster4div").fadeIn(500);
});

$("#smflyer").on("click", function(event){
    $("#smflyerdiv").fadeIn(500);
});

$("#huron").on("click", function(event){
    $("#hurondiv").fadeIn(500);
});

$("#camel").on("click", function(event){
    $("#cameldiv").fadeIn(500);
});

$("#moonking").on("click", function(event){
    $("#moonkingdiv").fadeIn(500);
});

$("#kevin").on("click", function(event){
    $("#kevindiv").fadeIn(500);
});

$("#ep").on("click", function(event){
    $("#epdiv").fadeIn(500);
});

$("#brblogo").on("click", function(event){
    $("#brblogodiv").fadeIn(500);
});

$("#noah1").on("click", function(event){
    $("#noah1div").fadeIn(500);
});

$("#noah2").on("click", function(event){
    $("#noah2div").fadeIn(500);
});

$("#snap1").on("click", function(event){
    $("#snap1div").fadeIn(500);
});

$("#snap2").on("click", function(event){
    $("#snap2div").fadeIn(500);
});

$("#snap3").on("click", function(event){
    $("#snap3div").fadeIn(500);
});

$("#steve").on("click", function(event){
    $("#stevediv").fadeIn(500);
});

$("#wonton").on("click", function(event){
    $("#wontondiv").fadeIn(500);
});

$("#pcsone").on("click", function(event){
    $("#pcs1div").fadeIn(500);
});

$("#pcstwo").on("click", function(event){
    $("#pcs2div").fadeIn(500);
});

$("#brblogo").on("click", function(event){
    $("brblogodiv").fadeIn(500);
 });

$("#pcs1").on("click", function(event){
    $("#pcsonediv").fadeIn(500);
});

$("#pcs2").on("click", function(event){
    $("#pcstwodiv").fadeIn(500);
});

$("#pcs3").on("click", function(event){
    $("#pcs3div").fadeIn(500);
});

$("#pcs4").on("click", function(event){
    $("#pcs4div").fadeIn(500);
});

$("#pcs5").on("click", function(event){
    $("#pcs5div").fadeIn(500);
});

$("#pcs6").on("click", function(event){
    $("#pcs6div").fadeIn(500);
});

$("#fflogo").on("click", function(event){
    $("#fflogodiv").fadeIn(500);
});

$("#fealk").on("click", function(event){
    $("#fealkdiv").fadeIn(500);
});

$("#mm").on("click", function(event){
    $("#mmdiv").fadeIn(500);
});

$("#thirdwell").on("click", function(event){
    $("#thirdwelldiv").fadeIn(500);
});

$("#inlaws").on("click", function(event){
    $("#inlawsdiv").fadeIn(500);
});

$("#amcor1").on("click", function(event){
    $("#amcor1div").fadeIn(500);
});

$("#amcor2").on("click", function(event){
    $("#amcor2div").fadeIn(500);
});

$("#muffin").on("click", function(event){
    $("#muffindiv").fadeIn(500);
});

$("#sponge1").on("click", function(event){
    $("#sponge1div").fadeIn(500);
});

$("#sponge2").on("click", function(event){
    $("#sponge2div").fadeIn(500);
});

$("#sushi").on("click", function(event){
    $("#sushidiv").fadeIn(500);
});

$("#ketubah").on("click", function(event){
    $("#ketubahdiv").fadeIn(500);
});

$("#funlogo").on("click", function(event){
    $("#funlogodiv").fadeIn(500);
});
$("#name").on("click", function(event){
    $("#namediv").fadeIn(500);
});
$("#datenight").on("click", function(event){
    $("#datenightdiv").fadeIn(500);
})

$("#banana").on("click", function(event){
    $("#bananadiv").fadeIn(500);
});

$("#veggies").on("click", function(event){
    $("#veggiediv").fadeIn(500);
})
$(".x").on("click", function(){
    $(".picturediv").hide();
});

$(".left").on("click", function(event){
    
});
$(".brain").slideDown(1000);
$("#morg").slideDown(1000);
$("#anmc").slideDown(1040);
$("#peaks").slideDown(1060);
$("#por").slideDown(1090);
$("#tfo").slideDown(2010);
$("#lio").slideDown(2020);
$(".head").slideDown(500);
$(".picture").fadeIn(1050);

$(".button").click(function(){
    $(".form").attr('action',
    'mailto:mcpeakmorgan@gmail.com?subject=morganmcpeak.com' + 
    $("#name").val()+ "&body=" + $("#email").val() + "&body=" + $("#whatsup").val() + "&body=");
    $(".form").submit();
});

});