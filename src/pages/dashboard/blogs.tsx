import isAuth from "@/hocs/isAuth";
import DashboardLayout from "@/layouts/DashboardLayout";

function Blogs() {
    return (
        <DashboardLayout title="Blogs">
            <div className="min-h-full">
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">Blogs</div>
                </main>
            </div>
        </DashboardLayout>
    )
}

export default isAuth(Blogs);