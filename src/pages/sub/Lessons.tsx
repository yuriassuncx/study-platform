import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '../../components/Header';
import { LessonSidebar } from '../../components/LessonSidebar';
import { Video } from '../../components/Video';

export function Lessons() {
    const { slug } = useParams<{ slug: string }>()

    const [isSidebarOpened, setIsSidebarOpened] = useState(true);

    function handleOpenSidebar() {
        setIsSidebarOpened(true);
    }

    function handleCloseSidebar() {
        setIsSidebarOpened(false);
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header
                openLessonSidebar={handleOpenSidebar}
                closeLessonSidebar={handleCloseSidebar}
                isSidebarOpened={isSidebarOpened}
            />

            <main className="flex flex-1">
                { slug
                    ? <Video lessonSlug={slug} />
                    : <div className="flex-1" /> 
                }
                {isSidebarOpened && (
                    <LessonSidebar />
                )}
            </main>
        </div>
    );
}
