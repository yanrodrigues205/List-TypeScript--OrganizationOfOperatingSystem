class No 
{
    public prox: No | null;
    public valor: string;

    constructor(valor_atual: string)
    {
        this.valor = valor_atual;
        this.prox = null;
    }

}

export default No;