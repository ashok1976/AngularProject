import{Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import{IEmployee} from './../interface/user'
import { map } from 'rxjs/operators';

@Injectable({
providedIn:'root'

})

export class EmployeeList{
 employees: any[];
 constructor(){
        this.employees = [
                {code: 'emp101', name: 'Tom', gender: 'Male',annualSalary: 5500, dateOfBirth: '25/6/1988'},
                {code: 'emp102', name: 'Alex', gender: 'Male',annualSalary: 5700.95, dateOfBirth: '9/6/1982'},
                {code: 'emp103', name: 'Mike', gender: 'Male',annualSalary: 5900, dateOfBirth: '12/8/1979'},
                {code: 'emp104', name: 'Mary', gender: 'Female',annualSalary: 6500.826, dateOfBirth: '14/10/1980'}
                
            ];
        }
    
 getEmployees(): IEmployee[]{
             this.employees = [
                {code: 'emp101', name: 'Tom', gender: 'Male',annualSalary: 5500, dateOfBirth: '25/6/1988'},
                {code: 'emp102', name: 'Alex', gender: 'Male',annualSalary: 5700.95, dateOfBirth: '9/6/1982'},
                {code: 'emp103', name: 'Mike', gender: 'Male',annualSalary: 5900, dateOfBirth: '12/8/1979'},
                {code: 'emp104', name: 'Mary', gender: 'Female',annualSalary: 6500.826, dateOfBirth: '14/10/1980'}
                
            ]; 
            return this.employees
        }
        getEmployeeByCode(id:string){  
            console.log(id+" dddddddddd")
           /*  return this.employees.find(empid=> {
              empid.code === id;
                console.log( empid.code+"-=-" +id )
            
            })  
         */
           //this.employees.map(empid => empid.find(country => empid.code === code));

        }
    }
 