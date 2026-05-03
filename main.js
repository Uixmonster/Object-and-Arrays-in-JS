'use strict';

const student1 = {
    name: 'Andrew',
    avgGrade: 4,
};

const student2 = {
    name: 'Maria',
    avgGrade: 6,
};

const student3 = {
    name: 'Petra',
    avgGrade: 3,
};


const maleStudents = [student1];
const femaleStudents = [student2, student3];

const allStudents = [...maleStudents, ...femaleStudents];
const checkedStudents = [];


console.log({ allStudents });

for (let key in student1) {
    console.log(key);
}

allStudents.forEach((val) => {
    console.log(val);
});

// ==========================================================================

allStudents.forEach((value) => {
    checkedStudents.push({ ...value, checked: true });
});

console.dir({ checkedStudents });

const tenGradeStudents = allStudents.map((val) => {
    return {
        ...val,
        avgGrade: val.avgGrade * 2
    };
});

console.log(tenGradeStudents);

// const redDiplomaStudents = allStudents.filter((val) => {
//     if (val.avgGrade < 5) {
//         return false;
//     }
//     return true;
// });

const redDiplomaStudents = allStudents.filter((val) => val.avgGrade === 6);

console.log(redDiplomaStudents);


const arrNumbers = [1, 2, 3, 4];
console.log(arrNumbers.includes(3));

console.log('--------------------------------------');


// =======================================================


const ourSchool = allStudents.reduce((acc, value) => ({
    students: [...acc.students, value.name],
    studentsGrade: [...acc.studentsGrade, value.avgGrade]
}), {
    students: [],
    studentsGrade: []
});

console.log(ourSchool);


// ============================================


const numbers = [1, 2, 3, 4, 5, 6, 7];


const numberSum = numbers.reduce((acc, val, idx) => {

    console.log(`index: ${idx} | acc: ${acc} + val: ${val} = ${acc + val}`);


    return acc + val;
}, 0);




console.log(numberSum);