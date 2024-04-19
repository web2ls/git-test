export const HeaderTitle = (props) => {
  return (
    <div>
      {props.text}
      <br />
      {props.isShow ? 'show me the money' : ''}
    </div>
  )
}