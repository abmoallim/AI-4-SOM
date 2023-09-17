$(document).ready(function () {
  $("#contributionForm").submit(function (e) {
    e.preventDefault();

    // Hide the form and show the loading indicator
    $("#contributionForm").hide();
    $("#loadingIndicator").show();

    let _author = "unknown";
    if ($("#name").val()) {
      _author = $("#name").val();
    }

    var formData = {
      question: $("#question").val(),
      answer: $("#answer").val(),
      asked: false,
      author: _author,
    };

    var apiUrl = "https://bytesotech.cloud/ai4som/api/data";
    var apiKey = "cde56ebb4256639c0904f97ff4dda60a602c1952";

    $.ajax({
      type: "POST",
      url: apiUrl,
      data: JSON.stringify(formData),
      contentType: "application/json",
      headers: {
        "x-api-key": apiKey,
      },
      success: function (response) {
        // Hide the loading indicator and display a success message
        $("#loadingIndicator").hide();
        $("#thankYouMessage").show();

        toastr.success("Your contribution was submitted successfully!");
      },
      error: function (error) {
        // Hide the loading indicator and display an error message
        $("#loadingIndicator").hide();
        $("#contributionForm").show();

        console.error("Error:", error);

        toastr.error("An error occurred while submitting your contribution.");
      },
    });
  });

  $("#addNewButton").click(function () {
    // Clear the form fields
    $("#question").val("");
    $("#answer").val("");
    $("#name").val("");

    // Show the form and hide the "Thank you" message and "Add New" button
    $("#contributionForm").show();
    $("#thankYouMessage").hide();
    $("#addNewButton").hide();
  });
});
