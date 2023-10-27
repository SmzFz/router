const cliente = [
    { nome: "Gustavo", idade: "18", CPF: "111.456.789-69"},
    { nome: "Francelin", idade: "15", CPF: "333.456.789-69"},
    { nome: "Castello", idade: "35", CPF: "444.456.789-69"},
    { nome: "Duda", idade: "78", CPF: "555.456.789-69"},
    { nome: "Karen", idade: "12", CPF: "678.456.789-69"},
]


const Contact = () => {
    console.log(cliente);
  return (
    <>
    <h1>Contact</h1>
    {cliente.map((item) => (
        <div key={item.CPF}>
            Cliente - {item.nome} | Idade - {item.idade}
        </div>
    )
    )}
    </>
  )
}

export default Contact