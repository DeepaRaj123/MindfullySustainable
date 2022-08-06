/*!
=========================================================
* Creative Design Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 

$("#mobile-nav")
.find(".menu-has-children")
.prepend('<i class="ti-angle-down"></i>');

$(document).on("click", ".menu-has-children i", function(e) {
$(this)
  .next()
  .toggleClass("menu-item-active");
$(this)
  .nextAll("ul")
  .eq(0)
  .slideToggle();
$(this).toggleClass("ti-angle-up ti-angle-down");
});

width=$('#ppp').width();
$('.sec h3').click(function(){
$(this)
.parents('.sec').animate({width:width*0.40-20})
.siblings('.sec').animate({width:width*0.60-20});

$('.sp').toggleClass('flip');
});

