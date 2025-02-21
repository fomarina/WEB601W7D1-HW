$(document).ready(function() {
    // Ensure Bootstrap modal is used for table interaction
    $(".table tbody tr").click(function() {
        let activity = $(this).find("td:first").text(); // Get the activity name
        $("#modalActivityTitle").text(activity);
        $("#activityModal").modal("show");
    });
});
