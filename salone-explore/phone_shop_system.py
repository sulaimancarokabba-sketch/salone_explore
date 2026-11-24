
class phone():
     shope_name = "starsam_ent"
     shope_owner ="s_kcaro"

     def __init__(self, name, model, price, color, storage):
          self.name = name
          self.model = model
          self.price = price 
          self.color = color 
          self.storage = storage

     def phone_details(self): 
      raise f"{self.name}, {self.model}, {self.price}, {self.color}, {self.storage}"

     def make_call(self):
       print("making a call with", self.name, self.model, self.price, self.color, self.storage)

       def shop_info(self):
          return f"{self.shop_name}, {self.shop_owner}"

       def changer_owner(self, new_owner):
          self.shop_owner = new_owner

          phone1 = phone("Motoroler", "ipod", "itel", "2000GB", 7000)
          phone2 = phone("sony", "blue", "samsung", "1500GB", "5000")

          phone1.phone_details()
          self.phone_details()

          print(phone.shop_info())

          phone.change_owner("Big_caro")

          print(phone.shope_info())



       

 