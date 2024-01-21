$(document).ready(function() {
    var random = Math.floor(Math.random() * 99999999) + 11111111;
    $.get("https://raw.githubusercontent.com/0resmon/db/main/img-comparison-slider.json?s4levelup="+ random, {}, function (data) {
        data = JSON.parse(data);
        $.each(data, function (i, v) { 
            if(v.type == "image") {
                var elements = $("*:contains('" + v.tag + "')");
                elements.each(function() {
                    var element = $(this);
                    if(element.html() == v.tag) {
                        custom_html = `
                        <img-comparison-slider>
                            <img slot="first" src="${v.first}" />
                            <img slot="second" src="${v.second}" />
                        </img-comparison-slider>
                            
                        `;
                        element.html(custom_html);
                    }
                });
            }
        });  
    });
});

// s4levelup 

 



// ilkel version
// var custom_html = `
 
// <img-comparison-slider>
//   <img slot="first" src="https://cdn.discordapp.com/attachments/1198466197512015932/1198466238205153300/repv2_1.jpg" />
//   <img slot="second" src="https://cdn.discordapp.com/attachments/1198466197512015932/1198466238653927464/repv3_1.png" />
// </img-comparison-slider>
    
//     `;




//     $(document).ready(function() {
//         var elements = $("*:contains('reportsystemv3_reportsystemv3')");
//         console.log(elements);
//         elements.each(function() {
//             var element = $(this);
//             if(element.html() == "reportsystemv3_reportsystemv3") {
//                 element.html(custom_html);
//             }
//         });
        
//     });

 