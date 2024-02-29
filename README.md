# Como rodar o projeto
- Instale a node_modules com ```npm install```
- Execute o teste com ````npm run test```.

# Explicação dos casos de teste
Acho que me empolguei um pouco aplicando o TDD que você me ensinou hoje e acabei pensando em 24 casos de teste.
Talvez tenha sido muito tooMuch, mas vou explicar qual a linhad e raciocinio que segui.

## Identificando o padrão
- Eu fiz uma funçãozinha pra analisar melhor o que a lógica do feezbees estava imprimindo, e caraca, acertei de primeira nessa parte
  você pode ver por aqui: (https://playcode.io/1782108)
- Depois de analisar um pouco vi que, a partir do número 12, existia um padrão que se repete infinitamente:
  fizz - numero - numero - fizzbees - numero - numero - fizz - numero - bees - fizz - numero - numero - fizz - bees
  Meu próximo passo nesse projeto é escrever um teste pra provar isso. PS: Se quiser, assim que eu acabar eu te mando
- Então peguei os primeiros números desssa sequencia e criei os testes de sucesso e de erro pra cada um deles,
  no total fopram 12 sucesssos e 12 falhas.
- No caso das falhas eu dupliquei a função fizzbees e to retornando os valores todos errados pra garantir que os testes estão funcionando

--PS: Acabei demorando um pouco mais do que gostaria devido a um problema com nomenclatura.
  Aparentemente o Jest não gosta quando existe uma variavel chamada describe, e o Js
  tava reclamando amda variavel do forEach que estava nomeada como "case".
  


## Considerações
- Cara, MUITO OBRIGADO. Você abriu minha mente hoje, vou continuar estudando e lendo aqueles livros que você me mandou, e amanhã mesmo já vou trazer pro meu time
  esse aprendizado, trabalhar com TDD vai melhorar nosso trabalho em 1000%.



TKS Broow
