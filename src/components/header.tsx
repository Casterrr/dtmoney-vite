import {
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";

import dtmoneylogo from '../assets/dtmoney-logo.svg';
import { useNavigate } from "react-router-dom";
  

export function Header() {
  const navigate = useNavigate()

  async function handleSubscribe() {


    navigate('/charts');
  }

  return (
    <div className="bg-headerbg pb-44">
      <div className="flex flex-row mx-56 pt-9 justify-between">
        <img className="w-44 h-14" src={dtmoneylogo} alt="dt money" />
        
        <div>
          <DialogTrigger asChild>
            <Button className="bg-hoverbutton hover:bg-blue-500 w-48 h-12 text-base font-normal">Nova transação</Button>
          </DialogTrigger>
          
          <Button className="bg-hoverbutton hover:bg-blue-500 w-48 h-12 text-base font-normal ml-4" onClick={() => handleSubscribe()}>Charts</Button>
        </div>
      
      </div>
    </div>
  )
}