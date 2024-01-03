import { AlertColor } from "@mui/material"
import { Notification } from "../components"
import React, { createContext, useContext, useState } from "react"

interface ContextProps {
    getError: (msg: string) => void
    getSuccess: (msg: string) => void
}

interface ProviderProps {
    children: JSX.Element
}

const NotificationContext = createContext<ContextProps | null>(null)


export const NotificationProvider: React.FC<ProviderProps> = ({ children }) => {
    const [severity, setSeverity] = useState<AlertColor | undefined>(undefined)
    const [msg, setMsg] = useState("")
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const getError = (msg: string) => {
        setSeverity("error")
        setMsg(msg)
        setOpen(true)
    }

    const getSuccess = (msg: string) => {
        setSeverity("success")
        setMsg(msg)
        setOpen(true)
    }

    const values = {
        getError,
        getSuccess
    }

    return (
        <NotificationContext.Provider value={values}>
            <Notification severity={severity} msg={msg} open={open} handleClose={handleClose} />
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const context = useContext(NotificationContext)
    if (!context) throw new Error("No existe el contexto")
    return context
}