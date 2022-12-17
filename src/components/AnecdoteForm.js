import { useDispatch } from "react-redux"
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (e) => {
    e.preventDefault()

    const content = e.target.newAnecdote.value
    e.target.newAnecdote.value = ''
    dispatch(createAnecdote(content))

    dispatch(showNotification(`Created '${content}'`, 5000))
  }

  return (
    <form onSubmit={addAnecdote}>
      <div><input name='newAnecdote' /></div>
      <button type='submit'>create</button>
    </form>
  )
}

export default AnecdoteForm