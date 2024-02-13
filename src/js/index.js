//Estrutura de dados por uma Array
const perguntas = [
  {
    pergunta: "Qual é a finalidade do comando 'useState()' em React?",
    respostas: [
      "Exibir uma mensagem de erro",
      "Gerenciar estado em componentes funcionais",
      "Criar uma variável global"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do método 'render()' em componentes React?",
    respostas: [
      "Gerar estilos CSS",
      "Manipular eventos do DOM",
      "Renderizar elementos na tela"
    ],
    correta: 2
  },
  {
    pergunta: "Como se define um estado inicial em um componente de classe em React?",
    respostas: [
      "Através de um método 'setState()'",
      "Declarando uma variável externa",
      "No construtor do componente"
    ],
    correta: 2
  },
  {
    pergunta: "O que é JSX em React?",
    respostas: [
      "Um método de formatação de texto",
      "Uma linguagem de estilização",
      "Uma extensão de sintaxe JavaScript que permite escrever HTML dentro de JavaScript"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do Hook 'useEffect()' em React?",
    respostas: [
      "Gerenciar o ciclo de vida do componente",
      "Definir estilos CSS",
      "Manipular eventos de teclado"
    ],
    correta: 0
  },
  {
    pergunta: "O que é um componente de classe em React?",
    respostas: [
      "Um método de criptografia",
      "Um bloco de código reutilizável",
      "Um componente React baseado em classes ES6"
    ],
    correta: 2
  },
  {
    pergunta: "Como se passa dados de um componente pai para um componente filho em React?",
    respostas: [
      "Apenas usando CSS",
      "Através de métodos como 'sendData()'",
      "Através de props"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do React Router?",
    respostas: [
      "Gerenciar requisições HTTP",
      "Gerenciar a navegação entre diferentes componentes em uma aplicação React",
      "Definir rotas em um aplicativo React"
    ],
    correta: 1
  },
  {
    pergunta: "O que é o Redux em React?",
    respostas: [
      "Um pacote de estilos CSS",
      "Uma biblioteca para gerenciamento de estado em aplicações JavaScript",
      "Um framework de testes unitários"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do método 'setState()' em React?",
    respostas: [
      "Definir estilos CSS em componentes",
      "Atualizar o estado de um componente",
      "Adicionar um evento a um elemento HTML"
    ],
    correta: 1
  },
];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  //new Set() - permite armazenar coleções de valores únicos, onde cada valor pode aparecer apenas uma vez.
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const acertos = document.querySelector('#acertos')
  const mostrarTotal = document.querySelector('#acertos span')
  //textContent - usada para obter ou definir o texto contido em um nó do DOM
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  const button = document.querySelector("button")
  const modal = document.querySelector("dialog")
  const buttonClose = document.querySelector(".close")
  const resultModal = document.querySelector('dialog h2')



  
  
  // loop ou laço de repetição
  for(const item of perguntas) { 
    //cloneNode() - cria uma cópia exata de um nó existente sem modificar o original
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      
      //setAttribute() - é usado para modificar atributos existentes ou adicionar novos atributos a elementos HTML
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item) )
      dt.querySelector('input').value = item.respostas.indexOf(resposta)

      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta

        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        
       if(corretas.size >= 7){
        resultModal.textContent = "Você passou!";
       }else{
        resultModal.textContent = "Você não passou!";
       }

        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }

  
      quizItem.querySelector('dl').appendChild(dt)
    } 
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }


  button.onclick = () => {
    modal.showModal()
  }

  buttonClose.onclick = () => {
    modal.close()
    location.reload()
  }

  //resultModal.textContent = "haha"
  

  