import { List, X } from 'phosphor-react';

interface IHeader {
    isSidebarOpened: boolean;
    openLessonSidebar(): void;
    closeLessonSidebar(): void;
}

export function Header({ closeLessonSidebar, isSidebarOpened, openLessonSidebar }: IHeader) {
    return (
        <header className="w-full py-5 flex justify-between lg:items-center lg:justify-center bg-violet-700 border-b border-violet-600">
            <div className="text-lg lg:text-3xl justify-center lg:justify-start flex space-x-2 px-4 text-white">
                <strong>Projeto</strong>
                <p className="text-yellow-500">|</p>
                <p className="text-gray-200">TRIQUETA</p>
            </div>
            <div className="flex gap-2 lg:hidden">
                <h1 className="text-gray-200">Aulas</h1>
                {isSidebarOpened ? (
                    <X
                        size={24}
                        className="mr-6 cursor-pointer text-blue-500 lg:hidden"
                        onClick={closeLessonSidebar}
                    />
                ) : (
                    <List
                        size={24}
                        className="mr-6 cursor-pointer text-blue-500 lg:hidden"
                        onClick={openLessonSidebar}
                    />
                )}
            </div>
        </header>
    );
}
