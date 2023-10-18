import No from "./No";
class List
{
    public topo : No | null;

    constructor()
    {
        this.topo = null;
    }

    public Add(valor:string) : void
    {
        let newNo : No = new No(valor);

        if(this.topo == null)
        {
            this.topo = newNo;
        }
        else
        {
            let noCurrent: No = this.topo;

            while(noCurrent.prox != null)
            {
                noCurrent = noCurrent.prox;
            }

            noCurrent.prox = newNo;
        }
    }


    public View() : void
    {
        let noAtual: No | null = this.topo;
        let sum: string = "";
        while(noAtual != null)
        {
            sum += noAtual.valor + " -> ";
            noAtual = noAtual.prox;
        }
        console.log(sum);
        console.log("List Finished!")
    }

    public Remove(valor_selecionado: string) :void
    {
        if(this.topo == null)
        {
            return;
            //LISTA VAZIA
        }

        if(this.topo.valor == valor_selecionado)
        {
            this.topo = this.topo.prox;
            return;
            //REMOVE DO INICIO
        }

        let noAtual : No = this.topo;

        while(noAtual.prox != null)
        {
            if(noAtual.prox.valor == valor_selecionado)
            {
                noAtual.prox = noAtual.prox.prox;
                return;
            }

            noAtual = noAtual.prox;
        }
        
    }

}


export default List;