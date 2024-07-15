// Como p

interface pessoa {
    nome: string;
    idade: number;
    profissao: profissao; 
}


enum profissao{

    atriz,
    padeiro
    
}



const pessoa1= {
nome : "maria",
idade : 29,
profissao : profissao.atriz
};

const pessoa2 = {
nome : "roberto",
idade : 19,
profissao : profissao.padeiro
};

const pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: profissao.atriz
};

const pessoa4 = {
    nome : "carlos",
    idade : 19,
    profissao : profissao.padeiro
};


