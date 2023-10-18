import List from "./List";
const list_task = new List();

//ITENS ADICIONADOS
list_task.Add("item1");
list_task.Add("item2")
list_task.Add("item3");
list_task.Add("item4");

//ITENS REMOVIDOS
list_task.Remove("item2");

//ITENS ATUALIZADOS
list_task.Update("item44", "item11");
list_task.Update("item1", "item11");

//PESQUISAR ITENS 
list_task.Search("item4");


//MOSTRAR ITENS
list_task.View();