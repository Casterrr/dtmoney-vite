import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Transaction } from "@/models/transaction.model";
import { formatarData, formatarMoeda } from "@/utils/utils";

const transacoes: Transaction[] = [
  { 
    titulo: "Compra de mantimentos",
    valor: 50.00,
    categoria: "Alimentação",
    data: "2024-05-14T08:30:00.000Z", // Exemplo de formato ISOString
    ind_tipo: "S"
  },
  { 
    titulo: "Pagamento de conta de luz",
    valor: 100.00,
    categoria: "Contas",
    data: "2024-05-12T15:45:00.000Z", // Exemplo de formato ISOString
    ind_tipo: "D"
  },
  { 
    titulo: "Gasolina",
    valor: 70.00,
    categoria: "Transporte",
    data: "2024-05-10T12:00:00.000Z", // Exemplo de formato ISOString
    ind_tipo: "S"
  },
  { 
    titulo: "Restaurante",
    valor: 80.00,
    categoria: "Alimentação",
    data: "2024-05-08T19:20:00.000Z", // Exemplo de formato ISOString
    ind_tipo: "D"
  }
];

export function TransactionsTable() {
  return (
    <div className="flex flex-col w-9/13 items-center mx-auto my-14">
      <Table className="text-base text-gray-400 border-separate border-spacing-y-2">
        {/* <TableCaption>A list of your recent transações.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[390px] p-0 font-normal">Título</TableHead>
            <TableHead className="w-[260px] p-0 font-normal">Valor</TableHead>
            <TableHead className="w-[190px] p-0 font-normal">Categoria</TableHead>
            <TableHead className=" p-0 font-normal">Data</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transacoes.map((transacao) => (
            <TableRow key={transacao.titulo} className="bg-white">
              <TableCell className="font-medium text-black font-normal">{transacao.titulo}</TableCell>
              <TableCell className={transacao.ind_tipo == 'S' ? 'text-greenmoney' : 'text-redmoney'}>{formatarMoeda(transacao.valor)}</TableCell>
              <TableCell>{transacao.categoria}</TableCell>
              <TableCell >{formatarData(transacoes[0].data)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell>$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  )
}
