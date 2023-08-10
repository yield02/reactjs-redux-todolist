import Todo from '../../components/Todo';
import TaskForm from '../../components/Task-form';
import './Task.scss';
import TaskFilter from '../../components/Task-filter';
import {getTaskFilter, getVisibleTasks, tasksActions} from '../../../tasks'
import { connect } from 'react-redux';
import { Component } from 'react';
import { createSelector } from 'reselect';



export class Task extends Component {


    componentWillMount() {
        this.props.loadTasks();
        this.props.filterTasks(
          this.getFilterParam(this.props.location.search)
        );
      }
    
    componentDidUpdate() {
      const filterState = this.getFilterParam(this.props.location.search);
      if(filterState !== this.props.filterType) {
          this.props.filterTasks(filterState);
      }
    }
    
    componentWillUnmount() {
    }

    getFilterParam(search) {
        const params = new URLSearchParams(search);
        return params.get('filter') || 'all';
    }
    

    render() {
        return (
            <div className='d-flex flex-column'>
                <div className='input_container'>
                    <TaskForm createTask={this.props.createTask}></TaskForm>
                </div>
                <TaskFilter filter={this.props.filterType}></TaskFilter>
                <div>
                    <Todo tasks={this.props.tasks} updateTask={this.props.updateTask}></Todo>
                </div>
            </div>)
    }
}

const mapStateToProps = createSelector(
    getTaskFilter,
    getVisibleTasks,
    (filterType, tasks) => ({
        filterType,
        tasks
    })
);


const mapDispatchToProps = Object.assign(
    {},
    tasksActions
  );
  

export default connect(mapStateToProps, mapDispatchToProps)(Task);