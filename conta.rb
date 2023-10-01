require_relative 'cliente' #carrego por estarem na mesma pasta

class Conta
  attr_reader :numero, :titular #gerenciar forma de ler atributos
  attr_accessor :saldo #gerenciar forma de ler e escrever atributos
  def initialize(numero, nome, sobrenome, saldo) #argumentos
    @numero = numero #atributos
    @titular = Cliente.new(nome, sobrenome)# recebe argumentos de outro objeto
    @saldo = saldo
  end

  def sacar(valor)
    if saldo >= valor #só pode sacar um valor se for maior ou igual ao saldo
      self.saldo -= valor #self ou @ significa esta ou seja o saldo desta conta
    else
      puts "não foi possivel sacar"
    end
  end

  def depositar(valor)
    self.saldo += valor
  end

  def transferir(conta_destino, valor)#essaconta é criada usando: variavel = Conta.new(1, "joe", 100) isso é valores dos atributos na ordem.
    if self.sacar(valor) >= saldo
      conta_destino.depositar(valor)#o ruby automaticamente põe "self" aqui colocamos conta estino para impedir dele fazer isso
    else
      puts "saldo insuficiente"
  end
end