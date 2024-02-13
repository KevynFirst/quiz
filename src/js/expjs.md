
## 📝 Explicação do script
Este código JavaScript cria uma interface interativa para um quiz. Ele realiza as seguintes operações:

1. Seleciona elementos HTML relevantes, como o contêiner do quiz e um modelo de perguntas.

2. Inicializa um conjunto vazio para armazenar respostas corretas e calcula o número total de perguntas.

3. Atualiza o texto mostrando o número de respostas corretas atualmente selecionadas.

4. Itera sobre cada pergunta no quiz.

5. Para cada pergunta, cria uma interface de resposta dinâmica, permitindo que o usuário selecione entre várias opções.

6. Define um comportamento para quando uma resposta é selecionada: verifica se é correta e atualiza o contador de respostas corretas.

7. Anexa a interface de pergunta ao contêiner do quiz na página.

Em resumo, o código cria uma experiência interativa de quiz onde os usuários podem selecionar respostas e ver quantas estão corretas em relação ao total de perguntas. Entendendo linha por linha seria o seguinte:
<br/>
<br/>

```js
  const quiz = document.querySelector('#quiz')
```
Esta linha seleciona o elemento HTML com o id **quiz** e o armazena na variável **quiz**.
<br/>
<br/>

```js
    const template = document.querySelector('template')
```
Esta linha seleciona um elemento HTML **template** e o armazena na variável template. Elementos **template** são usados para armazenar conteúdo HTML que pode ser clonado e inserido dinamicamente na página.
<br/>
<br/>

```js
    const corretas = new Set()
```
Esta linha cria um novo conjunto vazio chamado corretas. Um conjunto é uma estrutura de dados que armazena valores únicos.
<br/>
<br/>

```js
    const totalDePerguntas = perguntas.length
```
Aqui, presume-se que exista um array chamado perguntas que contém as perguntas do quiz. Esta linha calcula o número total de perguntas armazenando o comprimento do array perguntas na variável totalDePerguntas.
<br/>
<br/>

```js
    const mostrarTotal = document.querySelector('#acertos span')
```
 Esta linha seleciona um elemento HTML que parece ser utilizado para mostrar o número total de respostas corretas. Presumivelmente, este elemento tem uma estrutura semelhante a **span** dentro de um elemento com id acertos.
 <br/>
 <br/>

 ```js
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
```
Aqui, o texto do elemento selecionado anteriormente é definido como o tamanho do conjunto **corretas** (inicialmente 0) seguido por 'de' e o número total de perguntas.
 <br/>
 <br/>

 ```js
    for(const item of perguntas)
```
O código então entra em um loop for que itera sobre cada item no array perguntas.
 <br/>
 <br/>

 ```js
    const quizItem = template.content.cloneNode(true)
```
Dentro do loop, uma cópia do conteúdo do elemento **template** é clonada e armazenada na variável quizItem.
 <br/>
 <br/>

 ```js
    quizItem.querySelector('h3').textContent = item.pergunta
```
O texto da pergunta atual é inserido dentro de um elemento **h3** no quizItem.

 <br/>
 <br/>

 ```js
    for(let resposta of item.respostas)
```
Em seguida, há outro loop for, desta vez iterando sobre as respostas da pergunta atual.
 <br/>
 <br/>

 ```js
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
```
Para cada resposta, uma cópia de um elemento **dt** dentro de um elemento **dl** é clonada e armazenada na variável dt.
 <br/>
 <br/>

 ```js
    dt.querySelector('span').textContent = resposta
```
O texto da resposta é inserido dentro de um elemento **span** dentro da variável dt.
 <br/>
 <br/>

 ```js
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item) 
```
Um atributo name é atribuído a um elemento **input** dentro da variável dt, e o valor é definido como 'pergunta-' + perguntas.indexOf(item). Atribuindo um nome único para cada pergunta.
 <br/>
 <br/>

 ```js
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
```
O valor do elemento **input** é definido como o índice da resposta atual no array de respostas da pergunta.
 <br/>
 <br/>

 ```js
    dt.querySelector('input').onchange = (event) => { ... }
```
Aqui, é definido um evento *onchange* para o elemento **input** que executa uma função sempre que o valor do **input** é alterado.
 <br/>
 <br/>

 ```js
    const estaCorreta = event.target.value == item.correta
        
    corretas.delete(item)
        
    if(estaCorreta){
        corretas.add(item)
    }
```
Dentro da função do evento *onchange*, é verificado se a resposta selecionada é a resposta correta da pergunta atual. Se for correta, o item é adicionado ao conjunto *corretas*, caso contrário, ele é removido do conjunto.
 <br/>
 <br/>

 ```js
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
```
O texto do elemento mostrarTotal é atualizado com o tamanho atual do conjunto corretas.
 <br/>
 <br/>

 ```js
    quizItem.querySelector('dl').appendChild(dt)
    quizItem.querySelector('dl dt').remove()

```
Por fim, o dt é anexado ao quizItem e, após o loop, o primeiro dt é removido (provavelmente era um espaço reservado).
 <br/>
 <br/>

 ```js
    quiz.appendChild(quizItem)
```
O quizItem completo, contendo todas as respostas da pergunta atual, é anexado ao elemento quiz na página.
 <br/>
 <br/>