const Person = function(ClassName, classUnit, ClassCapacity,book,proj){
   this.ClassName = ClassName;
   this.classUnit = classUnit;
   this.ClassCapacity = ClassCapacity;
   this.addMybook = function(){
     this.book = book; 
     }
     this.addMyproj = function(){
       this.proj = proj; 
       }
}
 const networkClass1 = new Person("network", "3", 30,"mmm","mypro");

 console.log(JSON.stringify(networkClass1));
 networkClass1.addMybook();
 console.log(JSON.stringify(networkClass1) )
 
 const softEngineeringClass1 = new Person("network", "4", 30,"mmmm","mypro");
 console.log(JSON.stringify(softEngineeringClass1));
 softEngineeringClass1.addMyproj();
 console.log(JSON.stringify(softEngineeringClass1))
 
 