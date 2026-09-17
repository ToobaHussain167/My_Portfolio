import { useId, useReducer, useRef } from 'react'
import { useToast } from '../context/ToastContext'

const initialState = {
  values: { name: '', email: '', message: '' },
  errors: {},
  status: 'idle', // idle | submitting | success
}

function contactReducer(state, action) {
  switch (action.type) {
    case 'FIELD_CHANGE':
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value },
        // Clear that field's error as soon as the user edits it again.
        errors: { ...state.errors, [action.field]: undefined },
      }
    case 'SET_ERRORS':
      return { ...state, errors: action.errors }
    case 'SUBMIT_START':
      return { ...state, status: 'submitting' }
    case 'SUBMIT_SUCCESS':
      return { ...initialState, status: 'success' }
    case 'SUBMIT_RESET':
      return { ...state, status: 'idle' }
    default:
      return state
  }
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please write a short message.'
  return errors
}

function Contact() {
  const [state, dispatch] = useReducer(contactReducer, initialState)
  const { showToast } = useToast()

  // Accessible, collision-free ids for label/input pairs.
  const nameId = useId()
  const emailId = useId()
  const messageId = useId()

  // Refs so the first invalid field can be focused automatically.
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const handleChange = (field) => (event) =>
    dispatch({ type: 'FIELD_CHANGE', field, value: event.target.value })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const errors = validate(state.values)

    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors })
      if (errors.name) nameRef.current?.focus()
      else if (errors.email) emailRef.current?.focus()
      else if (errors.message) messageRef.current?.focus()
      return
    }

    dispatch({ type: 'SUBMIT_START' })

    // Simulate a network request so the loading state has something to show.
    await new Promise((resolve) => setTimeout(resolve, 900))

    const { name, email, message } = state.values
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=toobahussain167@gmail.com&su=${subject}&body=${body}`,
      '_blank',
      'noreferrer'
    )

    dispatch({ type: 'SUBMIT_SUCCESS' })
    showToast('Message ready — finish sending it from your email tab.', 'success')
  }

  const isSubmitting = state.status === 'submitting'

  return (
    <section id="contact" className="section">
      <div className="section-content">
        <p className="section-label">Contact</p>
        <h2>Let's connect.</h2>
        <p>Get in touch.</p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor={nameId}>Name</label>
            <input
              id={nameId}
              ref={nameRef}
              type="text"
              value={state.values.name}
              onChange={handleChange('name')}
              aria-invalid={Boolean(state.errors.name)}
              aria-describedby={state.errors.name ? `${nameId}-error` : undefined}
              disabled={isSubmitting}
            />
            {state.errors.name && (
              <p className="form-error" id={`${nameId}-error`}>
                {state.errors.name}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor={emailId}>Email</label>
            <input
              id={emailId}
              ref={emailRef}
              type="email"
              value={state.values.email}
              onChange={handleChange('email')}
              aria-invalid={Boolean(state.errors.email)}
              aria-describedby={state.errors.email ? `${emailId}-error` : undefined}
              disabled={isSubmitting}
            />
            {state.errors.email && (
              <p className="form-error" id={`${emailId}-error`}>
                {state.errors.email}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor={messageId}>Message</label>
            <textarea
              id={messageId}
              ref={messageRef}
              rows={4}
              value={state.values.message}
              onChange={handleChange('message')}
              aria-invalid={Boolean(state.errors.message)}
              aria-describedby={state.errors.message ? `${messageId}-error` : undefined}
              disabled={isSubmitting}
            />
            {state.errors.message && (
              <p className="form-error" id={`${messageId}-error`}>
                {state.errors.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </button>
        </form>

        <div className="contact-links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=toobahussain167@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email Me
          </a>
          <a href="https://github.com/ToobaHussain167" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tooba-hussain-24015331a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
