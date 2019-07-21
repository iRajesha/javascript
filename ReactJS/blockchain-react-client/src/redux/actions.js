
export function submitPayload(payload){
    return {
        type : 'SUBMIT_PAYLOAD',
        payload,    
        
    }
}
export function loadResponse(response){
    return {
        type : 'LOAD_RESPONSE',
        response,          
    }
}