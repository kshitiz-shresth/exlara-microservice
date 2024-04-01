const faker = require("faker");

const userData = [
    {
        email: "er.kshitizshrestha@gmail.com",
        marksheets: [
            {
                id: "9a0a77f5-79e2-46f9-af70-f067abd77f83",
                subject: "Math",
                score: 80 //out of hundred  
            }
        ]
    }
];

// Function to generate random score between 0 and 100
const generateRandomScore = () => Math.floor(Math.random() * 101);

// Array of 15 subjects
const subjects = [
    "Math", "Science", "English", "History", "Geography",
    "Physics", "Chemistry", "Biology", "Computer Science", "Art",
    "Music", "Physical Education", "Literature", "Economics", "Foreign Language"
];

// Function to generate a random marksheet object with one of the 15 subjects
const generateRandomMarksheet = () => ({
    id: faker.datatype.uuid(),
    subject: faker.random.arrayElement(subjects),
    score: generateRandomScore()
});

// Add 14 different subjects to the first user's marksheets
for (let i = 0; i < 14; i++) {
    userData[0].marksheets.push(generateRandomMarksheet());
}

// Generate 4 random emails with subjects
const randomEmails = Array.from({ length: 4 }, () => ({
    email: faker.internet.email(),
    marksheets: Array.from({ length: 10 }, () => generateRandomMarksheet())
}));

// Add one specific email with subjects to userData
userData.push(...randomEmails, {
    email: "er.kshitizshrestha@gmail.com",
    marksheets: Array.from({ length: 10 }, () => generateRandomMarksheet())
});

module.exports = userData;
