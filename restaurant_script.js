/* ==================================================== DESCRIPTION =================================================================

This is the JS scripting file for 'restaurant.html'.

The program uses jQuery commands and functions that:
    (a) alerts the user once the page has loaded.
    (b) changes the background once the page has loaded.
    (c) changes a single paragraph’s styling.
    (d) fades out any object that is clicked on.
    (e) creates an accordion style drop-down menu, displaying the contents of menu sections when hovered over.
    (f) uses a chained effect that allows users to slide all page elements around repeatedly while changing the background.
    (g) fades a picture in and out over a period of 3 seconds each when the respective buttons are clicked.
    (h) stops the animation of the above effect whilst in progress.

*** NOTE ***: 
Because of function (d) instruction to fade out any page element, I used the double click event on functions 
(g) and (h) and toggled the buttons to visible, to avoid conflicting with the (d) fading elements function.

====================================================================================================================================*/

// (a) Alerts user once the page has loaded.
$(document).ready(function() {
    alert("This page has loaded!");

    // (b) Changes the background once the page has loaded.
    $("body").css({"background-color": "#D3D3D3"}); 

    // (c) Changes a single paragraph’s styling.
    $("p:first").css({"font-family": "cursive", "color": "#000f89", "font-size": "150%"});

    // (d) Fades out any object that is clicked on.
    $("div").children().click(function(){
    $(this).fadeOut();
    });
    
    // (e) Creates an accordion style drop-down menu, displaying the contents of menu sections when hovered over.
    $(".accordionTrigger").hover(function(event) {
        if (!$(this).hasClass("selected")) { //If the selected (i.e. hovered over) <h3> does not have class: "selected":
            $(this).parent().addClass("active"); // Adds class: "active" to this <h3>'s parent <div.accordionBox> (to add white background).
            $(this).addClass("selected").next(".accordionContainer").show();; // Adds class: "selected" to this <h3> and shows <div.accordionContainer> contents (i.e. this menu's <p>).
        } else {
            $(".accordionContainer").hide(); // Hides all <div.accordionContainer> elements (i.e. menu items in <p>).
            $(".accordionBox").removeClass("active"); // Removes class: "active" from all <div .accordionBoxes>'s (to remove white background).
            $(".accordionTrigger").removeClass("selected"); // Removes class: "selected" from all <h3 .accordionTrigger>'s.
            $(this).parent().addClass("active"); // Adds class: "active" to this <h3>'s parent <div.accordionBox> (to add white background).
            $(this).addClass("selected").next(".accordionContainer").show();; // Adds class: "selected" to this <h3> and shows this <div.accordionContainer> content (i.e. this menu's <p>).
        }
    });

    // (f) Uses a keydown function with switch statement for arrow key cases, with a chained effect that allows users 
    //     to slide all page elements around repeatedly while changing the background. The function uses the same
    //     chained effect to move the page left, right, up and down, changing the background colour depending on the 
    //     direction of movement.
    $(document).keydown(function(key) {
        switch (parseInt(key.which, 10)) {
            // When Left arrow key is pressed.
            case 37:
                $(".menuContainer").css("background-color","#F88379").animate({ left: "-=20px" }, 'fast');
                $(".restaurantDescription").css("background-color","#F88379").animate({left: "-=20px" }, 'fast');
                break;
                // When Up arrow key is pressed.
            case 38:
                $(".menuContainer").css("background-color","#96DED1").animate({  top: "-=20px" }, 'fast');
                $(".restaurantDescription").css("background-color","#96DED1").animate({top: "-=20px" }, 'fast');
                break;
                // When Right arrow key is pressed.
            case 39:
                $(".menuContainer").css("background-color","#EADDCA").animate({ left: "+=20px" }, 'fast');
                $(".restaurantDescription").css("background-color","#EADDCA").animate({ left: "+=20px" }, 'fast');
                break;
                // When Down arrow key is pressed.
            case 40:
                $(".menuContainer").css("background-color","#7393B3").animate({ top: "+=20px" }, 'fast');
                $(".restaurantDescription").css("background-color","#7393B3").animate({ top: "+=20px" }, 'fast');
                break;
        }
    });

    // (g) Fades a picture in and out over a period of 3 seconds each when the respective buttons are clicked,
    //     using doubleclick and toggling to visible to avoid conflict with function (d).
    $(".fadeOutButton").dblclick(function(){
        $(".fadeOutButton").toggle("visible");
        $("#fadingImage").fadeOut(3000);
      });
    
    $(".fadeInButton").dblclick(function(){
        $(".fadeInButton").toggle("visible");
        $("#fadingImage").toggle("hidden");
        $("#fadingImage").fadeIn(3000);
        $(".stopFadingButton").toggle("visible");
    });

    //   (h) Stops the animation of the above effect whilst in progress (using doubleclick and toggling to visible as above).
    $(".stopFadingButton").dblclick(function(){
        $(".stopFadingButton").toggle("visible");
        $("#fadingImage").stop();
    });  
});

 

