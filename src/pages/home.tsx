import { useNavigate } from "react-router-dom";

import {
  Dialog,
} from "@/components/ui/dialog"

import { TransactionModalDetails } from "@/components/transaction-modal";
import { Header } from "@/components/header";
import { Summary } from "@/components/summary";
import { TransactionsTable } from "@/components/transactions-table";


export function Home() {
  const navigate = useNavigate()

  async function handleSubscribe() {


    navigate('/details');
  }

  return (
    <div className="flex flex-col h-full bg-gray-100 font-poppins overflow-x-hidden">
      <Dialog>
        <Header/>
        <Summary/>
        <TransactionsTable/>
        <TransactionModalDetails/>
      </Dialog>
    </div>
  );
}
