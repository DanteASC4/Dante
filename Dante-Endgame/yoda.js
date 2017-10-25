var values;
var output;
var value;

$(document).ready(function() {

        var kk = $('#subbut');
        kk.click(function(e) {
          var lolz = $('#user').val();
          // console.log(lolz);
          // console.log(e);
          $.ajax({
            type: 'GET',
            url: "https://yoda.p.mashape.com/yoda?sentence=" + lolz,
            headers: {"X-Mashape-Key": "pJHAlbqooRmshzowWnX8wX83xazxp1BgC38jsn17xSxK49Ql1X", "Accept":"text/plain"},
            success: function(data){
              $("#yoda").append(data)
            }
          })

        });
    });


//
// $("button").click(function(e) {
//     e.preventDefault();
//     $.ajax({
//         type: "POST",
//         url: "/pages/test/",
//         data: {
//             id: $(this).val(), // < note use of 'this' here
//             access_token: $("#access_token").val()
//         },
//         success: function(result) {
//             alert('ok');
//         },
//         error: function(result) {
//             alert('error');
//         }
//     });
// });



// $("#subbut").on('click',function(){
//     usr_word = $(this).parent().children('#tst').text();
// }

//
// $("input").keyup( function() {
//   if(event.keyCode == 13){
//   var value = $( this ).val();
// }
//
//   var urOne = "https://yoda.p.mashape.com/yoda?sentence=" + value ;
//     url: urOne,
//
//
// .keyup()
// })
//
// $(window).keydown( function(event){
//   if(event.keyCode == 13) {
//     event.preventDefault();
//     return false;
//   }
// })
