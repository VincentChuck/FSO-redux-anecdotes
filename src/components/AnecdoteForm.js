import { useDispatch } from "react-redux"
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (e) => {
    e.preventDefault()
    const newAnecdote = e.target.newAnecdote.value
    e.target.newAnecdote.value = ''
    dispatch(createAnecdote(newAnecdote))
    dispatch(setNotification(`Created '${newAnecdote}'`))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }

  return (
    <form onSubmit={addAnecdote}>
      <div><input name='newAnecdote' /></div>
      <button type='submit'>create</button>
    </form>
  )
}

export default AnecdoteForm