let utente = {
    nome: "Jon",
    role: "user"
};

const {nome, role, admin: admin = false} = utente;

console.log(nome);
console.log(role);
console.log(admin);