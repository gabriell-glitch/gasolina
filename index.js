let preco;

console.log("qual é o preço?");

process.stdin.on("data", function (data) {
  preco = Number(data.toString().trim());
  if (isNaN(preco)) {
    console.log("digite um numero valido");
  } else {
    console.log("o preco é " + preco + " reais.");
  }
});
