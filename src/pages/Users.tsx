import { Header } from "@/components/Header";
import { ListUsers } from "@/components/Users/ListUsers";
import { Menu } from "@/components/Menu";
import { SidebarProvider } from "@/components/ui/sidebar";


export default function Users() {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-full overflow-hidden">
                <Menu />
                <div className="flex-1 flex flex-col min-w-0">
                    <Header />
                    <main className="flex-1 overflow-auto">
                        <div className="p-10">
                            <ListUsers />
                        </div>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}