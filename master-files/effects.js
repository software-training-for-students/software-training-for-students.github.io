// wait for document to fully load
$(document).ready(function () {


    /*
    BEGIN CURRENT DATE GENERATOR
    On the front page of each manual, you will find a date in which the manual was last updated.
    The code below automatically updates this date whenever the manual is edited.
    */

    // retreive current date
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();

    // insert date
    $("#current-date").append("<em>Last Updated " + month + "/" + day + "/" + year + "</em>");

    /*
    END CURRENT DATE GENERATOR
    */

    /*
     BEGIN ABOUT PAGE BUILDER
     The code below inserts the HTML containing the "About Software Training for Students" section of the manual.
     If you would like to change any details about this about page, you can edit the page here.
     */

    // append string to manual
    $("#about-page").append("<div class = 'full-width-image'><img src = 'http://software-training-for-students.github.io/master-files/marcus.png'></div>");

    /*
    END ABOUT PAGE BUILDER
    */

    /*
    BEGIN OUTLINE GENERATOR
    The code below will generate the "topics outline" section of the manual.
    It scans for each <h1> element in the html, and adds it to the topics outline.
    It ignores the first three <h1> elements found.
    */

    // create variable to hold string containing table of contents
    var outline = "<ol>";

    // create counter to ignore first three <h1> tags
    var ignoreNumber = 3;

    // loop through each h1 element
    $("h1").each(function () {

        // ignore unneccesarry <h1> tags
        if (ignoreNumber === 0) {

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
    outline += "</ol>";

    // inject string into html
    $("#outline").append(outline);

    /*
    END OUTLINE GENERATOR
    */


});
