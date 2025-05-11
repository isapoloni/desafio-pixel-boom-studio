"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination"

interface DataTableProps<TData> {
    columns: { id: string, header: string, cell: (row: TData) => React.ReactNode }[]
    data: TData[]
}

export function DataTable<TData>({ columns, data }: DataTableProps<TData>) {
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(5)
    const pageCount = Math.ceil(data.length / pageSize)
    const paginatedData = data.slice(page * pageSize, (page + 1) * pageSize)

    return (
        <div className="rounded-md">
            <Table className="mb-5">
                <TableBody>
                    {paginatedData.length ? (
                        paginatedData.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {columns.map(col => (
                                    <TableCell key={col.id}>
                                        {col.cell(row)}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                Sem resultados.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-2 py-4 border-t bg-white flex-wrap">
                <div className="text-sm !text-gray-muted whitespace-nowrap">
                    {`${paginatedData.length} itens de ${data.length}`}
                </div>
                <div className="flex-1 flex justify-center">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <button
                                    onClick={() => setPage(p => Math.max(0, p - 1))}
                                    disabled={page === 0}
                                    className={`flex items-center gap-1 px-2 h-9 rounded-md text-gray-500 hover:text-gray-900 transition-colors ${page === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                                    type="button"
                                >
                                    <span className="text-size-md">Anterior</span>
                                </button>
                            </PaginationItem>
                            {[...Array(pageCount)].map((_, i) => (
                                <PaginationItem key={i}>
                                    <PaginationLink
                                        isActive={i === page}
                                        onClick={() => setPage(i)}
                                        href="#"
                                        className={`text-gray-800 ${i === page ? "font-bold border border-color-border" : ""}`}
                                        style={i === page ? { borderColor: "var(--color-border)" } : {}}
                                    >
                                        {i + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem>
                                <button
                                    onClick={() => setPage(p => Math.min(pageCount - 1, p + 1))}
                                    disabled={page === pageCount - 1}
                                    className={`flex items-center gap-1 px-2 h-9 rounded-md text-gray-500 hover:text-gray-900 transition-colors ${page === pageCount - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                                    type="button"
                                >
                                    <span className="text-size-md">Próxima</span>
                                </button>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
                <div className="flex items-center gap-2 min-w-[160px] justify-end">
                    <span className="text-sm text-gray-muted whitespace-nowrap">Itens por página</span>
                    <Select
                        value={String(pageSize)}
                        onValueChange={(value: string) => {
                            setPageSize(Number(value))
                            setPage(0)
                        }}
                    >
                        <SelectTrigger className="w-[60px] h-8">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {[5, 10, 20, 30, 50].map(size => (
                                <SelectItem key={size} value={String(size)}>
                                    {size}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}