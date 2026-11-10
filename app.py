
# Import Flask and required functions
from flask import Flask, render_template, request

# Import MySQL connector
import mysql.connector

# Create Flask application
app = Flask(__name__)

# Connect Python with MySQL database
con = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Ruturaj_db@04",
    database="ruturaj_db"
)

# Create cursor to execute SQL queries
cur = con.cursor()


# Home page route
@app.route("/")
def home():

    # Display HTML registration form
    return render_template("index.html")


# Route to insert student data
@app.route("/add", methods=["POST"])
def add_student():

    # Get student name from HTML form
    name = request.form["name"]

    # Get student email from HTML form
    email = request.form["email"]

    # Get student age and convert it into integer
    age = int(request.form["age"])

    # SQL query to insert student information
    sql = "INSERT INTO students2 (name, email, age) VALUES (%s, %s, %s)"

    # Store values safely in MySQL
    values = (name, email, age)

    # Execute SQL query
    cur.execute(sql, values)

    # Save changes permanently in database
    con.commit()

    # Display success message on HTML page
    return render_template(
        "index.html",
        message="Student Registered Successfully!"
    )


# Run Flask application
if __name__ == "__main__":

    # Start local development server
    app.run(debug=True)
