import Link from 'next/link'
import React from 'react'

export default function MenuItem({ title, address, Icon }) {
    return (
        <Link className='uppercase' href={address}>
            <Icon className="text-2xl sm:hidden" />
            <p className="hidden sm:inline sm-inline">{title}</p>
        </Link>
    )
}
