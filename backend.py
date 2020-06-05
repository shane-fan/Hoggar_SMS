from tkinter import *
from tkinter import ttk
import pymysql

#All variables
self.Roll_No_var = StringVar()
self.name_var = StringVar()
self.email_var = StringVar()
self.gender_var = StringVar()
self.contact_var = StringVar()
self.dob_var = StringVar() 

def add_students(self):
    con = pymysql.connect(host="localhost", user="root", password="", database="sms")
    cur = con.cursor()
    cur.execute("insert into students values(%s,%s,%s,%s,%s,%s,%s)", (self.Roll_No_var.get(),
             self.name_var.get(),
             self.email_var.get(),
             self.gender_var.get(),
             self.contact_var.get(),
             self.dob_var.get(),
             self.txt_Address.get('1.0',END) 
             ))
    
    con.commit()
    self.fetch_data()
    self.clear()
    con.close()

#This function shows the added student details
def fetch_data(self):
    con = pymysql.connect(host="localhost", user="root", password="", database="sms")
    cur = con.cursor()
    cur.execute("select * from students")
    rows = cur.fetchall()
    if len(rows) != 0:
        self.Student_table.delete(*self.Student_table.get_children())
        for row in rows:
            self.Student_table.insert('', END, values=row)
        con.commit()
    con.close()

def clear(self):
    self.Roll_No_var.set("")
    self.name_var.set("")
    self.email_var.set("")
    self.gender_var.set("")
    self.contact_var.set("")
    self.dob_var.set("")
    self.txt_Address.delete('1.0', END)

#This function shows added student in the input field on clicking on the student details
def get_cursor(self):
    cursor_row = self.Student_table.focus()
    contents = self.Student_table.item(cursor_row)
    row = contents['values']
    self.Roll_No_var.set(row[0])
    self.name_var.set(row[1])
    self.email_var.set(row[2])
    self.gender_var.set(row[3])
    self.contact_var.set(row[4])
    self.dob_var.set(row[5])
    self.txt_Address.delete('1.0', END)
    self.txt_Address.insert(END, row[6])

def update_data(self):
    con = pymysql.connect(host="localhost", user="root", password="", database="sms")
    cur = con.cursor()
    cur.execute("update students set name=%s, email=%s, gender=%s, contact=%s, dob=%s, address=%s where roll_no=%s", (self.Roll_No_var.get(),
                 self.name_var.get(),
                 self.email_var.get(),
                 self.gender_var.get(),
                 self.contact_var.get(),
                 self.dob_var.get(),
                 self.txt_Address.get('1.0',END) 
                 ))
    
    con.commit()
    self.fetch_data()
    self.clear()
    con.close()

def delete_data(self):
    con = pymysql.connect(host="localhost", user="root", password="", database="sms")
    cur = con.cursor()
    cur.execute("delete from students where roll_no = %s", self.Roll_No_var.get())
    con.commit()
    con.close()
    self.fetch_data()
    self.clear()

def search_data(self):
    con = pymysql.connect(host="localhost", user="root", password="", database="sms")
    cur = con.cursor()
    con.execute("select * from students where "+str(self.search_by.get())+" LIKE '%"+str(self.search_txt.get())+"%'")
    rows = cur.fetchall()
    if len(rows) != 0:
        self.Student_table.delete(*self.Student_table.get_children())
        for row in rows:
            self.Student_table.insert('', END, vaues=row)
        con.commit()
    con.close()






