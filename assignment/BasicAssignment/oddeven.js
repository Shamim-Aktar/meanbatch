let oddEven=function(num){

	if(num%2==0){

		return `${num}`+ ' '+ 'is'+ ' '+'even'
	}

	else{
		return `${num}`+ ' '+ 'is'+ ' '+'odd'
	}
}

document.querySelector('h3').innerHTML=oddEven(4);