import useSWR from 'swr'
import { jsonFetcher } from 'constants';
import { useRouter } from 'next/router';

export default function Berry() {
  const { query: routeParams } = useRouter();
  const { data: berry, error } = useSWR(`https://pokeapi.co/api/v2/berry/${routeParams.berryId}`, jsonFetcher)
  if (error)
    return <div>failed to load</div>
  if (!berry)
    return <div>loading...</div>
  
    return (
    <>
      <p>{JSON.stringify(berry)}</p>
    </>
  )
}
