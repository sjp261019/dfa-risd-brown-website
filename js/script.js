//ACCESSIBILITY TEAM JSON
$.getJSON("json/accessibility.json", function(accessibility) {
    let html = '';
    $.each(accessibility, function(i, piece) {
        html += 
            `<div class="post">
                <img src=${piece.image} class="postImg">
                <p>${piece.date}</p>
                <p><b>${piece.title}</b></p>
                <p>${piece.content}</p>
            </div>`
    });
    $("#accessibility").append(html);
});

//COMMUNITY ENGAGEMENT TEAM JSON
$.getJSON("json/community_engagement.json", function(community) {
    let html = '';
    $.each(community, function(i, piece) {
        html += 
            `<div class="post">
                <img src=${piece.image} class="postImg">
                <p>${piece.date}</p>
                <p><b>${piece.title}</b></p>
                <p>${piece.content}</p>
            </div>`
    });
    $("#community").append(html);
});

//SUSTAINABILITY TEAM JSON
$.getJSON("json/sustainability.json", function(sustainability) {
    let html = '';
    $.each(sustainability, function(i, piece) {
        html += 
            `<div class="post">
                <img src=${piece.image} class="postImg">
                <p>${piece.date}</p>
                <p><b>${piece.title}</b></p>
                <p>${piece.content}</p>
            </div>`
    });
    $("#sustainability").append(html);
});

//WASTE MANAGEMENT TEAM JSON
$.getJSON("json/waste_management.json", function(waste) {
    let html = '';
    $.each(waste, function(i, piece) {
        html += 
            `<div class="post">
                <img src=${piece.image} class="postImg">
                <p>${piece.date}</p>
                <p><b>${piece.title}</b></p>
                <p>${piece.content}</p>
            </div>`
    });
    $("#waste").append(html);
});

$(document).ready(function(){

    //CLOSE BANNER
    $(".btn-closeBanner").click(function(){
        $(".container").delay(1000).animate({"padding-top":"80px"}, 2000, "easeOutExpo");
        $("#top-banner").slideUp(1000, "easeInExpo");
    });
    
    //SCROLL UP ON CLICK
    $(".scrollUp").click(function(){
        scrollTo(0, 0);
    });
});