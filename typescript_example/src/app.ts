enum GenderType {
    Male = 'male',
    Female = 'female'
}

interface Student {
    readonly id : number,
    name? : string,
    gender : 'male' | 'female',
    addComment? : (comment: string) => string
}

function getStudentInfo(id:number):Student{
    return{
        id : 30,
        name : 'Kim Cheolsu',
        gender : 'male'
    }
}

function saveStudentInfo(student:Student):void{
    // student.id = 50; //error : cannot assign to 'id' because it is a read-only property
    student.gender = 'male';
}

let student1 = {
    id: 40,
    name : 'Jeon Wuchi',
    gender : 'male'
}

// saveStudentInfo(student1);