import { Lesson } from './Lesson';

import { useGetLessonsQuery } from '../graphql/generated';

export function LessonSidebar() {
    const { data } = useGetLessonsQuery();

    return (
        <aside className="w-full h-[320px] lg:w-[348px] lg:h-auto bg-gradient-to-b from-violet-700 to-violet-900 bg-violet-700 p-6 border-l border-violet-600 absolute lg:relative z-50 text-white overflow-y-scroll lg:scrollbar">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-violet-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug!}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    );
}
