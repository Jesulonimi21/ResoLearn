export function saveEmail(email){
    return{
        type:"SaveEmail",
        data:{
            email
        }
    }
}