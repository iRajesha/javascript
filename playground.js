
let storage = []
let hash = 0
let name = 'cache under the hedge'
for (let i = 0; i < name.length; i++) 
{hash += name.charCodeAt(i)
console.log(hash) 
}
console.log(hash)
for (let y = 1985; y <= 2018; y++) {
  storage[`chicks in ${y}`] = hash % 6
  hash = Math.abs((hash << 2) ^ (hash + y))
  console.log(hash<<2)
}
console.log(storage)