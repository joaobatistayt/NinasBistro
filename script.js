let reservas = [];

let vagas = [];

function DefineAllReservasDefault()
{
    for (let n = 1 ; n < 50 ; n++)
    {
        vagas.push({numero: n, disponivel: "Disponivel"});
    }
}

DefineAllReservas();

/*
reserva = {
    solicitante: "",
    cpf: "",
    dataReserva: "",
    horaChegada: "",
    horaSaida: "",
    totalDePessoas: "",
    contato: "",
    taxaDaReserva: "",
    numMesa: ""
};
*/

const TAXA = 100;
const MinimoParaTaxa = 10;

function GetInfoSentByTheUser()
{
    let userName = document.getElementById("Solicitante").textContent;
    let userCPF = document.getElementById("UserCPF").textContent;
    let dataReserva;
    let chegada;
    let saida;
    let totalDePessoas = document.getElementById("TotalPessoas").textContent;
    let contato = document.getElementById("Contato").textContent;
    let mesa = document.getElementById("Mesa").textContent;

    let taxa = CheckForTax(totalDePessoas);

    reservas.push({userName, userCPF, dataReserva, chegada, saida, totalDePessoas, contato, mesa, taxa});
}

function CheckForTax(totalDePessoas)
{
    if (totalDePessoas >= MinimoParaTaxa)
    {
        return TAXA;
    }

    return 0;
}
