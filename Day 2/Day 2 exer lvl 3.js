let s='Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log((s.match(/love/gi)).length,'\n') //1

let s1='You cannot end a sentence with because because because is a conjunction'
console.log((s1.match(/because/g)).length,'\n') //2

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let fix=sentence.replace(/%|#|\$|&|@/g,'') //3 (not solved)
console.log(fix)
console.log(fix.match(/\w+/g))

let i='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let v=i.match(/\d+/g)
console.log((+v[0]*12)+(+v[1])+(+v[2]*12)) //4