"use client";

import { RoomProvider } from "../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";

export function Room({ children  , boardId}) {
    return (
        <RoomProvider id={boardId} initialPresence={{}}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
            {() => children}
        </ClientSideSuspense>
        </RoomProvider>
    );
}