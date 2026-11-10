# Import Flask and required functions
from flask import Flask, request, render_template

# Import MYSQL Connector 
import mysql.connector

# Create Flask application
app = Flask(__name__)

# Connect python with MySQL database
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Ruturaj_db@04",
    database="college_db"
)

if conn.is_connected():
    print("MySQL connected successfully!")

# Create cursor object: Used for execute MySQL queries
myCursor = conn.cursor()

# Take input from user
@app.route("/")
def home():
    return render_template("index.html")

# Write MySQL INSERT query

# Execute the query

# Save changes permanently in database

# Show succcess msg

# Close the connection

# Run Flask application
if __name__ == "__main__":
    # Start local development server
    app.run(debug = True)