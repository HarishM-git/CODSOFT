
class Task:
    def __init__(self, description):
        self.description = description
        self.completed = False

class ToDoList:
    def __init__(self):
        self.tasks = []

    def add_task(self, description):
        task = Task(description)
        self.tasks.append(task)

    def view_tasks(self):
        if not self.tasks:
            print("No tasks available.")
        else:
            for index, task in enumerate(self.tasks):
                status = "✔" if task.completed else "✘"
                print(f"{index + 1}. {task.description} [{status}]")

    def update_task(self, task_index, new_description):
        if 0 <= task_index < len(self.tasks):
            self.tasks[task_index].description = new_description
        else:
            print("Invalid task number.")

    def delete_task(self, task_index):
        if 0 <= task_index < len(self.tasks):
            del self.tasks[task_index]
        else:
            print("Invalid task number.")

    def mark_task_completed(self, task_index):
        if 0 <= task_index < len(self.tasks):
            self.tasks[task_index].completed = True
        else:
            print("Invalid task number.")

def main():
    todo_list = ToDoList()
    while True:
        print("\nTo-Do List Application")
        print("1. Add Task")
        print("2. View Tasks")
        print("3. Update Task")
        print("4. Delete Task")
        print("5. Mark Task Completed")
        print("6. Exit")
        
        choice = input("Enter your choice: ")
        
        if choice == '1':
            description = input("Enter task description: ")
            todo_list.add_task(description)
        elif choice == '2':
            todo_list.view_tasks()
        elif choice == '3':
            todo_list.view_tasks()
            task_number = int(input("Enter task number to update: ")) - 1
            new_description = input("Enter new task description: ")
            todo_list.update_task(task_number, new_description)
            todo_list.view_tasks()
        elif choice == '4':
            todo_list.view_tasks()
            task_number = int(input("Enter task number to delete: ")) - 1
            todo_list.delete_task(task_number)
            todo_list.view_tasks()
            
        elif choice == '5':
            todo_list.view_tasks()
            task_number = int(input("Enter task number to mark as completed: ")) - 1
            todo_list.mark_task_completed(task_number)
            todo_list.view_tasks()
        elif choice == '6':
            break
        else:
            print("Invalid. Please try again.")

if __name__ == "__main__":
    main()
