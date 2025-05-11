import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, User as UserIcon, Clock, Tag } from "lucide-react"
import { User } from "./Columns"

export function UserInfoCell(user: User) {
    return (
        <div className="flex items-center gap-3 mb-2">
            <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-gray-100 text-gray-700">
                    {user.initials}
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                    <span className="font-size-md text-gray-800 font-medium">{user.name}</span>
                    <span className="text-sm text-gray-muted flex items-center gap-1 py-1 text-size-sm">
                        <UserIcon className="w-3 h-3" color="#A1A1AA" />
                        {user.age} anos, {user.gender}
                    </span>
                </div>
                <div className="flex items-center gap-4 text-size-sm text-gray-muted">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" color="#A1A1AA" />
                        {user.createdAt}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" color="#A1A1AA" />
                        {user.lastAccess}
                    </span>
                    <span className="flex items-center gap-1">
                        <Tag className="w-3 h-3" color="#A1A1AA" />
                        {user.userType}
                    </span>
                </div>
            </div>
        </div>
    )
}