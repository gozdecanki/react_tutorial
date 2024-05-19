import React from 'react';

const User = ({ user, delMethod ,stateChange}) => {

const changeHandler=(e)=>{
stateChange({state: e.target.value, id:user.id})
}

    return (
        <div className="card secondary mb-3">
            <div className='card-body'>
                <button onClick={delMethod} className='btn btn-sm btn-outline-danger'
                    style={{ position: "absolute", right: "15px" }}>Sil</button>
                <div className="card-body">
                    <h1 className="card-title">Adı:{user.name} </h1>
                    <h3 className="card-subtitle mb-1">Durum: <span className={user.state}> {user.state}</span> </h3>

                    <select className="form-select" name="state" id="state" onChange={changeHandler} value={user.state}>
                        <option value="online">online</option>
                        <option value="offline">offline</option>
                        <option value="busy">busy</option>
                    </select>
                </div>


            </div>
        </div>
    )
}

export default User;