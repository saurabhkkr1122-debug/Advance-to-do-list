// =========================
// DARK MODE
// =========================

const themeBtn =
document.getElementById(
"themeBtn"
);

if(
localStorage.getItem(
"theme"
)==="dark"
){
document.body.classList.add(
"dark"
);
}

themeBtn.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"dark"
);

if(
document.body.classList.contains(
"dark"
)
){
localStorage.setItem(
"theme",
"dark"
);
}
else{
localStorage.setItem(
"theme",
"light"
);
}

}
);

// =========================
// FILTER TASKS
// =========================

function filterTasks(type){

document
.querySelectorAll(".task")
.forEach(task=>{

const completed =
task.querySelector("h3")
.classList.contains(
"completed"
);

if(type==="all"){
task.style.display="flex";
}

else if(
type==="completed"
&& completed
){
task.style.display="flex";
}

else if(
type==="pending"
&& !completed
){
task.style.display="flex";
}

else{
task.style.display="none";
}

});

}

// =========================
// VOICE INPUT
// =========================

function startVoice(){

const recognition =
new webkitSpeechRecognition();

recognition.start();

recognition.onresult =
(event)=>{

document
.getElementById(
"taskInput"
)
.value =
event.results[0][0]
.transcript;

};

}

// =========================
// NOTIFICATIONS
// =========================

function showNotification(){

if(
Notification.permission
==="granted"
){

new Notification(
"Todo Reminder",
{
body:
"Don't forget your tasks today!"
}
);

}

}

Notification.requestPermission();

setTimeout(
showNotification,
5000
);