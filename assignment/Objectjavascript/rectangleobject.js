class Rectangle {
  constructor(a, b) {
    this.length = a;
    this.width = b;
   
    //this.area = a * b;
    //this.perimeter = 2 * (a + b);
  }
}

Rectangle.prototype.getArea=function(){
	return `${this.length}`*`${this.width}`
}



let re=new Rectangle(5,6)
let ar=new Rectangle(4,5)
document.querySelector('#displayProperty1').innerHTML="length" + " " + re.length + " "+" "+ "width"+ " "+re.width

document.querySelector('#displayProperty2').innerHTML="length" + " " + ar.length + " "+" "+ "width"+ " "+ar.width



re.length=8
re.width=6
document.write("Modified length"+ " "+re.length +'</br>')
document.write("Modified width"+ " "+re.width)
