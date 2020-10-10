import * as ActionTypes from "./ActionTypes";

import { baseUrl } from '../../shared/baseURL';


export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
})

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId,
        rating,
        author,
        comment
    }
    newComment.date = new Date().toISOString()
    return fetch(baseUrl + 'comments', {
        method : 'POST',
        body : JSON.stringify(newComment),
        headers : {
            'Content-Type' : 'application/json'
        },
        credentials : 'same-origin'
    })
    .then(response => {
        if(response.ok){
            return response
        }
        else{
            const error = new Error("Error" + response.status + ': ' + response.statusText) 
            error.response = response
            throw error
        }
    },
    (error) => {
        const errMess = new Error(error.message)
        throw errMess
    })
    .then(response => response.json())
    .then(dishes => dispatch(addComment(dishes)))
    .catch((err) => dispatch(commentsFailed(err.message)))

} 


// dishes
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if(response.ok){
            return response
        }
        else{
            const error = new Error("Error" + response.status + ': ' + response.statusText) 
            error.response = response
            throw error
        }
    },
    (error) => {
        const errMess = new Error(error.message)
        throw errMess
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch((err) => {
        dispatch(dishesFailed(err.message))
        console.log('post comments', err.message)
        alert('Your comment could not be posted\nError: '+err.message)
    })
    
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


// comments
export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if(response.ok){
            return response
        }
        else{
            const error = new Error("Error" + response.status + ': ' + response.statusText) 
            error.response = response
            throw error
        }
    },
    (error) => {
        const errMess = new Error(error.message)
        throw errMess
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch((err) => dispatch(dishesFailed(err.message)))

};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});




// promos
export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if(response.ok){
            return response
        }
        else{
            const error = new Error("Error" + response.status + ': ' + response.statusText) 
            error.response = response
            throw error
        }
    },
    (error) => {
        const errMess = new Error(error.message)
        throw errMess
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch((err) => dispatch(dishesFailed(err.message)))

}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});



// leaders
export const fetchLeaders = () => (dispatch) => {
    
    dispatch(leadersLoading());

    return fetch(baseUrl +'leaders')
    .then(response => {
        if(response.ok){
            return response
        }
        else{
            const error = new Error("Error" + response.status + ': ' + response.statusText) 
            error.response = response
            throw error
        }
    },
    (error) => {
        const errMess = new Error(error.message)
        throw errMess
    })
    .then(response => response.json())
    .then(leaders => 
        // console.log('leaders-red', leaders)
        dispatch(addLeaders(leaders)))
    .catch((err) => dispatch(dishesFailed(err.message)))
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});
