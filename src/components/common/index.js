import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Link = ({ children, to, type = 'internal' }) => (
    type === 'internal'
    ? <RouterLink to={ to }>{ children }</RouterLink>
    :
)

export default Link