// wait for document to fully load
$(document).ready(function () {

    /* 
    BEGIN OUTLINE GENERATOR 
    */

    // create variable to hold string containing table of contents
    var outline = "<ol>"

    // create counter to ignore first three <h1> tags
    var ignoreNumber = 3;

    // loop through each h1 element
    $("h1").each(function () {

        // ignore unneccesarry <h1> tags
        if (ignoreNumber == 0) {

            // retrieve text inside h1 element
            var title = $(this).text();

            // append to toc string 
            outline += "<li>" + "<p>" + title + "</p>" + "</li>";
        } else {

            // decrement ignore counter
            ignoreNumber--;
        }

    });

    // add closing tag to toc
    outline += "</ol>"

    // inject string into html
    $("#outline").append(outline);

    /* 
    END OUTLINE GENERATOR 
    */
});