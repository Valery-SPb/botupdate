/* 
Class work__________________________________________________
function createEmployee(id, name, birthYear, salary) {
	return {id, name, birthYear, salary};
}
const empl1 = createEmployee(123, "Vasya", 2000,1000);
const empl2 = createEmployee(123, "Vasya", 2000,1000);
console.log(empl1==empl2);
Home work__________________________________________________
Takes following parameters
1.1.1.	nEmployees - Number of being created Employee objects
1.1.2.	idDigits – number of digits of an ID value, for example if idDigits equals 4, it means that the random ID values should be in the range [1000, 9999]
1.1.3.	minSalary – minimal salary value (a salary value that is less than minSalary cannot be)
1.1.4.	maxSalary – maximal salary value (a salary value that is greater than maxSalary cannot be)
1.1.5.	minBirthYear – minimal birthYear value (a birth year value that is less than  minBirthYear  cannot be)
1.1.6.	maxBirthYear – maximal birthYear value (a birth year value that isgreater than  maxBirthYear  cannot be) 
1.2.	Returns array of the random Employee objects

 1.3.	Implementation hints
1.3.1.	Runs nEmployees iterations
1.3.2.	In each iteration
1.3.2.1.	Gets random ID value as a number comprising of a given idDigits. Make sure that the generated value should be a unique one in the result array
1.3.2.2.	A name value is a string as the concatenation of “name” and ID value from #1.3.2.1
1.3.2.3.	Gets random salary value in the range [minSalary, maxSalary]
1.3.2.4.	Gets random birthYear value in the range [minBirthYear, maxBirthYear]
1.3.2.5.	Calls the factory method createEmployee and a result of the call pushes in a result array*/
let RandomEmployeesArr = createRandomEmployees (5, 3, 5000, 10000, 1970, 2014)
console.log(RandomEmployeesArr);
console.log(`Average Age is ${getAverageAge(RandomEmployeesArr)}`);
console.log(`Salary is ${getEmployeesBySalary(RandomEmployeesArr, 6000, 9000)}`);
console.log(`Encrease ${increaseSalary(RandomEmployeesArr, 8000, 10)}---`);

function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary,minBirthYear , maxBirthYear) {
	let EmployeeArr = [];
	const MinDigits = 10 ** (idDigits-1);
	const MaxDigits = 10 ** (idDigits);
	for (let i = 0; i < nEmployees; i ++) {
		const id = Math.floor(Math.random() * (MaxDigits - MinDigits) + MinDigits);
		const name = "name" + id;
		const salary = Math.floor(Math.random() * (maxSalary -  minSalary + 1) +  minSalary);
		const BirthYear = Math.floor(Math.random() * (maxBirthYear -  minBirthYear + 1) +  minBirthYear);
		EmployeeArr.push(createOneEmp(id, name, salary, BirthYear));
	}
	return EmployeeArr;
}
function createOneEmp(id, name, salary, BirthYear) {
return {id, name, salary, BirthYear};
}
/*
2.	Write function getAverageAge returning a value of the average age of the Employee object
2.1.	Takes one parameter as an array of Employee objects
2.2.	Returns an average value of all age values
2.3.	Implementation hints
2.3.1.	Apply “reduce”
2.3.2.	Age value is computed as new Date().getFullYear() - empl.birthYear,
		where new Date() returns Date object of the current date;
		method getFullYear returns year value;
		empl.birthYear - value of the birthYear of the employee referred by the reference empl
*/
function getAverageAge(RandomEmployeesArr) {
	let BirthArr = [];
	RandomEmployeesArr.forEach(element => BirthArr.push(new Date().getFullYear() - element.BirthYear));
	return Math.floor(BirthArr.reduce((a,b) => (a+b)) / BirthArr.length);
}
/*
3.	Write function getEmployeesBySalary returning a sorted by salary array of the Employee object having the salary value in a given range
3.1.	Takes three following parameters
3.1.1.	Array of the Employee objects
3.1.2.	salaryFrom – minimal salary in a given range
3.1.3.	salaryTo – maximal salary in a given range
3.2.	 Returns the sorted by salary array of the Employee objects having salary in the range [salaryFrom, salaryTo]
3.3.	Implementation hints:
3.3.1.	Apply “filter” and “sort”*/
function getEmployeesBySalary(RandomEmployeesArr, salaryFrom, salaryTo) {
	let SalaryArr = [];
	RandomEmployeesArr.forEach(element => SalaryArr.push(element.salary));
	SalaryArr = SalaryArr.filter(value => (value > salaryFrom && value < salaryTo));
	SalaryArr = SalaryArr.sort((a,b) => (a-b));
	return SalaryArr;
}
/*
4.	Write function increaseSalary increasing salary values of the Employee objects having salary less than a given value
4.1.	Takes three following parameters
4.1.1.	Array of the Employee objects
4.1.2.	borderSalary – salary value, the Employee objects having salary less which, will have a greater salary
4.1.3.	percent  - percent value, on which the salary values of the being found Employee objects should be increased, for example
4.1.4.	Example, borderSalary = 8000, percent = 10, Employee objects having salary less than 8000 will have on 10% greater salary,
		for example an employee has salary 6000 after performing that function that employee will have salary 6600
4.1.5.	Implementation hints
4.
1.5.1.	Apply “forEach”
*/
function increaseSalary (RandomEmployeesArr, borderSalary, percent) {
	let ResArr = RandomEmployeesArr.slice();
	ResArr.forEach(element => {
		if (element.salary < borderSalary) {
			element.salary = (element.salary + element.salary / 100 * percent);
		}
	})
	console.log(ResArr);
	return ResArr;
}