class Conta
  attr_reader :numero, :titular #gerenciar forma de ler atributos
  attr_accessor :saldo #gerenciar forma de ler e escrever atributos
  def initialize(numero, titular, saldo) #argumentos
    @numero = numero #atributos
    @titular = titular
    @saldo = saldo
  end

  def numero
    @numero

end