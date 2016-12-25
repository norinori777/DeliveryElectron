import ControlData from '../../util/ControlData.js'

const constants = {
    UPDATE_MENU: "UPDATE_MENU"
}

let updateMenuFlg = (dispatch) => {
    dispatch({type:constants.UPDATE_MENU})
}

export {
    updateMenuFlg
}