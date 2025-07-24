import os
from datetime import datetime

def create_problem_file(folder, filename, problem_title, source):
    os.makedirs(folder, exist_ok=True)
    path = os.path.join(folder, filename)

    if os.path.exists(path):
        print(f"file already exists: {path}")
        return
    
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

if __name__ == "__main__":
    folder = input("📁 Folder (e.g., arrays, strings): ").strip()
    filename = input("📝  Filename (e.g., two_sum.js or .py): ").strip()
    title = input("🧠 Problem Title: ").strip()
    source = input("🌐 Source (e.g., Hackerrank, Book): ").strip()

    create_problem_file(folder, filename,  title, source)


