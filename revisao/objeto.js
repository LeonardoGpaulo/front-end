const pessoa = {
    nome: "João",
    sobrenome: "Roccella",
    idade: 40,
    cargo: "Instrutor"
};

const entidade = new Map([
    ["João", "João"],
    ["sobrenome", "Roccella"],
    ["idade", 40],
    ["Instrutor", "Instrutor"]
]);

console.log(entidade.get("sobrenome"));
console.log(pessoa.sobrenome);

const professor= JSON.stringify(pessoa);
console.log(professor);

const aluno = '{"nome": "bento", "sobrenome": "andrade", "idade": 69, "matricula":"123456"}'
const alunoObjeto = JSON.parse(aluno);
console.log(alunoObjeto);
console.log(alunoObjeto.nome);
console.log(aluno.nome);

for (let x in pessoa){
    console.log(pessoa[x])
}
