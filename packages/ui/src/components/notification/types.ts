
export interface NotifiactionProps  {
    id?: string  
    onClose?: any
    onMore?: any
    title?: string
    description?: string
    type :  "error" |  "warning" | "success"
}