//pegando elementos html
let form = document.querySelectorAll("form")

let elementoPAITarefaToDo = document.querySelector(".list_Tasks_ToDo")
let elementoPAITarefaProgress = document.querySelector(
  ".list_Tasks_In_Progress"
)
let elementoPAITarefaCompleted = document.querySelector(".list_Tasks_Completed")

//declaraçoes de variaveis
const listaTarefasAfazer = []
const listaTarefasEmAndamento = []
const listaTarefasConcluido = []

//
form[0].addEventListener("submit", (event) => {
  event.preventDefault()
  const { formMain } = document.forms
  const titulo = formMain.titulo.value.trim() // Remove espaços em branco do início e do fim
  const descricao = formMain.descricao.value.trim()
  const prazo = formMain.term.value.trim()

  if (!titulo || !descricao || !prazo) {
    // Exibe uma mensagem de erro ao usuário (você pode personalizar isso)
    alert("Por favor, preencha todos os campos obrigatórios.")

    // Não continue com a adição da tarefa
    return
  }

  // Todos os elementos devem receber display none aqui também pq se n eles vão ficar aparecendo dps de submitar
  containerEntries.style.display = "none"
  editTasksForm.style.display = "none"
  containerForms.style.display = "none"
  confirmacaoDeRemocaoDeTask.style.display = "none"
  body.style.overflow = "scroll"

  switch (botaoStatusTarefa) {
    case "btnAfazer":
      listaTarefasAfazer.push({
        titulo: formMain.titulo.value,
        Text: formMain.descricao.value,
        status: formMain.statusTask.value,
        prazo: formMain.term.value,
      })
      elementoPAITarefaToDo.appendChild(
        criacaoElementoTarefa(listaTarefasAfazer, botaoStatusTarefa)
      )
      break

    case "btnEmAndamento":
      listaTarefasEmAndamento.push({
        titulo: formMain.titulo.value,
        Text: formMain.descricao.value,
        status: formMain.statusTask.value,
        prazo: formMain.term.value,
      })
      elementoPAITarefaProgress.appendChild(
        criacaoElementoTarefa(listaTarefasEmAndamento, botaoStatusTarefa)
      )
      break
    case "btnConcluido":
      listaTarefasConcluido.push({
        titulo: formMain.titulo.value,
        Text: formMain.descricao.value,
        status: formMain.statusTask.value,
        prazo: formMain.term.value,
      })
      elementoPAITarefaCompleted.appendChild(
        criacaoElementoTarefa(listaTarefasConcluido, botaoStatusTarefa)
      )
      break
  }
  formMain.titulo.value = ""
  formMain.descricao.value = ""
  formMain.term.value = ""
})
