import './ProgressItem.scss'

function ProgressItem({name, number}) {
  return (
    <div className="item">
        <div className="title title_14 item__title">{name}</div>
        <div className="item__number">{number}%</div>
        <div className="item__line">
            <span style={{width: `${number}%`}}></span>
        </div>
    </div>
  ) 
}

export default ProgressItem