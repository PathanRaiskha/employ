import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employ',
  imports: [FormsModule,CommonModule],
  templateUrl: './employ.component.html',
  styleUrl: './employ.component.css'
})
export class EmployComponent {

  abc:number=0;
  
  employObj: any[] = []; // List of companies
  empobj: any = {}; // Object to store form data
  isEditMode: boolean = false; // Flag for add/update mode
  UpdateObj:any={
    companyID:'',
    companyName:"",
    companyAdrress:"",
    companyMail:""
  }
  


  http=inject(HttpClient)

  ngOnInit() {
    this.GetAllEmploy();
  }

  constructor() {}

  // Open modal for adding a company
  openModalForAdd() {
    this.isEditMode = false;
    this.empobj = {};// Clear the object for a new entry
   
  }

  // Open modal for editing an existing company
  openModalForEdit(empobj: any) {
    this.isEditMode = true;
    this.empobj = { ...empobj }; // Clone the object to avoid reference issues
    
  }

  GetAllEmploy(){
    this.http.get<any>("https://localhost:7101/api/employ").subscribe((data)=>{
      this.employObj=data.result
    })
  }
  
  deleteEmploy(id:number){

    this.http.delete<any>("https://localhost:7101/api/employ/"+id).subscribe({
      next: (response) => console.log('Response:', response),
      error: (err) => console.log('Error:', err)
    });
  

  }
  Update(id:number,item:any){
      this.http.put<any>("https://localhost:7101/api/employ/"+id ,item).subscribe((data)=>{
        if (data.success){
          alert(data.massege);
          
  
        }
  
      });
  }

  AddEmploy(item:any){
    this.http.post<any>("https://localhost:7101/api/employ",item).subscribe((data)=>{
      if(data.success){
       alert(data.massege)
      this. GetAllEmploy();
      }
 
     })

  }
  update(item:any){
    this.UpdateObj=item
  }
  
}


