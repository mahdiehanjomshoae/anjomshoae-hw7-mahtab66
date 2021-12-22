function Person1(ClassName, classUnit, ClassCapacity) {
    this.ClassName = ClassName;
    this.classUnit = classUnit;
    this.ClassCapacity = ClassCapacity;
}
function networkClass1 (project){
   super(ClassName, classUnit, ClassCapacity)
   this.project=project
   
}
function softEngineeringClass1 (book){
   this.book=book
}
const networkClass2 = new networkClass1("network", "3", 30,"true");
   const softEngineeringClass2 = new softEngineeringClass1("softEngieering", "3", "50","bookman");
  console.log(`{ClassName :${networkClass2.ClassName}, classUnit:${networkClass2.classUnit}, ClassCapacity:${networkClass2.ClassCapacity} ,project:${networkClass2.project} }`)
  console.log(`{ClassName :${softEngineeringClass2.ClassName}, classUnit:${softEngineeringClass2.classUnit}, ClassCapacity:${softEngineeringClass2.ClassCapacity} ,book:${softEngineeringClass2.book} }`)
//   class networkClass extends Person1{
//      constructor(ClassName, classUnit, ClassCapacity,project){
//         super(ClassName, classUnit, ClassCapacity )
//         this.project=project 
//      }
//  }
//  class softEngineeringClass extends Person1{
//     constructor(ClassName, classUnit, ClassCapacity,book){
//        super(ClassName, classUnit, ClassCapacity )
//        this.book=book 
//     }
// }
  const softEngineeringClas = new Person1("softEngieering", "3", "50");
  const networkClas = new Person1("network", "3", 30);
  console.log (`{ClassName :${softEngineeringClas.ClassName}, classUnit:${softEngineeringClas.classUnit}, ClassCapacity:${softEngineeringClas.ClassCapacity} }` )
  console.log(`{ClassName :${networkClas.ClassName}, classUnit:${networkClas.classUnit}, ClassCapacity:${networkClas.ClassCapacity}} ` )
 
 