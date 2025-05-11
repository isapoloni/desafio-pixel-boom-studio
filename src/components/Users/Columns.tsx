"use client"

import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { UserInfoCell } from "./UserInfoCell"

export type User = {
    initials: string
    name: string
    age: number
    gender: string
    createdAt: string
    lastAccess: string
    userType: string
    status: "Ativo" | "Inativo"
}

type ColumnsProps = {
    onEdit: (user: User) => void
}

export const columns = ({ onEdit }: ColumnsProps) => [

    {
        id: "user",
        header: "Usuário",
        cell: (user: User) => <UserInfoCell {...user} />
    },
    {
        id: "status",
        header: "Status",
        cell: (user: User) => (
            <span
                className={`px-4 py-1 rounded-full font-bold text-xs
                ${user.status === "Ativo"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-gray-100 text-gray-muted"
                    }`}
            >
                {user.status}
            </span>
        ),
    },
    {
        id: "actions",
        header: "Ações",
        cell: (user: User) => {
            const handleEdit = () => {
                onEdit(user)
            }
            const handleDelete = () => {
            }
            return (
                <div className="flex justify-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu for {user.name}</span>
                                <MoreVertical className="h-5 w-5 text-gray-500" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[160px]">
                            <DropdownMenuLabel>Ações para {user.name}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onSelect={handleEdit}>
                                Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onSelect={handleDelete}
                                className="text-red-600"
                            >
                                Excluir
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        },
    },
]