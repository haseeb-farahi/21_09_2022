// $('p').hide()

$(document).ready(function(){

//     $('button').mouseenter(function(){
//         $('p').hide()
//         alert ('paragraph hiden')
//     })

//     $('small').mouseenter(function(){

//     })
//     $('p').show()
// })
// $('input').focus(function(){
//     $(this).css('background-color','red')

// })
// $('input').focus(function(){
//     $(this).css('background-color','green')
    
// })

// $('b').on('click',function(){
//     $(this).css('color','green')

// })

$('p').on({
    click:function(){
    $(this).css('background-color','green')   
},
    dblclick:function(){
       $(this).css('background-color','red')
},

mouseenter: function()
{
    alert('uenterd p element')
}

// $('#p1').click(function(){
//     $(this).hide();
//     alert('p1 hide it')

// })$('#p2').mouseenter(function(){
//     $(this).hide();
//     alert('p2 you entered p2')
// })
// $('#p3').dblclick(function(){
//     $(this).hide();
//     alert('p3 hide it')
// })
// $('#p4').mouseleave(function(){
//     $(this).hide();
//     alert('bye now you leaved p4')
})
})

