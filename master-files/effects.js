// wait for document to fully load
$(document).ready(function () {

    /* 
    BEGIN ABOUT PAGE BUILDER
    The code below inserts the HTML containing the "About Software Training for Students" section of the manual.
    If you would like to change any details about this about page, you can edit the page here.
    */

    var aboutContent = "<p>Software Training for Students is an organization on campus that provides free software training to all students and faculty. Our services include custom workshops, open-enrollment classes, one-on-one project help, and access to Lynda.com. For more information on the Software Training for Students (STS) program, visit our website at <b><a href = "
    http: //wisc.edu/sts">wisc.edu/sts</a></b>.</p>";
        $("#about-page").append(aboutContent);

    /* 
    END ABOUT PAGE BUILDER
    The code below inserts the HTML containing the "About Software Training for Students" section of the manual.
    If you would like to change any details about this about page, you can edit the page here.
    */

    /* 
    BEGIN OUTLINE GENERATOR
    The code below will generate the "topics outline" section of the manual.
    It scans for each <h1> element in the html, and adds it to the topics outline.
    It ignores the first three <h1> elements found.
    The first three <h1> elements are the manual's main title, the topics outline, and the manual introduction.
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