import { auth } from "@/config/firebase.config";
import DashboardLayout from '@/layouts/DashboardLayout';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export default function Dashboard() {

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
