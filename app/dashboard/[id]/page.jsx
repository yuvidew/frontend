import { CollaborativeApp } from '@/app/CollaborativeApp'
import { Room } from '@/app/Room'
import React from 'react'

export default function page({params}) {
    return (
        <div>
            page {params.id}
            <Room boardId = {params.id}>
                <CollaborativeApp/>
            </Room>
        </div>
    )
}
