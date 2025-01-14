const PublishButton = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.isPublished ? '公開中' : '非公開'}
    </button>
  )
}

export default PublishButton