import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import './View.css';

function View() {
  const [userDetails, setUserDetails] = useState()
  const { postDetails } = useContext(PostContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    const { userId } = postDetails
    console.log(userId);
    firebase.firestore().collection('user').where('id', '===', userId).get().then((res) => {
      res.forEach(doc => {
        setUserDetails(doc.data())
      })
    })

  }, [])
  const dummy = postDetails.url
  const ImageUrl = dummy ? dummy : ""
  return (
    <div className="viewParentDiv" >
      <div className="imageShowDiv">
        <img
          src={ImageUrl}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div >
  );
}
export default View;
