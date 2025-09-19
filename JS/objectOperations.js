var employees = [
    { id: "E01", name: "Alice Johnson", department: "HR", salary: 45000 },
    { id: "E02", name: "Bob Smith", department: "IT", salary: 55000 },
    { id: "E03", name: "Charlie Davis", department: "Finance", salary: 60000 },
    { id: "E04", name: "Diana Wilson", department: "Marketing", salary: 48000 },
    { id: "E05", name: "Ethan Brown", department: "Operations", salary: 50000 },
    { id: "E06", name: "Fiona Lee", department: "IT", salary: 62000 },
    { id: "E07", name: "George Martin", department: "Sales", salary: 47000 }
];

// total no of employee 

console.log(employees.length);

// display names of employess

let empName=employees.map((emp)=>emp.name);

console.log(empName);


// Employee names, salary greater than > 50000

let empNamesgt=employees.filter((emp)=>emp.salary>50000).map((emp)=> emp.name);

console.log(empNamesgt);

// Employees having dep = IT
console.log("---------IT Employees------------");

let itEmployees = employees.filter((emp)=>emp.department=='IT').map((emp)=>emp.name);
console.log(itEmployees);

// highest paid employee

let highpaidemp=employees.reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1:emp2)

console.log(highpaidemp);

// sort emp order by ssalary desc

let sortedEmp= employees.sort((e1,e2)=>e2.salary-e1.salary).map((emp)=>emp.name)

console.log(sortedEmp);

// total income

let salaryTotal = employees.reduce((sum, emp) => sum + emp.salary, 0); // sum is initialized as 0

console.log(salaryTotal);
