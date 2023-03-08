import { Route, Routes } from 'react-router-dom';

import { Navbar } from '../components/Navbar';
import { ProfileSection } from '../components/ProfileSection';
import { Sidebar } from '../components/Sidebar';

import { Matters } from './sub/Matters';
import { Subjects } from './sub/Subjects';
import { Dashboard } from './sub/Dashboard';

export function Home() {
  return (
    <main className="flex flex-col lg:max-w-5xl 2xl:max-w-6xl h-screen items-center mx-2 lg:mx-auto">
      <div className="bg-background w-full h-[320px] absolute overflow-hidden bg-cover bg-no-repeat z-[-10] shadow-md shadow-violet-500">
          <div className="cloud_one" />
          <div className="cloud_two" />
      </div>

      <Navbar />

      <ProfileSection />

      <div className="flex flex-col md:flex-row gap-3 w-full pt-6">
        <Sidebar />

        <div className="flex flex-1 flex-col items-center sm:items-start gap-3 w-full h-full mb-12 md:mb-0 bg-[#1f1a44] rounded-md p-6 shadow-xl">
          <Routes>
            <Route path="dashboard" element={(<Dashboard />)} />
            <Route path="materias" element={(<Subjects />)} />
            <Route path="materias/:slug" element={(<Matters />)} />
          </Routes>
        </div>
      </div>
    </main>
  )
}
