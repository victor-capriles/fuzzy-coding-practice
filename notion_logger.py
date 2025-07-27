import os
from datetime import datetime
from notion_client import Client
from dotenv import load_dotenv

# Load secrets from .env file
load_dotenv()
notion = Client(auth=os.getenv("NOTION_TOKEN"))
database_id = os.getenv("NOTION_DB_ID")

def log_problem_to_notion(folder, filename, title, source):
    try:
        now = datetime.now()
        formatted_date = now.strftime("%Y-%m-%d")

        # prompt user for all necessary fields in Notion db
        # set umeet or study as page title in Notion
        notion_title = input("📖 Entry type (e.g., UMeet, Study): ").strip()
        exercise_name = input("📚 Exercise name (e.g., Two Sum): ").strip()
        github_url = input("🔗 GitHub URL (optional): ").strip()
        status = input("📌 Status (Not started / In progress / Done / Not Done): ").strip()
        time_spent = input("⏳ Time Spent (e.g., 30m, 1h): ").strip()
        topic = input("🏷️ Topic(s) (comma-separated, e.g., Arrays, Loops): ").strip()

        # send data to Notion
        notion.pages.create(
            parent={"database_id": database_id},
            properties={
                "Title": {
                    "title": [
                        {"text": {"content": notion_title}}
                    ]
                },
                "Name": {
                    "rich_text": [
                        {"text": {"content": exercise_name}}
                    ]
                },
                "Date": {
                    "date": {"start": formatted_date}
                },
                "Topic": {
                    "multi_select": [{"name": t.strip()} for t in topic.split(",") if t.strip()]
                },
                "Status": {
                    "status": {"name": status}
                },
                "Time Spent": {
                    "rich_text": [
                        {"text": {"content": time_spent}}
                    ]
                },
                "Github URL": {
                    "url": github_url if github_url else None
                }
            }
        )
        print("✅ Logged to Notion!")
    except Exception as e:
        print("❌ Failed to log to Notion:", e)
