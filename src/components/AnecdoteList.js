import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ anecdotes, vote, showNotification }) => {

  const voteHandler = (anecdote) => {
    vote(anecdote)
    showNotification(`Voted for '${anecdote.content}'`, 5000)
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

const mapStateToProps = (state) => {
  if (state.filter === '') {
    return { anecdotes: state.anecdotes }
  }
  return {
    anecdotes: (state.anecdotes.filter(anecdote => {
      return anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
    }))
  }
}

const mapDispatchToProps = { vote, showNotification }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)