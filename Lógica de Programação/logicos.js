// AND ( && )
let idade = 18
let vistoVerificado = false
let resultado =  (idade >= 18) && (vistoVerificado === true) 
console.log(resultado)

// AND ( && ) - 100 moedas coletadas E 1 item estrela
let moedasColetadas = 99
let item = "estrela"
let resultado1 = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultado1)

// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva
let tempo = "chuva"
let item1 = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item1 === "guarda chuva")
console.log("nosso personagem pode sair ? " + podeSair)

// NOT  ( !) - nega uma afirmação
let tempo1 = "chuva"
let resultado2 = tempo1 === "chuva"
console.log(!!resultado2)

// NOT  ( !) - nega uma afirmação
let tempo2 = "chuva"
let horario = 8
let resultado3 = !((tempo2 !== "chuva") && (horario > 6))
console.log(resultado3)