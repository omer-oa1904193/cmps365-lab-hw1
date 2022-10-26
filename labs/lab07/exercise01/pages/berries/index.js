import Link from 'next/link';
import useSWR from 'swr'
import { paginatedJsonFetcher } from '/constants';

export default function Berries() {
  const { data: berries, error } = useSWR('https://pokeapi.co/api/v2/berry', paginatedJsonFetcher)
  if (error)
    return <div>failed to load</div>
  if (!berries)
    return <div>loading...</div>
  return (
    <>
      {berries.map((berry, index) => {
        return <div key={berry.name}>
          <Link href={`/berries/${index}`}>
            {berry.name}
          </Link>
        </div>
      })
      }
    </>
  )
}
