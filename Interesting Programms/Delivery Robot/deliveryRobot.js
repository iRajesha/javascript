const ROADS = require('./roads.js')
function buildGraph(roads) {
  let roadGrpah = Object.create(null)
  //console.log(grpah)
  function addRoad(from , to) {
    if(roadGrpah[from]== null){
      roadGrpah[from]=[to]
    } else {
      roadGrpah[from].push(to)
    } 
  }
    for( let [from , to] of roads.map( r => r.split('-'))){
      addRoad(from,to)
      addRoad(to,from)
    }
    //console.log(roadGrpah)
    return roadGrpah
}
var roadGrpah  = buildGraph(ROADS)
class VillageState {
  constructor(place,parcel){
    this.place = place
    this.parcel = parcel
  }
  move(destination){
    console.log(roadGrpah)
  if(!roadGrpah[this.place].includes(destination)) return this;
  
  let parcels = this.parcel.map(p => {
    if(p.place !== this.place) return p;
    return {place : destination, address : destination};
  }).filter(p => p.place!=p.address)
  return new VillageState(destination,parcels)
  }
}

let first = new VillageState(
  "Post Office",
  [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);
// → Post Office
