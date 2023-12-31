import No from "./No";
class List
{
    public topo : No | null ;

    constructor()
    {
        this.topo = null;
    }

    private _isEmpty() : boolean
    {
        if(this.topo == null)
        {
            return true;
        }
        return false;
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


    public Update(valor_anterior: string, valor_atual : string ) : void
    {
        if(this.topo == null)
        {
            return;
        }

        let noAtual : No = this.topo;

        while(noAtual.prox != null)
        {
            if(noAtual.valor == valor_anterior)
            {
                noAtual.valor = valor_atual;
                console.log(`O valor anterior -> ${valor_anterior} foi editado para -> ${valor_atual}!`);
                return;
            }

            noAtual = noAtual.prox;
        }

        console.log(`O valor de -> ${valor_anterior} não foi encontrado na lista!`);

    }


    public Search(valor_selecionado: string ) : void
    {
        if(this.topo == null)
        {
            console.log("Não existe itens na lista!");
            return;
        }

        let noAtual : No = this.topo;

        while(noAtual != null)
        {
            if(noAtual.valor == valor_selecionado)
            {
                console.log(`O valor -> ${valor_selecionado} foi encontrado!`);
                return;
            }

            if(noAtual.prox != null)
            {
                noAtual = noAtual.prox;
            }
            else 
            {
                console.log(`O valor -> ${valor_selecionado} não foi encontrado!`);
                return;
            }
        }

        
    }

}


export default List;