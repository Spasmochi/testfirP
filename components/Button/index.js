import PropTypes from 'prop-types'
import PrismicLink from 'components/PrismicLink'
import prismicLinkShape from 'shapes/prismic/link'
const Button = ({ className, link, children }) => {
  return <PrismicLink link={link}>{children}</PrismicLink>
}
Button.propTypes = {
  className: PropTypes.string,
  link: prismicLinkShape,
  children: PropTypes.node,
}
export default Button
