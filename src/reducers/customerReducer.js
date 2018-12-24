
import CustomerDetail from './../reducers/DummyData/cps';

const defaultState = {
   
    customer :{},
    features :{
        "ess" : [
            {
                featurename : "abc",
                enable: true,
            }
        ]
            
    }
       
}

 const customerReducer = (state = defaultState, action) => {

    switch (action.type) {
        case "FETCH_CUSTOMER_DETAIL": {
            // const customer = { ...state ,...action.payload };
            // return {
            //     customer
            // }
           
            return{
                ...state,
                customer : action.payload
            }

        }
        case "CUSTOMER_FEATURE_UPDATE":{
            debugger
            const copyCustomer = Object.assign({},state);
             copyCustomer.customer.features.ess=action.payload;
             console.log(copyCustomer);
             return  copyCustomer;
            // return {
            //     ...state,
            //     featureUpdated : action.payload
            // }
            
        }
        case "CUSTOMER_SCREENTRACKING_UPDATE":{
            const copyCustomer = Object.assign({},state);
             copyCustomer.customer.screenTracking = action.payload;
             console.log(copyCustomer);
             return  copyCustomer;
            // return {
            //     ...state,
            //     screenTrackingUpdated : action.payload
            // }
            
        }
        case "CUSTOMER_ANALYTICS_UPDATE":{
           
            const copyCustomer = Object.assign({}, state);
             console.log(copyCustomer);
             return  copyCustomer;
    
            
        }
        default: {
            return state;
        }
    }

}
export default customerReducer;


