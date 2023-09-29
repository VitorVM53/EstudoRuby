class Conta
  attr_reader :numero, :titular #gerenciar forma de ler atributos
  attr_accessor :saldo #gerenciar forma de ler e escrever atributos
  def initialize(numero, titular, saldo) #argumentos
    @numero = numero #atributos
    @titular = titular
    @saldo = saldo
  end

  def sacar(valor)
    if saldo >= valor
      self.saldo -= valor #self ou @ significa esta ou seja o saldo desta conta
    else
      puts "não foi possivel sacar"
    end
  end

  def depositar(valor)
    self.saldo += valor
  end

  def transferir(conta_destino, valor)#essaconta é criada usando: variavel = Conta.new(1, "joe", 100) isso é valores dos atributos na ordem.
    self.sacar(valor)
    conta_destino.depositar(valor)
  end
end