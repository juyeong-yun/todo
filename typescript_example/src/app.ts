class Employee{
    constructor(
        private _fullName:string, 
        private _age:number, 
        public job:string){
    }

    get fullName(){
        return this._fullName;
    }

    set fullName(value:string){
        this._fullName = value;
    }

    employeeInfo = ():void => {
        console.log(`${this._fullName}의 직업은 ${this.job} 입니다.`)
    }
}


let employee1 = new Employee('민수', 28, '개발자');
// employee1.fullName='영희';
employee1.fullName = '철수';
console.log(employee1.fullName);
employee1.employeeInfo();