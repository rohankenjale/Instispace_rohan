function fetchStudents() {
    fetch('https://1qy9d2uuyg.execute-api.ap-northeast-1.amazonaws.com/default/Students-API')
      .then(response => response.json())
      .then(students => {
        students.sort((a, b) => a.name.localeCompare(b.name));
        for (const student of students) {
            console.log(student.name);
          }
      })
      .catch(error => console.error(error));
  }
// fetchStudents()
function fetchStudentsByCollege(college) {
    fetch('https://1qy9d2uuyg.execute-api.ap-northeast-1.amazonaws.com/default/Students-API')
      .then(response => response.json())
      .then(students => {
        const filteredStudents = students.filter(student => student.college === college);
        for (const student of filteredStudents) {
            console.log(student.name);
          };
      })
      .catch(error => console.error(error));
  }
// fetchStudentsByCollege('Brigham Young University')
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/students/sort', async (req, res) => {
  const students = await fetchStudents();
  res.json(students);
});

app.get('/students/filter/:college', async (req, res) => {
  const college = req.params.college;
  const filteredStudents = fetchStudentsByCollege(college);
  res.json(filteredStudents);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
