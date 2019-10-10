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

let area=new Rectangle(3,4)
document.querySelector('#areadisplay').innerHTML= "area of rectangle"+" "+area.getArea()