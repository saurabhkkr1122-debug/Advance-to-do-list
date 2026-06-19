
let taskChart = null;

function createChart() {

    const completed =
        tasks.filter(task => task.completed).length;

    const pending =
        tasks.length - completed;

    const ctx =
        document.getElementById("taskChart");

    if (!ctx) return;

    // Destroy old chart
    if (taskChart) {
        taskChart.destroy();
    }

    taskChart = new Chart(ctx, {

        type: "doughnut",

        data: {

            labels: [
                "Completed",
                "Pending"
            ],

            datasets: [{
                data: [
                    completed,
                    pending
                ]
            }]

        }

    });

}

