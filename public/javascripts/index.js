
//give inital options to the user,  

//$(document).ready(()=> )
// $(document).on("click", ".clickbait", function() {
//     console.log("tag!")
//     // Empty the notes from the note section
//     $("#notes").empty();
//     // Save the id from the p tag
//     var thisId = $(this).attr("data-id");
  
//     $.ajax({
//         method: "GET",
//         url: "/articles/" + thisId
//     })
//         // With that done, add the note information to the page
//         .then(function (data) {
//             console.log(data);
//             // The title of the article
//             $("#notes").append("<h2>" + data.title + "</h2>");
//             // An input to enter a new title
//             $("#notes").append("<input id='titleinput' name='title' >");
//             // A textarea to add a new note body
//             $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
//             // A button to submit a new note, with the id of the article saved to it
//             $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

//             // If there's a note in the article
//             if (data.note) {
//                 // Place the title of the note in the title input
//                 $("#titleinput").val(data.note.title);
//                 // Place the body of the note in the body textarea
//                 $("#bodyinput").val(data.note.body);
//             }
//         });
//     })

    console.log("hit")

    var title = $("<div>added mesure</div>").addClass("title");
    $(".footer").append(title);
