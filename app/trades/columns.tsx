"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal, TrendingUp, TrendingDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export type Trade = {
  id: number
  created_at: string
  asset: string
  entry_date: string | null
  exit_date: string | null
  balance: number | null
  is_win: boolean | null
}

export const columns: ColumnDef<Trade>[] = [
  {
    accessorKey: "asset",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Asset
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="font-semibold">{row.getValue("asset")}</div>
    },
  },
  {
    accessorKey: "entry_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Einstieg
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = row.getValue("entry_date") as string | null
      if (!date) return <span className="text-muted-foreground">-</span>
      return new Date(date).toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    },
  },
  {
    accessorKey: "exit_date",
    header: "Ausstieg",
    cell: ({ row }) => {
      const date = row.getValue("exit_date") as string | null
      if (!date) return <span className="text-muted-foreground">Offen</span>
      return new Date(date).toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    },
  },
  {
    accessorKey: "balance",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Balance
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const balance = row.getValue("balance") as number | null
      if (balance === null) return <span className="text-muted-foreground">-</span>
      
      const formatted = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(balance)
      
      return (
        <div className={balance >= 0 ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
          {formatted}
        </div>
      )
    },
  },
  {
    accessorKey: "is_win",
    header: "Status",
    cell: ({ row }) => {
      const isWin = row.getValue("is_win") as boolean | null
      
      if (isWin === null) {
        return (
          <Badge variant="outline" className="bg-gray-100">
            Offen
          </Badge>
        )
      }
      
      return isWin ? (
        <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-200">
          <TrendingUp className="mr-1 h-3 w-3" />
          Gewinn
        </Badge>
      ) : (
        <Badge variant="default" className="bg-red-100 text-red-800 hover:bg-red-200">
          <TrendingDown className="mr-1 h-3 w-3" />
          Verlust
        </Badge>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "created_at",
    header: "Erstellt am",
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"))
      return date.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const trade = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Menü öffnen</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Aktionen</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(trade.id.toString())}
            >
              ID kopieren
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Details anzeigen</DropdownMenuItem>
            <DropdownMenuItem>Bearbeiten</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Löschen
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]