$(document).ready(function() {
    let taskCount = 0;

    function updateTaskNumbers() {
        $("#taskTable tbody tr").each(function(index) {
            $(this).find('td:first').text(index + 1);
        });
    }

    $("#addTaskBtn").click(function() {
        let taskName = $("#taskName").val().trim();
        let taskDescription = $("#taskDescription").val().trim();

        if (taskName === "" || taskDescription === "") {
            alert("Both task name and description are required.");
        } else {
            taskCount++;

            let newRow = `
          <tr>
            <td>${taskCount}</td>
            <td>${taskName}</td>
            <td>${taskDescription}</td>
            <td><button class="deleteBtn">Delete</button></td>
          </tr>
        `;

            $("#taskTable tbody").append(newRow);
            $("#taskName").val("");
            $("#taskDescription").val("");

            updateTaskNumbers();
        }
    });

    $("#taskTable").on("click", ".deleteBtn", function() {
        let confirmed = confirm("Are you sure you want to delete this task?");

        if (confirmed) {
            $(this).closest("tr").remove();
            updateTaskNumbers();
            alert("Task successfully deleted.");
        }
    });
});