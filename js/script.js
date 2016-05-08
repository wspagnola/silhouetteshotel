
    function processForm() {
    var guestFirstName = document.getElementById("firstName").value;
    var guestLastName = document.getElementById("lastName").value;
    var checkInDate = document.getElementById("checkInDate").value;
    var stayLength = document.getElementById("noNights").value;
    var roomType = document.getElementsByName("inlineRadioOptions")[0].checked;
    if (roomType) {
        roomType = "suite";
    }else{
        roomType = "bungalow"
    }
    /*
    var guestFirstName = prompt("Please type your first name.")
    var guestLastName = prompt("Please type your last name.")
    var checkInDate = prompt("What date would you like to check in?");
    var stayLength = prompt("How many nights would you like to stay?");
    var roomType = prompt("Would you like to stay in a suite or a bungalow?");
    */
    //I am not sure if I need these variables as parameters for calcBill function
    // You don't need these -- Robert
    var x;
    var y; 

    //Function to 
    function calcBill(x, y) {
        
            //Calculates bill for Suite
            if (y=== "suite") {
                return x * 150;
            }
            
            //Calculate bill for Bungalow
            else {
                return x * 300;
            }
                
    }
    
    //Add Guest First and Last Name to HTML document
    //Perhaps I can combine first and last name into an array
    // put the first name more than one place...
    var fNameElements = document.getElementsByClassName("first_name");
    for (var i = 0; i < fNameElements.length; i++) {
        fNameElements[i].innerHTML = guestFirstName;
    }
    document.getElementById("last_name").innerHTML = guestLastName;
    
    //Check In, Number of Nights, Room
    document.getElementById("check_in").innerHTML = checkInDate;
    document.getElementById("stay_length").innerHTML = stayLength;
    document.getElementById("room_type").innerHTML = roomType;
    
    //Calculates Bill and Writes it to HTML Doc
    document.getElementById("total_bill").innerHTML = " $" + calcBill(stayLength, roomType);
}
// process an email submission, checking for spam...
function processSpam() {
    var spam = document.getElementsByName("inlineRadioOptions")[0].checked;
    if (spam) {
        if(document.getElementById("human").innerHTML == "Really? You are a spambot?") {
            $( "form" ).effect("explode", 3000);
            document.getElementsByTagName("h1")[0].innerHTML = "We are done with you forever!";
        }else{
            document.getElementById("human").innerHTML = "Really? You are a spambot?";
        }

    }else{
        document.getElementById("message").value = "We are sorry, we didn't learn how to send email from a website in this class.\
  Why not send a letter to:\n\
Countee Cullen Library\n\
104 W 136th St\n\
New York, NY 10030\n\
\n\
and ask them to offer more computer classes so you can send your email?";
    }
}
    
/*Uses JQuery to Change Color of divs in menubar*/
$(document).ready(function() {
  $('.our-menubar').mouseenter(function(){
        $(this).addClass("red_background");
    });
    $(".our-menubar").mouseleave(function(){
        $(this).removeClass("red_background");
    });
    
    
    
});

//Reorders carousels and menubar for cellphone mode
/*
function resize() {
    if ($(window).width() < 768) {
        $('#myCarousel').insertBefore($('#info'));
    }
    else {
        $('#myCarousel').insertAfter($('#ourSideBar'));
    }
}

$(document).ready( function() {
    $(window).resize(resize);
    resize();
});*/

/*
    This code and the function below mark the accommodations
    button in the menu as active when clicked or loaded, even
    though accomodations is an anchor on the amenities page.  
    Nearly invisible but nice UI enhancement.  Also expands a
    navbar shim.
*/
var magicWidth = 992;

$(document).ready(function() {
    if (window.location.hash == "#accommodations") {
        hash_active();
    }
        
});

function hash_active() {
    $(".active").toggleClass("active");
    $("#hash").addClass("active");
    // expand navbar shim
    if ($(window).width() < magicWidth) {
        document.getElementById("accommodations").style.height = "77px";
    }
    $('#navbar').removeClass("in"); // collapse the navbar
}

$( window ).resize(function() {
    if ($(window).width() >= magicWidth) {
        document.getElementById("accommodations").style.height = "0px";             
    }    
});
/*
    end of accommodations code
*/

 