import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    if (state.filter === '') {
      return state.anecdotes
    }
    return state.anecdotes.filter(anecdote => {
      return anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
    })
  })

  const dispatch = useDispatch()

  const voteHandler = (anecdote) => {
    dispatch(vote(anecdote))
    dispatch(showNotification(`Voted for '${anecdote.content}'`, 5000))
  }

  return (
    <div>
        {[...anecdotes].sort((a,b) => b.votes - a.votes ).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => voteHandler(anecdote)}>vote</button>
            </div>
          </div>
        )}
    </div>
  )
}

export default AnecdoteList