import React, { Component } from 'react'

export default class ProfileStatus extends Component {

    state = {
        editMode: false,
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
    }

  render() {
    return (
        <>  
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={ this.deactivateEditMode } value={this.props.status} type="text" />
                </div>
            }
        </>
    )
  }
}
