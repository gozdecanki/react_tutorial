import React from 'react';

class AddUser extends React.Component {

    state = {
        name: ''
    }

    submitHandler = (e) => {
        e.preventDefault();// varsayılan eylemi iptale eder
        console.log('submit edildi', this.state.name)
        this.props.addMethod(this.state.name);
        this.setState({
            name: ''
        })

    }
    changeHandler = (e) => {
        this.setState({
            name: e.target.value
        });
        console.log(this.state.name)
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input className="form-control mb-2" type="text" id="name" onChange={this.changeHandler}
                 value={this.state.name} placeholder="Kullanıcı Adı"/>
                <button className="btn btn-outline-success btn-block" >Kaydet</button>

            </form>
        )
    }
}

export default AddUser;