//Function to get values from panels and paste it in the output section
function updateOutputPanel(){
  $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssSection").val()
  + "</style></head><body>" +$("#htmlSection").val() + "</body></html>");

  //To get the value from the javascript section
  document.getElementById("outputSection").contentWindow.eval($("#javascriptSection").val());
}

//To highlight the sections once they are hovered on
$(".buttonToggle").hover(function(){
  $(this).addClass("highlightedButton");
}, function(){
  $(this).removeClass("highlightedButton");
});

//To attach and remove the active status of the sections
$(".buttonToggle").click(function(){
  $(this).toggleClass("active");
  $(this).removeClass("highlightedButton");

  //To hide the other panels not currently in use
  var sectionId = $(this).attr("id") + "Section";
  $("#" + sectionId).toggleClass("hidden");

  var noOfActiveSections = 4 - $(".hidden").length;
  $(".section").width(($(window).width() / noOfActiveSections) - 10);
})

//To get the height of each section
$(".section").height($(window).height() - $("#titleHeader").height() -15);

//To get the width of each section
$(".section").width(($(window).width() / 2) - 10);

// To get the value of the Html Section and fill in the Output Section
updateOutputPanel();


//This is to get all the values in the css section and apply it to the html section then past it in the output section
//Also, It works even if you use a seperate css file and dont use an internal styling, crazy
$("textarea").on('change keyup paste', function(){
  updateOutputPanel();
});