import random
import string

def gen_password(len):

    characters = string.ascii_letters + string.digits + string.punctuation
    

    password = ''.join(random.choice(characters) for _ in range(len))
    
    return password

len = int(input("Enter the desired length for the password: "))


password = gen_password(len)


print("Generated Password:", password)
