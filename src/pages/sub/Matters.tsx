import { NavLink, useParams } from 'react-router-dom';

import { useGetMattersBySlugQuery } from '../../graphql/generated';

export function Matters() {
  const { slug } = useParams();

  const { data, loading } = useGetMattersBySlugQuery({
    variables: {
      slug: slug!
    }
  });

  if (!data || !data.subject || !data.subject.matters || loading) {
    return (
      <div className="text-white flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <main className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 items-center justify-center">
      {data.subject.matters.map((item) => (
        <NavLink
          to={`/lessons/${item.slug}`}
          key={item.id}
          className="flex flex-col items-center justify-between gap-5 h-full text-white bg-[#0e0737] rounded-lg p-4 hover:bg-[#0e0737]/80 transition-colors duration-150"
        >
          <span>{item.title}</span>
        </NavLink>
      ))}
    </main>
  )
}
