import React, {useState} from 'react';
import Select from 'react-select';
import './index.scss'
import {Button} from "@material-ui/core";

function Parts({users, meets, editeConnectParts}) {

    const [userId, setUser] = useState('')
    const [meetId, setMeet] = useState('')
    const [alert, setAlert] = useState('')

    let handleChangeUser = (e) => {
        setUser(e.value)
    }
    let handleChangeMeet = (e) => {
        setMeet(e.value)
    }

        return (
      <>
          <div className="parts_inner">
              <div>
                  <Select
                      className="parts_select"
                      options={users.map(u=> {
                          return {value: u.id, label: u.lastName}
                      })}
                      onChange={handleChangeUser.bind(this)}
                  />
              </div>
              <div>
                  <Select
                      className="parts_select"
                      options={meets.map(u=> {
                          return {value: u.id, label: u.nameMeet}
                      })}
                      onChange={handleChangeMeet.bind(this)}
                  />
              </div>
              <div>
                  <Button type="submit" onClick={() => {
                      editeConnectParts(userId, meetId)
                      setAlert('Ready')
                  }}>Связать</Button>
              </div>
          </div>
          <div></div>
          <div>{alert}</div>
      </>
    );
}

export default Parts;