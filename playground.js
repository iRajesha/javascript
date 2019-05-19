let longString = 'first last firstf lastt\nfirstff lastt\nfirsttt lasttt\nfirstf lastt\nfirstff lastt\nfirsttt lasttt\nfirstf lastt\nfirstff lastt\nfirsttt lasttt\nfirstf lastt\nfirstff lastt\nfirsttt lasttt\nfirstf lastt\nfirstff lastt\nfirsttt lasttt\nfirstf lastt\nfirstff lastt\nfirsttt lasttt\nfirstf lastt\nfirstff lastt\nfirsttt lasttt\nfirstf lastt\nfirstff lastt\nfirsttt lasttt\nfirstf lastt\nfirstff lastt\nfirsttt lasttt\nfirstf lastt\nfirstff lastt\nfirsttt lasttt\nfirstf lastt\nfirstff lastt\nfirsttt lasttt'

//console.log(longString)
longString = 'first last\nfirstt lastt\nfirstttt lastttt'
let matched = /(\w+ \w+\n)/.exec(longString)
//console.log(matched)
console.log(longString.replace(/(w+) (w+)/, "$2,$1"))
