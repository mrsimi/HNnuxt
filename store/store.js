export const store ={

    state:{
        dataIds: [],
        content: []
    },

    getdataIds(identifier){
        const response = () =>{
            try{
                return axios.get("https://hacker-news.firebaseio.com/v0/"+identifier)
            } catch (error) {
                console.log(error)
            }
        }
        
    }
};