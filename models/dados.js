const data = {
    blocos: [
        {
            nome: '',
            local_origem: '',
            info_adicionais: '',
            timestamp: '17/05/2020',
            dados: 'Bloco inicial',
            precedingHash: '0',
            hash: 'c3256946ad4a0585b3e1350e1f54bccf5a0e8669ce1623b7376afb9be8e802fd'
        },
        {
            nome: 'Cenoura',
            local_origem: 'Assentamento Mariana',
            info_adicionais: 'Orgânica(a)',
            timestamp: '20/05/2020',
            dados: [{
                produtor: "Dona Raimunda",
                comprador: "Giovanna",
                preco_unidade: 1.00,
                quantidade: "5"
            }],
            precedingHash: '0',
            hash: 'c3256946ad4a0585b3e1350e1f54bccf5a0e8669ce1623b7376afb9be8e802fd'
          }
      ]
    }

module.exports = data;
console.log(data);