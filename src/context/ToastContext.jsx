import { createContext, useCallback, useContext, useMemo, useReducer } from 'react'
import { createPortal } from 'react-dom'

const ToastContext = createContext(undefined)

function toastReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]
    case 'REMOVE':
      return state.filter((toast) => toast.id !== action.id)
    default:
      return state
  }
}

/**
 * ToastProvider
 * Global notification system. Demonstrates useReducer for managing a
 * list of items, plus React Portals to render the toast stack outside
 * the normal component tree (directly under document.body).
 */
export function ToastProvider({ children }) {
  const [toasts, dispatch] = useReducer(toastReducer, [])

  const removeToast = useCallback((id) => {
    dispatch({ type: 'REMOVE', id })
  }, [])

  const showToast = useCallback(
    (message, variant = 'success', duration = 3500) => {
      const id = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString()
      dispatch({ type: 'ADD', payload: { id, message, variant } })
      window.setTimeout(() => removeToast(id), duration)
    },
    [removeToast]
  )

  const value = useMemo(() => ({ showToast }), [showToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      {createPortal(
        <div className="toast-stack" role="status" aria-live="polite">
          {toasts.map((toast) => (
            <div key={toast.id} className={`toast toast-${toast.variant}`}>
              {toast.message}
            </div>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  )
}

/** useToast — custom hook exposing showToast() to any component in the tree. */
// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
