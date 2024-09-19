const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, salary, title, manager, employees = []) {
        super(name, salary, title, manager);
        this.employees = employees;
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    _totalSubSalary() {
        let totalSalary = 0;

        for (let employee of this.employees) {
            if (employee instanceof Manager) {
                totalSalary += employee.salary + employee._totalSubSalary();
            } else {
                totalSalary += employee.salary;
            }
        }
        return totalSalary;
    }

    calculateBonus(multiplier) {
        let bonus = (this.salary + this._totalSubSalary()) * multiplier;
        return bonus;
    }
}

//const splinter = new Manager('Splinter', 100000, 'Sensei');
//console.log(splinter);

//const splinter = new Manager('Splinter', 100000, 'Sensai');
//console.log('Before: ', splinter);

//const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
//const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
//const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
//const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

//splinter.addEmployee(leo);
//splinter.addEmployee(mikey);
//splinter.addEmployee(donnie);
//splinter.addEmployee(raph);

//console.log('After: ', splinter);

//const splinter = new Manager('Splinter', 100000, 'Sensei');
//const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
//const raph = new Manager('Raphael', 90000, 'Ninja', leo);
//const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
//const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

//console.log(splinter.calculateBonus(0.05)); // => 22500
//console.log(leo.calculateBonus(0.05)); // => 17500
//console.log(raph.calculateBonus(0.05)); // => 13000

module.exports = Manager;