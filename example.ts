function log(a){
  console.log(a)
}
var a = "Hello World"
log(a)

let mybool:boolean = true
console.log(mybool)
let var1:string[] = ["Sachin", "Magar"]
console.log(var1)
//declare function create(o:object | null):void;
//create({prop:0})
enum color{blue, orange, green, yellow}
let clr:color = color.green
console.log(clr)

function display(){
  for(let i=1; i<=2;i++){
    console.log("Welcome to edurekha #:"+i)
  }
  //console.log("Final value of i is:"+i)
}
display()

let arrfun=()=>console.log("Hello..")
arrfun()
class myClass{
  var1:number
  constructor(k:number){
    this.var1 = k
  }
}

class myChild extends myClass{
  constructor(num:number){
    super(num)
  }
  display(){
    console.log(this.var1)
  }
}

let obj = new myChild(007)
obj.display()
