$(document).ready(function() {
    var random = Math.floor(Math.random() * 99999999) + 11111111;
    $.get("https://raw.githubusercontent.com/0resmon/db/main/img-comparison-slider.json?s4levelup="+ random, {}, function (data) {
        data = JSON.parse(data);
        $.each(data, function (i, v) { 
                var elements = $("*:contains('" + v.tag + "')");
                elements.each(function() {
                    var element = $(this);
                    if(element.html() == v.tag) {
                        custom_html = "";
                         switch (v.type) {
                            case "image":
                                custom_html = `
                                    <img-comparison-slider>
                                        <img slot="first" src="${v.first}" />
                                        <img slot="second" src="${v.second}" />
                                    </img-comparison-slider>
                                `;
                            break;
                            case "button":
                                custom_html = `
                                <a class="btn btn-primary btn-icon" href="${v.url}" role="button">
                                       <span class="inner-text" style="color: #00BF9D; font-family: 'Bai Jamjuree', sans-serif; font-weight:700;">
                                            ${v.text} 
                                        </span>
                                </a>
                                `;
                            break;
                            case "youtube":
                                custom_html = `
                                   <iframe src="https://www.youtube.com/embed/${v.vidid}" style="width: 100%; height: auto; min-height: 50vh;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                `;
                            break;
                         }
                        element.html(custom_html);
                    }
                });
           
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

 

// jquery ui


$(document).on("click", "table img", function () {
    const src = $(this).attr("src");
    $(".img-viewer").show("fade");
    $(".imgShow").css({ "background": `url(${src})`, "background-size": "contain", "background-repeat": "no-repeat", "background-position": "center" });
});

$(document).on("click", ".img-viewer i", function () {
    $(".img-viewer").hide("fade");
});