import Link from 'next/link';
import useSWR from 'swr'
import { paginatedJsonFetcher } from '/constants';

export async function getServerSideProps() {
  console.log("HELLO")
  const res = await fetch(`https://pokeapi.co/api/v2/berry`)
  const data = await res.json()
  console.log(data)
  const berries = data.results;
  return {
    props: { berries }
  }
}

export default function Berries(props) {
  const berries = props.berries
  if (!berries)
    return <></>

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
