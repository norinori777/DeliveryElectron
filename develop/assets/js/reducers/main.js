import moment from 'moment'

const constants = {
	UPDATE_MENU: "UPDATE_MENU"
};

function main(state = {},	action){
	switch(action.type) {
		case constants.UPDATE_MENU:
		    let date
			date = moment()
			return Object.assign({}, state, {
				isOpen: state.isOpen ? false : true,
				isModOpen: false,
				img: '',
				startDate: date,
				endDate: date
			})
		default:
			return state
	}
}

export default main