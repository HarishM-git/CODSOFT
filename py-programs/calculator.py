class Calculator:
    def __init__(self):
        self.num1 = 0
        self.num2 = 0

    def get_num(self):
        
        self.num1 = self.valid_number("Enter the first number: ")
        self.num2 = self.valid_number("Enter the second number: ")

    def valid_number(self, prompt):
        
        while True:
            try:
                return float(input(prompt))
            except ValueError:
                print("Invalid input. Please enter a numeric value.")

    def get_operation(self):
        
        print("Select operation:")
        print("1. Add")
        print("2. Subtract")
        print("3. Multiply")
        print("4. Divide")
        print("5. EXIT")
        return self.valid_operation()

    def valid_operation(self):
        
        while True:
            operation = input("\n\nEnter choice (1/2/3/4/5): ")
            if operation in ('1', '2', '3', '4', '5'):
                return operation
            else:
                print("\nInvalid input. Please enter a number between 1 and 5.")

    def calculate(self, operation):
        
        if operation == '1':
            return self.add()
        elif operation == '2':
            return self.subtract()
        elif operation == '3':
            return self.multiply()
        elif operation == '4':
            return self.divide()
        elif operation == '5':
            return 'exit'

    def add(self):
        return self.num1 + self.num2

    def subtract(self):
        return self.num1 - self.num2

    def multiply(self):
        return self.num1 * self.num2

    def divide(self):
        if self.num2 == 0:
            return "Error! Division by zero."
        else:
            return self.num1 / self.num2

    def display(self, result):
        
        print(f"\nThe result is: {result}\n\n")

def main():
    cal = Calculator()
    
    while True:
        cal.get_num()
        operation = cal.get_operation()
        result = cal.calculate(operation)
        if result == 'exit':
            break
        else:
            cal.display(result)

if __name__ == "__main__":

    main()
