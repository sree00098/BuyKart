import React, { useState } from 'react'

const Cart = () => {
  const [items , setItems] = useState();
  useEffect(()=>{
    const fetchCartData = async() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
    try{
        const cartCollection = collection(db,'Cart',user.uid,'CartItems')
        const querySnapshot = await getDocs(cartCollection)
        const cartItems = querySnapshot.docs.map(doc=>{
            const data = doc.data();
            console.log(data)
            return{
                id:doc.id,
                title:data.pName,
                price:data.price,
                image:data.imageUrl
            }
        })
        console.log("Data Fetched")
        setItems(cartItems)
    }
    catch(error){
        console.error("Error fetching data")
    }
    }
    }
    fetchCartData();
},[])
  return (
    
    <div>

    
    </div>
  )
}

export default Cart