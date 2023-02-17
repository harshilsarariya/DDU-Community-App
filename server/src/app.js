const express = require('express');
const app = express();

const PORT = 9500 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//imports routers
const landing_router = require('./routers/landing-router');
const google_auth_router = require('./routers/google-auth-router');

const club_router = require('./routers/club-router');
const student_router = require('./routers/student-router');

app.get("/", landing_router);
app.post("/login", landing_router);
app.get("/auth", google_auth_router);


// students
app.post("/get-student", student_router);
app.put("/update-student", student_router);


//clubs
app.post("/create-club", club_router);
app.post("/get-club", club_router);
app.put("/update-club", club_router);
app.delete("/delete-club", club_router);

app.post("/club/add-member", club_router);
app.delete("/club/remove-member", club_router);
app.post("/club/add-admin", club_router);
app.delete("/club/remove-admin", club_router);

app.post("/club/add-announcement", club_router);
app.post("/club/get-announcement", club_router);
app.delete("/club/delete-announcement", club_router);

app.post("/club/add-announcement", club_router);
app.delete("/club/delete", club_router);

app.post("/club/add-member", club_router);


app.listen(PORT, (req, res) => {
    console.log(`server runs on http://127.0.0.1:${PORT}`);
});

