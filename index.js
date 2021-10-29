const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1000

let user = {
    username: "Pellzrr",
    password: "password",
    email: "test@test.com",
    courses: {
        course: {
            classid: "CMSC2204",
            courseName: "Mobile",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        },
        course1: {
            classid: "CMSC1212",
            courseName: "HTML",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        },
        course2: {
            classid: "CMSC1255",
            courseName: "ServerSide",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        }
    }

}

app.get(`/getUser`, (req, res) => {
    try {
        return res.status(200).json(user);
    }
    catch {
        return res.status(500);
    }
});

app.post('/addUser', (req, res) => {
    try {
        let user1 = req.body.user1;

        console.log(user1);

        return res.status(200).json(`Added user ${user1.username} successfully`);
    }
    catch {
        return res.status(500);
    }
});

app.listen(PORT, () => {
    console.log(`Server Started on a port ${PORT}`);
});

