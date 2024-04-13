import DashboardLayout from '@/layouts/DashboardLayout';

export default function Example() {
  return (
    <DashboardLayout title="Dashboard">
        <div className="min-h-full">
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">Dashboard</div>
            </main>
        </div>
    </DashboardLayout>
  )
}
