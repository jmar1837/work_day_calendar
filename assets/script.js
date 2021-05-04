const today = $('#currentDay');

function updateTime() {
    const now = moment()
    today.text(now.format ('MMMM Do YYYY, h:mm:ss a'));

}
setInterval(updateTime, 1000);
updateTime();

// function convertTime(time) {
//     var amPm= time.substring(,time.length)
// }

$('.form-input').each(function(){
    var name= $(this).siblings('.hour').text()
    $('#'+ name).val(localStorage.getItem(name)) 

   var text= $(this).siblings('.hour').attr("id")
   var hour= moment().hour(); 
   text=parseInt(text)
   console.log(hour, text)
   if (text<hour){
       $(this).addClass('past')
   } else if (text===hour) {
    $(this).addClass('present')
   }else if(text>hour) {
    $(this).addClass('future')
   }



})


$('.saveBtn').on('click',function(){
    var name= $(this).siblings('.hour').text()
    var text= $(this).siblings('.form-input').val()
    localStorage.setItem(name, text)
})

// $('#8AM').val(localStorage.getItem('8AM'))