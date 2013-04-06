//onRegionSelect = function(data){
//    $("form input[name=state_code]").val(data.state_code + 1)
//    $("form input[name=district_code]").val(data.district_code)
//    console.log("selected")
//    $("form").show()
//}
//$(document).ready(function(){
//    $("form").hide()
//    $("form").on("submit", function(evt){
//        evt.preventDefault()
//        $.ajax({
//            type: "POST",
//            url: "/update_state",
//            data: $(this).serialize()
//        }).done(function(){
//                $("form").hide()
//            })
//    })
//})