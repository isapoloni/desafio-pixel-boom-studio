import { useState } from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarGroup,
    SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
    ActivityIcon,
    UserIcon,
    FileCheckIcon,
    SettingsIcon,
    HeadsetIcon,
    Check,
    ChevronsUpDown,

} from "lucide-react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const branches = [
    { value: "filial-a", label: "Filial A", initials: "FA" },
    { value: "filial-b", label: "Filial B", initials: "FB" },
    { value: "filial-c", label: "Filial C", initials: "FC" },
];

export function Menu() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("filial-a");

    return (
        <Sidebar
            className={`w-64 bg-gray-100 shadow-md font-sans z-10`}
        >
            <SidebarHeader className="px-6 py-5">
                <Button
                    variant="ghost"
                    className="text-sm font-bold text-gray-100 bg-gray-800 w-[96px] h-[32px] justify-center pointer-events-none rounded-md"
                >
                    Logo
                </Button>
            </SidebarHeader>
            <SidebarContent className="p-4">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger>
                        <div>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-full justify-between text-left"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-medium text-gray-800">
                                        {branches.find((branch) => branch.value === value)?.initials}
                                    </div>
                                    <span className="text-md font-semibold text-dark-green">
                                        {branches.find((branch) => branch.value === value)?.label}
                                    </span>
                                </div>
                                <ChevronsUpDown className="w-4 h-4 text-gray-muted" />
                            </Button>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                            <CommandInput placeholder="Search branch..." />
                            <CommandList>
                                <CommandEmpty>No branch found.</CommandEmpty>
                                <CommandGroup>
                                    {branches.map((branch) => (
                                        <CommandItem
                                            key={branch.value}
                                            value={branch.value}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue);
                                                setOpen(false);
                                            }}
                                        >
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center font-medium text-dark-green">
                                                    {branch.initials}
                                                </div>
                                                <span className="text-dark-green">{branch.label}</span>
                                            </div>
                                            <Check
                                                className={cn(
                                                    "ml-auto h-4 w-4 text-dark-green",
                                                    value === branch.value
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-size-sm font-normal text-gray-muted mb-[14px]">
                        Menu
                    </SidebarGroupLabel>
                    <ul>
                        <li>
                            <Button
                                variant="ghost"
                                className="w-full justify-start gap-2 hover:bg-gray-200 active:bg-gray-100 mb-2"
                            >
                                <ActivityIcon className="w-5 h-5 text-gray-muted" />
                                <span className="text-size-md text-gray-muted">Dashboard</span>
                            </Button>
                        </li>
                        <li>
                            <Button
                                className="justify-start text-size-md text-gray-100 bg-dark-green rounded-full p-md p-5 w-[202px] mb-[6px]"
                            >
                                <UserIcon className="w-5 h-5 text-gray-100" />
                                Usuários
                            </Button>
                        </li>
                    </ul>
                </SidebarGroup>
                <SidebarGroup className="-mt-4">
                    <SidebarGroupLabel className="text-size-sm font-normal text-gray-muted mb-[14px]">
                        Configurações
                    </SidebarGroupLabel>
                    <ul className="space-y-0">
                        <li>
                            <Button
                                variant="ghost"
                                className="w-full justify-start gap-2 hover:bg-gray-200 active:bg-gray-100 mb-2"
                            >
                                <SettingsIcon className="w-5 h-5 text-gray-muted" />
                                <span className="text-md text-gray-muted">Geral</span>
                            </Button>
                        </li>
                        <li>
                            <Button
                                variant="ghost"
                                className="w-full justify-start gap-2 hover:bg-gray-200 active:bg-gray-100"
                            >
                                <FileCheckIcon className="w-5 h-5 text-gray-muted" />
                                <span className="text-md text-gray-muted">Documentos</span>
                            </Button>
                        </li>
                    </ul>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="p-4">
                <Button
                    variant="ghost"
                    className="w-full justify-between gap-2 hover:bg-gray-200 active:bg-gray-100"
                >
                    <span className="text-md text-dark-green">Precisa de ajuda?</span>
                    <HeadsetIcon className="w-5 h-5 text-gray-700" />
                </Button>
            </SidebarFooter>
        </Sidebar>
    );
}