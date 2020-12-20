import React from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { linkResolver } from 'lib/resolvers'
import prismicLinkShape from 'shapes/prismic/link'

const PrismicLink = ({ className, activeClassName, link, children }) => {
  const { link_type, url, target } = link

  const DocumentLink = () => {
    const { asPath } = useRouter()
    const asPathWithSlash = `${asPath}/`
    const href = linkResolver(link)
    const isActive = asPathWithSlash === href
    return (
      <Link href={href}>
        <a
          className={classNames(className, {
            [activeClassName]: isActive,
          })}>
          {children}
        </a>
      </Link>
    )
  }
  const RegularLink = () => {
    return (
      <a href={url} target={target} rel={target === '_blank' && 'noreferrer'}>
        {children}
      </a>
    )
  }
  const NoLink = () => {
    return <span className={className}>{children}</span>
  }
  return (
    <>
      {link_type === 'Document' && <DocumentLink />}
      {link_type === 'Web' && <RegularLink />}
      {(link_type === 'Any' || !link_type) && <NoLink />}
    </>
  )
}

PrismicLink.propTypes = {
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  link: prismicLinkShape.isRequired,
  children: PropTypes.node,
}

export default PrismicLink
