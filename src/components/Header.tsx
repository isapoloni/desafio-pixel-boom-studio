import { Button } from "@/components/ui/button";
import { BellIcon, HelpCircleIcon, PanelLeftCloseIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SidebarTrigger } from "./ui/sidebar";

export function Header() {
    return (
        <header className="shadow-md h-[72px] flex px-4 z-10 w-full">
            <div className="flex items-center gap-4">
                <SidebarTrigger>
                    <PanelLeftCloseIcon className="w-5 h-5 text-gray-700" />
                </SidebarTrigger>
            </div>

            <div className="flex items-center gap-4 ml-auto">
                <Button variant="ghost" className="w-10 h-10 p-0">
                    <HelpCircleIcon className="w-5 h-5 text-gray-700" />
                </Button>
                <Button variant="ghost" className="w-10 h-10 p-0">
                    <BellIcon className="w-5 h-5 text-gray-700" />
                </Button>
                <Avatar className="w-10 h-10">
                    <AvatarImage src=" " alt="User Avatar" />
                    <AvatarFallback>AB</AvatarFallback>
                </Avatar>
            </div>
        </header>
    );
}