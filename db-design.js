db.zenclass.insertMany(
    [{
        "student":"kavya",
        "user":"present",
        "codekata": 50,
        "attendance": "10 oct 2020",
        "topic":"DOM tree, CSSOM tree",
        "task": "DOM tree task task",
        "company_drives":"file" ,
        "mentor":"ragavkumar" 
        },
        {
        "student":"anitha",
        "user":"present",
        "codekata": 55,
        "attendance": "11 oct 2020",
        "topic":"Request & Response cycle",
        "task": "Request & Response cycle task",
        "company_drives": "file" ,
        "mentor": "ragavkumar" 
        },
        {
        "student":"yara",
        "user":"absent",
        "codekata": 45,
        "attendance": "12 oct 2020",
        "topic":"Data types",
        "task": "Data types task",
        "company_drives": "file" ,
        "mentor": "ragavkumar" 
        },
        {
        "student":"madhu",
        "user":"present",
        "codekata": 65,
        "attendance": "13 oct 2020",
        "topic":"Window & document object",
        "task": "Window & document object task",
        "company_drives": "file" ,
        "mentor": "ragavkumar" 
        },
        {
        "student":"kirthika",
        "user":"present",
        "codekata": 35,
        "attendance": "14 oct 2020",
        "topic":"Array and JSON iteration",
        "task": "Array and JSON iteration task",
        "company_drives": "file" ,
        "mentor": "ragavkumar" 
        },
        {
        "student":"arun",
        "user":"absent",
        "codekata": 78,
        "attendance": "15 oct 2020",
        "topic":"XMLHTTPRequest",
        "task": "XMLHTTPRequest task",
        "company_drives": "file" ,
        "mentor": "ragavkumar" 
        },
        {
        "student":"bala",
        "user":"present",
        "codekata": 68,
        "attendance": "16 oct 2020",
        "topic":"types of function",
        "task": "function task",
        "company_drives": "file" ,
        "mentor": "ragavkumar" 
        },
        {
        "student":"dana",
        "user":"present",
        "codekata": 58,
        "attendance": "17 oct 2020",
        "topic":"MRF - array method",
        "task": "MRF - array method task",
        "company_drives": "file" ,
        "mentor": "ragavkumar" 
        },
        {
        "student":"gayathri",
        "user":"present",
        "codekata": 88,
        "attendance": "18 oct 2020",
        "topic":"error handling",
        "task": "ES5 vs ES6 task",
        "company_drives": "file" ,
        "mentor": "ragavkumar" 
        },
        {
        "student":"shiva",
        "user":"present",
        "codekata": 98,
        "attendance": "19 oct 2020",
        "topic":"Inline vs block element",
        "task": "Inline vs block element task",
        "company_drives": "file" ,
        "mentor": "ragavkumar" 
        },
        {
        "student":"gokul",
        "user":"present",
        "codekata": 53,
        "attendance": "22 oct 2020",
        "topic":"Box model - margin, padding, border",
        "task": "layout design task",
        "company_drives": "file" ,
        "mentor": "ragavkumar" 
        },
        {
        "student":"krishna",
        "user":"absent",
        "codekata": 55,
        "attendance": "24 oct 2020",
        "topic":"DOM Manipulation",
        "task": "Method in document object task",
        "company_drives": "file" ,
        "mentor": "ragavkumar" 
        },
        {
        "student":"zara",
        "user":"present",
        "codekata": 57,
        "attendance": "26 oct 2020",
        "topic":"Callback - Event loop",
        "task": "Callback - Event loop task",
        "company_drives": "file" ,
        "mentor": "ragavkumar" 
        },
        {
        "student":"aditya",
        "user":"present",
        "codekata": 61,
        "attendance": "28 oct 2020",
        "topic":"Promise",
        "task": "Promise task",
        "company_drives": "file" ,
        "mentor": "ragavkumar" 
        },
        {
        "student":"samaya",
        "user":"present",
        "codekata": 69,
        "attendance": "30 oct 2020",
        "topic":"Async/Await",
        "task": "Async/Await task",
        "company_drives": "file" ,
        "mentor": "ragavkumar" 
        },
        {
            "student":"samaya",
            "user":"present",
            "codekata": 71,
            "attendance": "29 oct 2020",
            "topic":"Async/Await",
            "task": "Async/Await task",
            "company_drives": "file" ,
            "mentor": "ragavkumar" 
            },
            {
                "student":"samaya",
                "user":"present",
                "codekata": 69,
                "attendance": "27 oct 2020",
                "topic":"Async/Await",
                "task": "Async/Await task",
                "company_drives": "file" ,
                "mentor": "ragavkumar" 
                }]
    )

// Find all the topics and tasks which are thought in the month of October
db.zenclass.find({}, {topic:1, task:1})

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020


// Find all the company drives and students who are appeared for the placement.
db.zenclass.find({}, {company_drives:1, student:1})

// Find the number of problems solved by the user in codekata
db.zenclass.aggregate([
    {$match: {student: 1}}
])

// Find all the mentors with who has the mentee's count more than 15
db.zenclass.find({mentor:1}).count()

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.zenclass.aggregate([
    {$match: {attendance:"absent"}}
])