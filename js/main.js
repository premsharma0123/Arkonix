$(document).ready(function(){

      // add & Remove class
   $(".List01").click(function () {
    if(!$(this).hasClass('List_active'))
    {    
        $(".List01.List_active").removeClass("List_active");
        $(this).addClass("List_active");        
    }
  });

    // add & Remove class
    $(".C-item-cmn01").click(function () {
    if(!$(this).hasClass('CurrencyActive'))
    {    
        $(".C-item-cmn01.CurrencyActive").removeClass("CurrencyActive");
        $(this).addClass("CurrencyActive");        
    }
    });

//   ------language-----//
$('.Language').click(function(){
    $('.lang-model').slideToggle();
    $(this).toggleClass('lang-wrp');
    $('.Product-List').slideUp();
    $('.Product-wrp').removeClass('Product-active');
});

$(".Banner-Wrapper").click(function(){
    $('.lang-model').slideUp();
    $('.Product-List').slideUp();
    $('.Language').removeClass('lang-wrp');
    $('.Product-wrp').removeClass('Product-active');
})
// ---end--here----//


// ---product-wrp========-

$('.Product-wrp').click(function(){
    $('.Product-List').slideToggle();
    $(this).toggleClass('Product-active'); 
    $('.lang-model').slideUp();
    $('.Language').removeClass('lang-wrp');
}); 

// ---end--here----//

// ----price---list-----//
$(".a1").click(function(){
    $("#BTC").show();
    $("#BCH,#ETC,#ZEC,#XMR,#LTC,#ETH,#DASH").hide();
});
 
  $(".a2").click(function(){
      $("#BCH").show();
      $("#BTC,#ETC,#ZEC,#XMR,#LTC,#ETH,#DASH").hide( );
  })

//   $(".a3").click(function(){
//     $("#ETC").show();
//     $("#BTC,#BCH,#ZEC,#XMR,#LTC,#ETH,#DASH").hide( );
// })
// $(".a4").click(function(){
//     $("#ZEC").show();
//     $("#BTC,#BCH,#ETC,#XMR,#LTC,#ETH,#DASH").hide( );
// })
// $(".a5").click(function(){
//     $("#XMR").show();
//     $("#BTC,#BCH,#ETC,#LTC,#ZEC,#ETH,#DASH").hide( );
// })
// $(".a6").click(function(){
//     $("#LTC").show();
//     $("#BTC,#BCH,#ETC,#XMR,#ZEC,#ETH,#DASH").hide( );
// })
// $(".a7").click(function(){
//     $("#ETH").show();
//     $("#BTC,#BCH,#ETC,#XMR,#ZEC,#LTC,#DASH").hide( );
// })
// $(".a8").click(function(){
//     $("#DASH").show();
//     $("#BTC,#BCH,#ETC,#XMR,#ZEC,#LTC,#ETH").hide( );
// })

// price--list--end--here---//
$('.Currency-item1').click(function(){
   $('#List2').hide(( "clip", {direction: "vertical"}, 1000 ))
});

$('.Currency-item2').click(function(){
    $('#List1').hide(( "clip", {direction: "vertical"}, 1000 ))
 });


//  ---plans---button---//
$('.P-Btn').click(function(){
    $('.srv4').toggle();
})

  // add & Remove class
  $(".bit-cmn").click(function () {
    if(!$(this).hasClass('Bit-active'))
    {    
        $(".bit-cmn.Bit-active").removeClass("Bit-active");
        $(this).addClass("Bit-active");        
    }
    });


})

  
function openList(ListName) {
    var i;
    var x = document.getElementsByClassName("quantity-wrp");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    document.getElementById(ListName).style.display = "block";  
}
//-----temp--list---//

//---bit--coin--tab--//

function bitcoinTab(ListName) {
    var i;
    var x = document.getElementsByClassName("Bitcoin-Cnt-wrp");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    document.getElementById(ListName).style.display = "block";  
}