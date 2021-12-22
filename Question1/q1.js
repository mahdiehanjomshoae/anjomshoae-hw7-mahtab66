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
 const networkClass1 = new Person("network", "3", 30,"mmmm");
 console.log(`{ClassName :${networkClass1.ClassName}, classUnit:${networkClass1.classUnit}, ClassCapacity:${networkClass1.ClassCapacity}  }`)
 const softEngineeringClass1 = new Person("network", "4", 30,"true");
 console.log(`{ClassName :${softEngineeringClass1.ClassName}, classUnit:${softEngineeringClass1.classUnit}, ClassCapacity:${softEngineeringClass1.ClassCapacity}  }` );

 softEngineeringClass1.addMyproj();
 console.log(`{ClassName :${ softEngineeringClass1.ClassName}, classUnit:${ softEngineeringClass1.classUnit}, ClassCapacity:${ softEngineeringClass1.ClassCapacity} ,project:${ softEngineeringClass1.proj} }`);
 networkClass1.addMybook();
 console.log(`{ClassName :${networkClass1.ClassName}, classUnit:${networkClass1.classUnit}, ClassCapacity:${networkClass1.ClassCapacity} ,book:${networkClass1.book} }`);
 
 