

$(document).ready(function() {
dataInput.focus()

})


var submitData = $(".submit-data");
var listItem = $(".add-data");
var dataInput = $(".data-input");

function addData() {
if (dataInput.val() === "") {
dataInput.css({"border-bottom":"2px dashed red"});
$(".submit-data").css("transform" ,"rotate(25deg)")

} else {
dataInput.css({"border-bottom":"2px dashed #7f8fa6"});
var new_list =  listItem.append('<li class="listItem">'+dataInput.val()+'</li>');
$(this).css("transform" ,"rotate(0deg)")
dataInput.val("");
dataInput.focus(function () {
$(".submit-data").css("transform" ,"rotate(25deg)")
})

var allList = $(".listItem");

allList.click(function() {
$(this).hide(500);
})

// hover data
allList.hover(function () {
$(this).css({"text-decoration":"line-through" ,"text-decoration-color":"#7f8fa6","text-decoration-style": "wavy","text-decoration-thickness":"3px"});
})
// mouseout data
allList.on("mouseout", function () {
$(this).css({"text-decoration":"none" ,"color":"black"});

})
}

};


dataInput.on("keyup",function () {
var enter = event.which;
if(enter === 13) {
  if ($(this).val() != "") {
    addData()
    dataInput.css({"border-bottom":"2px dashed #7f8fa6"});
    dataInput.blur();
    $(".submit-data").css("transform" ,"rotate(0deg)");
  }    
} 
})
submitData.click(addData)











