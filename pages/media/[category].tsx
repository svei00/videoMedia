import { useRouter } from 'next/router'
import MediaSection from '../../components/MediaSection'

export default function MediaPage() {
  const router = useRouter()
  const { category } = router.query

  return (
    <MediaSection category={category as 'movies' | 'series'} />
  )
}