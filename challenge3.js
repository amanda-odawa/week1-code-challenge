function calculateSalary (basicSalary, benefits) {
    const totalSalary = basicSalary + benefits;

    //Tax deduction categories from 1st July 2024 (KRA)
    let tax = 0;
    if (totalSalary <= 24000) {
        tax = totalSalary * 0.1; //10% tax rate
    }
    else if (totalSalary <= 32333) {
        tax = totalSalary * 0.25; //25%
    }
    else if (totalSalary <= 500000) {
        tax = totalSalary * 0.3; //30%
    }
    else if (totalSalary <= 800000) {
        tax = totalSalary * 0.325; //32.5%
    }
    else {
        tax = totalSalary * 0.35; //35%
    }


    //NHIF deductions as of 30 September 2024
    let nhif = 0;
    if (totalSalary <= 5999) nhif = 150;
    else if (totalSalary <= 7999) nhif = 300;
    else if (totalSalary <= 11999) nhif = 400;
    else if (totalSalary <= 14999) nhif = 500;
    else if (totalSalary <= 19999) nhif = 600;
    else if (totalSalary <= 24999) nhif = 750;
    else if (totalSalary <= 29999) nhif = 850;
    else if (totalSalary <= 34999) nhif = 900;
    else if (totalSalary <= 39999) nhif = 950;
    else if (totalSalary <= 44999) nhif = 1000;
    else if (totalSalary <= 49999) nhif = 1100;
    else if (totalSalary <= 59999) nhif = 1200;
    else if (totalSalary <= 69999) nhif = 1300;
    else if (totalSalary <= 79999) nhif = 1400;
    else if (totalSalary <= 89999) nhif = 1500;
    else if (totalSalary <= 99999) nhif = 1600;
    else nhif = 1700;

    //NSSF deductions using fixed sample for simplicity
    const nssf = 500;

    //Gross and net salary
    const grossSalary = totalSalary;
    const deductions = tax + nhif + nssf;
    const netSalary = grossSalary - deductions;

    //Output results
    console.log ('Gross Salary: KSh ' + grossSalary);
    console.log ('PAYE Tax: KSh ' + tax);
    console.log ('NHIF Deduction: KSh ' + nhif);
    console.log ('NSSF Deduction: KSh ' + nssf);
    console.log ('Total Deductions: KSh ' + deductions);
    console.log ('Net Salary: KSh ' + netSalary);
}

//Execute program with sample Basic salary of 75,000 and benefits of 3,000
calculateSalary(75000, 3000);
