document.addEventListener("DOMContentLoaded", () => {
    // Select form and table body elements
    const studentForm = document.getElementById('studentForm');
    
    // Retrieve student data from localStorage or initialize an empty array
    let students = JSON.parse(localStorage.getItem('students')) || [];
    let tableDisplay = document.getElementsByClassName('.tableSection')
    
      
    // Function to render students in the table
    const renderStudents = () => {
        const tableData = document.querySelector('.tableData');
        tableData.innerHTML = ''; // Clear existing table data

        students.forEach((element, index) => {
            const tr = document.createElement('tr');
            tr.id = element.id;
            tr.innerHTML = `<td>${element.id}</td><td>${element.name}</td><td>${element.email}</td><td>${element.contact}</td>`;

            const button1 = document.createElement('button');
            button1.innerHTML = 'Update';
            button1.classList.add('button');
            button1.id = `update-${element.id}`;
            button1.addEventListener('click', () => updateStudent(index));
            tr.appendChild(button1);

            const button2 = document.createElement('button');
            button2.innerHTML = 'Delete';
            button2.style.marginLeft = '20px';
            button2.id = `delete-${element.id}`;
            button2.addEventListener('click', () => deleteStudent(index));
            tr.appendChild(button2);

            tableData.appendChild(tr);
        });
    };

    // Function to add a new student
    const addStudent = (student) => {
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));
        renderStudents();
    };

    // Function to update a student
    const updateStudent = (index) => {
        const student = students[index];
        const newName = prompt("Enter new name:", student.name);
        const newEmail = prompt("Enter new email:", student.email);
        const newContact = prompt("Enter new contact:", student.contact);

        if (newName && newEmail && newContact) {
            students[index] = { ...student, name: newName, email: newEmail, contact: newContact };
            localStorage.setItem('students', JSON.stringify(students));
            renderStudents();
        }
    };

    // Function to delete a student
    const deleteStudent = (index) => {
        if (confirm("Are you sure you want to delete this student?")) {
            students.splice(index, 1);
            localStorage.setItem('students', JSON.stringify(students));
            renderStudents();
        }
    };

    // Form submission handler
    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const student = {
            name: e.target.studentName.value.trim(),
            id: e.target.studentID.value.trim(),
            email: e.target.emailID.value.trim(),
            contact: e.target.contactNo.value.trim(),
        };

        // Validate form fields
        if (!student.name || !student.id || !student.email || !student.contact) {
            alert('Please fill all the fields');
            return;
        }

        addStudent(student);
        e.target.reset();
    });

    // Initial render of students
    renderStudents();
});
