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
    $("#about-page").append("<p>Software Training for Students is an organization on campus that provides free software training to all students and faculty. Our services include custom workshops, open-enrollment classes, one-on-one project help, and access to Lynda.com. For more information on the Software Training for Students (STS) program, visit our website at <strong><a href = 'http://wisc.edu/sts'>wisc.edu/sts</a></strong>.</p><div class = 'full-width-image'><img src = 'http://software-training-for-students.github.io/manual-master-files/sts-services.png'></div><p>STS is part of the Division of Information Technology (DoIT) - Academic Technology at UW-Madison. For more information regarding DoIT Academic Technology, visit <strong><a href = 'https://at.doit.wisc.edu/'>at.doit.wisc.edu</a></strong>.</p><p><strong>&copy; University of Wisconsin Board of Regents.</strong></p><p>This manual and any accompanying files were developed for use by current students at the University of Wisconsin-Madison. The names of software products referred to in these materials are claimed as trademarks of their respective companies or trademark holder.</p><p>If you are not a current member of the UW-Madison community and would like to use STS materials for self-study or to teach others, please contact sts@doit.wisc.edu. Thank you.</p>");
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
        }
        else {
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
