import {
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";

import dtmoneylogo from '../assets/dtmoney-logo.svg';

export function Header() {
  return (
    <div className="bg-headerbg h-64">
      <div className="flex flex-row mx-56 pt-9 justify-between">
        <img className="w-44 h-14" src={dtmoneylogo} alt="dt money" />
        
        <DialogTrigger asChild>
          <Button className="bg-hoverbutton hover:bg-blue-500 w-48 h-12 text-base font-normal">Nova transação</Button>
        </DialogTrigger>
      </div>
    </div>
  )
}