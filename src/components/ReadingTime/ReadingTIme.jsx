import PropTypes from 'prop-types'

const ReadingTIme = ({readingTime}) => {
  return (
    <div className='text-center '>
        <h3 className='text-xl'>Reading Time:{readingTime}</h3>
    </div>
  )
}

ReadingTIme.propTypes = {
 readingTime : PropTypes.number
}

export default ReadingTIme