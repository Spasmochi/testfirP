import PropTypes from 'prop-types'
import { useEffect } from 'react'

// global grid.
// please adjust the css properties to customize for your project.
const Grid = ({ children }) => {
  return <div>{children}</div>
}

Grid.propTypes = {
  children: PropTypes.node,
  guides: PropTypes.bool,
}

export default Grid
