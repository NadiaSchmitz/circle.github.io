$("#start").click(function() {
    $(".circle div").remove();

    var line_number = $("#line_number").val();
    var deg = 0;
    var deg_step = 360 / line_number / 2;
    
    if($("#line_number").val() < 0) {
        console.log("Error");
    } else {
        for(var i = 1; i <= line_number; i++) {
            console.log(i)
            $(".circle").append($("<div class=" + i + "></div>"));
            color_number = "rgb(" + Math.round(Math.random() * 254) + "," + Math.round(Math.random() * 254) + "," + Math.round(Math.random() * 254) + ")";
            console.log(color_number);
            
            deg = deg + deg_step;
            
            console.log(deg);
            $("." + i).css("background-color", color_number);
            $("." + i).css('transform', 'rotate(' + deg + 'deg)');
        }
    }
})