import { useNavigate } from "react-router-dom";

import {
  Dialog,
} from "@/components/ui/dialog"

import { TransactionModalDetails } from "@/components/transaction-modal";
import { Header } from "@/components/header";
import { Summary } from "@/components/summary";


export function Home() {
  const navigate = useNavigate()

  async function handleSubscribe() {


    navigate('/details');
  }

  return (
    <div className="w-screen h-screen bg-gray-100 font-poppins">
      <Dialog>
        <Header/>
        <Summary/>
        <TransactionModalDetails />
      </Dialog>
    </div>
  );
}
