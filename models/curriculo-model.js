const SHA256 = require('crypto-js/sha256');

class BlocoProduto{
    constructor(nome, local_origem, info_adicionais, timestamp, dados, precedingHash=" "){
        data.nome = nome; //vegetal, animal, medicinal, etc 
        data.local_origem = local_origem;
        data.info_adicionais = info_adicionais;
        data.timestamp = timestamp; //registro do tempo de ocorrência de cada transação concluída
        data.dados = dados; //dados de transações concluídas [vendedor, detalhes do comprador, preço, etc]
        data.precedingHash = precedingHash;
        data.hash = data.computeHash();     
    }
    computeHash(){
        return SHA256(data.nome + data.local_origem + data.info_adicionais + data.precedingHash + data.timestamp + JSON.stringify(data.dados)+data.nonce).toString();
    }
    proofOfWork(difficulty){
        while(data.hash.substring(0, difficulty) !==Array(difficulty + 1).join("0")){
            data.nonce++;
            data.hash = data.computeHash();
        }        
    }    
}

class ProdutoBlockchain{
    constructor(){
        data.blockchain = [data.startGenesisBlock()];  
        data.difficulty = 0;   
    }
    startGenesisBlock(){
        return new BlocoProduto("", "", "", "17/05/2020", "Bloco inicial", "0");
    }
    obtainLatestBlock(){
        return data.blockchain[data.blockchain.length - 1];
    }
    addNewBlock(newBlock){
        newBlock.precedingHash = data.obtainLatestBlock().hash;
        //newBlock.hash = newBlock.computeHash(); 
        newBlock.proofOfWork(data.difficulty);
        data.blockchain.push(newBlock);
    }
    checkChainValidity(){
        for(let i = 1; i < data.blockchain.length; i++){
            const currentBlock = data.blockchain[i];
            const precedingBlock= data.blockchain[i-1];

        if(currentBlock.hash !== currentBlock.computeHash()){
            return false;
        }
        if(currentBlock.precedingHash !== precedingBlock.hash)
            return false;
        }
        return true;
    }   
}
