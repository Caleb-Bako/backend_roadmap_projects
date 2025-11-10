const process = require("process");
const fs = require("fs").promises;

const filePath = "data.json";

if (process.argv[2] === "add" && process.argv[3] != null) {
    addTask(process.argv[3]);
}else if (process.argv[2] === "list") {
  listTask(process.argv[3]);
} else if (process.argv[2] === "delete" && process.argv[3] != null) {
  deleteTask(process.argv[3]);
} else if (process.argv[2] === "update" && process.argv[3] != null) {
  updateTask(process.argv[3], process.argv[4]);
} else if (process.argv[2].includes("mark") && process.argv[3] != null) {
  updateStatus(process.argv[2], process.argv[3]);
} else {
  console.log("Nah");
}

async function readJson() {
     let tasks = [];

     try {
       const fileContent = await fs.readFile(filePath, "utf8");
       if (fileContent.trim().length > 0) {
         tasks = JSON.parse(fileContent);
       }
     } catch (error) {
       console.error("Error reading file:", error.message);
       return;
     }

     return tasks;
}

async function addTask(data) {
let tasks = await readJson();

  const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0;
  const task = { id: newId, items: data ,status:"todo"};

  tasks.push(task);
  await fs.writeFile(filePath, JSON.stringify(tasks, null, 2), "utf8");

  //Tried storing the items directly into the json but discovered that when adding new items so decided to parse and store in array to fix that issue

  console.log("Added and saved:", task);
}

async function listTask(filter) {
    let tasks = await readJson();

    if (filter) {
       const filteredItems =  tasks.filter(item => item.status === filter)
       console.log(filteredItems)
       return;
    }
   
    tasks.forEach(element => {
    //People don't usally count from zero so made it to start counting from 1 and i just like i like this
    console.log(`${element.id + 1}: ${element.items}`)
   });
}

async function updateTask(id,item) {
    let tasks = await readJson();

    tasks[id].items = item
    await fs.writeFile(filePath, JSON.stringify(tasks, null, 2), "utf8");

    console.log("Updated and saved:", tasks);
}

async function updateStatus(status,id) {
    let tasks = await readJson();

    switch (status) {
      case "mark-in-progress":
        tasks[id].status = "in-progress";
        break;
      case "mark-done":
        tasks[id].status = "done";
        break;

      default:
        break;
    }

    await fs.writeFile(filePath, JSON.stringify(tasks, null, 2), "utf8");

    console.log("Updated and saved:", tasks);
}

async function deleteTask(id) {
    let tasks = await readJson();
    let element = [];

    tasks.splice(Number(id),1)

      for (let index = 0; index < tasks.length; index++) {
        element.push({ id: index, items: tasks[index].items });
        console.log(index);
      }

      await fs.writeFile(filePath, JSON.stringify(element, null, 2), "utf8");
}