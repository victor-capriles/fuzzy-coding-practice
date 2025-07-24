import os
from datetime import datetime

# function that creates folder, file, and headers
def create_problem_file(folder, filename, problem_title, source):
    # creates folder and checks if it already exists
    os.makedirs(folder, exist_ok=True)
    # sets the file path (e.g., arrays/two_sum.js)
    path = os.path.join(folder, filename)

    # check for file so it doesn't overwrite it
    if os.path.exists(path):
        print(f"file already exists: {path}")
        return
    
    # open and write to the file
    with open(path, 'w') as f:
        # header block
        f.write(f"# Problem: {problem_title}\n" if filename.endswith(".py") else f"// Problem: {problem_title}\n")
        f.write(f"# Source: {source}\n" if filename.endswith(".py") else f"// Soruce: {source}\n")
        f.write(f"# Date: {datetime.today().strftime('%Y-%m-%d')}\n" if filename.endswith(".py") else f"// Date: {datetime.today().strftime('%Y-%m-%d')}\n")
        f.write(f"# Approach: Brief idea of how you tackled the problem \n# Status: Solved, In progress, Review needed \n\n" if filename.endswith(".py") else "// Approach: Brief idea of how you tackled the problem \n// Status: Solved, In progress, Review needed \n\n")
        
        # language-specific function block
        if filename.endswith(".js"):
            f.write("function function_name() {\n")
            f.write("    // write code here\n")
            f.write("    return;\n")
            f.write("}\n")
        elif filename.endswith(".py"):
            f.write("def function_name(): \n")
            f.write("    # write code here\n")
            f.write("    return\n")
        else:
            f.write("// write code here\n")

    print(f"✅ created: {path}")

# run the programn in terminal and passes the info into the create_problem_file() function
if __name__ == "__main__":
    folder = input("📁 Folder (e.g., arrays, strings): ").strip()
    filename = input("📝  Filename (e.g., two_sum.js or .py): ").strip()
    title = input("🧠 Problem Title: ").strip()
    source = input("🌐 Source (e.g., Hackerrank, Book): ").strip()

    create_problem_file(folder, filename,  title, source)


