// Write your code here.
import './index.css'

const ThumbNailItem = props => {
  const {isSelected, onClickImg, imageDetails} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const imgClassName = isSelected ? '' : 'img'
  const clickImage = () => {
    onClickImg(id)
  }
  return (
    <li>
      <button
        className={`thumbnail-image ${imgClassName}`}
        onClick={clickImage}
        type="button"
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbNailItem
