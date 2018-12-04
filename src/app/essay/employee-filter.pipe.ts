import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {
    transform(employees: any, searchTerm: any): any {
        if (!employees || !searchTerm) {
            return employees;
        }

        return employees.filter(employee => 
            employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}

// https://www.youtube.com/watch?v=sVTNaYBVP88-->
// http://csharp-video-tutorials.blogspot.com/2018/05/filter-pipe-in-angular.html
//https://www.youtube.com/watch?v=sVTNaYBVP88
//https://www.youtube.com/watch?v=1TFSibbnkj0

