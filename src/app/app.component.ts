import { Component, VERSION,OnInit } from '@angular/core';
import { Temp } from './temp';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
 temp: Temp[];


 public temSelected:Number;
 x:String;

 moditext:String;

 pageheader:string="Temperature Calculator";
 public v:number;
 public Status: number ;


 u:String;
 last:String;


ngOnInit(){
  this.temp=[
    {Id:1,Name:"Celcius"},
    {Id:2,Name:"Faranhite"},
    {Id:3,Name:"Kelvin"} ];


}
onTemSelected(val:any){
 this.customFunction(val);
}
customFunction(val:any){
  this.moditext=val;
}

 
 kelvin(){
  var a= this.v +273.15;
  var b= (this.v-32)*5/9 + 273;
  this.last="K";
 if (this.temSelected==1){
  
   this.Status=a;
   
  
  }
 
  if (this.temSelected==2){
  
  this.Status=b;
   
  
  }
  if (this.temSelected==3){
  
  this.Status=this.v;
  }
}
cel(){
  var d= (this.v - 32) * 5/9;
  var f= this.v - 273.15 ;
  this.last="C";
 if (this.temSelected==2){
  
   this.Status=d;
   
  
  }
 
  if (this.temSelected==3){
  
  this.Status=f;
   
  
  }
  if (this.temSelected==1){
  
  this.Status=this.v;
  }
}
fan(){
  var e= (this.v*9/5) + 32;
  var g= (this.v- 273.15) * 9/5 + 32;
  this.last="F";
 if (this.temSelected==1){
  
   this.Status=e;
   
  
  }
 
  if (this.temSelected==3){
  
  this.Status=g;
   
  
  }
  if (this.temSelected==2){
  
  this.Status=this.v;
  }
}
}



    

  
