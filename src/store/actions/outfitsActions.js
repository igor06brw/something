import firebase from '../../firebase/firebase';
import * as actions from './actionTypes';

export const fetchOutfits = () => {
    return dispatch =>{ 
        dispatch({ type: actions.ADD_OUTFIT_START });
        let outfitCollection = [];
        firebase.ref('/').once('value', snapshot => {
            snapshot.forEach(snap => {
                outfitCollection = snap.val();
            })
            console.log(outfitCollection);
        }).then(() => dispatch({ type: actions.ADD_OUTFIT_SUCCESSFULL, payload: outfitCollection }))
        // return firebase.ref.then(() => {
        //     dispatch({ type: actions.ADD_OUTFIT_SUCCESSFULL})
        //     console.log(firebase)
        // })
    }
    
}