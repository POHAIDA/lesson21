//1 завданя
const car={
    model: 'ford',
    year: 2000,
    color: 'black',
    signal() {
        alert('fa!fa!');
    }
}
car.type = 'electrick';
car.color='blue'
car.signal()

//2 
const salaries = {
    frontend: 12000,
    backend: 10000,
    designer: 8000,
    dayPay() {
        alert('We must pay salary on Tuesday!');
    },
     total() { 
      let sum=0;
      for(const key in salaries){
        if(Number(salaries[key]))
        sum+=this[key]
      }
      console.log(sum)
    }
}
salaries.total()


//3
function Notebook(brand,system,cost){
  this.brand=brand;
  this.system=system;
  this.cost=cost;
}
let dell=new Notebook('Dell','windows',800)
let apple= new Notebook('Apple','MAC OS',1700)
console.log(dell)
console.log(apple)

//4
function Notebook(brand,system,cost){
  this.brand=brand;
  this.system=system;
  this.cost=cost;
  this[Symbol.toPrimitive]=function(hint){
    console.log(hint);
    switch(hint){
      case 'string':
        return this.brand
      case 'number':
        return this.cost
      case 'default':
        return this.brand +' '+ this.system +' '+ this.cost+" // "
    }
  }
}
let dell=new Notebook('Dell','windows',800)
let apple= new Notebook('Apple','MAC OS',1700)






