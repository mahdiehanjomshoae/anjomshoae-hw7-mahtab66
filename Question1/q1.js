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
 networkClass1.addMybook();
 console.log(`{ClassName :${networkClass1.ClassName}, classUnit:${networkClass1.classUnit}, ClassCapacity:${networkClass1.ClassCapacity} ,book:${networkClass1.book} }`);
 console.log(networkClass1)
 
 const softEngineeringClass1 = new Person("network", "4", 30,"mmmm","mypro");
 softEngineeringClass1.addMyproj();
 console.log(`{ClassName :${ softEngineeringClass1.ClassName}, classUnit:${ softEngineeringClass1.classUnit}, ClassCapacity:${ softEngineeringClass1.ClassCapacity} ,project:${ softEngineeringClass1.proj} }`);
 console.log(softEngineeringClass1)
 
 