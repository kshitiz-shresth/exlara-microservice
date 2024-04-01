const express = require('express');
const axios = require('axios');
const userData = require('./marksheetService');
const app = express();
const port = 3000;



app.get('/api/get-marksheets', async (req, res) => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/get-user', {
            headers: req.headers,
        });

        const data = response.data;
        const marksheet = userData.filter((item) => item.email === data.email)?.[0]
        if (!marksheet) res.json({ success: false, message: "No Marksheet found for this user" });

        // Calculate total marks and average score for the marksheet
        const totalMarks = marksheet.marksheets.reduce((total, sheet) => total + sheet.score, 0);
        const averageScore = totalMarks / marksheet.marksheets.length;

        // Define grading criteria based on average score
        let grade;
        if (averageScore >= 90) {
            grade = 'A';
        } else if (averageScore >= 80) {
            grade = 'B';
        } else if (averageScore >= 70) {
            grade = 'C';
        } else if (averageScore >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        // Calculate percentage
        const percentage = (totalMarks / (marksheet.marksheets.length * 100)) * 100;

        res.json({
            success: true,
            data: {
                ...marksheet,
                grade,
                percentage
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Not Authorized From Express JS' });
    }
});

app.get('/api/check-pass-fail', async (req, res) => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/get-user', {
            headers: req.headers,
        });

        const data = response.data;
        const marksheet = userData.filter((item) => item.email === data.email)?.[0]
        if (!marksheet) res.json({ success: false, message: "No Marksheet found for this user" });

        // Calculate total marks for the marksheet
        const totalMarks = marksheet.marksheets.reduce((total, sheet) => total + sheet.score, 0);

        // Define passing criteria
        const passingMarks = marksheet.marksheets.length * 50; // Assuming passing marks as 50 for each subject

        // Check if the user has passed or failed
        const passFailStatus = totalMarks >= passingMarks ? 'Pass' : 'Fail';

        res.json({
            success: true,
            data: {
                ...marksheet,
                passFailStatus
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Not Authorized From Express JS' });
    }
});


app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});
