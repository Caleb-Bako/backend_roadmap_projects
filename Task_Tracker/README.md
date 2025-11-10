# 🧭 Task Tracker CLI

A simple command-line task tracking tool built with **Node.js**.  
This CLI app lets you **add, list, update, delete, and mark tasks** with different statuses — all stored locally in a JSON file.

---

## 📦 Features

- ✅ Add new tasks  
- 📋 List all tasks or filter by status (`todo`, `in-progress`, `done`)  
- ✏️ Update existing tasks  
- 🗑️ Delete tasks  
- 🚀 Mark tasks as *in-progress* or *done*  

---

## ⚙️ Installation

1. **Clone this repository:**
   ```bash
   git clone https://github.com/yourusername/task-tracker-cli.git
   cd task-tracker-cli
   ```

2. **Initialize Node.js (if needed):**
   ```bash
   npm init -y
   ```

3. **Run the app directly with Node:**
   ```bash
   node index.js <command> [arguments]
   ```

> 💡 Ensure that a `data.json` file exists in the project root.  
> If it doesn’t, create an empty one:
> ```bash
> echo [] > data.json
> ```

---

## 🧠 Usage

### 🟩 Add a new task
```bash
node index.js add "Read the Bible"
```
**Output:**
```
Added and saved: { id: 0, items: 'Read the Bible', status: 'todo' }
```

---

### 📜 List all tasks
```bash
node index.js list
```
**Output:**
```
1: Read the Bible
2: Finish project
```

### 📊 List tasks by status
```bash
node index.js list done
```
**Output:**
```
[ { id: 1, items: 'Finish project', status: 'done' } ]
```

---

### 📝 Update a task
```bash
node index.js update 0 "Study JavaScript"
```
**Output:**
```
Updated and saved: [ { id: 0, items: 'Study JavaScript', status: 'todo' } ]
```

---

### 🚩 Mark a task as *in-progress*
```bash
node index.js mark-in-progress 0
```

### 🏁 Mark a task as *done*
```bash
node index.js mark-done 0
```

**Output:**
```
Updated and saved: [ { id: 0, items: 'Study JavaScript', status: 'done' } ]
```

---

### ❌ Delete a task
```bash
node index.js delete 0
```
**Output:**
```
Updated and saved: [ ...remaining tasks... ]
```

---

## 📂 Data Storage

All tasks are saved in a local JSON file called `data.json`.  
Each task has the following structure:
```json
{
  "id": 0,
  "items": "Read the Bible",
  "status": "todo"
}
```

---

## ⚠️ Notes

- Task IDs are **zero-based** internally but displayed as **1-based** when listed.  
- If you delete a task, the app automatically **reassigns IDs** to maintain sequence.
- Supported statuses: `todo`, `in-progress`, `done`.

---

## 🧑‍💻 Example Session

```bash
node index.js add "Pray"
node index.js add "Code"
node index.js list
node index.js mark-in-progress 0
node index.js mark-done 1
node index.js list done
```

---

## 🙌 Author

**Caleb Bako**  
Dedicated to Jesus Christ ✝️  
*“Whatever you do, do it all for the glory of God.” – 1 Corinthians 10:31*
