"use client"

import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"

type UserFormValues = {
    name: string
    email: string
    phone: string
    whatsapp: boolean
    cpf: string
    rg: string
    status: boolean
}

type UserFormSheetProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
    onSubmit: (values: UserFormValues) => void
    initialData?: Partial<UserFormValues>
    mode?: "add" | "edit"
}

export function UserFormSheet({
    open,
    onOpenChange,
    onSubmit,
    initialData = {},
    mode = "add",
}: UserFormSheetProps) {
    const [form, setForm] = useState<UserFormValues>({
        name: "",
        email: "",
        phone: "",
        whatsapp: false,
        cpf: "",
        rg: "",
        status: true,
        ...initialData,
    })

    useEffect(() => {
        setForm({
            name: "",
            email: "",
            phone: "",
            whatsapp: false,
            cpf: "",
            rg: "",
            status: true,
            ...initialData,
        })
    }, [initialData, open])

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = e.target
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    function handleSwitch(checked: boolean) {
        setForm((prev) => ({ ...prev, status: checked }))
    }

    function handleWhatsapp(checked: boolean) {
        setForm((prev) => ({ ...prev, whatsapp: checked }))
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        onSubmit(form)
        onOpenChange(false)
        toast.custom((t) => (
            <div className="flex items-center justify-between gap-4 bg-white rounded-[var(--radius)] shadow px-6 py-4 min-w-[340px]">
                <span className="text-[oklch(0.145_0_0)] text-size-md">Usuário adicionado com sucesso!</span>
                <button
                    className="rounded-full border border-[var(--color-gray-200)] px-6 py-2 bg-white text-[oklch(0.145_0_0)] text-size-md whitespace-nowrap min-w-[90px]"
                    onClick={() => toast.dismiss(t)}
                >
                    Fechar
                </button>
            </div>
        ))
    }

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="right"
                className="max-w-md w-full bg-[oklch(1_0_0)] p-10"
            >
                <div className="flex items-center justify-between mb-8">
                    <SheetTitle className="text-[24px] font-family-serif text-[oklch(0.145_0_0)]">
                        {mode === "edit" ? "Editar usuário" : "Adicionar usuário"}
                    </SheetTitle>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-5">
                    <div>
                        <Label htmlFor="name" className="text-size-sm text-gray-800 mb-1 block">Nome completo</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Digite o nome"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="h-11 rounded-[var(--radius)] bg-[var(--color-gray-100)] border border-[var(--color-gray-200)] text-[oklch(0.145_0_0)] text-size-md font-normal"
                        />
                    </div>
                    <div>
                        <Label htmlFor="email" className="text-size-sm text-gray-800 mb-1 block">E-mail</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Digite o e-mail"
                            value={form.email}
                            onChange={handleChange}
                            required
                            type="email"
                            className="h-11 rounded-[var(--radius)] bg-[var(--color-gray-100)] border border-[var(--color-gray-200)] text-[oklch(0.145_0_0)] text-size-md font-normal"
                        />
                    </div>
                    <div>
                        <Label htmlFor="phone" className="text-size-sm text-gray-800 mb-1 block">Telefone</Label>
                        <Input
                            id="phone"
                            name="phone"
                            placeholder="Informe o telefone"
                            value={form.phone}
                            onChange={handleChange}
                            className="h-11 rounded-[var(--radius)] bg-[var(--color-gray-100)] border border-[var(--color-gray-200)] text-[oklch(0.145_0_0)] text-size-md font-normal"
                        />
                        <div className="flex items-center gap-2 mt-2">
                            <Checkbox
                                id="whatsapp"
                                checked={form.whatsapp}
                                onCheckedChange={handleWhatsapp}
                                className="border-gray-400 data-[state=checked]:border-dark-green"
                            />
                            <Label htmlFor="whatsapp" className="text-size-sm font-normal text-gray-800">
                                WhatsApp
                            </Label>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <Label htmlFor="cpf" className="text-size-sm text-gray-800 mb-1 block">CPF</Label>
                            <Input
                                id="cpf"
                                name="cpf"
                                placeholder="Informe o CPF"
                                value={form.cpf}
                                onChange={handleChange}
                                className="h-11 rounded-[var(--radius)] bg-[var(--color-gray-100)] border border-[var(--color-gray-200)] text-[oklch(0.145_0_0)] text-size-md font-normal"
                            />
                        </div>
                        <div className="flex-1">
                            <Label htmlFor="rg" className="text-size-sm text-gray-800 mb-1 block">RG</Label>
                            <Input
                                id="rg"
                                name="rg"
                                placeholder="Informe o RG"
                                value={form.rg}
                                onChange={handleChange}
                                className="h-11 rounded-[var(--radius)] bg-[var(--color-gray-100)] border border-[var(--color-gray-200)] text-[oklch(0.145_0_0)] text-size-md font-normal"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between bg-[var(--color-gray-100)] rounded-[var(--radius)] px-4 py-3 mt-2 mb-2">
                        <div className="mr-4">
                            <Label htmlFor="status" className="text-size-sm text-gray-800 block mb-2">Status</Label>
                            <span className="text-size-sm text-gray-muted block">Defina se o usuário estará ativo ao ser adicionado.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Switch
                                id="status"
                                checked={form.status}
                                onCheckedChange={handleSwitch}
                                className="py-[2px] data-[state=checked]:bg-[var(--color-dark-green)] data-[state=unchecked]:bg-gray-200"
                            />
                            <span className="text-size-sm text-[oklch(0.145_0_0)]">{form.status ? "Ativo" : "Inativo"}</span>
                        </div>
                    </div>
                    <div className="flex-1" />
                    <div className="flex justify-end gap-3 mt-6 md:mt-16">
                        <SheetClose asChild>
                            <Button
                                type="button"
                                variant="outline"
                                className="rounded-[var(--radius-lg)] border border-[var(--color-gray-200)] bg-white px-6 py-2 text-size-md"
                            >
                                Cancelar
                            </Button>
                        </SheetClose>
                        <Button
                            type="submit"
                            className="rounded-[var(--radius-2xl)] bg-dark-green px-[10px] py-4 text-size-md"
                            style={{ color: "var(--color-gray-200)" }}
                        >
                            {mode === "edit" ? "Salvar" : "Adicionar"}
                        </Button>
                    </div>                   
                </form>
            </SheetContent>
        </Sheet>
    )
}