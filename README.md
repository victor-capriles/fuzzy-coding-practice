# Fuzzy-Coding-Practice Tracker
Is a simple CLI tool to log your coding sessions in Notion and auto-generate file templates for coding exercises.

---

## ✨ Features

- 📁 Automatically creates a new problem file with headers and starter code
- 🧾 Logs problem metadata to your Notion database:
  - Title
  - Status (Not started / In progress / Done)
  - Time spent
  - Topic (multi-select)
  - GitHub link (optional)
- 🔐 Uses `.env` to keep Notion API keys secret
- ⚙️ Works with multiple study types as its input text (e.g., `📘Theory Study`, `🧑‍💻Coding Challenge`)

---

## 🚀 Getting Started 

### 1. Clone the repo

```bash
git clone https://github.com/victor-capriles/fuzzy-coding-practice.git
cd fuzzy-coding-practice
```

### 2. Set up your environment

🐍 Requires Python 3.10+

Tested on: `Python 3.13.1`

```bash
# create virtual environment
python -m venv venv
# activate virtual environment 
source venv/bin/activate
# OR on Windows
venv\Scripts\activate 
# install requirements
pip install -r requirements.txt
```

### 3. Configure your `.env`
Create a `.env` file in the root of the project:

```bash
NOTION_TOKEN=your_notion_secret
NOTION_DB_ID=your_database_id
```

>💡 Make sure to share your Notion database with your integration.

### 4. Set up Notion Database

Create the Notion Database:

  - In Notion, create a new database (`Table view` is a good option).
  - Add the following columns:

    | Column Name    | Property Type                           |
    | -------------- | --------------------------------------- |
    | **Title**      | Title (default, can’t be changed)       |
    | **Type**       | Text         |
    | **Date**       | Date                                    |
    | **Topic**      | Multi-select                            |
    | **Status**     | Status (Not started, In progress, Done) |
    | **Time Spent** | Text                                    |
    | **Github URL** | URL                                     |

### 5. Set up Notion Integration

To set up the notion integration you can:

- Click the `...` icon in the right upper corner > click ` Connections` > click `develop integrations` or click on this [URL](https://www.notion.com/my-integrations)
- Click `New integration`
- Add the Associated workspace
- Type, select `Internal`
- Save

You'll have a **Capabilities** section, leave it on default which is:
- Read content ✅
- Update content ✅
- Insert content ✅

Now you have the Internal Integration Secret token! that you'll have to paste in the `.env` file

```bash
NOTION_TOKEN=your_notion_secret_token
NOTION_DB_ID=your_database_id
```
The `NOTION_DB_ID` is the long string in your database's URL (e.g., https://talented-dart-7e7.notion.site/23a51ac69b82806b836ec6f46c387cb2?v=23a51ac69b82813e98f1000c8e85746c)

in this case it would be:
- NOTION_DB_ID=23a51ac69b82806b836ec6f46c387cb2

---

## 🧪 Usage
Run the tool to generate a new problem template with:

```bash
python new_problem_template.py
```

You'll be prompted to enter:
- folder name
- file name
- problem title and source
- status, topic(s), time spent, GitHub URL

This will:
- create a file with a basic code template
- log the metadata to you connected Notion database

---

## 📝 Supported Languages
The generator recognizes the file extension and adds a starter template for:

| Language   | Extension | Example filename |
| ---------- | --------- | ---------------- |
| JavaScript | `.js`     | `two_sum.js`     |
| TypeScript | `.ts`     | `two_sum.ts`     |
| Python     | `.py`     | `two_sum.py`     |
| Java       | `.java`   | `TwoSum.java`    |

---

## 📸 Example output

```bash
📁 Folder (e.g., arrays, strings): arrays
📝 Filename (e.g., two_sum.py): two_sum.py
🧠 Problem Title: Two Sum
🌐 Source: LeetCode
✅ created: arrays/two_sum.py
📌 Status: Done
⏳ Time Spent: 45m
🏷️ Topic(s): Arrays
✅ Logged to Notion!
```

---

## 🙌 Contributing
If you want to improve this tool, feel free to open an issue or submit a PR!

