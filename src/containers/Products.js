import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFirebaseConnect } from 'react-redux-firebase'
import { useFirestoreConnect } from 'react-redux-firebase'

import { fetchOutfits } from "../store/actions/outfitsActions";

export const Products = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchOutfits());
        }
        fetchData();
    }, dispatch)
    useFirebaseConnect([
        { path: 'outfits' }
      ])
    // useFirestoreConnect([{ collection: 'outfits' }])
    const outfits = useSelector(state => state.outfit.outfits)
    console.log(outfits)
    return (
        <div>
            {
                outfits && outfits.map((outfit) => (
                    <div>
                        {outfit.name}
                        <img style={{width: '100px'}} src={outfit.image} />
                    </div>
                ))
            }
      </div>
    )
}
