import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Save Task
export async function saveTask(task) {

    try {

        await addDoc(
            collection(db, "tasks"),
            task
        );

        console.log("Task Saved");

    } catch (error) {

        console.error(error);

    }

}

// Get Tasks
export async function getTasks() {

    const querySnapshot =
        await getDocs(
            collection(db, "tasks")
        );

    const tasks = [];

    querySnapshot.forEach((doc) => {

        tasks.push({
            id: doc.id,
            ...doc.data()
        });

    });

    return tasks;
}