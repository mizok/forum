import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default{
    addFavorite( restaurantId ){
        console.log('restaurantId', restaurantId);
        return apiHelper.post(`/favorite/${restaurantId}`, null, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
    },

    deleteFavorite( restaurantId ){
        return apiHelper.delete(`/favorite/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
    },
    addLike( restaurantId ){
        console.log('addLike', restaurantId);
        return apiHelper.post(`/like/${restaurantId}`, null, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
    },
    deleteLike( restaurantId ){
        console.log('deleteLike', restaurantId);
        return apiHelper.delete(`/like/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
    },

    getTopUsers(){
        
    }
}