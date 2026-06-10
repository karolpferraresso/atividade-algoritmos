let nomes = ["Isabela", "Matheus", "Luana", "Denzel", "Emanuelle"];
let sexos = ["Feminino", "Masculino", "Feminino", "Masculino", "Feminino"];
let salarios = [6000, 4500, 5200, 7000, 4800];

alert("Funcionárias que ganham mais de R$ 5.000:");

for (let i = 0; i < 5; i++) {
    if (sexos[i] === "Feminino" && salarios[i] > 5000) {
        alert("Nome: " + nomes[i]);
        alert("Sexo: " + sexos[i]);
        alert("Salário: R$ " + salarios[i]);
        alert("-------------------");
    }
}