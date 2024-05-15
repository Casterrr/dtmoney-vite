export interface Transaction {
  titulo: string,
  valor: number,
  categoria: string,
  data: string,
  ind_tipo: 'S' | 'D'
}