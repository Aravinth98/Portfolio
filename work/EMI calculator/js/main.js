var rest_button=document.getElementById('reset');

var calculate=document.getElementById('submit');
calculate.addEventListener('click',function(){
var P=document.getElementById("amount").value;
var r=document.getElementById('int').value;
var N=document.getElementById('period').value;
var R=(r/100)/12;
var monthlyInterest=(R*P);
var numerator=Math.pow((1+R),N);
var denominator=numerator-1;
var sp=numerator/denominator;
var EMI=((P*R)*sp);
var result = EMI.toFixed(2);
var totalAmount = EMI*N;
var totalInterest = totalAmount-P;
var downPayment = P*(20/100);
document.getElementById('result').value=EMI;
document.getElementById('result2').value=totalInterest;
document.getElementById('result3').value=downPayment;
document.getElementById('result4').value=totalAmount;

var res=document.getElementById('output');
res.style.display="block";
});
  
var rest_button=document.getElementById('reset');
rest_button.addEventListener('click',function(){
	document.getElementById("amount").value=0;
	document.getElementById('int').value=0;
	document.getElementById('period').value=0;
	document.getElementById('result').value=0;
	document.getElementById('result2').value=0;
	document.getElementById('result3').value=0;
	document.getElementById('result4').value=0;
	});