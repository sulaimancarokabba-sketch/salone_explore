
class student():
    def __int__(self, name, age, caurse, level, phone_number):
        self.name = name 
        self.age = age 
        self.caurse = caurse 
        self.level = level 
        self.phone_number = phone_number 

        def student_info(self):
            return f"{self.name}, {self.age}, {self.caurse}, {self.level}, {self.phone_number}"