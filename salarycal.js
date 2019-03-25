
function getSalary(hours,pph ) {
   hours = document.getElementById("Hours").value;
   pph = document.getElementById("pph").value;
   salary = hours * pph;

if(document.getElementById("india").checked) {
    if(salary < 6221) {
    x = 0.10;
    }else if(6221 < salary && salary < 8921 ){
    x = 0.14;
    }else if(8921 < salary && salary < 14321){
    x = 0.20;
    }else if(14321 < salary && salary < 19901){
    x = 0.31;
    }else if(19901 < salary  && salary < 41411){
    x = 0.35;
    }else if( salary > 41411) {
    x = 0.47;
    }

       var tax = salary *  x ;
       var taxPersce = (tax / salary) * 100;
       var neto = salary - tax;
       document.getElementById("salary").innerHTML="Salary: " + "&#8377;"+ + salary.toFixed();
       document.getElementById("TAX").innerHTML="TAX: " + taxPersce.toFixed() + " %"; 
       document.getElementById("deduction").innerHTML="Tax Deduction: " +"&#8377;"+ +  tax.toFixed();
       document.getElementById("neto").innerHTML="Your Neto Salary: " + "&#8377;"+ +  neto.toFixed(); 

}else if(document.getElementById("USA").checked) {
      
        x = 0.35; 
        var Ussalary = salary;
        var Ustax = salary * x;
        var Usneto = Ussalary - Ustax;
        var UtaxPersce = (Ustax / salary) * 100;
        var Uneto = salary - Ustax;
        document.getElementById("salary").innerHTML="Salary: " + Ussalary.toFixed() + " $";
        document.getElementById("TAX").innerHTML="TAX: " + UtaxPersce.toFixed() + " %"; 
        document.getElementById("deduction").innerHTML="Tax Deduction: " + Ustax.toFixed() + " $";
        document.getElementById("neto").innerHTML="Your Neto Salary: " + Uneto.toFixed() + " $"; 

}
  
  return neto;

}
