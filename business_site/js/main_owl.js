    $(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    // dots:true,
    // Navtext: true,
    // dots:Boolean,
    // dotData:true,
    item:1,
    loop:true,
    margin:10,
    nav:false,
    navText: ["<",">"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },

        1000:{
            items:1
        }
    }
})
});