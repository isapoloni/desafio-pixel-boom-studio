"use client"

import { useState } from "react"
import { Plus, Search, ListFilterIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { columns as columnsFactory, User } from "./Columns"
import { DataTable } from "./DataTable"
import { UserFormSheet } from "./UserFormSheet"

const initialUsers: User[] = [
    {
        initials: "JG",
        name: "José Ricardo Gomes",
        age: 51,
        gender: "Homem",
        createdAt: "22/03/2025 - 10:21am",
        lastAccess: "38m22s",
        userType: "Usuário padrão",
        status: "Ativo"
    },
    {
        initials: "HS",
        name: "Helena Soares",
        age: 46,
        gender: "Mulher",
        createdAt: "22/03/2025 - 10:21am",
        lastAccess: "38m22s",
        userType: "Usuário padrão",
        status: "Inativo"
    },
    {
        initials: "DS",
        name: "Débora Santana",
        age: 24,
        gender: "Mulher",
        createdAt: "22/03/2025 - 10:21am",
        lastAccess: "38m22s",
        userType: "Usuário padrão",
        status: "Ativo"
    },
    {
        initials: "LS",
        name: "Lucas Rocha Silveira",
        age: 31,
        gender: "Homem",
        createdAt: "22/03/2025 - 10:21am",
        lastAccess: "38m22s",
        userType: "Usuário padrão",
        status: "Ativo"
    },
    {
        initials: "MC",
        name: "Marcos Carvalho",
        age: 29,
        gender: "Homem",
        createdAt: "22/03/2025 - 10:21am",
        lastAccess: "38m22s",
        userType: "Usuário padrão",
        status: "Inativo"
    },
    {
        initials: "AF",
        name: "Ana Flávia",
        age: 37,
        gender: "Mulher",
        createdAt: "22/03/2025 - 10:21am",
        lastAccess: "38m22s",
        userType: "Usuário padrão",
        status: "Ativo"
    },
    {
        initials: "SA",
        name: "Sérgio Arantes",
        age: 36,
        gender: "Homem",
        createdAt: "22/03/2025 - 10:21am",
        lastAccess: "38m22s",
        userType: "Usuário padrão",
        status: "Ativo"
    },
    {
        initials: "AC",
        name: "Adriano Costa",
        age: 38,
        gender: "Homem",
        createdAt: "22/03/2025 - 10:21am",
        lastAccess: "38m22s",
        userType: "Usuário padrão",
        status: "Ativo"
    },
    {
        initials: "MB",
        name: "Maria Beatriz",
        age: 28,
        gender: "Mulher",
        createdAt: "22/03/2025 - 10:21am",
        lastAccess: "38m22s",
        userType: "Usuário padrão",
        status: "Inativo"
    },
    {
        initials: "FP",
        name: "Fernando Prado",
        age: 41,
        gender: "Homem",
        createdAt: "22/03/2025 - 10:21am",
        lastAccess: "38m22s",
        userType: "Usuário padrão",
        status: "Ativo"
    },
    {
        initials: "CL",
        name: "Carla Lima",
        age: 33,
        gender: "Mulher",
        createdAt: "22/03/2025 - 10:21am",
        lastAccess: "38m22s",
        userType: "Usuário padrão",
        status: "Inativo"
    },
    {
        initials: "RG",
        name: "Rafael Gomes",
        age: 27,
        gender: "Homem",
        createdAt: "22/03/2025 - 10:21am",
        lastAccess: "38m22s",
        userType: "Usuário padrão",
        status: "Ativo"
    },
    {
        initials: "TP",
        name: "Tatiane Pereira",
        age: 35,
        gender: "Mulher",
        createdAt: "22/03/2025 - 10:21am",
        lastAccess: "38m22s",
        userType: "Usuário padrão",
        status: "Ativo"
    },
    {
        initials: "EV",
        name: "Eduardo Vieira",
        age: 44,
        gender: "Homem",
        createdAt: "22/03/2025 - 10:21am",
        lastAccess: "38m22s",
        userType: "Usuário padrão",
        status: "Inativo"
    },
    {
        initials: "JS",
        name: "Juliana Souza",
        age: 32,
        gender: "Mulher",
        createdAt: "22/03/2025 - 10:21am",
        lastAccess: "38m22s",
        userType: "Usuário padrão",
        status: "Ativo"
    }
]

export function ListUsers() {
    const [users, setUsers] = useState<User[]>(initialUsers)
    const [formOpen, setFormOpen] = useState(false)
    const [formMode, setFormMode] = useState<"add" | "edit">("add")
    const [editUser, setEditUser] = useState<User | null>(null)
    const [search, setSearch] = useState("")

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    )

    const handleAdd = () => {
        setFormMode("add")
        setEditUser(null)
        setFormOpen(true)
    }

    const handleEdit = (user: User) => {
        setFormMode("edit")
        setEditUser(user)
        setFormOpen(true)
    }

    interface UserFormValues {
        name: string;
        age?: number;
        gender?: string;
        userType?: string;
        status?: boolean;
    }

    const handleSubmit = (values: UserFormValues) => {
        if (formMode === "add") {
            const initials = values.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")
                .toUpperCase()
            setUsers([
                ...users,
                {
                    initials,
                    name: values.name,
                    age: values.age || 0,
                    gender: values.gender || "",
                    createdAt: new Date().toLocaleDateString("pt-BR"),
                    lastAccess: "",
                    userType: values.userType || "",
                    status: values.status ? "Ativo" : "Inativo"
                }
            ])
        } else if (formMode === "edit" && editUser) {
            setUsers(
                users.map((u) =>
                    u.name === editUser.name
                        ? {
                            ...u,
                            name: values.name,
                            status: values.status ? "Ativo" : "Inativo"
                        }
                        : u
                )
            )
        }
    }

    const columns = columnsFactory({ onEdit: handleEdit })
    

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="font-family-serif text-size-lg font-medium text-gray-900">Usuários</h1>
                <Button
                    className="bg-dark-green rounded-[var(--radius-2xl)] text-gray-200 px-[10px] py-4" onClick={handleAdd}
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Adicionar
                </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-size-sm text-gray-muted font-normal mb-1">Usuários</p>
                    <p className="text-size-lg font-family-serif text-gray-900 tracking-tight">294</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-size-sm text-gray-muted font-normal mb-1">Tempo de sessão</p>
                    <p className="text-size-lg font-family-serif text-gray-900 tracking-tight tabular-nums">31m 20s</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-size-sm text-gray-muted font-normal mb-1">Ativos</p>
                    <p className="text-size-lg font-family-serif text-gray-900 tracking-tight">203</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-size-sm text-gray-muted font-normal mb-1">Inativos</p>
                    <p className="text-size-lg font-family-serif text-gray-900">127</p>
                </div>
            </div>

            <div className="bg-white rounded-lg mb-5">
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Buscar..."
                            className="pl-8 h-9 bg-gray-50"
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                    <Button variant="ghost" size="icon" className="ml-2">
                        <ListFilterIcon className="h-4 w-4" />
                    </Button>
                </div>

                <DataTable columns={columns} data={filteredUsers} />
            </div>
            <UserFormSheet
                open={formOpen}
                onOpenChange={setFormOpen}
                onSubmit={handleSubmit}
                initialData={formMode === "edit" && editUser ? { name: editUser.name, status: editUser.status === "Ativo" } : {}}
                mode={formMode}
            />
        </div>
    )
}