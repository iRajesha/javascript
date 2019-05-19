class Group {
    constructor() {
    this.content =[];
   }
   add(item) {
      if(-1 === this.content.indexOf(item)) {
          this.content.push(item)
      }   
      return this
   }
   delete(item) {
   this.content = this.content.filter( i =>  i !== item)
   return this
   }
   
   has(item){
      return this.content.includes(item)
   }
   static from(obj){
       let group = new Group()
    for(let item of obj) {
     group.add(item)
     }
     return group;
   }
   [Symbol.iterator]() {return new GroupIterator(this)}
   
 
 } 
 
 class GroupIterator {
  constructor(group){
  this.group = group
  this.count = 0
  }
   next() {
      if(this.count >= group.content.length ) return {done:true}
      let value = {
          value :  group.content[this.count]       
      }
      this.count++
      return {value, done:false};
  }
 }
 
 
   let group = Group.from([10, 20,30,40,50,60]);
   
   console.log(group)
   console.log(group.has(10));
   // → true
   console.log(group.has(30));
   // → false
   group.add(10);
   console.log(group.delete(10));
   console.log(group.has(10));
   // → false
   for(let item of group) {
       console.log(item)
   }