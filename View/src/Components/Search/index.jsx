import Video from '../Carrers/video/Video'
import GetRoute from '../../Container/server'
import SearchCard from './searchCard';

export default function SearchResult(props) {

  return (
    <>
    <Video videosrc={GetRoute('/about-us.mp4')} title='Search Results'/>
    <div className="container py-4">
    
    <SearchCard {...props}/>

    </div>
    </>
  )
}
