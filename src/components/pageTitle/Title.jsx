import './title.css'

export default function Title({title}) {
  return (
    !title=='' ? (
    <div className="pageTitle">
        <h1>{title}</h1>
        <hr />
    </div>
  ):
  <></>
)
}
