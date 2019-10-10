let maxNumber=function(num1, num2, num3){

		if(num1>num2 && num1>num3)
				{
					return `${num1}`+ ' '+ 'is'+ ' '+'greatest'
				}
				else if(num2>num1 && num2>num3)
				{
					return `${num2}`+ ' '+ 'is'+ ' '+'greatest'
				}
				else if(num3>num1 && num3>num1)
				{
					return `${num3}`+ ' '+ 'is'+ ' '+'greatest'
				}
}

document.querySelector('#firstcase').innerHTML=maxNumber(1,2,3);
document.querySelector('#secondcase').innerHTML=maxNumber(1,3,2);
document.querySelector('#thirdcase').innerHTML=maxNumber(3,2,1);