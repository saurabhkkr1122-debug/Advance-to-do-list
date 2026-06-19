const tasks =
JSON.parse(
localStorage.getItem(
"tasks"
)
) || [];

const container =
document.getElementById(
"calendarTasks"
);

tasks.forEach(task=>{

const div =
document.createElement(
"div"
);

div.className =
"task";

div.innerHTML = `

<h3>
${task.text}
</h3>

<p>
📅 ${task.date}
</p>

`;

container.appendChild(
div
);

});