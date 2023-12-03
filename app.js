
function cude(x){
	let salary = document.getElementById("salary").value;
	let salarys = document.getElementById("salarys").value;
	let fullamount = document.getElementById("fullamount");
	let taxdedected = document.getElementById("taxdedected");
	let finalsalary = document.getElementById("finalsalary");
	let result =salary*salarys*0.01;
	let handsalary =salary-result;
	fullamount.innerHTML="total salary : "+salary;
	taxdedected.innerHTML="total tax amount : "+result;
	finalsalary.innerHTML="salary you get : "+handsalary;
}