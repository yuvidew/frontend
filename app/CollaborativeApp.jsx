"use client";

import { useOthers } from "../liveblocks.config";

export function CollaborativeApp() {
    const others = useOthers();
    const userCount = others.length;
    return <div className=" text-[#fff]">There are {userCount} other user(s) online</div>;
}