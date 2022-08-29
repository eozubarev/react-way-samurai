import React, { Component } from 'react'

export default class ProfileStatus extends Component {


    state = {
        editMode: false,
        status: this.props.status 
    }

    activateEditMode = () => {
        // setState является асинхронным
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        // setState является асинхронным
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    } 

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            })   
        }
    }

  render() {
    return (
        <>  
            {!this.state.editMode &&
                <div>
                    <span onClick={ this.activateEditMode }>{this.props.status || '--------'}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status} type="text" />
                </div>
            }
        </>
    )
  }
}
