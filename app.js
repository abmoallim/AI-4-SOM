$(document).ready(function () {
  $("#contributionForm").submit(function (e) {
    e.preventDefault();

    var formData = {
      question: $("#question").val(),
      answer: $("#answer").val(),
      asked: false,
      author: $("#name").val(),
    };

    var apiUrl = "http://localhost:30007/api/data";
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
        $("#contributionForm").hide();
        $("#thankYouMessage").show();

        toastr.success("Your contribution was submitted successfully!");
      },
      error: function (error) {
        console.error("Error:", error);

        toastr.error("An error occurred while submitting your contribution.");
      },
    });
  });
});
