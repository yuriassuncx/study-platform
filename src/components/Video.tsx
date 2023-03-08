import { DefaultUi, Player, Youtube } from '@vime/react';
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react';

import "@vime/core/themes/default.css"
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug,
        }
    })

    if (!data || !data.lesson) {
        return (
            <div className="flex-1 text-white">
                <p>Carregando...</p>
            </div>
        );
    }

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex flex-col sm:flex-row items-start gap-16 text-white">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>

                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6">
                                <img
                                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                                    src={data.lesson.teacher.avatarURL.url}
                                    alt="Imagem do Professor"
                                />

                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                    <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col w-full sm:w-auto gap-4">
                        <a href="#" className="p-4 text-sm bg-violet-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-violet-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </a>
                        <a href="#" className="p-4 text-sm border border-indigo-500 text-indigo-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-indigo-500 hover:text-white transition-colors">
                            <Lightning size={24} />
                            Acesse o Desafio
                        </a>
                    </div>
                </div>

                <div className="gap-8 mt-20 grid md:grid-cols-2">
                    <a href="" className="bg-violet-900 rounded overflow-hidden flex items-stretch gap-6 hover:bg-violet-800 transition-colors text-white">
                        <div className="bg-violet-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="sm:text-base lg:text-2xl">Material complementar</strong>
                            <p className="text-xs sm:text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                    <a href="" className="bg-violet-900 rounded overflow-hidden flex items-stretch gap-6 hover:bg-violet-800 transition-colors text-white">
                        <div className="bg-violet-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="sm:text-base lg:text-2xl">Wallpapers exclusivos</strong>
                            <p className="text-xs sm:text-sm text-gray-200 mt-2">
                                Baixe wallpapers exclusivos do Ignite Lab
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}