// Como podemos melhorar o esse código usando TS? 

/* let pessoa1: {nome: string, idade: number, profissao: string} = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
} */

/* let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro"; */

/* let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
}; */

/* let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */
type Pessoa = {
    nome: string,
    idade: number,
    profissao: string
}

enum Profissao {
    atriz = "Atriz",
    padeiro = "Padeiro"
}

let pessoa1: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.atriz
} 

let pessoa2: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.padeiro
}

let pessoa3: Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.atriz
}

let pessoa4: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.padeiro
}