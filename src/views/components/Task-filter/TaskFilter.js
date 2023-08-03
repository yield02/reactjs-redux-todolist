import { Link } from "react-router-dom"
import "./TaskFilter.scss"

function TaskFilter({ filter, ...props}) {
    return (
        <div className='todo_filter'>
                <Link className={`filter-btn ${filter === 'all' ? 'active' : ''}`} to="/">Tất cả</Link>
                <span className='space'>/</span>
                <Link className={`filter-btn ${filter === 'active' ? 'active' : ''}`} to={{pathname: '/', search: '?filter=active'}}>Đang làm</Link>
                <span className='space'>/</span>
                <Link className={`filter-btn ${filter === 'completed' ? 'active' : ''}`} to={{pathname: '/', search: '?filter=completed'}}>Đã hoàn thành</Link>
        </div>
    )
}




export default (TaskFilter)