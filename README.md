# 🧮 Calculadora Simples em JavaScript

Projeto de uma calculadora funcional desenvolvida como parte dos estudos de lógica de programação e manipulação do DOM com JavaScript puro.

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-green)

## 📖 Sobre o Projeto

O objetivo deste projeto foi colocar em prática conceitos fundamentais de JavaScript, HTML e CSS para criar uma ferramenta interativa. A calculadora foi desenvolvida do zero, com foco em criar uma lógica manual para as operações, sem o uso da função `eval()`, visando um aprendizado mais profundo sobre o gerenciamento de estado e eventos.

Uma característica especial deste projeto é a inclusão de um **display secundário para o histórico**, que mostra a operação em andamento, melhorando a experiência do usuário.

## ✨ Funcionalidades

- [x] **Operações Aritméticas Básicas:** Soma, Subtração, Multiplicação e Divisão.
- [x] **Display Duplo:** Um display principal para entrada de números e resultados, e um display secundário para o histórico da operação atual.
- [x] **Botão Limpar (C):** Reseta toda a operação e limpa ambos os displays.
- [x] **Botão Apagar (<):** Remove o último dígito inserido no display principal.
- [x] **Suporte a Números Decimais:** Permite o uso do ponto (`.`) para cálculos com casas decimais.

## 🖼️ Demonstração

![image](/img/img.jpeg)

## 🧠 Conceitos Aplicados

Este projeto foi uma excelente oportunidade para aprender e aplicar:

- **Manipulação do DOM (Document Object Model):**
  - Uso de `document.querySelector()` para selecionar elementos da página (displays e botões).
  - Leitura e alteração do atributo `.value` de elementos `<input>`.
- **Eventos:**
  - Utilização do atributo `onclick` no HTML para disparar funções JavaScript.
- **Gerenciamento de Estado:**
  - Criação de variáveis globais (`primeiroNumero`, `segundoNumero`, `operador`) para "lembrar" o estado da calculadora entre as ações do usuário.
- **Funções:**
  - Modularização do código em funções com responsabilidades únicas (`clean()`, `somar()`, `calcular()`, etc.).
- **Tipos de Dados e Conversão:**
  - A importância de converter strings do display para números usando `parseFloat()` para realizar cálculos corretamente.
- **Estruturas Condicionais:**
  - Uso da estrutura `switch` na função `calcular()` para decidir qual operação aritmética executar com base no operador salvo.

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**

## 🚀 Como Executar o Projeto

Como é um projeto de front-end puro, você não precisa de nenhuma instalação complexa.

1.  Clone este repositório (ou simplesmente baixe os arquivos).
2.  Abra o arquivo `calculadora.html` em qualquer navegador de sua preferência.
3.  Pronto! A calculadora estará funcionando.

---

Feito com ❤️ por **Gustavo da Silva**.
